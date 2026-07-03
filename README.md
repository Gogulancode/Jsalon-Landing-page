# J Salon Franchise Landing Page

A premium, SEO-optimized React landing page for J Salon franchise opportunities.

## Live URL

**Planned domain:** https://franchise.jsalons.co

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGogulancode%2FJsalon-Landing-page.git)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Framer Motion (animations)
- React Helmet Async (SEO)
- Lucide React (icons)

## Features

- Pixel-perfect recreation of the Figma design
- Fully responsive (mobile, tablet, desktop)
- SEO optimized with meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- Accessible components with proper ARIA labels
- Lead capture form with validation — enquiries go to **jsalonmail@gmail.com**
- Smooth scroll navigation
- Embedded YouTube video
- Footer links configured as requested

## Footer Links

- **About Us** → https://jsalons.co/about-us/
- **Franchise Opportunity** → Same page (#opportunity)
- **Investment Details** → Same page (#investment)
- **Contact Us** → https://jsalons.co/contact-us/
- **Franchise Agreement** → No redirect (placeholder)
- **YouTube Video** → https://www.youtube.com/watch?v=FDORzfKYngA&t=18s

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is configured for **Vercel** (`vercel.json`). Vercel will auto-detect Vite, run `npm run build`, and serve the `dist` folder.

To deploy manually:
1. Push the repo to GitHub (already done).
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Keep the default settings and click **Deploy**.
4. Add a custom domain `franchise.jsalons.co` in project settings if needed.

## SEO

- Canonical URL set to https://franchise.jsalons.co
- Structured data: Organization, Product/Franchise Offer, FAQPage
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
