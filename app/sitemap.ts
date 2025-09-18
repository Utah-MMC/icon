import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Force sitemap regeneration - updated 2025-01-10
// SEO optimized sitemap with all URLs and proper priorities

function collectRoutePaths(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const excluded = new Set([
    'api', 'components', 'config', 'public', 'images', 'hostgator-deploy', 'scripts', 
    'global-error.tsx', 'not-found.tsx', 'loading.tsx', 'error.tsx', 'test-route', 
    'api-test', 'simple-test', 'test-email', 'test-og', 'test-blog-post', 'test-bulk-email', 
    'test-city', 'test-email-config', 'test-email-rate', 'admin', 'admin-dashboard',
    'inventory', 'kpi-dashboard', 'scraper-dashboard', 'sitemap', 'lib', 'utils', 'pages',
    
    // Exclude all city-specific guide pages (recently added)
    'american-fork-dumpster-rental-guide-2025', 'bluffdale-dumpster-rental-guide-2025',
    'bountiful-dumpster-rental-guide-2025', 'centerville-dumpster-rental-guide-2025',
    'clearfield-dumpster-rental-guide-2025', 'cottonwood-heights-dumpster-rental-guide-2025',
    'downtown-salt-lake-dumpster-rental-guide-2025', 'draper-dumpster-rental-guide-2025',
    'eagle-mountain-dumpster-rental-guide-2025', 'fairpark-dumpster-rental-guide-2025',
    'farmington-dumpster-rental-guide-2025', 'glendale-dumpster-rental-guide-2025',
    'herriman-dumpster-rental-guide-2025', 'holladay-dumpster-rental-guide-2025',
    'kaysville-dumpster-rental-guide-2025', 'kearns-dumpster-rental-guide-2025',
    'layton-dumpster-rental-guide-2025', 'lehi-dumpster-rental-guide-2025',
    'magna-dumpster-rental-guide-2025', 'midvale-dumpster-rental-guide-2025',
    'millcreek-dumpster-rental-guide-2025', 'murray-dumpster-rental-guide-2025',
    'north-salt-lake-dumpster-rental-guide-2025', 'ogden-dumpster-rental-guide-2025',
    'orem-dumpster-rental-guide-2025', 'park-city-dumpster-rental-guide-2025',
    'pleasant-grove-dumpster-rental-guide-2025', 'poplar-grove-dumpster-rental-guide-2025',
    'provo-dumpster-rental-guide-2025', 'riverton-dumpster-rental-guide-2025',
    'rose-park-dumpster-rental-guide-2025', 'roy-dumpster-rental-guide-2025',
    'salt-lake-city-dumpster-rental-guide-2025', 'sandy-dumpster-rental-guide-2025',
    'saratoga-springs-dumpster-rental-guide-2025', 'south-jordan-dumpster-rental-guide-2025',
    'south-salt-lake-dumpster-rental-guide-2025', 'sugar-house-dumpster-rental-guide-2025',
    'syracuse-dumpster-rental-guide-2025', 'taylorsville-dumpster-rental-guide-2025',
    'tooel-dumpster-rental-guide-2025', 'tooele-dumpster-rental-guide-2025',
    'west-jordan-dumpster-rental-guide-2025', 'west-valley-city-dumpster-rental-guide-2025',
    'woods-cross-dumpster-rental-guide-2025',
    
    // Exclude all city-specific dumpster rental pages (recently added)
    'american-fork-dumpster-rentals', 'bountiful-dumpster-rentals', 'centerville-dumpster-rentals',
    'clearfield-dumpster-rentals', 'draper-dumpster-rentals', 'eagle-mountain-dumpster-rentals',
    'fairpark-dumpster-rentals', 'farmington-dumpster-rentals', 'glendale-dumpster-rentals',
    'herriman-dumpster-rentals', 'holladay-dumpster-rentals', 'kaysville-dumpster-rentals',
    'kearns-dumpster-rentals', 'layton-dumpster-rentals', 'lehi-dumpster-rentals',
    'magna-dumpster-rentals', 'midvale-dumpster-rentals', 'murray-dumpster-rentals',
    'ogden-dumpster-rentals', 'orem-dumpster-rentals', 'park-city-dumpster-rentals',
    'pleasant-grove-dumpster-rentals', 'poplar-grove-dumpster-rentals', 'provo-dumpster-rentals',
    'riverton-dumpster-rentals', 'roy-dumpster-rentals', 'salt-lake-city-dumpster-rentals',
    'sandy-dumpster-rentals', 'saratoga-springs-dumpster-rentals', 'south-jordan-dumpster-rentals',
    'south-salt-lake-dumpster-rentals', 'sugar-house-dumpster-rentals', 'syracuse-dumpster-rentals',
    'taylorsville-dumpster-rentals', 'tooele-dumpster-rentals', 'west-jordan-dumpster-rentals',
    'west-valley-city-dumpster-rentals', 'woods-cross-dumpster-rentals', 'spanish-fork-dumpster-rentals',
    'springville-dumpster-rentals',
    
    // Exclude county-specific pages (recently added)
    'dumpster-rental-cache-county-ut', 'dumpster-rental-davis-county-ut', 'dumpster-rental-salt-lake-county-ut',
    'dumpster-rental-summit-county-ut', 'dumpster-rental-tooele-county-ut', 'dumpster-rental-utah-county-ut',
    'dumpster-rental-wasatch-county-ut', 'dumpster-rental-weber-county-ut', 'salt-lake-county-dumpster-rental',
    
    // Exclude specific size and location combinations (recently added)
    '30-yard-dumpster-rental-calculator', '30-yard-dumpster-rental-taylorsville-ut',
    '30-yard-dumpster-rental-kearns-ut', '30-yard-dumpster-rental-sandy-ut',
    '30-yard-dumpster-rental-draper-ut', '30-yard-dumpster-rental-south-jordan-ut',
    '30-yard-dumpster-rental-riverton-ut',
    
    // Exclude other recently added problematic pages
    'construction-dumpster-rental-guide-2025', 'home-renovation-waste-disposal-complete-guide',
    'commercial-dumpster-rental-business-solutions-2025', 'construction-waste-management-guide',
    'roll-off-dumpster-rental-taylorsville', 'roll-off-dumpster-rental-magna',
    'dumpster-rental-near-me-taylorsville-ut', 'dumpster-rental-near-me-south-jordan-ut',
    
    // Additional exclusions from remote branch
    'recent-url-1', 'recent-url-2', 'utah-specific-guides'
  ]);

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
    
    // Exclude recently added city-specific guide pages (pattern-based)
    if (p.includes('-dumpster-rental-guide-2025')) return false
    
    // Exclude recently added city-specific dumpster rental pages (pattern-based)
    if (p.includes('-dumpster-rentals') && !p.includes('dumpster-rentals-near-me')) return false
    
    // Exclude county-specific pages (pattern-based)
    if (p.includes('-county-ut')) return false
    if (p.includes('-county-dumpster-rental')) return false
    
    // Exclude specific size and location combinations (pattern-based)
    if (p.includes('30-yard-dumpster-rental-') && p.includes('-ut')) return false
    if (p.includes('roll-off-dumpster-rental-') && !p.includes('guide')) return false
    if (p.includes('rolloff-dumpster-rental-') && p.includes('-ut')) return false
    
    // Exclude all the city-specific service pages (pattern-based)
    if (p.includes('/services/commercial-dumpster-rental-') && p.includes('-ut')) return false
    if (p.includes('/services/residential-dumpster-rental-') && p.includes('-ut')) return false
    
    // Exclude all the cities subdirectory pages (pattern-based)
    if (p.includes('/cities/') && p.includes('/dumpster-rental')) return false
    
    // Exclude all the county-specific sub-pages (pattern-based)
    if (p.includes('/dumpster-rental-') && p.includes('-county-ut/')) return false
    
    // Exclude all the SLC and Utah specific pages (pattern-based)
    if (p.includes('slc-dumpster-rental-') && p.includes('-ut')) return false
    if (p.includes('utah-dumpster-rental-') && !p.includes('locations')) return false
    
    // Exclude all the rolloff dumpster rental pages (pattern-based)
    if (p.includes('rolloff-dumpster-rental-') && p.includes('-ut')) return false
    
    // Exclude all the 30-yard dumpster rental pages (pattern-based)
    if (p.includes('30-yard-dumpster-rental-') && p.includes('-ut')) return false
    
    // Exclude other problematic patterns
    if (p.includes('dumpster-rental-') && p.includes('-ut') && p.includes('near-me')) return false
    
    // Exclude pages with case sensitivity issues
    if (p.includes('slc-dumpster-rental-')) return false
    if (p.includes('utah-dumpster-rental-')) return false
    
    // Include everything else - much more permissive approach
    return true;
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
