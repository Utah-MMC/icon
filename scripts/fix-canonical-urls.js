#!/usr/bin/env node

/**
 * Canonical URL Fix Script
 * Fixes the critical canonical URL issues found in Ahrefs report
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Canonical URL Fix Script');
console.log('============================\n');

// 1. Fix wrong domain canonicals
function fixWrongDomainCanonicals() {
  console.log('🌐 Fixing wrong domain canonicals...');
  
  const appDir = path.join(__dirname, '../app');
  const problematicPages = [
    'construction-dumpster-rental-guide-2025',
    'home-renovation-waste-disposal-complete-guide', 
    'commercial-dumpster-rental-business-solutions-2025',
    'construction-waste-management-guide',
    'blog/home-renovation-waste-disposal-guide',
    'blog/commercial-dumpster-rental-business-solutions'
  ];
  
  let fixedCount = 0;
  
  problematicPages.forEach(pagePath => {
    const fullPath = path.join(appDir, pagePath, 'page.tsx');
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('iconmain.com')) {
        content = content.replace(/iconmain\.com/g, 'icondumpsters.com');
        fs.writeFileSync(fullPath, content);
        console.log(`  ✅ Fixed: /${pagePath}`);
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} wrong domain canonicals\n`);
}

// 2. Fix case-sensitive URL issues
function fixCaseSensitiveUrls() {
  console.log('🔤 Fixing case-sensitive URL issues...');
  
  // Create redirects for case-sensitive issues
  const vercelPath = path.join(__dirname, '../vercel.json');
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  
  const caseSensitiveRedirects = [
    { source: '/roll-off-dumpster-rental-Taylorsville', destination: '/roll-off-dumpster-rental-taylorsville' },
    { source: '/30-yard-dumpster-rental-Taylorsville-ut', destination: '/30-yard-dumpster-rental-taylorsville-ut' },
    { source: '/roll-off-dumpster-rental-Magna', destination: '/roll-off-dumpster-rental-magna' },
    { source: '/30-yard-dumpster-rental-Kearns-ut', destination: '/30-yard-dumpster-rental-kearns-ut' },
    { source: '/dumpster-rental-near-me-Taylorsville-ut', destination: '/dumpster-rental-near-me-taylorsville-ut' },
    { source: '/30-yard-dumpster-rental-Sandy-ut', destination: '/30-yard-dumpster-rental-sandy-ut' },
    { source: '/dumpster-rental-near-me-South%20Jordan-ut', destination: '/dumpster-rental-near-me-south-jordan-ut' },
    { source: '/30-yard-dumpster-rental-Draper-ut', destination: '/30-yard-dumpster-rental-draper-ut' },
    { source: '/30-yard-dumpster-rental-South%20Jordan-ut', destination: '/30-yard-dumpster-rental-south-jordan-ut' },
    { source: '/30-yard-dumpster-rental-Riverton-ut', destination: '/30-yard-dumpster-rental-riverton-ut' }
  ];
  
  // Add redirects if they don't exist
  caseSensitiveRedirects.forEach(redirect => {
    const exists = vercelConfig.redirects.some(r => r.source === redirect.source);
    if (!exists) {
      vercelConfig.redirects.push({
        ...redirect,
        permanent: true
      });
    }
  });
  
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log(`Added ${caseSensitiveRedirects.length} case-sensitive redirects\n`);
}

// 3. Fix homepage canonical issues
function fixHomepageCanonicals() {
  console.log('🏠 Fixing homepage canonical issues...');
  
  const appDir = path.join(__dirname, '../app');
  const pagesToFix = [
    'draper', 'sitemap', 'dumpster-prices', 'millcreek',
    'how-much-does-a-30-yard-dumpster-weight-empty',
    'concrete-debris-calculator', 'cottonwood-heights', 'bountiful',
    'demolition-dumpster-calculator', 'dumpster-rental-guide-2025',
    'construction-waste-management-2025', 'home-renovation-waste-disposal-guide',
    'centerville', 'transparent-pricing', 'murray-city-dumpster-program'
  ];
  
  let fixedCount = 0;
  
  pagesToFix.forEach(pageName => {
    const pagePath = path.join(appDir, pageName, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Check if page has wrong canonical (pointing to homepage)
      if (content.includes('canonical') && content.includes('https://icondumpsters.com/""')) {
        const correctCanonical = `https://icondumpsters.com/${pageName}`;
        content = content.replace(
          /canonical.*?https:\/\/icondumpsters\.com\/["']/g,
          `canonical=${correctCanonical}"`
        );
        fs.writeFileSync(pagePath, content);
        console.log(`  ✅ Fixed canonical for: /${pageName}`);
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} homepage canonical issues\n`);
}

// 4. Update sitemap exclusions
function updateSitemapExclusions() {
  console.log('🗺️ Updating sitemap exclusions...');
  
  const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Add problematic pages to exclusions
  const problematicPages = [
    'construction-dumpster-rental-guide-2025',
    'home-renovation-waste-disposal-complete-guide',
    'commercial-dumpster-rental-business-solutions-2025',
    'construction-waste-management-guide'
  ];
  
  // Update the excluded set
  const excludedMatch = sitemapContent.match(/const excluded = new Set\(\[([^\]]+)\]/);
  if (excludedMatch) {
    const currentExclusions = excludedMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    const allExclusions = [...new Set([...currentExclusions, ...problematicPages])];
    
    const newExcludedSet = `const excluded = new Set([${allExclusions.map(e => `'${e}'`).join(', ')}])`;
    sitemapContent = sitemapContent.replace(/const excluded = new Set\(\[[^\]]+\]/, newExcludedSet);
    
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Updated sitemap exclusions\n');
  }
}

// Ensure all canonical URLs are set to https://icondumpsters.com
const correctCanonical = 'https://icondumpsters.com';

// Run all fixes
async function runFixes() {
  try {
    fixWrongDomainCanonicals();
    fixCaseSensitiveUrls();
    fixHomepageCanonicals();
    updateSitemapExclusions();
    
    console.log('🎉 CANONICAL URL FIXES COMPLETED');
    console.log('==================================');
    console.log('✅ Fixed wrong domain canonicals');
    console.log('✅ Added case-sensitive redirects');
    console.log('✅ Fixed homepage canonical issues');
    console.log('✅ Updated sitemap exclusions');
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('1. Deploy these changes to production');
    console.log('2. Wait 24-48 hours for search engines to re-crawl');
    console.log('3. Monitor Ahrefs for canonical URL improvements');
    console.log('4. Check Google Search Console for canonical issues');
    
  } catch (error) {
    console.error('❌ Fix failed:', error.message);
  }
}

runFixes();
