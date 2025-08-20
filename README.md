# Icon Dumpsters - Professional Waste Solutions

This is a [Next.js](https://nextjs.org) project for Icon Dumpsters, a professional waste management company. The application provides dumpster rental services with instant quotes and comprehensive waste management solutions.

## Recent Updates (Latest Deployment)

- **Domain Configuration**: Successfully configured custom domain with www redirect
- **SEO Optimization**: Updated all internal links to use canonical www URLs
- **City Pages**: 40+ Utah city pages with local SEO optimization
- **Meta Tags**: Consistent OpenGraph and canonical URLs across all pages
- **Sitemap**: Updated to use www domain for better search engine indexing
- **Email Templates**: Updated all email service templates with correct domain
- **Fixed 404 errors**: Added fallback image handling with Client Components
- **Improved error handling**: Added ErrorBoundary component and custom error pages
- **Enhanced static asset handling**: Updated Next.js configuration for better image optimization
- **Added health check endpoint**: `/api/health` for deployment verification
- **Improved form handling**: Added loading states and better user feedback
- **Fixed Server Component issues**: Moved event handlers to Client Components
- **Added deployment configuration**: Created vercel.json for proper routing

## Deployment Status

- **Production URL**: https://www.icondumpsters.com
- **Domain**: icondumpsters.com (redirects to www)
- **Test Page**: https://www.icondumpsters.com/test
- **Health Check**: https://www.icondumpsters.com/api/health

## Domain Configuration

The site is now properly configured with:
- **Primary Domain**: `icondumpsters.com`
- **Canonical URL**: `https://www.icondumpsters.com`
- **WWW Redirect**: Non-www automatically redirects to www
- **SSL Certificate**: Automatic HTTPS via Vercel
- **DNS**: CNAME record pointing to Vercel deployment
- **SEO**: All internal links and metadata use www version

## Troubleshooting 404 Errors

If you encounter a 404 error:

1. **Check the correct URL**: Use https://www.icondumpsters.com
2. **Wait for deployment**: New deployments can take 2-5 minutes to propagate
3. **Try the test page**: Visit `/test` to verify the deployment is working
4. **Check Vercel dashboard**: Look for the actual deployment URL in your Vercel project
5. **Health check**: Visit `/api/health` to verify API routes are working

### Common Issues:
- **Wrong URL**: Make sure you're using https://www.icondumpsters.com
- **Deployment in progress**: Wait a few minutes for the deployment to complete
- **Cache issues**: Try hard refresh (Ctrl+F5) or incognito mode
- **DNS propagation**: DNS changes can take up to 48 hours to fully propagate

## Features

- Responsive design for all devices
- Instant quote form with Formspree integration
- Multiple dumpster sizes (15, 20, 30 yards)
- Blog section with waste management articles
- Professional waste management services
- Contact information and service areas
- Local SEO optimization for 40+ Utah cities
- Comprehensive city-specific dumpster rental guides
- Dynamic sitemap generation
- Optimized meta tags and OpenGraph data

## Getting Started

First, run the development server:

```bash
# Navigate to the iconmain directory
cd iconmain

# Install dependencies
npm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
app/
├── layout.tsx                    # Global layout with header/footer
├── page.tsx                      # Homepage
├── [city]/                       # City-specific pages (40+ cities)
├── [city]-dumpster-rental-guide-2025/  # SEO-optimized city guides
├── services/                     # Service pages
├── contact/                      # Contact page
├── about/                        # About page
├── faq/                          # FAQ page
├── dumpster-calculator/          # Dumpster size calculator
├── blog/                         # Blog section
├── sitemap.ts                    # Dynamic sitemap generation
├── globals.css                   # Global styles
└── components/                   # Reusable components
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Information

- **Business**: Icon Dumpsters
- **Phone**: (801) 918-6000
- **Email**: icondumpsters@gmail.com
- **Services**: Professional dumpster rental services
- **Service Area**: Utah (40+ cities)
