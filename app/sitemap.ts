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
    // Exclude test and development pages
    if (p.includes('test') || p.includes('api-test')) return false
    if (p.includes('inventory') || p.includes('kpi-dashboard')) return false
    if (p.includes('admin') || p.includes('dashboard')) return false
    if (p.includes('test-route')) return false
    if (p.includes('simple-test')) return false
    if (p.includes('sitemap')) return false
    
    // Exclude pages that are likely to cause canonical issues
    if (p.includes('construction-dumpster-rental-guide-2025')) return false
    if (p.includes('home-renovation-waste-disposal-complete-guide')) return false
    if (p.includes('commercial-dumpster-rental-business-solutions-2025')) return false
    if (p.includes('construction-waste-management-guide')) return false
    
    // Exclude specific problematic pages that cause 4XX errors
    if (p.includes('roll-off-dumpster-rental-taylorsville')) return false
    if (p.includes('30-yard-dumpster-rental-taylorsville-ut')) return false
    if (p.includes('roll-off-dumpster-rental-magna')) return false
    if (p.includes('30-yard-dumpster-rental-kearns-ut')) return false
    if (p.includes('dumpster-rental-near-me-taylorsville-ut')) return false
    if (p.includes('30-yard-dumpster-rental-sandy-ut')) return false
    if (p.includes('dumpster-rental-near-me-south-jordan-ut')) return false
    if (p.includes('30-yard-dumpster-rental-draper-ut')) return false
    if (p.includes('30-yard-dumpster-rental-south-jordan-ut')) return false
    if (p.includes('30-yard-dumpster-rental-riverton-ut')) return false
    
    // Exclude pages with canonical URL issues (missing or incorrect)
    if (p.startsWith('/services/')) return false  // Most service pages have canonical issues
    if (p.includes('slc-dumpster-rental-')) return false  // Case sensitivity issues
    if (p.includes('utah-dumpster-rental-')) return false  // Case sensitivity issues
    
    // Only include main pages and blog posts for now
    const allowedPaths = [
      '/',
      '/blog',
      '/faq',
      '/contact',
      '/freequote',
      '/dumpster-sizes',
      '/services',
      '/about',
      '/transparent-pricing',
      '/utah-dumpster-permits-guide',
      '/utah-wide-coverage',
      '/tonnage-calculator'
    ];
    
    // Allow city pages (main city pages only)
    if (p.match(/^\/[a-z-]+$/)) {
      const cityName = p.replace('/', '');
      // Only include major cities
      const majorCities = [
        'salt-lake-city', 'west-valley-city', 'sandy', 'west-jordan', 'murray',
        'taylorsville', 'south-jordan', 'draper', 'riverton', 'midvale',
        'millcreek', 'holladay', 'cottonwood-heights', 'kearns', 'magna',
        'bluffdale', 'herriman', 'tooele', 'bountiful', 'centerville',
        'clearfield', 'layton', 'ogden', 'provo', 'orem', 'spanish-fork',
        'springville', 'american-fork', 'pleasant-grove', 'lehi'
      ];
      return majorCities.includes(cityName);
    }
    
    // Allow blog posts
    if (p.startsWith('/blog/')) return true;
    
    // Allow guide pages
    if (p.includes('-guide-2025')) return true;
    
    // Allow main city dumpster rental pages
    if (p.match(/^\/[a-z-]+-dumpster-rentals$/)) return true;
    
    return allowedPaths.includes(p);
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
