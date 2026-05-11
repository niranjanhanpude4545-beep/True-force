# True Force Security — Design System

> **Project:** Tactical Security Landing Page
> **Stitch Project ID:** `151017625916334764`
> **Device Target:** Desktop (responsive to mobile)
> **Theme:** Dark Mode — "The Silent Sentinel"
> **Last Updated:** 2026-04-04

---

## 1. Creative North Star

**Philosophy: Tactical Editorialism** — combining the high-stakes precision of a military interface with the sophisticated layout of a luxury technical journal.

### Core Principles
- **Intentional Asymmetry** — Large-scale data visualizations offset by high-contrast typography and overlapping glass layers
- **Deep Tonal Layering** — Depth through surface color shifts, not shadows
- **The "No-Line" Rule** — No `1px solid` borders for sectioning; space is defined through **Tonal Thresholds**
- **Atmospheric Depth** — Elevation via nested containers, not box-shadows

---

## 2. Color Palette

### 2.1 Primary Brand Colors (Local Theme)

| Token               | Hex         | Usage                                    |
|----------------------|-------------|------------------------------------------|
| `--deep-navy`        | `#0a101d`   | Primary background, body                 |
| `--navy-light`       | `#16243d`   | Cards, panels, alternate sections        |
| `--charcoal`         | `#1c1c1e`   | Map backgrounds, bot body, input fields  |
| `--safety-orange`    | `#ff4500`   | Primary CTA, accents, glows              |
| `--gold`             | `#ffaa00`   | Badges, icons, highlights                |

### 2.2 Text Colors

| Token               | Hex         | Usage                              |
|----------------------|-------------|-------------------------------------|
| `--text-primary`     | `#f0f2f5`   | Headings, body text, links          |
| `--text-secondary`   | `#a0aabf`   | Subtitles, descriptions, muted text |

### 2.3 Utility Colors

| Token               | Value                        | Usage                     |
|----------------------|------------------------------|---------------------------|
| `--glow-color`       | `rgba(255, 69, 0, 0.4)`     | Box shadows, glow effects |
| `--bg-overlay`       | `rgba(10, 16, 29, 0.85)`    | Hero overlay gradients    |

### 2.4 Stitch Material Design 3 — Full Named Color Tokens

These are the design system tokens from the Stitch project, following MD3 tonal palette conventions.

#### Surface System (Tonal Layering)

| Token                          | Hex         | Usage                                         |
|---------------------------------|-------------|-----------------------------------------------|
| `surface`                       | `#0c1322`   | Base foundation of every screen               |
| `surface-dim`                   | `#0c1322`   | Dimmed variant of base                        |
| `surface-bright`                | `#32394a`   | Highlighted surface areas                     |
| `surface-container-lowest`      | `#070e1d`   | Deepest recessed containers                   |
| `surface-container-low`         | `#151b2b`   | Large architectural blocks                    |
| `surface-container`             | `#191f2f`   | Standard containers                           |
| `surface-container-high`        | `#232a3a`   | Primary data clusters, interactive cards      |
| `surface-container-highest`     | `#2e3545`   | Modals, hover states, focused elements        |
| `surface-variant`               | `#2e3545`   | Glass panels (use at 40-60% opacity + blur)   |
| `surface-tint`                  | `#c0c6db`   | Ambient glow tint (5% opacity, 40px blur)     |

#### Primary Palette

| Token                    | Hex         | Usage                           |
|---------------------------|-------------|----------------------------------|
| `primary`                 | `#c0c6db`   | Primary interactive elements     |
| `primary-container`       | `#0b1221`   | CTA gradient endpoint            |
| `primary-fixed`           | `#dce2f8`   | Fixed primary surface            |
| `primary-fixed-dim`       | `#c0c6db`   | Dimmed fixed primary             |
| `on-primary`              | `#293041`   | Text on primary surfaces         |
| `on-primary-container`    | `#777d90`   | Text on primary containers       |
| `on-primary-fixed`        | `#151b2b`   | Text on primary gradient buttons |
| `inverse-primary`         | `#575e70`   | Inverse context primary          |

#### Secondary Palette

| Token                    | Hex         | Usage                     |
|---------------------------|-------------|----------------------------|
| `secondary`               | `#c1c7cf`   | Secondary text, ghost CTAs |
| `secondary-container`     | `#41474e`   | Secondary container fills  |
| `secondary-fixed`         | `#dde3eb`   | Fixed secondary            |
| `on-secondary`            | `#2b3137`   | Text on secondary          |

#### Tertiary / Accent Palette

| Token                    | Hex         | Usage                                   |
|---------------------------|-------------|-----------------------------------------|
| `tertiary`                | `#7bd0ff`   | Input focus borders, sparklines, accents |
| `tertiary-container`      | `#00141f`   | Tertiary container                       |
| `tertiary-fixed`          | `#c4e7ff`   | Fixed tertiary                           |
| `on-tertiary`             | `#00354a`   | Text on tertiary                         |

