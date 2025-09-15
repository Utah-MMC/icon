const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../app');
const IMAGES_DIR = path.join(__dirname, '../public/images/optimized');

// Get all optimized images
function getOptimizedImages() {
  const images = {};
  if (fs.existsSync(IMAGES_DIR)) {
    const files = fs.readdirSync(IMAGES_DIR);
    files.forEach(file => {
      const baseName = file.replace(/-\d+w\.(webp|jpg)$/, '').replace(/\.(webp|jpg)$/, '');
      if (!images[baseName]) {
        images[baseName] = [];
      }
      images[baseName].push(file);
    });
  }
  return images;
}

// Update image references in a file
function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Pattern to match image src attributes
  const imagePattern = /src=["']\/images\/([^"']+)["']/g;
  
  content = content.replace(imagePattern, (match, imagePath) => {
    const baseName = imagePath.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const optimizedPath = `/images/optimized/${baseName}.jpg`;
    
    // Check if optimized version exists
    if (fs.existsSync(path.join(IMAGES_DIR, `${baseName}.jpg`))) {
      updated = true;
      return `src="${optimizedPath}"`;
    }
    
    return match;
  });
  
  // Also update Image components to use OptimizedImage
  const imageComponentPattern = /<Image\s+([^>]*src=["']\/images\/[^"']+["'][^>]*)>/g;
  
  content = content.replace(imageComponentPattern, (match, attributes) => {
    // Check if OptimizedImage is already imported
    if (!content.includes('import OptimizedImage')) {
      // Add import at the top
      const importMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\s*\n/);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        
        content = content.slice(0, insertIndex) + 
                  "import OptimizedImage from './OptimizedImage';\n" +
                  content.slice(insertIndex);
      }
    }
    
    updated = true;
    return `<OptimizedImage ${attributes}>`;
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

// Process directory recursively
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      updateImageReferences(filePath);
    }
  }
}

console.log('Starting image reference updates...');
processDirectory(COMPONENTS_DIR);
console.log('Image reference updates complete!');
