import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Function to recursively find all page.tsx files
function collectAllPages(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const excluded = new Set([
    'api', 
    'components', 
    'config', 
    'public', 
    'images', 
    'hostgator-deploy', 
    'scripts', 
    'global-error.tsx',
    'not-found.tsx',
    'loading.tsx',
    'error.tsx',
    'layout.tsx',
    'template.tsx'
  ]);

  const results = new Set<string>();

  const walk = (dir: string, baseRoute = '') => {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx');
      
      if (hasPage) {
        const route = baseRoute || '/';
        results.add(route);
      }
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          if (excluded.has(entry.name) || entry.name.startsWith('(') || entry.name.startsWith('_')) {
            continue;
          }
          const nextDir = path.join(dir, entry.name);
          const nextRoute = baseRoute + '/' + entry.name;
          walk(nextDir, nextRoute);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
      console.warn(`Could not read directory: ${dir}`);
    }
  };

  walk(appDir, '');
  return Array.from(results);
}

// Function to determine priority based on URL pattern
function getPriority(url: string): number {
  if (url === '/') return 1.0;
  if (url.includes('dumpster-sizes') || url.includes('dumpster-prices')) return 0.9;
  if (url.includes('services') || url.includes('contact') || url.includes('free-quote')) return 0.9;
  if (url.includes('calculator')) return 0.8;
  if (url.includes('guide-2025')) return 0.7;
  if (url.includes('dumpster-rental-') && url.includes('-ut')) return 0.8;
  if (url.includes('dumpster-rentals')) return 0.7;
  if (url.includes('rental-guide')) return 0.6;
  if (url.includes('test') || url.includes('api-test')) return 0.1;
  if (url.includes('inventory') || url.includes('kpi-dashboard')) return 0.1;
  return 0.6;
}

// Function to determine change frequency based on URL pattern
function getChangeFrequency(url: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (url === '/' || url.includes('dumpster-prices')) return 'weekly';
  if (url.includes('services') || url.includes('contact')) return 'monthly';
  if (url.includes('calculator') || url.includes('guide')) return 'monthly';
  if (url.includes('test') || url.includes('api-test')) return 'never';
  if (url.includes('inventory') || url.includes('kpi-dashboard')) return 'never';
  return 'monthly';
}

// Function to determine if a page should be indexed
function shouldIndex(url: string): boolean {
  // Don't index test pages, admin pages, or internal tools
  if (url.includes('test') || url.includes('api-test')) return false;
  if (url.includes('inventory') || url.includes('kpi-dashboard')) return false;
  if (url.includes('admin') || url.includes('dashboard')) return false;
  if (url.includes('simple-test')) return false;
  
  return true;
}

export function generateComprehensiveSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icondumpsters.com';
  const allPages = collectAllPages();
  
  console.log(`Found ${allPages.length} pages in the application`);
  
  const sitemap: SitemapEntry[] = [];
  const now = new Date();

  allPages.forEach(page => {
    const cleanUrl = page === '/' ? '' : page;
    const fullUrl = `${baseUrl}${cleanUrl}`;
    
    if (shouldIndex(page)) {
      sitemap.push({
        url: fullUrl,
        lastModified: now,
        changeFrequency: getChangeFrequency(page),
        priority: getPriority(page),
      });
    }
  });

  // Sort by priority (highest first) then by URL
  sitemap.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return a.url.localeCompare(b.url);
  });

  console.log(`Generated sitemap with ${sitemap.length} URLs`);
  return sitemap;
}

// Export a function to get page count for debugging
export function getPageCount(): number {
  return collectAllPages().length;
}
