# TreeValue Pro - Project Plan

## Phase Overview

```
┌──────────────────────────────────────────────────────────────────────────┐
│  PHASE 0: Foundation          │  PHASE 1: Core Product                   │
│  - Project setup              │  - Valuation engine                      │
│  - Database schema            │  - Wizard UI                             │
│  - Design system              │  - Email capture                         │
├──────────────────────────────────────────────────────────────────────────┤
│  PHASE 2: Monetization        │  PHASE 3: Polish & Launch                │
│  - Redirect API               │  - Performance optimization              │
│  - Email delivery             │  - SEO implementation                    │
│  - Click tracking             │  - Analytics setup                       │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 0: Foundation

### 0.1 Project Initialization
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS with custom design tokens
- [ ] Set up ESLint + Prettier configuration
- [ ] Create Supabase project and configure environment variables
- [ ] Set up Git repository with branching strategy

### 0.2 Database Setup
- [ ] Create `profiles` table with RLS policies
- [ ] Create `trees` table with RLS policies
- [ ] Create `ad_clicks` table (insert-only policy)
- [ ] Configure Supabase Auth (magic link + anonymous)
- [ ] Set up Supabase Storage bucket for tree images

### 0.3 Design System Foundation
- [ ] Define color palette (forest green, earth tones, cream)
- [ ] Configure typography scale (serif headings, sans body)
- [ ] Create base component library:
  - [ ] Button variants (primary, secondary, ghost)
  - [ ] Card component (wizard cards)
  - [ ] Input components (text, select)
  - [ ] Progress indicator
  - [ ] Modal/Dialog
- [ ] Create icon set (tree silhouettes, comparison objects)

### 0.4 Project Structure
```
src/
├── app/
│   ├── page.tsx                 # Landing/hero
│   ├── calculator/
│   │   └── page.tsx             # Wizard entry
│   ├── report/
│   │   └── [id]/page.tsx        # Report display
│   ├── api/
│   │   ├── valuate/route.ts     # Valuation endpoint
│   │   ├── redirect/route.ts    # Click tracking
│   │   └── og/[id]/route.tsx    # Dynamic OG images
│   └── layout.tsx
├── components/
│   ├── ui/                      # Design system components
│   ├── wizard/                  # Wizard step components
│   └── report/                  # Report display components
├── lib/
│   ├── valuation.ts             # Core math engine
│   ├── supabase/
│   │   ├── client.ts            # Browser client
│   │   └── server.ts            # Server client
│   └── constants.ts             # Heuristic mappings
└── types/
    └── index.ts                 # TypeScript interfaces