#### Error Palette

| Token                    | Hex         | Usage          |
|---------------------------|-------------|----------------|
| `error`                   | `#ffb4ab`   | Error text     |
| `error-container`         | `#93000a`   | Error surfaces |
| `on-error`                | `#690005`   | Text on error  |

#### Outline & Border

| Token              | Hex         | Usage                                      |
|---------------------|-------------|---------------------------------------------|
| `outline`           | `#909097`   | Standard outlines                           |
| `outline-variant`   | `#45464c`   | Ghost borders (use at 15-20% opacity)       |

#### Override Colors (Stitch Overrides)

| Token                      | Hex         | Usage                  |
|-----------------------------|-------------|------------------------|
| `overridePrimaryColor`      | `#0B1221`   | Midnight Navy anchor   |
| `overrideSecondaryColor`    | `#E2E8F0`   | Frosted Silver          |
| `overrideTertiaryColor`     | `#38BDF8`   | Tactical Cyan           |
| `overrideNeutralColor`      | `#0B1221`   | Neutral base            |

---

## 3. Typography

### 3.1 Font Stack

| Role       | Family          | Weights Used       | CSS Variable        |
|------------|-----------------|--------------------|----------------------|
| Headings   | **Outfit**      | 400, 600, 800      | `--font-heading`     |
| Body       | **Inter**       | 300, 400, 500, 600 | `--font-body`        |

> **Stitch Design System Note:** The Stitch project uses **Space Grotesk** for headlines/labels and **Inter** for body. The local codebase uses **Outfit** for headings. Reconcile based on preference.

### 3.2 Type Scale

| Element        | Font Family     | Size      | Weight | Line Height | Usage                        |
|----------------|-----------------|-----------|--------|-------------|-------------------------------|
| Hero H1        | Outfit          | `3.5rem`  | 800    | 1.1         | Main hero headline            |
| Section H2     | Outfit          | `2.5rem`  | 600    | —           | Section titles                |
| Stat Numbers   | Outfit          | `2.5rem`  | —      | —           | Counter values in hero        |
| Stat Suffix    | Outfit          | `2rem`    | —      | —           | "+", "/7" symbols             |
| Body Large     | Inter           | `1.2rem`  | 400    | 1.6         | Hero description              |
| Body Standard  | Inter           | `1.1rem`  | 400    | 1.6         | Section descriptions          |
| Body Small     | Inter           | `0.9rem`  | 400    | —           | Stat labels, captions         |
| Badge Text     | Inter           | `0.85rem` | 600    | —           | Certification badges          |
| Nav Links      | Inter           | `1rem`    | 500    | —           | Navigation items              |
| Logo           | Outfit          | `1.5rem`  | 800    | —           | Brand name                    |
| Button         | Inter           | `1rem`    | 600    | —           | CTAs                          |
| Chat Messages  | Inter           | `0.9rem`  | 400    | —           | Commander bot messages        |
| Chat Buttons   | Inter           | `0.8rem`  | 400    | —           | Chat option pills             |
| Link Hover     | Inter           | —         | —      | —           | Transitions to `--safety-orange` |

### 3.3 Typography Rules (from Stitch Design MD)

- **Display/Headlines (Space Grotesk):** Futuristic, architectural geometry for hero data points
- **Body (Inter):** Utilitarian clarity for reports and extended text
- **Labels:** Small, all-caps, monospaced-style alignment with `letter-spacing: 0.05em` for security codes and IDs
- **Numbers:** Always use monospaced-style alignment for data values

---

## 4. Spacing & Layout

### 4.1 Grid System

| Property        | Value         | Usage                            |
|------------------|--------------|----------------------------------|
| Container Width  | `90%`         | Wraps all content                |
| Max Width        | `1200px`      | Content ceiling                  |
| Section Padding  | `80px 0`      | Vertical rhythm between sections |
| Calculator Grid  | `1.2fr 0.8fr` | Two-column layout for calculator |

### 4.2 Spacing Tokens

| Token    | Value      | Usage                          |
|----------|------------|--------------------------------|
| Gap SM   | `10px`     | Chat buttons, search box items |
| Gap MD   | `15px`     | Nav actions, bot message gap   |
| Gap LG   | `30px`     | Nav links, calculator columns  |
| Gap XL   | `40px`     | Hero stats, hero bottom margin |
| Pad SM   | `5px-6px`  | Badge padding, language select |
| Pad MD   | `12px`     | Buttons, form inputs           |
| Pad LG   | `20px`     | Map overlay, bot header        |
| Pad XL   | `30px`     | Glass panels, verification card|

### 4.3 Corner Radius

