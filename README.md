# Mono Studio

A minimal creative studio website built as a front-end concept project. The goal was to explore wireframe-style UI design with a warm off-white palette, precise layout, and subtle motion — inspired by studios like Linear and Ollama.

> **Disclaimer:** This is a concept/portfolio project only. Mono Studio is not a real studio. All names, projects, and content are fictional and used for demonstration purposes.

---


## Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool and dev server
- **Framer Motion** — animations and transitions
- **Lucide React** — outline icon set
- **Inter** (Google Fonts) — typography
- **CSS-in-JS** via inline styles + global CSS

---

## Features

- Sticky navbar with blur-on-scroll effect
- Full-page smooth scroll navigation
- Project grid with hover image zoom and overlay
- Animated section reveals triggered on scroll
- Contact form with success state
- Fully responsive layout (mobile, tablet, desktop)
- Zero external UI libraries — all components built from scratch

---

## Getting Started

### Requirements

- Node.js 18+
- npm 8+

### Installation

```bash
git clone https://github.com/your-username/mono-studio.git
cd mono-studio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
mono-studio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx        entry point
    ├── App.jsx         full site (all sections)
    └── index.css       global styles and responsive rules
```

---

## Design Decisions

The design system is intentionally restrained:

- **Colors:** soft off-white `#fdfcfb` base, pure black `#0a0a0a` text, `#e1e1e1` borders
- **Layout:** 1160px max-width, 1px border gaps used as dividers in grids
- **Typography:** Inter with tight tracking on headlines (`-0.03em`), generous line-height on body (`1.7`)
- **Motion:** Framer Motion fade-ins triggered via `useInView`, subtle scale on hover — nothing distracting
- **No shadows, no gradients, no glass effects** — pure wireframe clarity

---

## Image Credits

All photos via [Unsplash](https://unsplash.com) — free to use under the Unsplash License.

---

## License

MIT — free to use, modify, and build on top of.
