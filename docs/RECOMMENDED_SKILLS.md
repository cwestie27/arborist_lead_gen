# Recommended Skills & Knowledge Files for TreeValue Pro

## Already Installed (From vercel-labs/agent-skills)

### 1. vercel-react-best-practices
**Purpose:** Ensures optimal React/Next.js performance patterns
**When it helps:**
- Writing Server Components vs Client Components correctly
- Optimizing bundle size (critical for mobile users)
- Eliminating data fetching waterfalls
- Proper caching strategies

### 2. web-design-guidelines
**Purpose:** Reviews UI code for professional web standards
**When it helps:**
- Accessibility compliance
- UX best practices audit
- Design consistency checks

---

## Recommended Additional Skills to Install

### High Priority - Design & UI

#### 1. **shadcn/ui Documentation**
```bash
# Create a knowledge file with shadcn/ui patterns
```
**Why:** shadcn/ui provides beautifully designed, accessible components that look premium out of the box. Perfect for the "financial services" aesthetic you want.

**Upload to Claude Project:** Create a file `shadcn-components.md` containing:
- Installation patterns
- Customization approach (CSS variables)
- Component composition patterns
- Form handling with react-hook-form integration

#### 2. **Tailwind CSS Design Patterns**
**Why:** Consistent spacing, typography, and color usage creates the professional feel.

**Create file:** `tailwind-design-system.md`
```markdown
# TreeValue Pro Design System

## Color Palette
- Primary: Forest Green (#228B22) → Tailwind: `green-700`
- Secondary: Sage (#9CAF88) → Custom: `sage-500`
- Accent: Warm Earth (#8B4513) → Custom: `earth-600`
- Background: Cream (#FAFAF5) → Custom: `cream`
- Text: Charcoal (#2D2D2D) → `neutral-800`

## Typography Scale
- Hero: 4xl/5xl, serif (Playfair Display or similar)
- Headings: 2xl/3xl, serif
- Body: base/lg, sans-serif (Inter)
- Labels: sm, sans-serif, tracking-wide

## Spacing Rules
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Component gaps: gap-4 or gap-6
- Touch targets: min-h-12 min-w-12

## Shadow System
- Cards: shadow-sm hover:shadow-md transition-shadow
- Modals: shadow-xl
- Buttons: shadow-sm active:shadow-none

## Border Radius
- Buttons: rounded-lg
- Cards: rounded-xl
- Inputs: rounded-md
- Pills/Tags: rounded-full
```

### Medium Priority - Functionality

#### 3. **Supabase Patterns**
**Create file:** `supabase-patterns.md`
```markdown
# Supabase Best Practices for TreeValue Pro

## Row Level Security
- Always enable RLS on tables
- Use `auth.uid()` for user-scoped data
- Service role only for server-side operations

## Auth Flow
- Magic Link for low-friction signup
- Anonymous sessions for wizard state
- Email capture upgrades anonymous → identified

## Client Setup
- Browser: createBrowserClient()
- Server Components: createServerClient()
- Route Handlers: createRouteHandlerClient()
```

#### 4. **Next.js 14 App Router Patterns**
**Create file:** `nextjs-patterns.md`
```markdown
# Next.js 14 Patterns for TreeValue Pro

## Server vs Client Components
- Default to Server Components
- Use 'use client' only for:
  - Event handlers (onClick, onChange)
  - useState, useEffect
  - Browser-only APIs

## Data Fetching
- Fetch in Server Components
- Use React.cache() for deduplication
- Parallel fetching with Promise.all()

## Route Handlers
- /api/valuate → POST, returns JSON
- /api/redirect → GET, returns 307 redirect
- Set `export const dynamic = 'force-dynamic'` for no-cache routes

## Metadata
- Use generateMetadata() for dynamic titles
- Include og:image pointing to /api/og/[id]
```

### High Priority - Visual Quality

#### 5. **Animation & Micro-interactions**
**Create file:** `animation-guidelines.md`
```markdown
# Animation Guidelines for TreeValue Pro

## Philosophy
- Subtle, purposeful animations only
- Never delay user actions
- Use animation to provide feedback, not decoration

## Framer Motion Patterns

### Page Transitions
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
```

### Wizard Step Transitions
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={step}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.2 }}
  >
```

### Value Counter Animation
```tsx
// Use framer-motion's useSpring for counting up
const springValue = useSpring(0, { damping: 30, stiffness: 100 });
```

### Card Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

## CSS-only Animations (Prefer when possible)
- Button hover: `transition-all duration-200`
- Card hover: `transition-shadow duration-300`
- Focus rings: `transition-colors duration-150`
```

