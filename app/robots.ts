import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/admin-dashboard/', '/api/', '/_next/', '/inventory/', '/kpi-dashboard/', '/api-test/', '/test/', '/test-*/', '/simple-test/', '/scraper-dashboard/', '/private/', '', '/test-*', '/api-test', '/simple-test', '/test-email*', '/test-og*', '/test-blog*', '/test-bulk*', '/test-city*', '/test-email-config*', '/test-email-rate*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/admin-dashboard/',
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
          '/admin-dashboard/',
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