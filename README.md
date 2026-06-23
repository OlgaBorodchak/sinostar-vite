# Sinostar — Vite Project

## Stack
- Vite 5
- Vanilla HTML / CSS / JS
- GSAP (npm)
- Swiper (npm)

## Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Structure
```
sinostar-vite/
├── index.html              ← entry point
├── vite.config.js
├── package.json
├── public/
│   ├── sinostar.ico
│   └── assets/             ← все медиафайлы (webp, svg, mp4, webm)
└── src/
    ├── js/
    │   ├── main.js         ← entry: импортирует CSS + все модули
    │   ├── navbar.js       ← мобильное меню, scroll header, GSAP
    │   ├── banner.js       ← интро анимация, responsive video source
    │   ├── carousel.js     ← Swiper карусель
    │   ├── circular-text.js
    │   ├── videos.js       ← eco hover video + brand story players
    │   └── product-gallery.js ← image loops + item 5/13/15 hover анимации
    └── styles/
        ├── main.css        ← главный файл (@import всех модулей)
        ├── base/
        │   ├── reset.css
        │   ├── typography.css
        │   ├── accessibility.css
        │   └── media-queries.css
        ├── components/
        │   ├── navbar.css
        │   ├── btn.css
        │   └── footer.css
        └── sections/
            ├── banner.css
            ├── carousel.css
            ├── icons-eco.css
            ├── product-gallery.css
            ├── videos.css
            ├── catalogs.css
            └── contact.css
```

## Следующие шаги
- Подключить `about.html` через MPA в `vite.config.js`
- Перенести `about.js` / `about.css` в `src/`
- Добавить `privacy-policy.html`, `terms-conditions.html`, `ligal-notice.html`
