# TreeValue Pro - Technical Specification

## Product Overview

**Product Name:** TreeValue Pro
**Tagline:** "Discover What Your Trees Are Really Worth"
**Target Users:** Affluent homeowners, property managers, real estate professionals
**Business Model:** Lead generation via Pay-Per-Click affiliate monetization

---

## 1. Feature Specifications

### 1.1 Core Features

#### F1: Interactive Tree Valuation Wizard
| Attribute | Specification |
|-----------|---------------|
| Steps | 5-step progressive disclosure flow |
| State Management | URL query params + React Context (enables sharing) |
| Validation | Real-time with graceful degradation |
| Mobile | Touch-optimized card selection |

**Wizard Steps:**
1. **Species Selection** - Visual cards with tree silhouettes (Oak, Maple, Pine, Fruit Tree, Other)
2. **Height Estimation** - Comparison to structures (1-story, 2-story, taller, towering)
3. **Girth Estimation** - Comparison to objects (fingers, paint bucket, arms wrap, two people)
4. **Location Context** - Front yard vs back yard, proximity to house
5. **Email Gate** - Capture lead before revealing full report

#### F2: Dual-Value Report Generation
| Component | Formula Source | Display |
|-----------|----------------|---------|
| Structural Value | CTLA Trunk Formula Method | "$XX,XXX" with breakdown |
| Eco Dividend | i-Tree inspired algorithms | "$XXX/year" annual savings |
| Carbon Sequestration | USDA Allometry formulas | lbs CO2 + dollar value |
| Stormwater Savings | Municipal rate calculations | Gallons + dollar value |
| Energy Savings | Shade/windbreak estimates | Annual dollar value |

#### F3: Monetization Engine
| Feature | Implementation |
|---------|----------------|
| Click Tracking | Custom redirect API with database logging |
| Fraud Prevention | Rate limiting (10 clicks/min/IP), bot filtering |
| Attribution | Query params: uid, tree_id, target |
| Partners | ISA Certified Arborist directory, HomeAdvisor, local services |

#### F4: Email Delivery System
| Attribute | Specification |
|-----------|---------------|
| Provider | Resend (primary) or SendGrid (fallback) |
| Template | HTML "Certificate" style with branded header |
| Contents | Full valuation, eco breakdown, tracked CTAs |
| Timing | Immediate upon wizard completion |

### 1.2 Secondary Features

#### F5: Regional Pricing Intelligence
- Zip code lookup determines cost multiplier
- Tier 1 (CA, NY, MA): $55/in²
- Tier 2 (VA, IL, TX): $45/in²
- Tier 3 (Rural): $35/in²

#### F6: Share Your Tree Value
- Dynamic OG images via @vercel/og
- Social sharing: "My Oak is worth $18,300!"
- Viral loop for organic acquisition

#### F7: Tree Photo Upload (Optional)
- Supabase Storage integration
- Used for future ML species identification
- Not required for valuation (reduces friction)

---

## 2. Technical Architecture

### 2.1 Stack Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Next.js 14 (App Router) + TypeScript + Tailwind CSS        │
│  - Server Components (valuation logic, SEO)                  │
│  - Client Components (wizard interactivity)                  │
│  - @vercel/og (dynamic social images)                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND (Supabase)                      │
│  - PostgreSQL (profiles, trees, ad_clicks)                   │
│  - Auth (Magic Link / Anonymous sessions)                    │
│  - Storage (tree photos)                                     │
│  - Edge Functions (email triggers)                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                         │
│  - Resend/SendGrid (transactional email)                     │
│  - Vercel Analytics (traffic insights)                       │
│  - Affiliate Partners (monetization endpoints)               │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Database Schema

```sql
-- profiles: User identity for lead capture
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  zip_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- trees: Valuation records
CREATE TABLE trees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  species_input TEXT NOT NULL,
  height_heuristic TEXT NOT NULL,
  girth_heuristic TEXT NOT NULL,
  location_type TEXT DEFAULT 'front_yard',
  calculated_value_structural NUMERIC(12,2),
  calculated_value_eco NUMERIC(10,2),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ad_clicks: Monetization ledger
CREATE TABLE ad_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tree_id UUID REFERENCES trees(id),
  user_id UUID REFERENCES profiles(id),
  target_url TEXT NOT NULL,
  clicked_at TIMESTAMPTZ DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);
```