```

---

## Phase 1: Core Product

### 1.1 Valuation Engine (`lib/valuation.ts`)
- [ ] Implement heuristic-to-value mapping constants
- [ ] Implement `calculateTrunkArea(dbh: number)` function
- [ ] Implement `calculateAdjustedTrunkArea(ta: number)` for large trees
- [ ] Implement `calculateStructuralValue(inputs)` - CTLA method
- [ ] Implement `calculateEcoValue(inputs)` - carbon, water, energy
- [ ] Implement `getRegionalMultiplier(zipCode: string)` function
- [ ] Implement input validation/sanity checks
- [ ] Write unit tests for all valuation functions

### 1.2 Wizard Components
- [ ] Create `WizardProvider` context for state management
- [ ] Create `WizardProgress` component (step indicator)
- [ ] Create `SpeciesStep` component with visual tree cards
- [ ] Create `HeightStep` component with structure comparisons
- [ ] Create `GirthStep` component with object comparisons
- [ ] Create `LocationStep` component (front/back yard, shade)
- [ ] Create `EmailGateStep` component for lead capture
- [ ] Implement keyboard navigation between steps
- [ ] Add smooth transitions between wizard steps

### 1.3 Wizard Flow Logic
- [ ] Implement step validation rules
- [ ] Implement "sanity check" validation (height/girth congruence)
- [ ] Store wizard state in URL params (shareable links)
- [ ] Handle back navigation without data loss
- [ ] Implement wizard abandonment tracking

### 1.4 API Route: Valuation
- [ ] Create `/api/valuate` POST endpoint
- [ ] Accept heuristic inputs, return calculated values
- [ ] Validate inputs server-side
- [ ] Log valuation for analytics
- [ ] Return structured response with breakdown

### 1.5 Email Capture & User Creation
- [ ] Implement Supabase anonymous session creation
- [ ] Attach email to anonymous user
- [ ] Store tree valuation in database
- [ ] Generate unique report URL
- [ ] Redirect to report page after capture

---

## Phase 2: Monetization

### 2.1 Redirect API (`/api/redirect`)
- [ ] Create route handler with query param parsing
- [ ] Implement partner URL mapping (switch statement)
- [ ] Insert click record to `ad_clicks` table
- [ ] Extract IP address and user agent from headers
- [ ] Return 307 redirect to destination
- [ ] Set `Cache-Control: no-store` headers

### 2.2 Fraud Prevention
- [ ] Implement rate limiting (10 clicks/min/IP)
- [ ] Implement bot user-agent filtering
- [ ] Add duplicate click detection (same user, same target, <1 min)
- [ ] Log suspicious activity for review

### 2.3 Email Delivery System
- [ ] Set up Resend account and API key
- [ ] Create HTML email template (certificate style)
- [ ] Include full valuation breakdown in email
- [ ] Include tracked CTA links (via redirect API)
- [ ] Create `/api/send-report` endpoint
- [ ] Trigger email on wizard completion

### 2.4 Report Page (`/report/[id]`)
- [ ] Create report page layout
- [ ] Display structural value with animated counter
- [ ] Display eco dividend with breakdown
- [ ] Add "Protect Your Asset" CTA section
- [ ] Include tracked affiliate links
- [ ] Add social share buttons

### 2.5 Dynamic OG Images
- [ ] Create `/api/og/[id]` route using @vercel/og
- [ ] Design tree value card image template
- [ ] Include species, value, and branding
- [ ] Configure meta tags on report page

---

## Phase 3: Polish & Launch

### 3.1 Landing Page
- [ ] Create hero section with value proposition
- [ ] Add social proof section (testimonials, stats)
- [ ] Create FAQ section with schema markup
- [ ] Add "How It Works" explainer section
- [ ] Implement sticky CTA button

### 3.2 Performance Optimization
- [ ] Audit with Lighthouse, fix issues
- [ ] Implement image optimization (next/image, WebP)
- [ ] Add loading states with skeletons
- [ ] Implement route prefetching
- [ ] Optimize bundle size (dynamic imports)
- [ ] Add appropriate caching headers

### 3.3 SEO Implementation
- [ ] Create sitemap.xml
- [ ] Configure robots.txt
- [ ] Add structured data (FAQ, HowTo schemas)
- [ ] Optimize meta titles and descriptions
- [ ] Create canonical URL strategy
- [ ] Submit to Google Search Console

### 3.4 Analytics Setup
- [ ] Set up Vercel Analytics
- [ ] Implement custom event tracking
- [ ] Create conversion funnel tracking
- [ ] Set up click revenue dashboard
- [ ] Configure alerts for anomalies

### 3.5 Testing & QA
- [ ] End-to-end testing with Playwright
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit (axe-core)
- [ ] Security audit (headers, CSP, RLS)

### 3.6 Launch Preparation
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure Vercel production environment
- [ ] Create 404 and error pages
- [ ] Write privacy policy and terms of service
- [ ] Final production deployment

---

## Detailed Task Breakdown

### Priority 1: Critical Path (MVP)

| Task ID | Task | Dependencies | Complexity |
|---------|------|--------------|------------|
| P1-01 | Next.js project setup | None | Low |
| P1-02 | Supabase project + schema | None | Low |
| P1-03 | Valuation engine | None | Medium |
| P1-04 | Wizard UI components | P1-01 | Medium |
| P1-05 | Wizard flow + state | P1-04 | Medium |
| P1-06 | Email capture | P1-02, P1-05 | Medium |
| P1-07 | Report page | P1-03, P1-06 | Medium |
| P1-08 | Redirect API | P1-02 | Low |
| P1-09 | Basic styling | P1-04, P1-07 | Medium |

### Priority 2: Monetization Ready

| Task ID | Task | Dependencies | Complexity |
|---------|------|--------------|------------|
| P2-01 | Email delivery | P1-06 | Medium |
| P2-02 | Click tracking | P1-08 | Low |
| P2-03 | Fraud prevention | P2-02 | Medium |
| P2-04 | Partner URL config | P1-08 | Low |
| P2-05 | Report CTAs | P1-07, P1-08 | Low |

### Priority 3: Growth & Polish

| Task ID | Task | Dependencies | Complexity |
|---------|------|--------------|------------|
| P3-01 | Landing page | P1-09 | Medium |
| P3-02 | Dynamic OG images | P1-07 | Medium |
| P3-03 | Social sharing | P3-02 | Low |
| P3-04 | SEO optimization | P3-01 | Medium |
| P3-05 | Analytics setup | P2-02 | Low |
| P3-06 | Performance audit | All | Medium |

---

## Technology Decisions

### Confirmed Stack
| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14 (App Router) | SEO, Server Components, Vercel integration |
| Language | TypeScript | Type safety for financial calculations |
| Styling | Tailwind CSS | Rapid UI development, consistent design |
| Database | Supabase (PostgreSQL) | Auth, RLS, Storage in one platform |
| Email | Resend | Modern API, great deliverability |
| Hosting | Vercel | Zero-config Next.js deployment |
| Analytics | Vercel Analytics | Built-in, privacy-focused |

### Recommended Libraries
| Purpose | Library | Why |
|---------|---------|-----|
| Forms | react-hook-form | Performance, validation |
| Animation | framer-motion | Smooth wizard transitions |
| Icons | lucide-react | Tree-free, consistent |
| Date | date-fns | Lightweight date handling |
| Email Templates | react-email | Component-based email design |

---

## Risk Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Valuation feels "fake" | High | Medium | Extensive testing with real tree data |
| Low conversion at email gate | High | Medium | A/B test gate copy and timing |
| Click fraud | Medium | Medium | Rate limiting, IP tracking |
| Poor mobile UX | High | Low | Mobile-first development |
| Slow load times | Medium | Low | Performance budgets, monitoring |

---

## Success Criteria

### MVP Success (Phase 1+2)
- [ ] User can complete wizard in < 2 minutes
- [ ] Valuations feel credible (spot-check with ISA data)
- [ ] Email capture rate > 60%
- [ ] Emails delivered successfully
- [ ] Click tracking captures 100% of affiliate clicks

### Launch Success (Phase 3)
- [ ] Lighthouse score > 90
- [ ] Mobile Lighthouse score > 85
- [ ] < 2% error rate on valuations
- [ ] < 5 second total wizard completion
- [ ] Positive user feedback on design credibility
