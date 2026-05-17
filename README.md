# True Force Security — Website

> **Elite Guard & Security Services** — Pune, Maharashtra, India

A modern, production-ready web application for True Force Security, built with **Vite + React + Tailwind CSS**.

---

## 🚀 Quick Start (Local Development)

### Option A — One-Click (Windows)
Double-click **`start-website.bat`** in the project root. It will:
1. Check Node.js is installed
2. Auto-install dependencies if missing
3. Free port 5173 if in use
4. Start the dev server and open your browser

### Option B — Terminal
```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Visit http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. This is a standard static site — you can deploy it to:

| Platform | How |
|---|---|
| **Netlify** | Drag & drop the `dist/` folder, or connect Git repo |
| **Vercel** | Connect Git repo, set Framework = Vite, build command = `npm run build` |
| **GitHub Pages** | Use the `gh-pages` npm package or GitHub Actions |
| **Any web host** | Upload contents of `dist/` via FTP |

### Preview the production build locally
```bash
npm run preview
# Visit http://localhost:4173
```

---

## 🗂 Project Structure

```
Project TrueForce/
├── public/                  # Static assets (served as-is at root URL)
│   ├── images/              # Gallery images
│   │   └── gallery_*.jpg
│   ├── logo-new.png         # Company logo
│   ├── logo.svg
│   ├── hero-bg.png
│   └── hero-new-bg.jpg
├── src/                     # All React source code
│   ├── assets/              # Component-scoped assets (SVGs, etc.)
│   ├── components/          # Reusable UI components
│   │   ├── Capabilities.jsx
│   │   ├── CommanderBot.jsx
│   │   ├── ForceMap.jsx
│   │   ├── GoogleReviews.jsx
│   │   ├── GuardVerification.jsx
│   │   ├── Hero.jsx
│   │   ├── LiveSecurityDashboard.jsx
│   │   ├── MobileStickyBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── ROICalculator.jsx
│   │   ├── SplashScreen.jsx
│   │   ├── TrustIndicators.jsx
│   │   ├── TrustedPartners.jsx
│   │   └── WhatsAppSupport.jsx
│   ├── pages/               # Route-level pages
│   │   ├── Careers.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── QuoteInvoice.jsx
│   │   └── Services.jsx
│   ├── App.jsx              # Root component + router + footer
│   ├── i18n.js              # Internationalization (EN/HI/MR)
│   ├── index.css            # Global styles + Tailwind directives
│   └── main.jsx             # App entry point
├── .env.example             # Environment variable template (copy to .env)
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Git ignore rules
├── index.html               # Vite HTML entry point
├── package.json             # Dependencies & npm scripts
├── postcss.config.js        # PostCSS / Autoprefixer config
├── README.md                # This file
├── start-website.bat        # Windows one-click dev launcher
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite build configuration
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React 18](https://react.dev/) | UI framework |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React i18next](https://react.i18next.com/) | Multilingual support (EN/HI/MR) |
| [React Leaflet](https://react-leaflet.js.org/) | Interactive security deployment map |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, capabilities, ROI calculator, trust indicators |
| `/services` | Services | Full service catalog with pricing |
| `/careers` | Careers | Job listings & application form |
| `/gallery` | Gallery | Photo gallery of operations |
| `/quote` | Quote & Invoice | Get a quote / generate invoice |

---

## 🔧 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build at http://localhost:4173 |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Auto-fix ESLint issues |

---

## 📞 Contact

**True Force Security**
- 📍 Pune, Maharashtra, India
- 📞 +91 98765 43210
- ✉️ info@trueforce.in

---

*© 2024 True Force Security. All Rights Reserved.*