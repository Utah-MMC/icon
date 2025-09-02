const fs = require('fs');
const path = require('path');

// SEO Audit Script for Icon Dumpsters
// This script will check every single page for proper metadata and SEO optimization

const requiredMetadataFields = [
  'title',
  'description',
  'keywords',
  'alternates.canonical'
];

const optionalMetadataFields = [
  'openGraph.title',
  'openGraph.description',
  'openGraph.url',
  'openGraph.images',
  'openGraph.type',
  'robots.index',
  'robots.follow'
];

let seoIssues = [];
let totalPages = 0;
let pagesWithIssues = 0;

function checkMetadata(metadata, filePath) {
  const issues = [];
  
  // Check required fields
  requiredMetadataFields.forEach(field => {
    const value = field.split('.').reduce((obj, key) => obj?.[key], metadata);
    if (!value) {
      issues.push(`Missing required metadata: ${field}`);
    }
  });
  
  // Check optional fields (warnings)
  optionalMetadataFields.forEach(field => {
    const value = field.split('.').reduce((obj, key) => obj?.[key], metadata);
    if (!value) {
      issues.push(`Missing optional metadata: ${field} (warning)`);
    }
  });
  
  // Check title length (50-60 characters recommended)
  if (metadata.title) {
    if (metadata.title.length < 30) {
      issues.push(`Title too short: ${metadata.title.length} characters (recommended: 50-60)`);
    } else if (metadata.title.length > 70) {
      issues.push(`Title too long: ${metadata.title.length} characters (recommended: 50-60)`);
    }
  }
  
  // Check description length (150-160 characters recommended)
  if (metadata.description) {
    if (metadata.description.length < 120) {
      issues.push(`Description too short: ${metadata.description.length} characters (recommended: 150-160)`);
    } else if (metadata.description.length > 170) {
      issues.push(`Description too long: ${metadata.description.length} characters (recommended: 150-160)`);
    }
  }
  
  // Check keywords
  if (metadata.keywords) {
    if (Array.isArray(metadata.keywords) && metadata.keywords.length < 3) {
      issues.push(`Too few keywords: ${metadata.keywords.length} (recommended: 3-10)`);
    } else if (Array.isArray(metadata.keywords) && metadata.keywords.length > 15) {
      issues.push(`Too many keywords: ${metadata.keywords.length} (recommended: 3-10)`);
    }
  }
  
  return issues;
}

function extractMetadataFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for metadata export
    const metadataMatch = content.match(/export const metadata\s*:\s*Metadata\s*=\s*({[\s\S]*?});/);
    if (!metadataMatch) {
      return { hasMetadata: false, metadata: null };
    }
    
    // Try to parse the metadata object
    try {
      // Simple regex-based extraction for basic fields
      const titleMatch = content.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
      const descriptionMatch = content.match(/description\s*:\s*['"`]([^'"`]+)['"`]/);
      const keywordsMatch = content.match(/keywords\s*:\s*\[([^\]]+)\]/);
      const canonicalMatch = content.match(/canonical\s*:\s*['"`]([^'"`]+)['"`]/);
      
      const metadata = {
        title: titleMatch ? titleMatch[1] : null,
        description: descriptionMatch ? descriptionMatch[1] : null,
        keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim().replace(/['"`]/g, '')) : null,
        alternates: {
          canonical: canonicalMatch ? canonicalMatch[1] : null
        }
      };
      
      return { hasMetadata: true, metadata };
    } catch (parseError) {
      return { hasMetadata: true, metadata: null, parseError: parseError.message };
    }
  } catch (error) {
    return { hasMetadata: false, metadata: null, error: error.message };
  }
}

function scanDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const relativeItemPath = path.join(relativePath, item);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Check if this directory has a page.tsx
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const relativePagePath = path.join(relativeItemPath, 'page.tsx');
        console.log(`\n🔍 Checking: ${relativePagePath}`);
        
        const metadataResult = extractMetadataFromFile(pagePath);
        
        if (!metadataResult.hasMetadata) {
          seoIssues.push({
            file: relativePagePath,
            issues: ['No metadata export found'],
            severity: 'CRITICAL'
          });
          console.log(`❌ CRITICAL: No metadata found`);
        } else if (metadataResult.metadata) {
          const issues = checkMetadata(metadataResult.metadata, relativePagePath);
          if (issues.length > 0) {
            seoIssues.push({
              file: relativePagePath,
              issues: issues,
              severity: issues.some(i => !i.includes('warning')) ? 'HIGH' : 'LOW'
            });
            console.log(`⚠️  Issues found:`, issues);
          } else {
            console.log(`✅ SEO optimized`);
          }
        } else {
          seoIssues.push({
            file: relativePagePath,
            issues: [`Metadata parsing error: ${metadataResult.parseError}`],
            severity: 'HIGH'
          });
          console.log(`❌ HIGH: Metadata parsing error`);
        }
        
        totalPages++;
        if (metadataResult.hasMetadata && (!metadataResult.metadata || checkMetadata(metadataResult.metadata, relativePagePath).length > 0)) {
          pagesWithIssues++;
        }
      }
      
      // Recursively scan subdirectories
      scanDirectory(fullPath, relativeItemPath);
    }
  });
}

