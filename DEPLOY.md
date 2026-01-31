# TreeValue Pro Deployment Guide

This guide walks you through deploying TreeValue Pro to production.

## Prerequisites

- [Vercel Account](https://vercel.com) (free tier works)
- [Supabase Account](https://supabase.com) (free tier works)
- [Resend Account](https://resend.com) (free tier: 100 emails/day)
- Domain name (optional, Vercel provides free `.vercel.app` subdomain)

## Step 1: Set Up Supabase

### 1.1 Create Project
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Name it `treevalue-pro` (or similar)
4. Choose a region close to your users
5. Set a secure database password (save this!)
6. Wait for project to be created (~2 minutes)

### 1.2 Run Database Schema
1. Go to **SQL Editor** in your Supabase dashboard
2. Open `supabase/schema.sql` from this repo
3. Copy the entire contents
4. Paste into SQL Editor
5. Click "Run"
6. Verify tables were created: `profiles`, `trees`, `ad_clicks`, `reports`, `analytics_events`

### 1.3 Get API Keys
1. Go to **Settings > API**
2. Copy these values (you'll need them later):
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

## Step 2: Set Up Resend (Email)

### 2.1 Create Account
1. Go to [resend.com](https://resend.com)
2. Sign up and verify your email

### 2.2 Get API Key
1. Go to **API Keys**
2. Click "Create API Key"
3. Name it `treevalue-production`
4. Copy the key → `RESEND_API_KEY`

### 2.3 Verify Domain (Recommended)
1. Go to **Domains**
2. Add your domain (e.g., `treevalue.pro`)
3. Add the DNS records shown
4. Wait for verification (~5-30 minutes)

> Without domain verification, emails will come from `onboarding@resend.dev`

## Step 3: Deploy to Vercel

### 3.1 Import Repository
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js

### 3.2 Configure Environment Variables
Add these environment variables in Vercel:

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | From Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...` | From Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | From Supabase (secret!) |
| `RESEND_API_KEY` | `re_...` | From Resend |
| `NEXT_PUBLIC_APP_URL` | `https://yourdomain.com` | Your production URL |
| `CRON_SECRET` | (generate) | `openssl rand -hex 32` |

### 3.3 Deploy
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Your app is live!

## Step 4: Configure Domain (Optional)

### 4.1 Add Custom Domain
1. In Vercel, go to **Settings > Domains**
2. Add your domain
3. Configure DNS as shown
4. SSL is automatic

### 4.2 Update Environment Variable
1. Update `NEXT_PUBLIC_APP_URL` to your new domain
2. Redeploy

## Step 5: Optional Services

### 5.1 Upstash Redis (Rate Limiting)
For production-grade rate limiting:

1. Go to [console.upstash.com](https://console.upstash.com)
2. Create a Redis database
3. Get REST URL and Token
4. Add to Vercel:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### 5.2 Sentry (Error Monitoring)
For production error tracking:

1. Go to [sentry.io](https://sentry.io)
2. Create a new Next.js project
3. Get your DSN
4. Add to Vercel:
   - `SENTRY_DSN`
   - `NEXT_PUBLIC_SENTRY_DSN`
   - `SENTRY_ORG`
   - `SENTRY_PROJECT`
   - `SENTRY_AUTH_TOKEN`

## Step 6: Verify Deployment

### 6.1 Test Core Features
- [ ] Home page loads
- [ ] Calculator wizard works
- [ ] Email capture works (check Resend dashboard)
- [ ] Results page shows valuation
- [ ] Affiliate links redirect correctly

### 6.2 Test Authentication
- [ ] Login with magic link works
- [ ] Dashboard loads for logged-in users

### 6.3 Test Tracking
- [ ] Meta Pixel fires (check Facebook Events Manager)
- [ ] Analytics events recorded (check `/admin/analytics`)

## Cron Jobs

The cleanup job runs daily at 3 AM UTC (configured in `vercel.json`):
- Deletes expired reports (90+ days old)
- Cleans old analytics events (90+ days old)
- Removes old ad clicks (180+ days old)

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify Supabase schema is deployed

### Emails Not Sending
- Check Resend API key is correct
- Verify domain if using custom sender

### Database Errors
- Verify Supabase URL and keys
- Check that schema.sql was run

### Rate Limiting Not Working
- Without Redis, uses in-memory (resets on deploy)
- Add Upstash Redis for persistence

## Environment Variables Reference

```bash
# Required
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_...
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Optional - Rate Limiting
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxx

# Optional - Error Monitoring
SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=xxx

# Optional - Cron Jobs
CRON_SECRET=xxx
```

## Support

For issues, check:
1. Vercel deployment logs
2. Supabase database logs
3. Resend email logs
4. Browser console for client errors
