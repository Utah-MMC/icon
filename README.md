# Icon Dumpsters - Professional Waste Solutions

This is a [Next.js](https://nextjs.org) project for Icon Dumpsters, a professional waste management company. The application provides dumpster rental services with instant quotes and comprehensive waste management solutions.

## Recent Fixes (Latest Deployment)

- **Fixed 404 errors**: Added fallback image handling with onError events
- **Improved error handling**: Added ErrorBoundary component and custom error pages
- **Enhanced static asset handling**: Updated Next.js configuration for better image optimization
- **Added health check endpoint**: `/api/health` for deployment verification
- **Improved form handling**: Added loading states and better user feedback

## Features

- Responsive design for all devices
- Instant quote form with Formspree integration
- Multiple dumpster sizes (15, 20, 30 yards)
- Blog section with waste management articles
- Professional waste management services
- Contact information and service areas

## Getting Started

First, run the development server:

```bash
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