function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('🚀 ICON DUMPSTERS - COMPREHENSIVE SEO AUDIT REPORT');
  console.log('='.repeat(80));
  
  console.log(`\n📊 SUMMARY:`);
  console.log(`Total pages scanned: ${totalPages}`);
  console.log(`Pages with SEO issues: ${pagesWithIssues}`);
  console.log(`Pages fully optimized: ${totalPages - pagesWithIssues}`);
  console.log(`Optimization rate: ${((totalPages - pagesWithIssues) / totalPages * 100).toFixed(1)}%`);
  
  if (seoIssues.length > 0) {
    console.log(`\n❌ SEO ISSUES FOUND:`);
    
    const criticalIssues = seoIssues.filter(issue => issue.severity === 'CRITICAL');
    const highIssues = seoIssues.filter(issue => issue.severity === 'HIGH');
    const lowIssues = seoIssues.filter(issue => issue.severity === 'LOW');
    
    if (criticalIssues.length > 0) {
      console.log(`\n🚨 CRITICAL ISSUES (${criticalIssues.length}):`);
      criticalIssues.forEach(issue => {
        console.log(`\n📁 ${issue.file}`);
        issue.issues.forEach(problem => console.log(`   ❌ ${problem}`));
      });
    }
    
    if (highIssues.length > 0) {
      console.log(`\n⚠️  HIGH PRIORITY ISSUES (${highIssues.length}):`);
      highIssues.forEach(issue => {
        console.log(`\n📁 ${issue.file}`);
        issue.issues.forEach(problem => console.log(`   ⚠️  ${problem}`));
      });
    }
    
    if (lowIssues.length > 0) {
      console.log(`\n💡 LOW PRIORITY ISSUES (${lowIssues.length}):`);
      lowIssues.forEach(issue => {
        console.log(`\n📁 ${issue.file}`);
        issue.issues.forEach(problem => console.log(`   💡 ${problem}`));
      });
    }
  } else {
    console.log(`\n🎉 ALL PAGES ARE FULLY SEO OPTIMIZED!`);
  }
  
  console.log(`\n📋 RECOMMENDATIONS:`);
  console.log(`1. Fix all CRITICAL issues first (missing metadata)`);
  console.log(`2. Address HIGH priority issues (metadata optimization)`);
  console.log(`3. Consider LOW priority issues for enhanced SEO`);
  console.log(`4. Ensure all pages have proper canonical URLs`);
  console.log(`5. Optimize title and description lengths`);
  console.log(`6. Add Open Graph tags for social media sharing`);
  
  console.log(`\n` + '='.repeat(80));
}

// Start the audit
console.log('🔍 Starting comprehensive SEO audit...');
console.log('Scanning all pages for metadata and SEO optimization...\n');

scanDirectory('./app');

generateReport();

// Save detailed report to file
const reportData = {
  timestamp: new Date().toISOString(),
  summary: {
    totalPages,
    pagesWithIssues,
    pagesOptimized: totalPages - pagesWithIssues,
    optimizationRate: ((totalPages - pagesWithIssues) / totalPages * 100).toFixed(1)
  },
  issues: seoIssues
};

fs.writeFileSync('./seo-audit-report.json', JSON.stringify(reportData, null, 2));
console.log(`\n📄 Detailed report saved to: seo-audit-report.json`);
