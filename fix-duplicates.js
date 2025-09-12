const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix duplicate imports - look for the exact pattern
    const duplicateImportRegex = /import\s*{\s*getSaltLakeCountyCity\s*}\s*from\s*['"]\.\.\/config\/saltLakeCountyCities['"];\s*\n\s*import\s*{\s*getSaltLakeCountyCity\s*}\s*from\s*['"]\.\.\/config\/saltLakeCountyCities['"];/g;
    content = content.replace(duplicateImportRegex, "import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';");
    
    // Fix duplicate variable declarations
    const duplicateVarRegex = /const\s+slcCityData\s*=\s*getSaltLakeCountyCity\(['"]\s*['"]\);\s*\n\s*const\s+slcCityData\s*=\s*getSaltLakeCountyCity\(['"]([^'"]*)['"]\);/g;
    content = content.replace(duplicateVarRegex, "const slcCityData = getSaltLakeCountyCity('$1');");
    
    // Fix empty getCityData calls - extract city name from file path
    const cityMatch = filePath.match(/([^\/\\]+)-ut\/page\.tsx$/);
    if (cityMatch) {
      const cityName = cityMatch[1];
      content = content.replace(/getCityData\(['"]\s*['"]\)/g, `getCityData('${cityName}')`);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
console.log('Finding all page.tsx files in:', appDir);

const pageFiles = findPageFiles(appDir);
console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixFile(file)) {
    fixedCount++;
    console.log(`Fixed: ${path.relative(__dirname, file)}`);
  }
}

console.log(`\nFixed ${fixedCount} files`);
console.log('Done!');