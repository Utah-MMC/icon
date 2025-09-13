#!/usr/bin/env node

/**
 * 404 Error Audit Tool
 * Identifies potential causes of the 259 new 404 errors
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 404 Error Audit Tool');
console.log('========================\n');

// 1. Check for missing pages that should exist
function checkMissingPages() {
  console.log('📄 Checking for missing pages...');
  
  const appDir = path.join(__dirname, '../app');
  const expectedPages = [
    '/about',
    '/services', 
    '/dumpster-sizes',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/commercial-dumpster-rental-business-solutions'
  ];
  
  const missingPages = [];
  
  expectedPages.forEach(page => {
    const pagePath = path.join(appDir, page.replace('/', ''), 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      missingPages.push(page);
    }
  });
  
  if (missingPages.length > 0) {
    console.log('❌ Missing pages found:');
    missingPages.forEach(page => console.log(`   - ${page}`));
  } else {
    console.log('✅ All expected pages exist');
  }
  
  return missingPages;
}

// 2. Check redirects in vercel.json
function checkRedirects() {
  console.log('\n🔄 Checking redirects...');
  
  const vercelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../vercel.json'), 'utf8'));
  const redirects = vercelConfig.redirects || [];
  
  console.log(`Found ${redirects.length} redirects:`);
  redirects.forEach(redirect => {
    console.log(`   ${redirect.source} → ${redirect.destination}`);
  });
  
  return redirects;
}

// 3. Check for broken internal links
function checkInternalLinks() {
  console.log('\n🔗 Checking for broken internal links...');
  
  const appDir = path.join(__dirname, '../app');
  const brokenLinks = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Look for href patterns that might be broken
        const hrefMatches = content.match(/href=["']([^"']+)["']/g);
        if (hrefMatches) {
          hrefMatches.forEach(match => {
            const href = match.match(/href=["']([^"']+)["']/)[1];
            if (href.startsWith('/') && !href.startsWith('/api') && !href.startsWith('/_next')) {
              // Check if this page exists
              const pagePath = href === '/' ? 'page.tsx' : path.join(appDir, href.replace('/', ''), 'page.tsx');
              if (!fs.existsSync(pagePath)) {
                brokenLinks.push({ file: filePath, href });
              }
            }
          });
        }
      }
    });
  }
  
  scanDirectory(appDir);
  
  if (brokenLinks.length > 0) {
    console.log('❌ Potential broken internal links:');
    brokenLinks.forEach(link => {
      console.log(`   ${link.file}: ${link.href}`);
    });
  } else {
    console.log('✅ No obvious broken internal links found');
  }
  
  return brokenLinks;
}

// 4. Check sitemap consistency
function checkSitemapConsistency() {
  console.log('\n🗺️ Checking sitemap consistency...');
  
  const appDir = path.join(__dirname, '../app');
  const actualPages = [];
  
  function collectPages(dir, baseRoute = '') {
    const files = fs.readdirSync(dir);
    const hasPage = files.includes('page.tsx');
    
    if (hasPage) {
      const route = baseRoute || '/';
      actualPages.push(route);
    }
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && !file.startsWith('(') && !file.startsWith('_')) {
        const excluded = ['api', 'components', 'config', 'public', 'images', 'hostgator-deploy', 'scripts'];
        if (!excluded.includes(file)) {
          collectPages(filePath, baseRoute + '/' + file);
        }
      }
    });
  }
  
  collectPages(appDir);
  
  console.log(`Found ${actualPages.length} actual pages:`);
  actualPages.forEach(page => console.log(`   ${page}`));
  
  return actualPages;
}

// 5. Check for duplicate or conflicting routes
function checkRouteConflicts() {
  console.log('\n⚠️ Checking for route conflicts...');
  
  const vercelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../vercel.json'), 'utf8'));
  const redirects = vercelConfig.redirects || [];
  
  const conflicts = [];
  const redirectSources = redirects.map(r => r.source);
  
  // Check for duplicate redirect sources
  const duplicates = redirectSources.filter((item, index) => redirectSources.indexOf(item) !== index);
  if (duplicates.length > 0) {
    conflicts.push(`Duplicate redirect sources: ${duplicates.join(', ')}`);
  }
  
  // Check for redirects that might conflict with actual pages
  const appDir = path.join(__dirname, '../app');
  redirects.forEach(redirect => {
    const pagePath = path.join(appDir, redirect.source.replace('/', ''), 'page.tsx');
    if (fs.existsSync(pagePath)) {
      conflicts.push(`Redirect conflicts with actual page: ${redirect.source}`);
    }
  });
  
  if (conflicts.length > 0) {
    console.log('❌ Route conflicts found:');
    conflicts.forEach(conflict => console.log(`   - ${conflict}`));
  } else {
    console.log('✅ No route conflicts found');
  }
  
  return conflicts;
}

// Run all checks
async function runAudit() {
  try {
    const missingPages = checkMissingPages();
    const redirects = checkRedirects();
    const brokenLinks = checkInternalLinks();
    const actualPages = checkSitemapConsistency();
    const conflicts = checkRouteConflicts();
    
    console.log('\n📊 AUDIT SUMMARY');
    console.log('================');
    console.log(`Missing pages: ${missingPages.length}`);
    console.log(`Redirects: ${redirects.length}`);
    console.log(`Broken links: ${brokenLinks.length}`);
    console.log(`Actual pages: ${actualPages.length}`);
    console.log(`Route conflicts: ${conflicts.length}`);
    
    console.log('\n🎯 RECOMMENDATIONS');
    console.log('==================');
    
    if (missingPages.length > 0) {
      console.log('1. Create missing pages or update links pointing to them');
    }
    
    if (brokenLinks.length > 0) {
      console.log('2. Fix broken internal links');
    }
    
    if (conflicts.length > 0) {
      console.log('3. Resolve route conflicts');
    }
    
    console.log('4. Test all redirects manually');
    console.log('5. Update sitemap if needed');
    console.log('6. Check Google Search Console for specific 404 errors');
    
  } catch (error) {
    console.error('❌ Audit failed:', error.message);
  }
}

runAudit();