| Size    | Value    | Usage                                              |
|---------|----------|-----------------------------------------------------|
| XS      | `4px`    | Language select, badges inner                        |
| SM      | `6px`    | Buttons, form inputs, border-radius                  |
| MD      | `8px`    | Map overlay panel, chat messages                     |
| LG      | `12px`   | Map container, glass panels, verification card       |
| Pill    | `20px`   | Badges, chat option pills                            |
| Round   | `50%`    | Score circle                                         |

> **Stitch Rule:** Max roundness is `0.5rem`. Excessive roundness is considered "consumer-grade."

---

## 5. Component Specifications

### 5.1 Buttons

#### Primary Button (`.btn-primary`)
```css
background-color: var(--safety-orange);  /* #ff4500 */
color: #fff;
padding: 12px 24px;
border-radius: 6px;
font-weight: 600;
border: none;
transition: all 0.3s ease;
```
**Hover State:**
```css
background-color: #e63e00;
box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4);
```

#### Secondary / Ghost Button (`.btn-secondary`)
```css
background-color: transparent;
border: 2px solid var(--safety-orange);
color: var(--safety-orange);
```
**Hover State:**
```css
background-color: rgba(255, 69, 0, 0.1);
```

#### Stitch Design System Button Spec
- **Primary:** Gradient fill (`primary` → `primary-container` at 135°), sharp `0.25rem` corners, text `on-primary-fixed` (#151b2b)
- **Secondary (Ghost):** `outline-variant` at 20% opacity, hover fills with `surface-container-high`
- **Tertiary:** Text-only, `secondary` color (#c1c7cf), `label-md` style, all-caps

---

### 5.2 Navigation Bar (`.navbar`)
```css
position: fixed;
background-color: rgba(10, 16, 29, 0.95);
backdrop-filter: blur(10px);
z-index: 1000;
border-bottom: 1px solid rgba(255, 255, 255, 0.05);
height: 70px;
```

---

### 5.3 Glass Panel (`.glass-panel`)
```css
background: rgba(28, 28, 30, 0.6);
backdrop-filter: blur(10px);
padding: 30px;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.05);
```

> **Stitch "Tactical Glass" Rule:** Use `surface-variant` (#2e3545) at 40-60% opacity with `backdrop-filter: blur(12px)`. Never use solid backgrounds for cards.

---

### 5.4 Badge (`.badge`)
```css
display: inline-block;
padding: 6px 12px;
background: rgba(255, 170, 0, 0.1);
color: var(--gold);  /* #ffaa00 */
border: 1px solid var(--gold);
border-radius: 20px;
font-size: 0.85rem;
font-weight: 600;
```

---

### 5.5 Hero Section (`.hero`)
```css
height: 100vh;
min-height: 600px;
display: flex;
align-items: center;
/* Background: Unsplash security image with overlay */
```
**Overlay:** `linear-gradient(135deg, rgba(10,16,29,0.95) 0%, rgba(10,16,29,0.7) 100%)`

---

### 5.6 Form Inputs
```css
/* Text/Number Inputs */
padding: 12px;
background: var(--deep-navy);  /* #0a101d */
border: 1px solid rgba(255, 255, 255, 0.1);
color: white;
border-radius: 6px;

/* Range Input */
accent-color: var(--safety-orange);
```

**Stitch Focus State:** Ghost border of `tertiary` (#7bd0ff) at 40% opacity with subtle inner glow.

---

### 5.7 Score Circle
```css
width: 60px;
height: 60px;
border-radius: 50%;
background: rgba(255, 69, 0, 0.2);
border: 2px solid var(--safety-orange);
font-size: 1.5rem;
font-weight: bold;
color: var(--safety-orange);
```

---

### 5.8 Verification Card (`.verification-card`)
```css
background: var(--navy-light);  /* #16243d */
padding: 30px;
border-radius: 12px;
border-left: 5px solid var(--safety-orange);
max-width: 600px;
```

---

### 5.9 Commander Bot (`.commander-bot`)
```css
position: fixed;
bottom: 80px;
right: 30px;
width: 300px;
z-index: 1000;
```
- **Header:** `background: var(--safety-orange)`, white text, `border-radius: 10px 10px 0 0`
- **Body:** `background: var(--charcoal)`, `height: 300px`, flex column
- **Messages:** System = `navy-light` bg, User = `safety-orange` bg
- **Chat Pills:** `background: rgba(255,255,255,0.1)`, `border-radius: 20px`, hover → `rgba(255,69,0,0.5)`

---

### 5.10 Map Container
```css
height: 500px;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.1);
/* Overlay panel: glass blur with rgba(28,28,30,0.9) */
```
- **Tile Layer:** CartoDB Dark Matter
- **Zone Markers:** Circles with `#ff4500` (critical) and `#ffaa00` (standard) at `0.2` fill opacity

---

### 5.11 Mobile Sticky Action Bar
```css
position: fixed;
bottom: 0;
width: 100%;
background: var(--charcoal);
z-index: 999;
display: flex;  /* only on mobile */
```
- **Call Button:** `background: #25D366` (WhatsApp green)
- **SOS Button:** `background: #ff0000` (Emergency red)

---

## 6. Animations & Motion

### 6.1 Fade-In Up (`.fade-in-up`)
```css
opacity: 0;
transform: translateY(20px);
animation: fadeInUp 0.8s ease-out forwards;
```
- `.delay-1`: 0.2s | `.delay-2`: 0.4s | `.delay-3`: 0.6s

### 6.2 Hero Scanner
Horizontal light bar sweep across hero section:
```css
background: linear-gradient(to bottom, transparent, rgba(255, 69, 0, 0.2), transparent);
animation: scan 4s linear infinite;
```

### 6.3 Glow Effects (`.glow-box`)
```css
box-shadow: 0 0 15px var(--glow-color);
/* Hover: 0 0 25px var(--safety-orange) */
```

### 6.4 Sweep Animation (`.glow-border::before`)
Skewed light sweep across glow-bordered elements:
```css
background: linear-gradient(to right, transparent, rgba(255, 69, 0, 0.1), transparent);
transform: skewX(-25deg);
animation: sweep 6s infinite;
```

### 6.5 Pulse Animation (`.pulse-anim`)
Expanding ring effect for SOS/badges:
```css
animation: pulse 2s infinite;
/* 0% → 0px orange ring, 70% → 10px fade, 100% → reset */
```

### 6.6 General Transitions
| Property   | Duration | Easing     | Usage                |
|------------|----------|------------|----------------------|
| Color      | `0.3s`   | ease       | Links, hover states  |
| All        | `0.3s`   | ease       | Buttons              |
| Box-shadow | `0.3s`   | ease-in-out| Glow effects         |

---

## 7. Responsive Breakpoints

| Breakpoint     | Changes                                         |
|----------------|--------------------------------------------------|
| `≤ 768px`      | Nav links hidden (mobile menu)                   |
|                | Hero H1 → `2.5rem`                              |
|                | Calculator grid → single column                  |
|                | Mobile sticky action bar appears                  |
|                | Commander bot repositioned (`right: 10px`)        |
|                | Body gets `padding-bottom: 60px` for sticky bar  |

---

## 8. Design System Rules (from Stitch Design MD)

### ✅ Do
- Embrace negative space — let data breathe
- Use monospaced alignment for numbers (security codes, IPs) with `letter-spacing: 0.05em`
- Use `surface-container-highest` for hover states
- Define boundaries through tonal shifts, not borders
- Use ambient glows tinted with `surface-tint` at 5% opacity for floating elements

### ❌ Don't
- Use pure black (`#000000`) — it kills the Midnight Navy depth
- Use rounded corners larger than `0.5rem`
- Use standard `<hr>` dividers — prefer background color shifts
- Use `1px solid` borders for sectioning
- Use standard shadows — use tonal nesting instead

---

## 9. Stitch Project Screens

| Screen ID                                  | Position (x) | Dimensions      |
|--------------------------------------------|--------------|-----------------|
| `09775cec2c3e492fa206f89c76169a7d`         | 1024         | 1280 × 2192     |
| `0b2f658db3d14aae8a86be6120236bdd`         | 2368         | 1280 × 3676     |
| `cbba96fbe7354b5faab26e4d93d452dc`         | 5056         | 600 × 600       |

### Design System Instances
| Asset ID                                     | Type                    |
|----------------------------------------------|-------------------------|
| `49765ea7151345f98eab27e9b59c2ccc`           | Design System Instance  |
| `cfcd889435774d3db9f00961347ac5eb`           | Design System Instance  |

---

## 10. External Dependencies

| Dependency        | Version    | URL / CDN                                                    |
|-------------------|------------|---------------------------------------------------------------|
| Google Fonts      | —          | Inter (300-600), Outfit (400, 600, 800)                       |
| Font Awesome      | 6.4.0      | `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/`         |
| Leaflet.js        | 1.9.4      | `unpkg.com/leaflet@1.9.4/`                                   |
| CartoDB Tiles     | —          | `basemaps.cartocdn.com/dark_all/` (Dark Matter theme)        |

---

## 11. File Architecture

```
Project TrueForce/
├── index.html          # Main HTML structure
├── DESIGN.md           # This file
├── css/
│   ├── theme.css       # Design tokens & CSS custom properties
│   ├── animations.css  # Keyframe animations & motion effects
│   └── styles.css      # Component styles & responsive rules
└── js/
    └── app.js          # Counter, calculator, map, bot, verification
```
