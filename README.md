# NOVA — AI Workspace Landing Page

A premium, production-quality SaaS landing page for **NOVA**, an AI-powered
workspace for developers and teams. Built as a frontend-only portfolio piece:
no backend, no database, no real AI calls — everything is mock data and React
state.

## Tech stack

- React 18 + Vite
- JavaScript (no TypeScript)
- Tailwind CSS
- Framer Motion
- lucide-react

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── DashboardPreview.jsx   # static-feel dashboard shown under the hero
│   ├── LogoCloud.jsx
│   ├── Features.jsx
│   ├── DashboardShowcase.jsx  # fully interactive dashboard demo (tabs, state)
│   ├── AIShowcase.jsx
│   ├── HowItWorks.jsx
│   ├── Integrations.jsx
│   ├── Pricing.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── data/
│   └── content.js             # all mock copy/content in one place
├── hooks/
│   └── useReducedMotion.js
├── App.jsx
├── main.jsx
└── index.css
```

## Design notes

- **Palette**: near-black background (`#08080A`) with a warm amber signal
  accent (`#F2A33C`) used sparingly for emphasis, glow, and progress states.
- **Type**: Space Grotesk for display/headings, Inter for body copy, and
  JetBrains Mono for data, labels, and UI chrome — a nod to the
  developer-tool audience.
- **Motion**: Framer Motion drives entrance animation, scroll reveals, and
  interactive state transitions. All animation respects
  `prefers-reduced-motion`.

## Interactivity implemented with React state

- Mobile menu open/close (animated)
- Navbar background on scroll
- Dashboard showcase: tab switching, project selection, notification panel,
  AI assistant prompt switching, animated analytics
- Pricing monthly/yearly toggle with discounted pricing
- FAQ accordion (single item open at a time)
