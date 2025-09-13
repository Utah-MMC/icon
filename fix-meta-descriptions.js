const fs = require('fs');
const path = require('path');

// Meta descriptions that are too long (over 160 characters)
const longMetaDescriptions = [
  { url: '/dumpster-sizes', length: 257, description: "Complete guide to dumpster sizes: 15, 20, 30 yard roll-off dumpsters plus specialized 10-yard dirt, 10-yard mixed load, and 12-yard concrete dumpsters. View dimensions, weight limits, and pricing. Find the perfect size for your project. Call (801) 918-6000." },
  { url: '/estimate-right-dumpster-size-home-cleanout', length: 203, description: "Struggling to pick the right dumpster size for your cleanout? This 2025 guide explains how to estimate dumpster sizes for home cleanout projects, covering costs, capacity, and tips to avoid overspending." },
  { url: '/blog/dumpster-size-estimation-guide', length: 203, description: "Struggling to pick the right dumpster size for your cleanout? This 2025 guide explains how to estimate dumpster sizes for home cleanout projects, covering costs, capacity, and tips to avoid overspending." },
  { url: '/dumpster-rental', length: 202, description: "Professional dumpster rental services for residential, commercial, and construction projects. Same-day delivery, competitive pricing, and excellent customer service throughout Utah. Call (801) 918-6000." },
  { url: '/roll-off-dumpster-rental-bluffdale', length: 200, description: "Professional roll-off dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000." },
  { url: '/roll-off-dumpster-rental-copperton', length: 200, description: "Professional roll-off dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000." },
  { url: '/roll-off-dumpster-rental-millcreek', length: 200, description: "Professional roll-off dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-copperton-ut', length: 198, description: "Professional rolloff dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-millcreek-ut', length: 198, description: "Professional rolloff dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-holladay-ut', length: 197, description: "Professional rolloff dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-herriman-ut', length: 197, description: "Professional rolloff dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-brighton-ut', length: 197, description: "Professional rolloff dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-riverton-ut', length: 197, description: "Professional rolloff dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-murray-ut', length: 195, description: "Professional rolloff dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-draper-ut', length: 195, description: "Professional rolloff dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-kearns-ut', length: 195, description: "Professional rolloff dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-alta-ut', length: 193, description: "Professional rolloff dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-sandy-ut', length: 194, description: "Professional rolloff dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-magna-ut', length: 194, description: "Professional rolloff dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-midvale-ut', length: 196, description: "Professional rolloff dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-taylorsville-ut', length: 201, description: "Professional rolloff dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/rolloff-dumpster-rental-bluffdale-ut', length: 198, description: "Professional rolloff dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-copperton-ut', length: 220, description: "Professional 30 yard dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-holladay-ut', length: 219, description: "Professional 30 yard dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-brighton-ut', length: 219, description: "Professional 30 yard dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-alta-ut', length: 215, description: "Professional 30 yard dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-magna-ut', length: 216, description: "Professional 30 yard dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-midvale-ut', length: 218, description: "Professional 30 yard dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-millcreek-ut', length: 220, description: "Professional 30 yard dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-herriman-ut', length: 219, description: "Professional 30 yard dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-murray-ut', length: 217, description: "Professional 30 yard dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." },
  { url: '/30-yard-dumpster-rental-bluffdale-ut', length: 220, description: "Professional 30 yard dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000." }
];

// Function to shorten meta description to under 160 characters
function shortenMetaDescription(description, maxLength = 155) {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Try to cut at a natural break point (sentence, comma, or period)
  let shortened = description.substring(0, maxLength);
  
  // Find the last sentence ending
  const lastPeriod = shortened.lastIndexOf('.');
  const lastComma = shortened.lastIndexOf(',');
  const lastSpace = shortened.lastIndexOf(' ');
  
  // Use the best break point
  let cutPoint = maxLength;
  if (lastPeriod > maxLength * 0.7) {
    cutPoint = lastPeriod + 1;
  } else if (lastComma > maxLength * 0.7) {
    cutPoint = lastComma + 1;
  } else if (lastSpace > maxLength * 0.8) {
    cutPoint = lastSpace;
  }
  
  shortened = description.substring(0, cutPoint).trim();
  
  // Add ellipsis if we cut in the middle
  if (cutPoint < description.length && !shortened.endsWith('.')) {
    shortened += '...';
  }
  
  return shortened;
}

// Function to find and update meta descriptions in files
function updateMetaDescriptions() {
  console.log('🔍 Finding and updating meta descriptions...');
  
  const appDir = path.join(process.cwd(), 'app');
  let updatedCount = 0;
  let errorCount = 0;
  
  // Process each long meta description
  for (const item of longMetaDescriptions) {
    console.log(`\n📝 Processing: ${item.url}`);
    console.log(`  Current length: ${item.length} characters`);
    
    // Find the file path
    const filePath = path.join(appDir, item.url.replace(/^\//, ''), 'page.tsx');
    
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Create shortened description
        const shortenedDescription = shortenMetaDescription(item.description);
        console.log(`  New length: ${shortenedDescription.length} characters`);
        console.log(`  New description: "${shortenedDescription}"`);
        
        // Update the meta description in the file
        const updatedContent = content.replace(
          new RegExp(`description: "[^"]*"`, 'g'),
          `description: "${shortenedDescription}"`
        );
        
        // Create backup
        const backupPath = filePath + '.backup';
        fs.copyFileSync(filePath, backupPath);
        
        // Write updated content
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        
        console.log(`  ✅ Updated ${item.url}`);
        updatedCount++;
        
      } catch (error) {
        console.error(`  ❌ Error updating ${item.url}: ${error.message}`);
        errorCount++;
      }
    } else {
      console.log(`  ⚠️  File not found: ${filePath}`);
    }
  }
  
  console.log('\n🎉 Meta description update complete!');
  console.log(`✅ Successfully updated: ${updatedCount} files`);
  console.log(`❌ Errors: ${errorCount}`);
  
  return { updatedCount, errorCount };
}

