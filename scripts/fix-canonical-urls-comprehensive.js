#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive Canonical URL Fix Script');
console.log('==========================================\n');

const appDir = path.join(process.cwd(), 'app');
const issues = [];
const fixes = [];

// Priority levels for different page types
const PRIORITY_LEVELS = {
  HIGH: ['/', '/blog', '/faq', '/contact', '/freequote', '/dumpster-sizes', '/services', '/about'],
  MEDIUM: ['transparent-pricing', 'utah-dumpster-permits-guide', 'utah-wide-coverage', 'tonnage-calculator'],
  LOW: ['test', 'api-test', 'inventory', 'kpi-dashboard', 'admin', 'dashboard']
};

// Major cities that should be prioritized
const MAJOR_CITIES = [
  'salt-lake-city', 'west-valley-city', 'sandy', 'west-jordan', 'murray',
  'taylorsville', 'south-jordan', 'draper', 'riverton', 'midvale',
  'millcreek', 'holladay', 'cottonwood-heights', 'kearns', 'magna',
  'bluffdale', 'herriman', 'tooele', 'bountiful', 'centerville',
  'clearfield', 'layton', 'ogden', 'provo', 'orem', 'spanish-fork',
  'springville', 'american-fork', 'pleasant-grove', 'lehi'
];

function getPriority(pagePath) {
  if (PRIORITY_LEVELS.HIGH.includes(pagePath)) return 'HIGH';
  if (PRIORITY_LEVELS.MEDIUM.some(p => pagePath.includes(p))) return 'MEDIUM';
  if (PRIORITY_LEVELS.LOW.some(p => pagePath.includes(p))) return 'LOW';
  
  // Check if it's a major city
  const cityName = pagePath.replace('/', '');
  if (MAJOR_CITIES.includes(cityName)) return 'HIGH';
  
  // Check if it's a blog post
  if (pagePath.startsWith('/blog/')) return 'MEDIUM';
  
  // Check if it's a guide page
  if (pagePath.includes('-guide-2025')) return 'MEDIUM';
  
  // Check if it's a main city dumpster rental page
  if (pagePath.match(/^\/[a-z-]+-dumpster-rentals$/)) return 'MEDIUM';
  
  return 'LOW';
}

function generateCorrectCanonical(pagePath) {
  const baseUrl = 'https://icondumpsters.com';
  const normalizedPath = pagePath === '/' ? '' : pagePath;
  return `${baseUrl}${normalizedPath}`;
}

