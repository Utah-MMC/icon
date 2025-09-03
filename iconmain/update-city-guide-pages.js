const fs = require('fs');
const path = require('path');

// Function to update a city guide page
function updateCityGuidePage(filePath, citySlug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already uses getCityData
    if (content.includes('getCityData')) {
      console.log(`✅ ${citySlug} already updated`);
      return;
    }
    
    // Replace the hardcoded cityData with getCityData call
    const importStatement = `import { getCityData } from '../config/cityData';`;
    
    // Add import if not present
    if (!content.includes('getCityData')) {
      content = content.replace(
        'import CityPageTemplate from \'../components/CityPageTemplate\';',
        'import CityPageTemplate from \'../components/CityPageTemplate\';\nimport { getCityData } from \'../config/cityData\';'
      );
    }
    
    // Replace the hardcoded cityData object with getCityData call
    const cityDataPattern = /const cityData = \{[\s\S]*?\};/;
    const replacement = `const cityData = getCityData('${citySlug}');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }`;
    
    content = content.replace(cityDataPattern, replacement);
    
    // Write the updated content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${citySlug}`);
    
  } catch (error) {
    console.error(`❌ Error updating ${citySlug}:`, error.message);
  }
}

// Main execution
function main() {
  const appDir = path.join(__dirname, 'app');
  
  // Find all city guide directories
  const cityGuideDirs = fs.readdirSync(appDir)
    .filter(dir => dir.endsWith('-dumpster-rental-guide-2025'))
    .map(dir => {
      const citySlug = dir.replace('-dumpster-rental-guide-2025', '');
      return { dir, citySlug };
    });
  
  console.log(`Found ${cityGuideDirs.length} city guide directories to update`);
  
  cityGuideDirs.forEach(({ dir, citySlug }) => {
    const pagePath = path.join(appDir, dir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      updateCityGuidePage(pagePath, citySlug);
    } else {
      console.log(`⚠️  Page not found for ${citySlug}`);
    }
  });
  
  console.log('\n🎉 City guide pages update complete!');
}

main();
