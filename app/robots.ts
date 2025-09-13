import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/test-*/',
          '/simple-test/',
          '/scraper-dashboard/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/test-*/',
          '/simple-test/',
          '/scraper-dashboard/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/test-*/',
          '/simple-test/',
          '/scraper-dashboard/',
          '/private/',
        ],
      },
    ],
    sitemap: 'https://icondumpsters.com/sitemap.xml',
  }
}