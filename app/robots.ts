import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/sitemap.xml',
          '/robots.txt',
          '/blog',
          '/dumpster-sizes',
          '/services',
          '/contact',
          '/about',
          '/faq',
          '/freequote',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/test/',
          '/test-email/',
          '/test-formspree/',
          '/test-og/',
          '/test-security/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/test/',
          '/test-email/',
          '/test-formspree/',
          '/test-og/',
          '/test-security/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/test/',
          '/test-email/',
          '/test-formspree/',
          '/test-og/',
          '/test-security/',
        ],
      },
    ],
    sitemap: 'https://icondumpsters.com/sitemap.xml',
  }
}
