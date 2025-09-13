import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Force sitemap regeneration - updated 2025-01-10
// SEO optimized sitemap with all URLs and proper priorities

function collectRoutePaths(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const excluded = new Set(['api', 'components', 'config', 'public', 'images', 'hostgator-deploy', 'scripts', 'global-error.tsx', 'not-found.tsx', 'loading.tsx', 'error.tsx', 'test-route', 'api-test', 'simple-test', 'test-email', 'test-og', 'test-blog-post', 'test-bulk-email', 'test-city', 'test-email-config', 'test-email-rate', 'construction-dumpster-rental-guide-2025', 'home-renovation-waste-disposal-complete-guide', 'commercial-dumpster-rental-business-solutions-2025', 'construction-waste-management-guide', 'roll-off-dumpster-rental-taylorsville', '30-yard-dumpster-rental-taylorsville-ut', 'roll-off-dumpster-rental-magna', '30-yard-dumpster-rental-kearns-ut', 'dumpster-rental-near-me-taylorsville-ut', '30-yard-dumpster-rental-sandy-ut', 'dumpster-rental-near-me-south-jordan-ut', '30-yard-dumpster-rental-draper-ut', '30-yard-dumpster-rental-south-jordan-ut', '30-yard-dumpster-rental-riverton-ut']);

  const results = new Set<string>()

  const walk = (dir: string, baseRoute = '') => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
    if (hasPage) {
      const route = baseRoute || '/'
      results.add(route)
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (excluded.has(entry.name) || entry.name.startsWith('(') || entry.name.startsWith('_')) continue
        const nextDir = path.join(dir, entry.name)
        const nextRoute = baseRoute + '/' + entry.name
        walk(nextDir, nextRoute)
      }
    }
  }

  walk(appDir, '')

  // Remove duplicate root route variants
  const cleaned = Array.from(results)
    .map((r) => (r === '' ? '/' : r))
    .map((r) => r.replace(/\\/g, '/'))
    .map((r) => r.replace(/\/\/$/, ''))

  return Array.from(new Set(cleaned))
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Canonical domain - no www
  const baseUrl = 'https://icondumpsters.com'
  const paths = collectRoutePaths()

  const priorityFor = (p: string): number => {
    if (p === '/') return 1
    if (p.startsWith('/blog')) return 0.8
    if (p.includes('dumpster-sizes')) return 0.9
    if (p.includes('calculator')) return 0.8
    if (p.includes('guide-2025')) return 0.7
    if (p.includes('dumpster-rental-') && p.includes('-ut')) return 0.8
    if (p.includes('slc-dumpster-rental-')) return 0.8
    if (p.includes('services')) return 0.9
    if (p.includes('contact') || p.includes('free-quote')) return 0.9
    if (p.includes('test') || p.includes('api-test')) return 0.1
    if (p.includes('inventory') || p.includes('kpi-dashboard')) return 0.1
    return 0.6
  }

  const changeFreqFor = (p: string): MetadataRoute.Sitemap[number]['changeFrequency'] => {
    if (p === '/' || p.startsWith('/blog')) return 'weekly'
    if (p.includes('dumpster-sizes') || p.includes('calculator')) return 'monthly'
    if (p.includes('slc-dumpster-rental-')) return 'monthly'
    if (p.includes('test') || p.includes('api-test')) return 'never'
    if (p.includes('inventory') || p.includes('kpi-dashboard')) return 'never'
    return 'monthly'
  }

  const shouldIndex = (p: string): boolean => {
    if (p.includes('test') || p.includes('api-test')) return false
    if (p.includes('inventory') || p.includes('kpi-dashboard')) return false
    if (p.includes('admin') || p.includes('dashboard')) return false
    if (p.includes('test-route')) return false
    return true
  }

  const now = new Date()
  const sitemapEntries = paths
    .filter(shouldIndex)
    .map((p) => ({
      url: `${baseUrl}${p === '/' ? '' : p}`,
      lastModified: now,
      changeFrequency: changeFreqFor(p),
      priority: priorityFor(p),
    }))
    .sort((a, b) => (b.priority || 0) - (a.priority || 0))

  console.log(`Generated sitemap with ${sitemapEntries.length} URLs from ${paths.length} total pages`)
  return sitemapEntries
}
