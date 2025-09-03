const fs = require('fs');
const path = require('path');

// Function to update a main city page
function updateMainCityPage(filePath, citySlug) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already uses getCityData
    if (content.includes('getCityData')) {
      console.log(`✅ ${citySlug} already updated`);
      return;
    }
    
    // Check if it's a simple CityPageTemplate usage
    if (content.includes('CityPageTemplate') && !content.includes('getCityData')) {
      // Add import for getCityData
      content = content.replace(
        'import CityPageTemplate from \'../components/CityPageTemplate\';',
        'import CityPageTemplate from \'../components/CityPageTemplate\';\nimport { getCityData } from \'../config/cityData\';'
      );
      
      // Replace the entire component with the enhanced version
      const componentPattern = /export default function \w+Page\(\) \{[\s\S]*?\};/;
      const replacement = `export default function ${citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page() {
  const cityData = getCityData('${citySlug}');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}`;
      
      content = content.replace(componentPattern, replacement);
      
      // Write the updated content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${citySlug}`);
    } else {
      console.log(`⚠️  ${citySlug} doesn't use CityPageTemplate or already updated`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${citySlug}:`, error.message);
  }
}

// Main execution
function main() {
  const appDir = path.join(__dirname, 'app');
  
  // Find all city directories (excluding guide directories)
  const cityDirs = fs.readdirSync(appDir)
    .filter(dir => {
      // Check if it's a city directory (not a guide, not a service, not a component)
      return fs.statSync(path.join(appDir, dir)).isDirectory() &&
             !dir.includes('-dumpster-rental-guide-2025') &&
             !dir.includes('dumpster-rental-') &&
             !dir.includes('services') &&
             !dir.includes('components') &&
             !dir.includes('lib') &&
             !dir.includes('cities') &&
             !dir.includes('blog') &&
             !dir.includes('construction-dumpster') &&
             !dir.includes('commercial-dumpster') &&
             !dir.includes('utah-dumpster') &&
             !dir.includes('complete-dumpster') &&
             !dir.includes('dumpster-calculator') &&
             !dir.includes('dumpster-size-calculator') &&
             !dir.includes('simple-test') &&
             !dir.includes('test-') &&
             !dir.includes('temp-') &&
             !dir.includes('out') &&
             !dir.includes('hostgator-deploy') &&
             !dir.includes('data') &&
             !dir.includes('images') &&
             !dir.includes('public') &&
             !dir.includes('node_modules') &&
             !dir.includes('.next') &&
             !dir.includes('.git') &&
             !dir.includes('.vercel');
    })
    .map(dir => {
      return { dir, citySlug: dir };
    });
  
  console.log(`Found ${cityDirs.length} city directories to check`);
  
  cityDirs.forEach(({ dir, citySlug }) => {
    const pagePath = path.join(appDir, dir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      updateMainCityPage(pagePath, citySlug);
    } else {
      console.log(`⚠️  Page not found for ${citySlug}`);
    }
  });
  
  console.log('\n🎉 Main city pages update complete!');
}

main();