### 2.3 Key API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/valuate` | POST | Calculate tree value from heuristics |
| `/api/redirect` | GET | Track click + redirect to affiliate |
| `/api/report/[id]` | GET | Generate PDF/email report |
| `/api/og/[id]` | GET | Dynamic social share image |

### 2.4 Valuation Algorithm Constants

```typescript
// Heuristic Mappings
const HEIGHT_MAP = {
  '1_story': 12,
  '2_story': 25,
  'taller_2_story': 42,
  'towering': 65
} as const;

const GIRTH_MAP = {
  'fingers_wrap': 3,
  'paint_bucket': 10,
  'arms_wrap': 20,
  'two_people_hug': 36
} as const;

const SPECIES_RATINGS = {
  'oak': 0.90,
  'maple': 0.85,
  'pine': 0.60,
  'fruit_tree': 0.75,
  'other': 0.50
} as const;

// Regional Pricing ($/sq inch)
const REGIONAL_COSTS = {
  'tier1': 55.00,  // CA, NY, MA
  'tier2': 45.00,  // VA, IL, TX
  'tier3': 35.00   // Rural
} as const;

// CTLA Adjustment Constants
const CONDITION_RATING = 0.80;
const LOCATION_RATING = 0.85;
const MAX_STANDARD_DBH = 30;  // inches
const REPLACEMENT_DBH = 4;    // largest nursery tree
```

---

## 3. User Experience Specifications

### 3.1 Design System Requirements

| Element | Specification |
|---------|---------------|
| Primary Color | Forest Green (#228B22) or Sage (#9CAF88) |
| Secondary Color | Warm Earth (#8B4513) |
| Background | Off-white/cream (#FAFAF5) |
| Typography | Serif headings (professional), Sans-serif body |
| Imagery | High-quality tree photography, illustrated icons |
| Animation | Subtle micro-interactions, smooth transitions |

### 3.2 Target Aesthetic

**Keywords:** Trustworthy, Professional, Premium, Natural, Clean

- Appeals to affluent homeowners (not "techy" or "startup-y")
- Feels like a financial services or insurance site
- Evokes nature without being hippie/granola
- Mobile-first but desktop-polished

### 3.3 Key UI Components

1. **Hero Section** - Full-width tree imagery with value proposition
2. **Wizard Cards** - Large touch targets, clear visual feedback
3. **Progress Indicator** - Shows step completion
4. **Value Display** - Large currency formatting, animated counting
5. **Report Card** - Certificate-style layout for credibility
6. **CTA Buttons** - High contrast, clear action language

### 3.4 Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- Keyboard navigation throughout wizard
- Screen reader announcements for value changes
- Color contrast ratios ≥ 4.5:1
- Touch targets ≥ 44x44px

---

## 4. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Cumulative Layout Shift | < 0.1 |
| Bundle Size (initial) | < 150kb gzipped |

---

## 5. SEO Requirements

### 5.1 Target Keywords

- "tree value calculator"
- "how much is my tree worth"
- "tree appraisal calculator"
- "tree replacement cost"
- "tree value estimator"

### 5.2 Technical SEO

- Server-rendered pages for all public routes
- Dynamic meta tags per valuation
- Structured data (FAQ schema, HowTo schema)
- XML sitemap
- robots.txt configuration

---

## 6. Security Requirements

| Concern | Mitigation |
|---------|------------|
| Data Privacy | RLS on all tables, user owns their data |
| Click Fraud | Rate limiting, bot detection, IP logging |
| SQL Injection | Parameterized queries via Supabase SDK |
| XSS | React escaping, CSP headers |
| CSRF | SameSite cookies, CSRF tokens on forms |

---

## 7. Analytics & Tracking

### 7.1 Key Metrics

| Metric | Definition |
|--------|------------|
| Wizard Start Rate | Users who click "Start" / Total visitors |
| Wizard Completion Rate | Users who finish / Users who start |
| Email Capture Rate | Emails captured / Wizard completions |
| Click-Through Rate | Affiliate clicks / Report views |
| Revenue Per Lead | Total revenue / Total leads |

### 7.2 Events to Track

- `wizard_started`
- `wizard_step_completed` (with step number)
- `wizard_abandoned` (with step number)
- `email_captured`
- `report_viewed`
- `affiliate_clicked` (with target)
- `report_shared`

---

## 8. Future Considerations (v2+)

- **AI Species Identification** from uploaded photos
- **Multi-tree Assessment** for property-wide valuation
- **Arborist Marketplace** with direct booking
- **Insurance Integration** for policy recommendations
- **Historical Value Tracking** year-over-year growth
