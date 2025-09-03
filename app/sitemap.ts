import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

function collectRoutePaths(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const excluded = new Set(['api', 'components', 'config', 'public', 'images', 'hostgator-deploy', 'scripts', 'global-error.tsx'])

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
    return 0.6
  }

  const changeFreqFor = (p: string): MetadataRoute.Sitemap[number]['changeFrequency'] => {
    if (p === '/' || p.startsWith('/blog')) return 'weekly'
    if (p.includes('dumpster-sizes') || p.includes('calculator')) return 'monthly'
    return 'monthly'
  }

  const now = new Date()
  return paths.map((p) => ({
    url: `${baseUrl}${p === '/' ? '' : p}`,
    lastModified: now,
    changeFrequency: changeFreqFor(p),
    priority: priorityFor(p),
  }))
}
