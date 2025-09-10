import { MetadataRoute } from 'next'
import { generateRobotsTxt } from './lib/sitemapGenerator'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
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
      ],
    },
    sitemap: 'https://icondumpsters.com/sitemap.xml',
  }
}