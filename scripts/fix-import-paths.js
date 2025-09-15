const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../app');

// Function to fix OptimizedImage import path in a file
function fixOptimizedImageImportPath(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Check if file has incorrect OptimizedImage import
  if (content.includes("import OptimizedImage from './OptimizedImage'")) {
    console.log(`Fixing import path in: ${filePath}`);
    
    // Calculate the correct relative path to components/OptimizedImage.tsx
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, '../app/components/OptimizedImage.tsx'));
    const correctImport = relativePath.replace(/\\/g, '/').replace('.tsx', '');
    
    content = content.replace(
      "import OptimizedImage from './OptimizedImage'",
      `import OptimizedImage from '${correctImport}'`
    );
    
    fs.writeFileSync(filePath, content);
    updated = true;
  }
  
  return updated;
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
      if (fixOptimizedImageImportPath(filePath)) {
        updatedCount++;
      }
    }
  }
  
  return updatedCount;
}

console.log('Starting OptimizedImage import path fixes...');
const updatedCount = processDirectory(COMPONENTS_DIR);
console.log(`Fixed ${updatedCount} files with incorrect OptimizedImage import paths.`);
