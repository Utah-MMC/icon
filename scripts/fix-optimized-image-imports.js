const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../app');

// Function to add OptimizedImage import to a file
function addOptimizedImageImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file uses OptimizedImage but doesn't have the import
  if (content.includes('OptimizedImage') && !content.includes('import OptimizedImage')) {
    console.log(`Adding OptimizedImage import to: ${filePath}`);
    
    // Find the last import statement
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex);
    
    if (imports) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      // Determine the correct import path based on file location
      let importPath = './OptimizedImage';
      if (filePath.includes('/components/')) {
        importPath = './OptimizedImage';
      } else if (filePath.includes('/app/')) {
        importPath = './components/OptimizedImage';
      }
      
      content = content.slice(0, insertIndex) + 
                `import OptimizedImage from '${importPath}';\n` +
                content.slice(insertIndex);
      
      fs.writeFileSync(filePath, content);
      return true;
    }
  }
  return false;
}

// Process directory recursively
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      updatedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (addOptimizedImageImport(filePath)) {
        updatedCount++;
      }
    }
  }
  
  return updatedCount;
}

console.log('Starting OptimizedImage import fixes...');
const updatedCount = processDirectory(COMPONENTS_DIR);
console.log(`Fixed ${updatedCount} files with missing OptimizedImage imports.`);
