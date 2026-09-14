# ARTFIT NUTRITION – Website

Premium minimalist brand & e-commerce site for ARTFIT NUTRITION (Luanda, Angola).

## What’s included

- **index.html** – Home with video hero, about, products, video section, quality, gallery, contact
- **product-200g.html** / **product-300g.html** / **product-500g.html** / **product-hcl.html** – Product detail pages
- **styles.css** – Luxury minimalism styles
- **script.js** – PT/EN toggle (persists), mobile menu, WhatsApp form
- **assets/** – Images, videos, logo.svg, favicon.svg

## Features

- Video background on hero (workout.mp4, muted autoplay + poster)
- Two video players in “Em Acção” section (workout + testimonial)
- Full product detail pages with related products
- Floating WhatsApp button + contact form → WhatsApp
- Portuguese (default) ↔ English toggle
- Mobile-first, fully responsive
- SVG favicon + clean logo treatment

## Prices (placeholder – edit later)

| Product              | Price      |
|----------------------|------------|
| 200 g (40 doses)     | 12 500 KZ (promo from 13 500) |
| 300 g (60 doses)     | 17 500 KZ  |
| 500 g (100 doses)    | 27 500 KZ  |
| Creatine HCL 120 caps| Coming soon|

## Deploy (Cloudflare Pages + GitHub)

1. Push this folder to a GitHub repo
2. Cloudflare Pages → Connect repo
3. Framework = None · Build command empty · Output = /
4. Deploy

## Edit tips

- Prices / WhatsApp links: search `KZ` or `wa.me` across all HTML files
- Texts: `translations` object in `script.js`
- Colors: CSS variables at top of `styles.css`
- Videos are large (~7–8 MB each) – consider compressing later if needed
