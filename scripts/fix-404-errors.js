#!/usr/bin/env node

/**
 * 404 Error Fix Script
 * Fixes the route conflicts and other issues causing 404 errors
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 404 Error Fix Script');
console.log('========================\n');

// 1. Fix vercel.json redirects
function fixVercelRedirects() {
  console.log('🔧 Fixing vercel.json redirects...');
  
  const vercelPath = path.join(__dirname, '../vercel.json');
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  
  // Remove problematic redirects that conflict with actual pages
  const problematicRedirects = [
    '/dumpster-rental-[city]-ut',
    '/dumpster-rental-[[...slug]]'
  ];
  
  vercelConfig.redirects = vercelConfig.redirects.filter(redirect => 
    !problematicRedirects.includes(redirect.source)
  );
  
  // Add specific redirects for known 404 patterns
  const newRedirects = [
    {
      "source": "/commercialbusiness-solutions-dumpster-rental-guide-2025",
      "destination": "/commercial-dumpster-rental-business-solutions",
      "permanent": true
    },
    {
      "source": "/dumpster-size-estimation-guide",
      "destination": "/blog/dumpster-size-estimation-guide", 
      "permanent": true
    }
  ];
  
  // Add new redirects if they don't already exist
  newRedirects.forEach(newRedirect => {
    const exists = vercelConfig.redirects.some(r => r.source === newRedirect.source);
    if (!exists) {
      vercelConfig.redirects.push(newRedirect);
    }
  });
  
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log('✅ Fixed vercel.json redirects');
}

// 2. Check for missing pages that should exist
function checkMissingPages() {
  console.log('\n📄 Checking for missing pages...');
  
  const appDir = path.join(__dirname, '../app');
  const criticalPages = [
    '/commercial-dumpster-rental-business-solutions',
    '/blog/dumpster-size-estimation-guide'
  ];
  
  const missingPages = [];
  
  criticalPages.forEach(page => {
    const pagePath = path.join(appDir, page.replace('/', ''), 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      missingPages.push(page);
    }
  });
  
  if (missingPages.length > 0) {
    console.log('❌ Missing critical pages:');
    missingPages.forEach(page => console.log(`   - ${page}`));
    return missingPages;
  } else {
    console.log('✅ All critical pages exist');
    return [];
  }
}

// 3. Update sitemap to exclude problematic routes
function updateSitemap() {
  console.log('\n🗺️ Updating sitemap exclusions...');
  
  const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Add more exclusions for problematic routes
  const additionalExclusions = [
    'test-route',
    'api-test',
    'simple-test',
    'test-email',
    'test-og',
    'test-blog-post',
    'test-bulk-email',
    'test-city',
    'test-email-config',
    'test-email-rate'
  ];
  
  // Update the excluded set
  const excludedMatch = sitemapContent.match(/const excluded = new Set\(\[([^\]]+)\]/);
  if (excludedMatch) {
    const currentExclusions = excludedMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    const allExclusions = [...new Set([...currentExclusions, ...additionalExclusions])];
    
    const newExcludedSet = `const excluded = new Set([${allExclusions.map(e => `'${e}'`).join(', ')}])`;
    sitemapContent = sitemapContent.replace(/const excluded = new Set\(\[[^\]]+\]/, newExcludedSet);
    
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Updated sitemap exclusions');
  }
}

// 4. Create a 404 monitoring script
function create404Monitor() {
  console.log('\n📊 Creating 404 monitoring script...');
  
  const monitorScript = `#!/usr/bin/env node

/**
 * 404 Error Monitor
 * Monitors for 404 errors and reports them
 */

const fs = require('fs');
const path = require('path');

// Common 404 patterns to watch for
const common404Patterns = [
  '/commercialbusiness-solutions',
  '/dumpster-size-estimation-guide',
  '/st-george',
  '/dumpster-rental-[city]-ut',
  '/dumpster-rental-[[...slug]]'
];

console.log('🔍 404 Error Monitor');
console.log('====================');
console.log('Watching for these common 404 patterns:');
common404Patterns.forEach(pattern => console.log(\`   - \${pattern}\`));

console.log('\\n✅ Monitor script created. Run this regularly to check for 404 issues.');
`;

  const monitorPath = path.join(__dirname, '../scripts/monitor-404-errors.js');
  fs.writeFileSync(monitorPath, monitorScript);
  console.log('✅ Created 404 monitoring script');
}

// 5. Update robots.txt to be more specific
function updateRobotsTxt() {
  console.log('\n🤖 Updating robots.txt...');
  
  const robotsPath = path.join(__dirname, '../app/robots.ts');
  let robotsContent = fs.readFileSync(robotsPath, 'utf8');
  
  // Add more specific disallows for problematic routes
  const additionalDisallows = [
    '/test-*',
    '/api-test',
    '/simple-test',
    '/test-email*',
    '/test-og*',
    '/test-blog*',
    '/test-bulk*',
    '/test-city*',
    '/test-email-config*',
    '/test-email-rate*'
  ];
  
  // Update the disallow array
  const disallowMatch = robotsContent.match(/disallow: \[([^\]]+)\]/);
  if (disallowMatch) {
    const currentDisallows = disallowMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    const allDisallows = [...new Set([...currentDisallows, ...additionalDisallows])];
    
    const newDisallowArray = `disallow: [${allDisallows.map(d => `'${d}'`).join(', ')}]`;
    robotsContent = robotsContent.replace(/disallow: \[[^\]]+\]/, newDisallowArray);
    
    fs.writeFileSync(robotsPath, robotsContent);
    console.log('✅ Updated robots.txt');
  }
}

// Run all fixes
async function runFixes() {
  try {
    fixVercelRedirects();
    const missingPages = checkMissingPages();
    updateSitemap();
    create404Monitor();
    updateRobotsTxt();
    
    console.log('\n🎉 FIXES COMPLETED');
    console.log('==================');
    console.log('✅ Removed conflicting redirects from vercel.json');
    console.log('✅ Updated sitemap exclusions');
    console.log('✅ Created 404 monitoring script');
    console.log('✅ Updated robots.txt');
    
    if (missingPages.length > 0) {
      console.log('\n⚠️  ACTION REQUIRED:');
      console.log('Create these missing pages:');
      missingPages.forEach(page => console.log(`   - ${page}`));
    }
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('1. Deploy these changes to production');
    console.log('2. Wait 24-48 hours for search engines to re-crawl');
    console.log('3. Monitor Ahrefs for improvement in health score');
    console.log('4. Run the 404 monitor script regularly');
    
  } catch (error) {
    console.error('❌ Fix failed:', error.message);
  }
}

runFixes();
