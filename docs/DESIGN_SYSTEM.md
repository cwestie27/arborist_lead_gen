# TreeValue Pro - Design System

## Brand Identity

### Core Values
- **Trustworthy** - Like a financial advisor, not a tech startup
- **Professional** - Appeals to affluent homeowners
- **Natural** - Evokes trees without being granola/hippie
- **Premium** - Feels like a valuable service, not a toy

### Target Aesthetic
Think: Stripe meets National Geographic. A high-end financial tool with natural warmth.

---

## Color Palette

### Primary Colors
```css
:root {
  /* Forest - Primary brand color */
  --forest-50: #f0fdf4;
  --forest-100: #dcfce7;
  --forest-200: #bbf7d0;
  --forest-300: #86efac;
  --forest-400: #4ade80;
  --forest-500: #22c55e;
  --forest-600: #16a34a;
  --forest-700: #15803d;  /* Primary */
  --forest-800: #166534;
  --forest-900: #14532d;
  --forest-950: #052e16;
}
```

### Secondary Colors
```css
:root {
  /* Earth - Accent and warmth */
  --earth-50: #fdf8f6;
  --earth-100: #f2e8e5;
  --earth-200: #eaddd7;
  --earth-300: #d6c3b8;
  --earth-400: #b8977a;
  --earth-500: #9c7a5c;  /* Secondary */
  --earth-600: #8b6914;
  --earth-700: #6f5436;
  --earth-800: #5d4630;
  --earth-900: #4e3b2a;
}
```

### Neutral Colors
```css
:root {
  /* Cream - Backgrounds */
  --cream: #fafaf5;
  --cream-dark: #f5f5eb;

  /* Charcoal - Text */
  --charcoal-50: #fafafa;
  --charcoal-100: #f4f4f5;
  --charcoal-200: #e4e4e7;
  --charcoal-300: #d4d4d8;
  --charcoal-400: #a1a1aa;
  --charcoal-500: #71717a;
  --charcoal-600: #52525b;
  --charcoal-700: #3f3f46;
  --charcoal-800: #27272a;  /* Body text */
  --charcoal-900: #18181b;  /* Headings */
}
```

### Semantic Colors
```css
:root {
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

### Tailwind Config Extension
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#d6c3b8',
          400: '#b8977a',
          500: '#9c7a5c',
          600: '#8b6914',
          700: '#6f5436',
          800: '#5d4630',
          900: '#4e3b2a',
        },
        cream: '#fafaf5',
        'cream-dark': '#f5f5eb',
      },
    },
  },
};
```

---

## Typography

### Font Families
```css
:root {
  /* Headings - Serif for trustworthiness */
  --font-heading: 'Playfair Display', 'Georgia', serif;

  /* Body - Modern sans for readability */
  --font-body: 'Inter', 'system-ui', sans-serif;

  /* Mono - For values/numbers */
  --font-mono: 'JetBrains Mono', 'Menlo', monospace;
}
```

### Type Scale
| Element | Size | Weight | Line Height | Font |
|---------|------|--------|-------------|------|
| Hero | 48-60px | 700 | 1.1 | Heading |
| H1 | 36-40px | 700 | 1.2 | Heading |
| H2 | 28-32px | 600 | 1.3 | Heading |
| H3 | 22-24px | 600 | 1.4 | Heading |
| H4 | 18-20px | 600 | 1.4 | Body |
| Body Large | 18px | 400 | 1.6 | Body |
| Body | 16px | 400 | 1.6 | Body |
| Body Small | 14px | 400 | 1.5 | Body |
| Caption | 12px | 500 | 1.4 | Body |
| Value Display | 48px | 700 | 1.0 | Mono |

### Tailwind Classes
```html
<!-- Hero -->
<h1 class="font-serif text-5xl md:text-6xl font-bold leading-tight">

<!-- Section Heading -->
<h2 class="font-serif text-3xl md:text-4xl font-semibold">

<!-- Card Heading -->
<h3 class="font-serif text-xl md:text-2xl font-semibold">

<!-- Body -->
<p class="text-base text-charcoal-700 leading-relaxed">

<!-- Value Display -->
<span class="font-mono text-5xl font-bold text-forest-700">
```

---

## Spacing System

### Base Unit: 4px

| Token | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Icon gaps, tight padding |
| sm | 8px | Button padding, small gaps |
| md | 16px | Card padding, standard gaps |
| lg | 24px | Section gaps |
| xl | 32px | Component margins |
| 2xl | 48px | Section padding |
| 3xl | 64px | Page sections |
| 4xl | 96px | Hero spacing |

### Component Spacing
```html
<!-- Card -->
<div class="p-6 md:p-8">

<!-- Section -->
<section class="py-16 md:py-24">

<!-- Button -->
<button class="px-6 py-3">

<!-- Form Field -->
<div class="space-y-2">
  <label class="text-sm">
  <input class="p-3">
</div>

<!-- Wizard Steps -->
<div class="space-y-6">
```

---

## Component Specifications

### Buttons

#### Primary Button
```html
<button class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-forest-700 hover:bg-forest-800
  text-white font-medium
  rounded-lg
  shadow-sm hover:shadow-md
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Calculate My Tree's Value
</button>
```

#### Secondary Button
```html
<button class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-transparent hover:bg-forest-50
  text-forest-700 font-medium
  border-2 border-forest-700
  rounded-lg
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2
">
  Learn More
</button>
```

