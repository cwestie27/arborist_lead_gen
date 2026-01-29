/**
 * Rate limiting with Redis (Upstash) and in-memory fallback
 *
 * Uses Upstash Redis in production for distributed rate limiting.
 * Falls back to in-memory Map when Redis is not configured.
 */

// In-memory fallback store
const memoryStore = new Map<string, { count: number; resetAt: number }>();

// Configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const DEFAULT_MAX_REQUESTS = 10;

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Check if Redis is configured
 */
function isRedisConfigured(): boolean {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

/**
 * Rate limit check using Upstash Redis REST API
 */
async function checkRateLimitRedis(
  identifier: string,
  maxRequests: number = DEFAULT_MAX_REQUESTS
): Promise<RateLimitResult> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const key = `ratelimit:${identifier}`;
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  try {
    // Use a sliding window with sorted sets
    // Remove old entries, add current, count total
    const pipeline = [
      // Remove entries older than the window
      ["ZREMRANGEBYSCORE", key, "0", windowStart.toString()],
      // Add current request
      ["ZADD", key, now.toString(), `${now}-${Math.random()}`],
      // Count requests in window
      ["ZCARD", key],
      // Set expiry on the key
      ["EXPIRE", key, "120"],
    ];

    const response = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pipeline),
    });

    if (!response.ok) {
      throw new Error(`Redis error: ${response.status}`);
    }

    const results = await response.json();
    const count = results[2]?.result || 0;

    return {
      success: count <= maxRequests,
      limit: maxRequests,
      remaining: Math.max(0, maxRequests - count),
      reset: now + RATE_LIMIT_WINDOW_MS,
    };
  } catch (error) {
    console.error("Redis rate limit error, falling back to memory:", error);
    return checkRateLimitMemory(identifier, maxRequests);
  }
}

/**
 * Rate limit check using in-memory Map (fallback)
 */
function checkRateLimitMemory(
  identifier: string,
  maxRequests: number = DEFAULT_MAX_REQUESTS
): RateLimitResult {
  const now = Date.now();
  const record = memoryStore.get(identifier);

  // Clean up old entries periodically
  if (memoryStore.size > 10000) {
    for (const [key, value] of memoryStore.entries()) {
      if (now > value.resetAt) {
        memoryStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetAt) {
    memoryStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return {
      success: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      reset: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  record.count++;
  const success = record.count <= maxRequests;

  return {
    success,
    limit: maxRequests,
    remaining: Math.max(0, maxRequests - record.count),
    reset: record.resetAt,
  };
}

/**
 * Main rate limit function - uses Redis if configured, memory otherwise
 */
export async function rateLimit(
  identifier: string,
  maxRequests: number = DEFAULT_MAX_REQUESTS
): Promise<RateLimitResult> {
  if (isRedisConfigured()) {
    return checkRateLimitRedis(identifier, maxRequests);
  }
  return checkRateLimitMemory(identifier, maxRequests);
}

/**
 * Create rate limit headers for response
 */
export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    "X-RateLimit-Limit": result.limit.toString(),
    "X-RateLimit-Remaining": result.remaining.toString(),
    "X-RateLimit-Reset": result.reset.toString(),
  };
}
