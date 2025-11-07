# Style Trailblazers Website

A Next.js website showcasing four trailblazing women in the world of fashion and their iconic brands.

## Features

- **Modern Next.js 14** with App Router
- **Component-based architecture** for easy maintenance
- **Individual brand pages** with detailed information
- **Image support** with automatic optimization and placeholders
- **Responsive design** that works on all devices
- **Beautiful UI** inspired by fashion design aesthetics
- **TypeScript** for type safety

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
fashion-farid/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── brands/
│       └── [slug]/
│           ├── page.tsx        # Dynamic brand pages
│           └── not-found.tsx   # 404 page for brands
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── WomenShowcase.tsx       # Main content showcasing 4 women
│   ├── BrandImage.tsx          # Image component with fallbacks
│   └── Footer.tsx              # Footer component
├── data/
│   └── brands.ts               # Brand data and information
└── public/
    └── images/                 # Brand images directory
```

## The Four Trailblazers

1. **Coco Chanel** - Chanel (Founded 1910)
   - Visit: `/brands/chanel`
   
2. **Miuccia Prada** - Prada (Founded 1978)
   - Visit: `/brands/prada`
   
3. **Donatella Versace** - Versace (Founded 1997)
   - Visit: `/brands/versace`
   
4. **Stella McCartney** - Stella McCartney (Founded 2001)
   - Visit: `/brands/stella-mccartney`

## Adding Images

### Brand Images
To add brand images, place them in the `public/images/` directory:

- `chanel.jpg`
- `prada.jpg`
- `versace.jpg`
- `stella-mccartney.jpg`

### Iconic Pieces Images
To add images for iconic pieces, place them in the `public/images/iconic/` directory. Each brand has 6 iconic pieces with images:

**Chanel:**
- `chanel-lbd.jpg`, `chanel-no5.jpg`, `chanel-suit.jpg`, `chanel-255.jpg`, `chanel-pumps.jpg`, `chanel-quilted.jpg`

**Prada:**
- `prada-backpack.jpg`, `prada-galleria.jpg`, `prada-saffiano.jpg`, `prada-sunglasses.jpg`, `prada-platform.jpg`, `prada-rtw.jpg`

**Versace:**
- `versace-medusa.jpg`, `versace-safety-pin.jpg`, `versace-greek-key.jpg`, `versace-palazzo.jpg`, `versace-baroque.jpg`, `versace-gowns.jpg`

**Stella McCartney:**
- `stella-falabella.jpg`, `stella-sneakers.jpg`, `stella-activewear.jpg`, `stella-jacket.jpg`, `stella-fragrance.jpg`, `stella-rtw.jpg`

See `public/images/README.md` and `public/images/iconic/.gitkeep` for more details.

**Note:** If images are not provided, the website will automatically display elegant placeholder images.

## Brand Pages

Each brand has its own dedicated page with:
- Brand history and background
- Detailed achievements
- Iconic pieces and designs
- Legacy and impact on fashion
- High-quality images

## Build for Production

```bash
npm run build
npm start
```

## Customization

All brand information can be customized in `/data/brands.ts`. You can:
- Update descriptions and history
- Add or modify achievements
- Change brand colors
- Update image URLs
- Add new brands

# fashion-trailblazers