#### Ghost Button
```html
<button class="
  inline-flex items-center justify-center
  px-4 py-2
  text-forest-700 hover:text-forest-800
  hover:bg-forest-50
  rounded-md
  transition-colors duration-150
">
  Back
</button>
```

### Cards

#### Selection Card (Wizard)
```html
<button class="
  group relative
  w-full p-6
  bg-white hover:bg-forest-50
  border-2 border-charcoal-200
  hover:border-forest-500
  data-[selected=true]:border-forest-700
  data-[selected=true]:bg-forest-50
  rounded-xl
  shadow-sm hover:shadow-md
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-forest-500
  text-left
">
  <div class="flex items-center gap-4">
    <div class="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center">
      <!-- Icon -->
    </div>
    <div>
      <h3 class="font-semibold text-charcoal-900">Oak Tree</h3>
      <p class="text-sm text-charcoal-500">Quercus species</p>
    </div>
  </div>
</button>
```

#### Info Card
```html
<div class="
  p-6 md:p-8
  bg-white
  border border-charcoal-200
  rounded-xl
  shadow-sm
">
  <h3 class="font-serif text-xl font-semibold text-charcoal-900 mb-2">
    Structural Value
  </h3>
  <p class="font-mono text-4xl font-bold text-forest-700 mb-4">
    $18,330
  </p>
  <p class="text-sm text-charcoal-600">
    Based on CTLA Trunk Formula Method
  </p>
</div>
```

### Form Inputs

#### Text Input
```html
<div class="space-y-2">
  <label class="block text-sm font-medium text-charcoal-700">
    Email Address
  </label>
  <input
    type="email"
    class="
      w-full px-4 py-3
      bg-white
      border border-charcoal-300
      rounded-lg
      text-charcoal-900
      placeholder:text-charcoal-400
      focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent
      transition-colors duration-150
    "
    placeholder="you@example.com"
  />
</div>
```

### Progress Indicator
```html
<div class="flex items-center justify-center gap-2">
  <!-- Completed Step -->
  <div class="w-10 h-10 rounded-full bg-forest-700 text-white flex items-center justify-center">
    <svg class="w-5 h-5"><!-- Checkmark --></svg>
  </div>

  <!-- Connector -->
  <div class="w-8 h-0.5 bg-forest-700"></div>

  <!-- Current Step -->
  <div class="w-10 h-10 rounded-full bg-forest-700 text-white flex items-center justify-center font-medium">
    2
  </div>

  <!-- Connector -->
  <div class="w-8 h-0.5 bg-charcoal-200"></div>

  <!-- Future Step -->
  <div class="w-10 h-10 rounded-full bg-charcoal-100 text-charcoal-400 flex items-center justify-center font-medium">
    3
  </div>
</div>
```

---

## Shadow System

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

| Element | Shadow |
|---------|--------|
| Cards (default) | shadow-sm |
| Cards (hover) | shadow-md |
| Modals | shadow-xl |
| Dropdowns | shadow-lg |
| Buttons | shadow-sm |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | rounded-lg (8px) |
| Cards | rounded-xl (12px) |
| Inputs | rounded-lg (8px) |
| Pills/Tags | rounded-full |
| Avatars/Icons | rounded-full |
| Modals | rounded-2xl (16px) |

---

## Animation Guidelines

### Timing
- **Micro-interactions:** 150-200ms
- **Page transitions:** 300ms
- **Complex animations:** 400-500ms

### Easing
```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Standard Transitions
```html
<!-- Hover effects -->
<div class="transition-colors duration-150">

<!-- Card hover -->
<div class="transition-all duration-200">

<!-- Page content -->
<div class="transition-opacity duration-300">
```

### Wizard Step Animation (Framer Motion)
```tsx
const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

<motion.div
  variants={variants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
>
```

### Value Counter Animation
```tsx
// Animate from 0 to final value over 1 second
const { value } = useSpring({
  from: { value: 0 },
  to: { value: finalValue },
  config: { tension: 120, friction: 14 }
});
```

---

## Responsive Breakpoints

```javascript
// tailwind.config.js (default)
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Mobile-First Patterns
```html
<!-- Stack on mobile, side-by-side on desktop -->
<div class="flex flex-col md:flex-row gap-6">

<!-- Full-width button on mobile -->
<button class="w-full md:w-auto">

<!-- Smaller padding on mobile -->
<section class="py-12 md:py-24">

<!-- Smaller text on mobile -->
<h1 class="text-3xl md:text-5xl">
```

---

## Accessibility Standards

### Color Contrast
All text must meet WCAG 2.1 AA standards:
- Normal text: 4.5:1 ratio minimum
- Large text (18px+ or 14px+ bold): 3:1 ratio minimum
- UI components: 3:1 ratio minimum

### Focus States
```html
<button class="
  focus:outline-none
  focus:ring-2
  focus:ring-forest-500
  focus:ring-offset-2
">
```

### Touch Targets
- Minimum size: 44x44px
- Recommended: 48x48px for primary actions

### Screen Reader Support
- Use semantic HTML (button, nav, main, etc.)
- Include aria-labels where visual context is needed
- Use aria-live for dynamic content updates

---

## Icon Guidelines

### Style
- Line icons (2px stroke)
- Rounded caps and joins
- 24x24px default size
- Use Lucide React for consistency

### Sizes
| Context | Size |
|---------|------|
| Inline text | 16px |
| Buttons | 20px |
| Cards | 24px |
| Feature blocks | 32-48px |

### Colors
- Default: currentColor (inherits text color)
- Muted: charcoal-400
- Accent: forest-600
