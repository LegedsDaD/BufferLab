# ⏳ BufferLab — 112 Pure-CSS Buffering & Loading Animations

> A living museum of loading states. **112 hand-crafted buffering ideas**, each with a **live preview** and **copy-paste HTML + CSS code**.
>
> **Crafted by [@LegedsDaD](https://github.com/LegedsDaD)** · Official GitHub: **<https://github.com/LegedsDaD>**

![Pure CSS](https://img.shields.io/badge/loaders-100%25%20pure%20CSS-5eead4) ![No JS](https://img.shields.io/badge/runtime%20JS-none-fb7185) ![License](https://img.shields.io/badge/use-free%20forever-fbbf24)

---

## ✨ What is this?

BufferLab is a gallery website showcasing **112 unique buffering / loading / spinner animations**. Every card on the site is a *real, running animation* — not a GIF, not a video. Click **Code** on any card and you get the exact HTML + CSS needed to reproduce it in your own project.

### Features

- 🎡 **112 live loader previews** across 10 categories
- 📋 **One-click copy** — full snippet, HTML only, or CSS only
- 🎨 **Gradient Color Lab** — every loader is driven by two CSS variables (`--c1`, `--c2`); pick any two colors (or a preset gradient) and the entire gallery recolors live, including the code you copy
- 🌗 **Preview surfaces** — view loaders on dark, light, or gradient backgrounds
- 🔍 **Search & filter** — by name, category, or loader ID
- 🧩 **Zero dependencies in the loaders** — pure HTML + CSS (keyframes, masks, conic gradients, 3D transforms, SVG strokes). The gallery UI itself is React + Vite + Tailwind, but everything you copy works anywhere.

## 🗂 Categories

| Category | Examples |
|---|---|
| Spinners | Classic Ring, Gradient Ring, Comet Tail, Material Dash |
| Dots | Bouncing Trio, Newton's Cradle, Typing Bubble, Grid Bloom |
| Bars | Equalizer, Barber Pole, Battery Charge, Domino Fall |
| Pulse & Waves | Ripple, Sonar Ping, Radar Sweep, Droplet |
| Shapes & 3D | 3D Cube, Folding Cube, Pac-Man, Yin Yang, Infinity Loop |
| Orbits | Atom, Solar System, Galaxy Swirl, Moon Phases |
| Progress | Percent Counter, Skeleton Card, Liquid Fill, Gauge Sweep |
| Text | Typewriter, Glitch Text, Neon Flicker, Binary Blink |
| Gradients | Aurora Blobs, Rainbow Ring, Plasma Ball, Mesh Mixer |
| Creative | Beating Heart, Coffee Break, DNA Helix, Rocket Launch |

## 🚀 Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
```

## 🧑‍ Using a loader in your project

Every snippet is self-contained. Example (the Classic Ring):

```html
<div class="loader-stage" style="--c1:#5eead4; --c2:#fb7185;">
  <div class="l1"></div>
</div>

<style>
.loader-stage{display:flex;align-items:center;justify-content:center;min-height:160px}
.l1{width:44px;height:44px;border-radius:50%;
    border:4px solid color-mix(in srgb,var(--c1,#5eead4) 20%,transparent);
    border-top-color:var(--c1,#5eead4);animation:k1 .9s linear infinite}
@keyframes k1{to{transform:rotate(360deg)}}
</style>
```

Change `--c1` / `--c2` to any colors to re-theme it instantly. Class names are namespaced per loader (`l1`…`l112`) so multiple loaders can coexist on one page without collisions.

## 📁 Project structure

```
src/
  loaders.ts   # the catalog: 112 loaders (name, category, HTML, CSS) + snippet generator
  App.tsx      # gallery UI — search, filters, Gradient Color Lab, code modal
  index.css    # Tailwind theme, fonts, scrollbars
README.md
```

##  Browser support

Loaders use modern CSS (`conic-gradient`, `color-mix`, `mask`, `@property`, 3D transforms). All evergreen browsers (Chrome, Edge, Firefox, Safari) are supported; the Percent Counter uses `@property` and looks best in Chromium-based browsers.

## 👑 Credits

All 112 buffering animations were designed and built by **@LegedsDaD**.

- Official GitHub → **<https://github.com/LegedsDaD>**

If this saved you from a boring spinner, go drop a ⭐ on the profile.

---

*while(waiting) { enjoy(); }*