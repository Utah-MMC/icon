import { MetadataRoute } from 'next'
import { generateSitemap } from './lib/sitemapGenerator'

// Enhanced sitemap with comprehensive SEO optimization
export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap()
}
