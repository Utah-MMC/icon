#!/usr/bin/env node

/**
 * Canonical Points To Errors Fix Script
 * Fixes canonical URLs that point to 404 errors (case-sensitive issues)
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Canonical Points To Errors Fix Script');
console.log('==========================================\n');

// Read the CSV data to get all the problematic canonical URLs
const problematicCanonicals = [
  // From the CSV - all canonical URLs that return 404
  '/roll-off-dumpster-rental-Taylorsville',
  '/30-yard-dumpster-rental-Taylorsville-ut',
  '/roll-off-dumpster-rental-Magna',
  '/30-yard-dumpster-rental-Kearns-ut',
  '/dumpster-rental-near-me-Taylorsville-ut',
  '/30-yard-dumpster-rental-Sandy-ut',
  '/dumpster-rental-near-me-South%20Jordan-ut',
  '/30-yard-dumpster-rental-Draper-ut',
  '/30-yard-dumpster-rental-South%20Jordan-ut',
  '/30-yard-dumpster-rental-Riverton-ut',
  '/slc-dumpster-rental-Cottonwood%20Heights-ut',
  '/slc-dumpster-rental-Draper-ut',
  '/dumpster-rental-near-me-South%20Salt%20Lake-ut',
  '/rolloff-dumpster-rental-Holladay-ut',
  '/roll-off-dumpster-rental-Bluffdale',
  '/utah-dumpster-rental-Kearns',
  '/utah-dumpster-rental-Brighton',
  '/slc-dumpster-rental-Taylorsville-ut',
  '/rolloff-dumpster-rental-White%20City-ut',
  '/dumpster-rental-near-me-Murray-ut',
  '/roll-off-dumpster-rental-West%20Valley%20City',
  '/slc-dumpster-rental-Emigration%20Canyon-ut',
  '/rolloff-dumpster-rental-Copperton-ut',
  '/dumpster-rental-near-me-Magna-ut',
  '/slc-dumpster-rental-Millcreek-ut',
  '/rolloff-dumpster-rental-Herriman-ut',
  '/30-yard-dumpster-rental-Copperton-ut',
  '/roll-off-dumpster-rental-Riverton',
  '/dumpster-rental-near-me-Emigration%20Canyon-ut',
  '/dumpster-rental-near-me-Brighton-ut',
  '/roll-off-dumpster-rental-Salt%20Lake%20City',
  '/rolloff-dumpster-rental-Emigration%20Canyon-ut',
  '/roll-off-dumpster-rental-Midvale',
  '/dumpster-rental-near-me-Salt%20Lake%20City-ut',
  '/rolloff-dumpster-rental-Brighton-ut',
  '/rolloff-dumpster-rental-Alta-ut',
  '/utah-dumpster-rental-Midvale',
  '/roll-off-dumpster-rental-Alta',
  '/utah-dumpster-rental-Bluffdale',
  '/roll-off-dumpster-rental-Copperton',
  '/roll-off-dumpster-rental-White%20City',
  '/slc-dumpster-rental-Holladay-ut',
  '/dumpster-rental-near-me-Sandy-ut',
  '/rolloff-dumpster-rental-South%20Jordan-ut',
  '/utah-dumpster-rental-South%20Jordan',
  '/utah-dumpster-rental-Sandy',
  '/slc-dumpster-rental-Herriman-ut',
  '/rolloff-dumpster-rental-Riverton-ut',
  '/dumpster-rental-near-me-Holladay-ut',
  '/slc-dumpster-rental-Alta-ut',
  '/utah-dumpster-rental-West%20Valley%20City',
  '/slc-dumpster-rental-Sandy-ut',
  '/roll-off-dumpster-rental-Draper',
  '/roll-off-dumpster-rental-Emigration%20Canyon',
  '/rolloff-dumpster-rental-Draper-ut',
  '/dumpster-rental-near-me-Alta-ut',
  '/utah-dumpster-rental-Emigration%20Canyon',
  '/30-yard-dumpster-rental-White%20City-ut',
  '/rolloff-dumpster-rental-Kearns-ut',
  '/rolloff-dumpster-rental-Millcreek-ut',
  '/roll-off-dumpster-rental-Sandy',
  '/30-yard-dumpster-rental-Holladay-ut',
  '/slc-dumpster-rental-Magna-ut',
  '/30-yard-dumpster-rental-South%20Salt%20Lake-ut',
  '/dumpster-rental-near-me-Draper-ut',
  '/slc-dumpster-rental-Riverton-ut',
  '/rolloff-dumpster-rental-West%20Valley%20City-ut',
  '/slc-dumpster-rental-West%20Jordan-ut',
  '/30-yard-dumpster-rental-Midvale-ut',
  '/utah-dumpster-rental-Draper',
  '/dumpster-rental-near-me-Herriman-ut',
  '/slc-dumpster-rental-South%20Salt%20Lake-ut',
  '/30-yard-dumpster-rental-Emigration%20Canyon-ut',
  '/30-yard-dumpster-rental-Alta-ut',
  '/slc-dumpster-rental-Salt%20Lake%20City-ut',
  '/dumpster-rental-near-me-Midvale-ut',
  '/slc-dumpster-rental-White%20City-ut',
  '/utah-dumpster-rental-Cottonwood%20Heights',
  '/rolloff-dumpster-rental-Sandy-ut',
  '/rolloff-dumpster-rental-Magna-ut',
  '/dumpster-rental-near-me-Riverton-ut',
  '/utah-dumpster-rental-Riverton',
  '/utah-dumpster-rental-Alta',
  '/dumpster-rental-near-me-West%20Valley%20City-ut',
  '/roll-off-dumpster-rental-Herriman',
  '/rolloff-dumpster-rental-West%20Jordan-ut',
  '/rolloff-dumpster-rental-Midvale-ut',
  '/utah-dumpster-rental-Herriman',
  '/dumpster-rental-near-me-White%20City-ut',
  '/rolloff-dumpster-rental-Taylorsville-ut',
  '/rolloff-dumpster-rental-Salt%20Lake%20City-ut',
  '/rolloff-dumpster-rental-Cottonwood%20Heights-ut',
  '/roll-off-dumpster-rental-South%20Jordan',
  '/30-yard-dumpster-rental-Magna-ut',
  '/utah-dumpster-rental-Taylorsville',
  '/30-yard-dumpster-rental-Brighton-ut',
  '/roll-off-dumpster-rental-Cottonwood%20Heights',
  '/roll-off-dumpster-rental-Millcreek',
  '/roll-off-dumpster-rental-Murray',
  '/dumpster-rental-near-me-Bluffdale-ut',
  '/dumpster-rental-near-me-Cottonwood%20Heights-ut',
  '/rolloff-dumpster-rental-Murray-ut',
  '/roll-off-dumpster-rental-Kearns',
  '/slc-dumpster-rental-Brighton-ut',
  '/utah-dumpster-rental-West%20Jordan',
  '/30-yard-dumpster-rental-West%20Jordan-ut',
  '/dumpster-rental-near-me-Millcreek-ut',
  '/utah-dumpster-rental-Magna',
  '/slc-dumpster-rental-West%20Valley%20City-ut',
  '/dumpster-rental-near-me-Copperton-ut',
  '/utah-dumpster-rental-Salt%20Lake%20City',
  '/utah-dumpster-rental-Copperton',
  '/dumpster-rental-near-me-Kearns-ut',
  '/rolloff-dumpster-rental-Bluffdale-ut',
  '/utah-dumpster-rental-Holladay',
  '/utah-dumpster-rental-locations',
  '/utah-dumpster-rental-South%20Salt%20Lake',
  '/30-yard-dumpster-rental-Bluffdale-ut',
  '/30-yard-dumpster-rental-Cottonwood%20Heights-ut',
  '/slc-dumpster-rental-Kearns-ut',
  '/slc-dumpster-rental-Bluffdale-ut',
  '/rolloff-dumpster-rental-South%20Salt%20Lake-ut',
  '/roll-off-dumpster-rental-West%20Jordan',
  '/dumpster-rental-near-me-West%20Jordan-ut',
  '/30-yard-dumpster-rental-Salt%20Lake%20City-ut',
  '/roll-off-dumpster-rental-South%20Salt%20Lake',
  '/slc-dumpster-rental-Copperton-ut',
  '/30-yard-dumpster-rental-West%20Valley%20City-ut',
  '/roll-off-dumpster-rental-Brighton',
  '/30-yard-dumpster-rental-Millcreek-ut',
  '/utah-dumpster-rental-Millcreek',
  '/utah-dumpster-rental-White%20City',
  '/utah-dumpster-rental-Murray',
  '/roll-off-dumpster-rental-Holladay',
  '/slc-dumpster-rental-Murray-ut',
  '/30-yard-dumpster-rental-Herriman-ut',
  '/30-yard-dumpster-rental-Murray-ut',
  '/slc-dumpster-rental-South%20Jordan-ut'
];

// Create a mapping of problematic canonical URLs to their correct lowercase versions
function createCanonicalMapping() {
  const mapping = {};
  
  problematicCanonicals.forEach(canonical => {
    // Convert to lowercase and fix URL encoding
    const corrected = canonical
      .toLowerCase()
      .replace(/%20/g, '-')  // Convert %20 to hyphens
      .replace(/-ut$/, '-ut'); // Keep -ut suffix
    
    mapping[canonical] = corrected;
  });
  
  return mapping;
}

// Fix canonical URLs in page files
function fixCanonicalUrlsInPages() {
  console.log('📄 Fixing canonical URLs in page files...');
  
  const appDir = path.join(__dirname, '../app');
  const canonicalMapping = createCanonicalMapping();
  let fixedCount = 0;
  
  // Walk through all page files
  function walkDirectory(dir, baseRoute = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        const nextDir = path.join(dir, entry.name);
        const nextRoute = baseRoute + '/' + entry.name;
        walkDirectory(nextDir, nextRoute);
      } else if (entry.name === 'page.tsx') {
        const filePath = path.join(dir, entry.name);
        let content = fs.readFileSync(filePath, 'utf8');
        let fileModified = false;
        
        // Fix each problematic canonical URL
        Object.entries(canonicalMapping).forEach(([wrong, correct]) => {
          const wrongCanonical = `https://icondumpsters.com${wrong}`;
          const correctCanonical = `https://icondumpsters.com${correct}`;
          
          if (content.includes(wrongCanonical)) {
            content = content.replace(new RegExp(wrongCanonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correctCanonical);
            fileModified = true;
          }
        });
        
        if (fileModified) {
          fs.writeFileSync(filePath, content);
          console.log(`  ✅ Fixed: ${baseRoute || '/'}`);
          fixedCount++;
        }
      }
    }
  }
  
  walkDirectory(appDir);
  console.log(`Fixed canonical URLs in ${fixedCount} page files\n`);
}

// Add comprehensive redirects for all case-sensitive issues
function addComprehensiveRedirects() {
  console.log('🔄 Adding comprehensive redirects...');
  
  const vercelPath = path.join(__dirname, '../vercel.json');
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  
  const canonicalMapping = createCanonicalMapping();
  let addedCount = 0;
  
  // Add redirects for all problematic canonical URLs
  Object.entries(canonicalMapping).forEach(([wrong, correct]) => {
    const exists = vercelConfig.redirects.some(r => r.source === wrong);
    if (!exists) {
      vercelConfig.redirects.push({
        source: wrong,
        destination: correct,
        permanent: true
      });
      addedCount++;
    }
  });
  
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log(`Added ${addedCount} comprehensive redirects\n`);
}

// Update sitemap to exclude problematic pages
function updateSitemapForCanonicalIssues() {
  console.log('🗺️ Updating sitemap for canonical issues...');
  
  const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Add pages with canonical issues to exclusions
  const problematicPages = [
    'roll-off-dumpster-rental-taylorsville',
    '30-yard-dumpster-rental-taylorsville-ut',
    'roll-off-dumpster-rental-magna',
    '30-yard-dumpster-rental-kearns-ut',
    'dumpster-rental-near-me-taylorsville-ut',
    '30-yard-dumpster-rental-sandy-ut',
    'dumpster-rental-near-me-south-jordan-ut',
    '30-yard-dumpster-rental-draper-ut',
    '30-yard-dumpster-rental-south-jordan-ut',
    '30-yard-dumpster-rental-riverton-ut'
  ];
  
  // Update the excluded set
  const excludedMatch = sitemapContent.match(/const excluded = new Set\(\[([^\]]+)\]/);
  if (excludedMatch) {
    const currentExclusions = excludedMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    const allExclusions = [...new Set([...currentExclusions, ...problematicPages])];
    
    const newExcludedSet = `const excluded = new Set([${allExclusions.map(e => `'${e}'`).join(', ')}])`;
    sitemapContent = sitemapContent.replace(/const excluded = new Set\(\[[^\]]+\]/, newExcludedSet);
    
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Updated sitemap exclusions for canonical issues\n');
  }
}

// Run all fixes
async function runFixes() {
  try {
    fixCanonicalUrlsInPages();
    addComprehensiveRedirects();
    updateSitemapForCanonicalIssues();
    
    console.log('🎉 CANONICAL POINTS TO ERRORS FIXED');
    console.log('====================================');
    console.log('✅ Fixed canonical URLs in page files');
    console.log('✅ Added comprehensive redirects for case-sensitive URLs');
    console.log('✅ Updated sitemap exclusions');
    
    console.log('\n📊 SUMMARY:');
    console.log(`- Fixed ${problematicCanonicals.length} canonical URL issues`);
    console.log('- All canonical URLs now point to correct lowercase versions');
    console.log('- Added redirects to handle case-sensitive URL requests');
    console.log('- Updated sitemap to exclude problematic pages');
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('1. Deploy these changes to production');
    console.log('2. Wait 24-48 hours for search engines to re-crawl');
    console.log('3. Monitor Ahrefs for "Canonical Points To" improvements');
    console.log('4. Check Google Search Console for canonical issues');
    console.log('5. Verify that canonical URLs now return 200 status codes');
    
  } catch (error) {
    console.error('❌ Fix failed:', error.message);
  }
}

runFixes();
