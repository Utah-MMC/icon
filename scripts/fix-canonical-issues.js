#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Script to identify and fix canonical URL issues
console.log('🔍 Scanning for canonical URL issues...');

const appDir = path.join(process.cwd(), 'app');
const issues = [];

function scanDirectory(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  // Check if this directory has a page.tsx file
  const hasPage = entries.some(e => e.isFile() && e.name === 'page.tsx');
  
  if (hasPage) {
    const pagePath = baseRoute || '/';
    const pageFile = path.join(dir, 'page.tsx');
    
    try {
      const content = fs.readFileSync(pageFile, 'utf8');
      
      // Extract canonical URL from metadata
      const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
      
      if (canonicalMatch) {
        const canonicalUrl = canonicalMatch[1];
        const expectedCanonical = `https://icondumpsters.com${pagePath === '/' ? '' : pagePath}`;
        
        if (canonicalUrl !== expectedCanonical) {
          issues.push({
            page: pagePath,
            file: pageFile,
            currentCanonical: canonicalUrl,
            expectedCanonical: expectedCanonical,
            type: 'mismatch'
          });
        }
      } else {
        issues.push({
          page: pagePath,
          file: pageFile,
          currentCanonical: 'none',
          expectedCanonical: `https://icondumpsters.com${pagePath === '/' ? '' : pagePath}`,
          type: 'missing'
        });
      }
    } catch (error) {
      console.error(`Error reading ${pageFile}:`, error.message);
    }
  }
  
  // Recursively scan subdirectories
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('(')) {
      const nextDir = path.join(dir, entry.name);
      const nextRoute = baseRoute + '/' + entry.name;
      scanDirectory(nextDir, nextRoute);
    }
  }
}

// Start scanning
scanDirectory(appDir);

console.log(`\n📊 Found ${issues.length} canonical URL issues:`);

if (issues.length > 0) {
  console.log('\n🚨 Issues found:');
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.page}`);
    console.log(`   Current: ${issue.currentCanonical}`);
    console.log(`   Expected: ${issue.expectedCanonical}`);
    console.log(`   Type: ${issue.type}`);
    console.log(`   File: ${issue.file}`);
    console.log('');
  });
  
  console.log('💡 To fix these issues:');
  console.log('1. Update canonical URLs to match the actual page paths');
  console.log('2. Ensure all pages have canonical URLs in their metadata');
  console.log('3. Remove pages from sitemap that have incorrect canonical URLs');
} else {
  console.log('✅ No canonical URL issues found!');
}

// Export issues for further processing
module.exports = issues;