#### 6. **Imagery & Asset Guidelines**
**Create file:** `imagery-guidelines.md`
```markdown
# Imagery Guidelines for TreeValue Pro

## Photography Style
- High-quality, professional tree photography
- Warm, golden-hour lighting preferred
- Focus on mature, impressive specimen trees
- Residential context (houses visible but not dominant)

## Recommended Sources
- Unsplash: Search "mature oak tree residential"
- Pexels: High-quality nature photography
- Licensed: Consider Getty for hero images

## Image Optimization
- Use next/image for automatic optimization
- Provide WebP with JPEG fallback
- Hero images: 1920x1080 max, quality 80
- Thumbnails: 400x400, quality 75
- Always include meaningful alt text

## Illustration Style
- Line illustrations for wizard icons
- Consistent stroke width (2px)
- Use brand colors only
- Simple, recognizable silhouettes

## Icon Recommendations
- Tree species: Custom SVG silhouettes
- Height comparison: House outline, utility pole
- Girth comparison: Hand, bucket, human figure
- Actions: Lucide icons (consistent style)
```

---

## Complete Knowledge File Package

Create these files in your Claude Project for best results:

### File 1: `DESIGN_SYSTEM.md`
Complete design system with colors, typography, spacing, components

### File 2: `COMPONENT_PATTERNS.md`
```markdown
# Component Patterns for TreeValue Pro

## Wizard Card Component
- Large touch target (min 120px height)
- Clear selected state (border + background)
- Icon + label + description
- Keyboard accessible (focusable, Enter to select)

## Value Display Component
- Large currency format ($XX,XXX)
- Animated counting effect
- Breakdown tooltip/expandable
- Green color for positive values

## CTA Button Component
- Primary: Solid green, white text
- Secondary: Outline green
- Full-width on mobile
- Icon + text pattern
- Loading state with spinner

## Progress Indicator
- 5 steps, numbered or icon-based
- Current step highlighted
- Completed steps checkmarked
- Clickable to go back (if allowed)

## Email Capture Form
- Single email field (minimal friction)
- Inline validation
- Clear privacy assurance text
- Submit button with loading state
```

### File 3: `COPY_GUIDELINES.md`
```markdown
# Copy Guidelines for TreeValue Pro

## Voice & Tone
- Professional but approachable
- Confident, not salesy
- Educational, not condescending
- Warm, not cold/corporate

## Headlines
- Lead with value/benefit
- Use numbers when possible
- Active voice

Examples:
- "Your Oak Could Be Worth $18,000"
- "Discover Your Tree's Hidden Value"
- "Protect Your $15,000 Asset"

## CTAs
- Action-oriented verbs
- Specific outcomes
- Urgency without pressure

Examples:
- "Calculate My Tree's Value" (not "Submit")
- "Get My Free Report" (not "Continue")
- "Find a Certified Arborist" (not "Click Here")

## Microcopy
- Reassure at friction points
- Explain why info is needed
- Use tooltips for complexity

Examples:
- "We'll never share your email"
- "This helps us calculate regional pricing"
- "Most trees fall in this range"
```

### File 4: `ACCESSIBILITY.md`
```markdown
# Accessibility Requirements for TreeValue Pro

## WCAG 2.1 AA Compliance

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Escape closes modals

### Screen Readers
- Semantic HTML (headings, landmarks)
- ARIA labels where needed
- Live regions for dynamic content
- Alt text for all images

### Forms
- Associated labels
- Error messages linked to inputs
- Required fields indicated
- Clear success/error states

### Motion
- Respect prefers-reduced-motion
- No auto-playing animations
- Pause controls for any motion
```

---

## Quick Reference: What to Upload to Claude Project

### Must Have (Upload These)
1. **SPEC.md** (already created)
2. **PROJECT_PLAN.md** (already created)
3. **tailwind-design-system.md** (color palette, typography, spacing)
4. **animation-guidelines.md** (micro-interactions, transitions)

### Strongly Recommended
5. **COMPONENT_PATTERNS.md** (UI component specs)
6. **COPY_GUIDELINES.md** (voice, tone, CTAs)
7. **supabase-patterns.md** (database, auth patterns)

### Nice to Have
8. **ACCESSIBILITY.md** (WCAG compliance checklist)
9. **imagery-guidelines.md** (photo style, optimization)
10. **nextjs-patterns.md** (App Router best practices)

---

## External Resources to Reference

### Design Inspiration
- **Stripe** - Premium financial services feel
- **Linear** - Clean, modern SaaS aesthetic
- **Notion** - Approachable professional
- **Vercel** - Technical but polished

### Component Libraries
- **shadcn/ui** - https://ui.shadcn.com
- **Radix UI** - https://www.radix-ui.com (primitives)
- **Headless UI** - https://headlessui.com (Tailwind-native)

### Animation
- **Framer Motion** - https://www.framer.com/motion/
- **AutoAnimate** - https://auto-animate.formkit.com (simpler)

### Email Templates
- **React Email** - https://react.email
- **MJML** - https://mjml.io (alternative)