// Function to generate optimized meta descriptions for common patterns
function generateOptimizedMetaDescriptions() {
  console.log('\n📊 OPTIMIZED META DESCRIPTION PATTERNS');
  console.log('=====================================');
  
  const patterns = {
    'City Dumpster Rental': 'Professional dumpster rental in [CITY], Utah. Same-day delivery, competitive pricing. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    'Rolloff Dumpster Rental': 'Professional rolloff dumpster rental in [CITY], Utah. Same-day delivery, competitive pricing. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.',
    '30 Yard Dumpster Rental': 'Professional 30 yard dumpster rental in [CITY], Utah. Same-day delivery, competitive pricing. Perfect for large projects. Call (801) 918-6000.',
    'Dumpster Rental Near Me': 'Find reliable dumpster rental near me in [CITY], Utah. Local same-day delivery, competitive pricing. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.',
    'Commercial Dumpster Rental': 'Commercial dumpster rental services in [CITY], Utah. Reliable waste management for businesses and construction sites. Get a free quote today.',
    'Residential Dumpster Rental': 'Residential dumpster rental services in [CITY], Utah. Home cleanouts, renovations, and yard projects. Same-day delivery available. Call (801) 918-6000.'
  };
  
  console.log('\n💡 Recommended Meta Description Templates:');
  Object.entries(patterns).forEach(([type, template]) => {
    console.log(`\n${type}:`);
    console.log(`  "${template}"`);
    console.log(`  Length: ${template.length} characters`);
  });
  
  console.log('\n📋 Best Practices:');
  console.log('  - Keep under 160 characters');
  console.log('  - Include primary keyword');
  console.log('  - Include location (city, state)');
  console.log('  - Include call-to-action');
  console.log('  - Include phone number');
  console.log('  - Be descriptive but concise');
  
  return patterns;
}

// Function to check all meta descriptions in the codebase
function auditAllMetaDescriptions() {
  console.log('\n🔍 Auditing all meta descriptions in codebase...');
  
  const appDir = path.join(process.cwd(), 'app');
  const longDescriptions = [];
  const totalDescriptions = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        walkDir(fullPath);
      } else if (entry.name === 'page.tsx') {
        const filePath = path.join(dir, entry.name);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Extract meta description
          const descriptionMatch = content.match(/description:\s*"([^"]*)"/);
          if (descriptionMatch) {
            const description = descriptionMatch[1];
            const length = description.length;
            const route = filePath.replace(appDir, '').replace(/\\/g, '/').replace('/page.tsx', '') || '/';
            
            totalDescriptions.push({ route, description, length });
            
            if (length > 160) {
              longDescriptions.push({ route, description, length });
            }
          }
        } catch (error) {
          console.error(`Error reading ${filePath}: ${error.message}`);
        }
      }
    }
  }
  
  walkDir(appDir);
  
  console.log(`\n📊 Meta Description Audit Results:`);
  console.log(`  Total descriptions found: ${totalDescriptions.length}`);
  console.log(`  Descriptions over 160 characters: ${longDescriptions.length}`);
  console.log(`  Descriptions under 160 characters: ${totalDescriptions.length - longDescriptions.length}`);
  
  if (longDescriptions.length > 0) {
    console.log('\n⚠️  Long Meta Descriptions (>160 chars):');
    longDescriptions.forEach(item => {
      console.log(`  ${item.route}: ${item.length} chars`);
    });
  }
  
  return { totalDescriptions, longDescriptions };
}

// Main function to execute meta description fixes
async function executeMetaDescriptionFixes() {
  console.log('🚀 Starting Meta Description Optimization...');
  
  // Generate optimized patterns
  generateOptimizedMetaDescriptions();
  
  // Audit all meta descriptions
  const auditResults = auditAllMetaDescriptions();
  
  // Update long meta descriptions
  const updateResults = updateMetaDescriptions();
  
  console.log('\n📊 FINAL RESULTS:');
  console.log('================');
  console.log(`Total meta descriptions audited: ${auditResults.totalDescriptions.length}`);
  console.log(`Long descriptions found: ${auditResults.longDescriptions.length}`);
  console.log(`Descriptions updated: ${updateResults.updatedCount}`);
  console.log(`Update errors: ${updateResults.errorCount}`);
  
  console.log('\n💡 Next Steps:');
  console.log('1. Test the build: npm run build');
  console.log('2. Check for any linting errors');
  console.log('3. Verify meta descriptions display correctly');
  console.log('4. Run another SEO audit to confirm improvements');
  console.log('5. Monitor search engine results for better snippets');
  
  return updateResults;
}

// Run the script
if (require.main === module) {
  executeMetaDescriptionFixes().catch(console.error);
}

module.exports = { 
  executeMetaDescriptionFixes, 
  shortenMetaDescription,
  generateOptimizedMetaDescriptions,
  auditAllMetaDescriptions
};
