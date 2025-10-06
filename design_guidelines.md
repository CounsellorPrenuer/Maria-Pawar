# Inspire2Grow - Comprehensive Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leadcrestconsulting.com's premium glassmorphism aesthetic, combined with professional corporate training website patterns. The design balances sophisticated visual appeal with trustworthy professionalism suitable for career coaching and corporate L&D services.

## Core Design Principles
- **Premium Glassmorphism**: Translucent cards with backdrop blur, subtle gradients, and soft shadows throughout
- **Professional Trustworthiness**: Clean layouts with ample whitespace, establishing credibility for corporate clients
- **Smooth Interactions**: Subtle hover effects and scroll-triggered animations that feel polished, not distracting
- **Content Hierarchy**: Clear visual separation between primary CTAs, secondary information, and supporting content

## Color Palette

### Primary Colors (Dark Mode)
- **Deep Navy Base**: 210 75% 15% - Primary backgrounds, hero sections, navbar
- **Professional Blue**: 210 100% 20% - Primary text, headings, key UI elements
- **Trustworthy Blue Accent**: 210 50% 35% - Links, interactive elements

### Secondary Colors
- **Emerald Green**: 150 50% 40% - Secondary highlights, success states, feature accents
- **Forest Green**: 150 45% 30% - Hover states for green elements

### Accent Color
- **Warm Gold**: 45 100% 51% - CTA buttons, critical attention points, premium indicators
- **Deep Gold**: 45 90% 45% - Gold button hover states

### Neutral Palette
- **Card Backgrounds**: 210 20% 12% with 20% opacity + backdrop-blur-xl
- **Text Primary**: 210 10% 95%
- **Text Secondary**: 210 5% 70%
- **Borders/Dividers**: 210 15% 25% with 30% opacity

## Typography

### Font Families
```
Headings: 'Playfair Display', serif
Body: 'Montserrat', sans-serif
```

### Type Scale
- **Hero Headline**: text-6xl (60px) / font-bold / Playfair Display
- **Page Titles**: text-5xl (48px) / font-bold / Playfair Display
- **Section Headings**: text-4xl (36px) / font-semibold / Playfair Display
- **Card Titles**: text-2xl (24px) / font-semibold / Montserrat
- **Body Large**: text-lg (18px) / font-normal / Montserrat
- **Body Standard**: text-base (16px) / font-normal / Montserrat
- **Small/Meta**: text-sm (14px) / font-medium / Montserrat

## Layout System

### Spacing Units
Consistently use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for margins and padding
- Small gaps: space-y-4, gap-4
- Medium sections: py-16, px-8
- Large sections: py-24, px-12
- Hero sections: py-32

### Container Widths
- Full-width sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for readability

### Grid Patterns
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing cards: grid-cols-1 lg:grid-cols-2 (side-by-side comparison)
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Stats/Metrics: grid-cols-2 lg:grid-cols-4

## Component Library

### Navbar
- Sticky positioning with subtle shadow on scroll
- Glassmorphic background: backdrop-blur-lg with 10% opacity dark overlay
- Logo left-aligned (h-12)
- Center navigation links with hover underline animation
- Gold "Contact" button right-aligned with rounded-full styling

### Buttons
- **Primary (Gold CTA)**: rounded-full, py-3 px-8, text-base font-semibold, smooth scale-105 hover
- **Secondary (Blue)**: rounded-full, py-3 px-8, border variant with backdrop-blur
- **Outline on Images**: backdrop-blur-md background, white/light text, no hover interactions

### Cards (Glassmorphism Pattern)
- Background: dark navy with 20% opacity + backdrop-blur-xl
- Border: 1px solid white/10
- Border radius: rounded-2xl
- Padding: p-8
- Shadow: shadow-2xl with colored glow effect
- Hover: slight scale-up (scale-102) with increased shadow

### Forms
- Input fields: backdrop-blur-md with subtle border, rounded-lg, py-3 px-4
- Focus state: gold border highlight
- Labels: text-sm font-medium, mb-2
- Submit buttons: Full-width gold CTA buttons

### Modals
- Overlay: backdrop-blur-sm with 40% dark opacity
- Modal card: max-w-2xl, glassmorphic card styling
- Close button: top-right with hover scale effect

## Page-Specific Designs

### Homepage
- **Layout**: Two-column grid on desktop (lg:grid-cols-2), single column mobile
- **Left**: Maria's profile photo (rounded-2xl, shadow-2xl, w-full max-w-md)
- **Right**: Headline stack with "Explore My Services" gold CTA
- **Background**: Gradient overlay from deep navy to slightly lighter navy with subtle animated gradient

### Pricing Page
- **Tab Selector**: Horizontal scroll on mobile, flex row on desktop
- **Active Tab**: Gold bottom border (border-b-4), text-gold, font-semibold
- **Inactive Tabs**: text-secondary, hover text-white transition
- **Pricing Cards**: Side-by-side Standard/Premium with glassmorphic styling
- **Features List**: Green checkmarks (✔) for included, red crosses (❌) for excluded, text-sm spacing
- **BUY NOW Buttons**: Full-width gold buttons with prominent placement

### Admin Dashboard
- **Sidebar Navigation**: Dark background, gold active state, icons + labels
- **Stats Cards**: Grid of 4 cards showing metrics with large numbers, icon badges, colored accents
- **Tables**: Striped rows with glassmorphic styling, hover highlight, action buttons
- **Tab Interface**: Horizontal tabs with active state highlighting
- **Export Buttons**: Green accent buttons with download icons

### Gallery (Our Impact)
- **Section 1 - Training Photos**: Masonry-style grid with rounded-xl images, hover zoom effect
- **Section 2 - Partner Logos**: Clean grid with centered logos on subtle glassmorphic cards

## Animations

- **On Scroll**: Fade-in-up for cards and sections (opacity 0→1, translateY 20px→0)
- **Hover Cards**: scale-102 transform with 300ms ease-in-out
- **Button Hovers**: scale-105 with shadow expansion
- **Tab Switching**: Fade transition between pricing content (200ms)
- **No Excessive Motion**: Respect prefers-reduced-motion, keep animations subtle

## Images

### Required Images
1. **Maria's Profile Photo**: Professional headshot, high-resolution, warm and approachable expression
2. **Training Gallery (6-9 images)**: Corporate training sessions, diverse participants, professional settings
3. **Partner Logos (8 placeholders)**: Clean, recognizable corporate logos on transparent backgrounds
4. **Logo**: Inspire2Grow brand logo for navbar

### Image Treatment
- All photos: rounded-2xl with shadow-2xl
- Logos: grayscale with hover color transition
- Maintain aspect ratios, use object-cover for consistency

## Responsive Breakpoints

- **Mobile**: Base styles, single column layouts, stacked navigation
- **Tablet (md: 768px)**: Two-column grids, expanded navigation
- **Desktop (lg: 1024px)**: Full multi-column layouts, side-by-side comparisons
- **Wide (xl: 1280px)**: Maximum container widths, optimal spacing

## Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 minimum for text)
- Focus indicators: gold outline (ring-2 ring-gold) on all interactive elements
- Semantic HTML with proper heading hierarchy
- Alt text for all images
- Keyboard navigation support throughout