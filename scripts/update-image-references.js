const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../app');
const IMAGES_DIR = path.join(__dirname, '../public/images');

// Image optimization mappings
const IMAGE_MAPPINGS = {
  // Hero images - these are large and need special handling
  'hero-on-time.png': {
    webp: 'hero-on-time.webp',
    jpeg: 'hero-on-time.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  'hero.png': {
    webp: 'hero.webp',
    jpeg: 'hero.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  'hero-main.png': {
    webp: 'hero-main.webp',
    jpeg: 'hero-main.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  'homepage-hero.png': {
    webp: 'homepage-hero.webp',
    jpeg: 'homepage-hero.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  'hero-image.png': {
    webp: 'hero-image.webp',
    jpeg: 'hero-image.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  'hero-image.jpeg': {
    webp: 'hero-image.webp',
    jpeg: 'hero-image.jpg',
    sizes: ['480w', '768w', '1200w', '1920w']
  },
  
  // Regular images
  'IMG_0350.jpg': {
    webp: 'IMG_0350.webp',
    jpeg: 'IMG_0350.jpg',
    sizes: ['400w', '600w', '800w', '1200w']
  },
  'IMG_3190.jpg': {
    webp: 'IMG_3190.webp',
    jpeg: 'IMG_3190.jpg',
    sizes: ['400w', '600w', '800w', '1200w']
  },
  'IMG_0336.jpg': {
    webp: 'IMG_0336.webp',
    jpeg: 'IMG_0336.jpg',
    sizes: ['400w', '600w', '800w', '1200w']
  },
  'commercial.jpg': {
    webp: 'commercial.webp',
    jpeg: 'commercial.jpg',
    sizes: ['400w', '600w', '800w', '1200w']
  },
  'dumpster5-500x500-1.jpeg': {
    webp: 'dumpster5-500x500-1.webp',
    jpeg: 'dumpster5-500x500-1.jpg',
    sizes: ['200w', '300w', '500w']
  },
  'dumpsterSmallBanner5.jpeg': {
    webp: 'dumpsterSmallBanner5.webp',
    jpeg: 'dumpsterSmallBanner5.jpg',
    sizes: ['200w', '300w', '500w']
  },
  'dumpsterSmallBanner4.jpeg': {
    webp: 'dumpsterSmallBanner4.webp',
    jpeg: 'dumpsterSmallBanner4.jpg',
    sizes: ['200w', '300w', '500w']
  },
  'dumpster500x500-1.jpeg': {
    webp: 'dumpster500x500-1.webp',
    jpeg: 'dumpster500x500-1.jpg',
    sizes: ['200w', '300w', '500w']
  },
  'dumpster500x500-2.jpeg': {
    webp: 'dumpster500x500-2.webp',
    jpeg: 'dumpster500x500-2.jpg',
    sizes: ['200w', '300w', '500w']
  },
  'dumpsters.jpeg': {
    webp: 'dumpsters.webp',
    jpeg: 'dumpsters.jpg',
    sizes: ['400w', '600w', '800w']
  }
};

function generateOptimizedImageCode(originalSrc, mapping) {
  const baseName = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
  
  return `
<OptimizedImage
  src="/images/optimized/${baseName}.jpg"
  alt="Optimized ${baseName}"
  width={800}
  height={600}
  className="w-full h-auto"
  priority={false}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>`;
}

function updateFileContent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Find and replace image references
  for (const [originalImage, mapping] of Object.entries(IMAGE_MAPPINGS)) {
    const patterns = [
      // Standard img tags
      new RegExp(`<img[^>]*src=["']/images/${originalImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi'),
      // Next.js Image components
      new RegExp(`<Image[^>]*src=["']/images/${originalImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi'),
      // Background images in style attributes
      new RegExp(`backgroundImage:\\s*["']url\\(/images/${originalImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)["']`, 'gi'),
      // CSS url() references
      new RegExp(`url\\(/images/${originalImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'gi')
    ];
    
    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match) => {
          // Extract existing attributes
          const hasClassName = match.includes('className=');
          const hasAlt = match.includes('alt=');
          const hasWidth = match.includes('width=');
          const hasHeight = match.includes('height=');
          
          // Generate optimized replacement
          let replacement = generateOptimizedImageCode(originalImage, mapping);
          
          // Preserve existing attributes if they exist
          if (hasClassName) {
            const classNameMatch = match.match(/className=["']([^"']*)["']/);
            if (classNameMatch) {
              replacement = replacement.replace('className="w-full h-auto"', `className="${classNameMatch[1]}"`);
            }
          }
          
          if (hasAlt) {
            const altMatch = match.match(/alt=["']([^"']*)["']/);
            if (altMatch) {
              replacement = replacement.replace('alt="Optimized ' + originalImage.replace(/\.(jpg|jpeg|png)$/i, '') + '"', `alt="${altMatch[1]}"`);
            }
          }
          
          if (hasWidth) {
            const widthMatch = match.match(/width={?(\d+)}?/);
            if (widthMatch) {
              replacement = replacement.replace('width={800}', `width={${widthMatch[1]}}`);
            }
          }
          
          if (hasHeight) {
            const heightMatch = match.match(/height={?(\d+)}?/);
            if (heightMatch) {
              replacement = replacement.replace('height={600}', `height={${heightMatch[1]}}`);
            }
          }
          
          return replacement;
        });
        updated = true;
      }
    });
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      updateFileContent(filePath);
    }
  }
}

// Add import statement for OptimizedImage component
function addOptimizedImageImport(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('OptimizedImage') && !content.includes('import OptimizedImage')) {
    // Find the last import statement
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex);
    
    if (imports) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      content = content.slice(0, insertIndex) + 
                "import OptimizedImage from '../components/OptimizedImage';\n" +
                content.slice(insertIndex);
      
      fs.writeFileSync(filePath, content);
      console.log(`Added OptimizedImage import to: ${filePath}`);
    }
  }
}

console.log('Starting image reference updates...');
processDirectory(COMPONENTS_DIR);
console.log('Image reference updates complete!');
