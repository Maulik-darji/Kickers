# Kickers

Showcase website for Kickers: officially licensed die-cast sneakers, each engraved with the exact style code of the real pair. What die-cast cars did for cars, done for shoes.

Built with React + Vite. Design rules: flat colours only (no gradients) and square corners on every element.

Model names and style codes in `src/data.js` are placeholders. Replace them with the exact codes from each original pair's box label.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/App.jsx` — page sections (hero, exact match, Series 01 cards, twin packs, licensing, waitlist, FAQ)
- `src/components/KickersCard.jsx` — the retail blister card with the Kickers logo and brand badge
- `src/data.js` — Series 01 models, style codes, licensing steps, specs and FAQ copy
- `public/shoes/` — shoe cutouts; `public/kickers-logo.png` — logo on transparent background
- `src/index.css` — all styles