function scanDirectory(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  const hasPage = entries.some(e => e.isFile() && e.name === 'page.tsx');
  
  if (hasPage) {
    const pagePath = baseRoute || '/';
    const pageFile = path.join(dir, 'page.tsx');
    
    try {
      const content = fs.readFileSync(pageFile, 'utf8');
      
      // Extract canonical URL from metadata
      const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
      const currentCanonical = canonicalMatch ? canonicalMatch[1] : 'none';
      const expectedCanonical = generateCorrectCanonical(pagePath);
      
      const priority = getPriority(pagePath);
      
      if (currentCanonical !== expectedCanonical) {
        const issue = {
          page: pagePath,
          file: pageFile,
          currentCanonical,
          expectedCanonical,
          priority,
          type: currentCanonical === 'none' ? 'missing' : 'mismatch'
        };
        
        issues.push(issue);
        
        // Generate fix
        const fix = generateFix(issue, content);
        if (fix) {
          fixes.push(fix);
        }
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

function generateFix(issue, content) {
  const { page, file, currentCanonical, expectedCanonical, type } = issue;
  
  let newContent = content;
  
  if (type === 'missing') {
    // Add canonical URL to metadata
    const metadataMatch = content.match(/(export const metadata: Metadata = \{[\s\S]*?\})/);
    if (metadataMatch) {
      const metadata = metadataMatch[1];
      const newMetadata = metadata.replace(
        /(alternates:\s*\{[^}]*\},?)/,
        `alternates: {\n    canonical: '${expectedCanonical}',\n  },`
      );
      
      if (newMetadata === metadata) {
        // No alternates found, add it
        newMetadata = metadata.replace(
          /(robots:\s*\{[^}]*\})/,
          `robots: {\n    index: true,\n    follow: true,\n  },\n  alternates: {\n    canonical: '${expectedCanonical}',\n  }`
        );
      }
      
      newContent = content.replace(metadata, newMetadata);
    }
  } else if (type === 'mismatch') {
    // Fix existing canonical URL
    newContent = content.replace(
      /canonical:\s*['"`][^'"`]+['"`]/,
      `canonical: '${expectedCanonical}'`
    );
  }
  
  return {
    file,
    page,
    currentCanonical,
    expectedCanonical,
    type,
    priority: issue.priority,
    newContent: newContent !== content ? newContent : null
  };
}

function generateReport() {
  console.log('📊 CANONICAL URL ANALYSIS REPORT');
  console.log('================================\n');
  
  // Group by priority
  const highPriority = issues.filter(i => i.priority === 'HIGH');
  const mediumPriority = issues.filter(i => i.priority === 'MEDIUM');
  const lowPriority = issues.filter(i => i.priority === 'LOW');
  
  console.log(`🎯 HIGH PRIORITY ISSUES (${highPriority.length}):`);
  console.log('   These are your most important pages that need immediate fixes\n');
  
  highPriority.forEach((issue, index) => {
    console.log(`   ${index + 1}. ${issue.page}`);
    console.log(`      Current: ${issue.currentCanonical}`);
    console.log(`      Expected: ${issue.expectedCanonical}`);
    console.log(`      Type: ${issue.type}`);
    console.log('');
  });
  
  console.log(`🔶 MEDIUM PRIORITY ISSUES (${mediumPriority.length}):`);
  console.log('   Important pages that should be fixed next\n');
  
  mediumPriority.slice(0, 10).forEach((issue, index) => {
    console.log(`   ${index + 1}. ${issue.page}`);
    console.log(`      Current: ${issue.currentCanonical}`);
    console.log(`      Expected: ${issue.expectedCanonical}`);
    console.log(`      Type: ${issue.type}`);
    console.log('');
  });
  
  if (mediumPriority.length > 10) {
    console.log(`   ... and ${mediumPriority.length - 10} more medium priority issues\n`);
  }
  
  console.log(`🔸 LOW PRIORITY ISSUES (${lowPriority.length}):`);
  console.log('   These can be fixed later or excluded from sitemap\n');
  
  // Summary by type
  const missing = issues.filter(i => i.type === 'missing').length;
  const mismatch = issues.filter(i => i.type === 'mismatch').length;
  
  console.log('📈 SUMMARY:');
  console.log(`   Total Issues: ${issues.length}`);
  console.log(`   Missing Canonical: ${missing}`);
  console.log(`   Mismatched Canonical: ${mismatch}`);
  console.log(`   High Priority: ${highPriority.length}`);
  console.log(`   Medium Priority: ${mediumPriority.length}`);
  console.log(`   Low Priority: ${lowPriority.length}\n`);
  
  return { highPriority, mediumPriority, lowPriority };
}

function generateFixScript() {
  console.log('🔧 GENERATING FIX SCRIPT...\n');
  
  const highPriorityFixes = fixes.filter(f => f.priority === 'HIGH' && f.newContent);
  const mediumPriorityFixes = fixes.filter(f => f.priority === 'MEDIUM' && f.newContent);
  
  console.log(`✅ ${highPriorityFixes.length} high priority fixes ready`);
  console.log(`✅ ${mediumPriorityFixes.length} medium priority fixes ready\n`);
  
  // Create fix script content
  const fixScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Applying Canonical URL Fixes...');

const fixes = [
${highPriorityFixes.map(fix => `  {
    file: '${fix.file}',
    page: '${fix.page}',
    expectedCanonical: '${fix.expectedCanonical}',
    content: \`${fix.newContent.replace(/`/g, '\\`')}\`
  }`).join(',\n')}
];

let appliedFixes = 0;
let errors = 0;

fixes.forEach((fix, index) => {
  try {
    fs.writeFileSync(fix.file, fix.content, 'utf8');
    console.log(\`✅ Fixed: \${fix.page} -> \${fix.expectedCanonical}\`);
    appliedFixes++;
  } catch (error) {
    console.error(\`❌ Error fixing \${fix.page}: \${error.message}\`);
    errors++;
  }
});

console.log(\`\\n📊 Fix Summary:\`);
console.log(\`   Applied: \${appliedFixes}\`);
console.log(\`   Errors: \${errors}\`);
console.log(\`   Total: \${fixes.length}\`);
`;

  fs.writeFileSync(path.join(__dirname, 'apply-canonical-fixes.js'), fixScript);
  console.log('📝 Fix script created: scripts/apply-canonical-fixes.js');
  console.log('   Run with: node scripts/apply-canonical-fixes.js\n');
}

// Start scanning
console.log('🔍 Scanning for canonical URL issues...\n');
scanDirectory(appDir);

const report = generateReport();
generateFixScript();

console.log('🎯 RECOMMENDED ACTION PLAN:');
console.log('===========================');
console.log('1. ✅ Sitemap already fixed (excluded problematic pages)');
console.log('2. 🔧 Run: node scripts/apply-canonical-fixes.js');
console.log('3. 📊 Re-run Ahrefs audit to see health score improvement');
console.log('4. 🔄 Gradually fix medium priority pages');
console.log('5. 🗑️ Consider removing low priority pages entirely\n');

console.log('💡 EXPECTED RESULTS:');
console.log('   - Health score should improve from 46 to 60+');
console.log('   - Non-canonical sitemap issues should be resolved');
console.log('   - 4XX errors should decrease significantly');
console.log('   - Overall SEO health should improve dramatically\n');

module.exports = { issues, fixes, report };
