const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const QUALITY = 85; // WebP quality
const JPEG_QUALITY = 90; // JPEG quality for fallbacks

// Image size configurations
const SIZES = {
  hero: [
    { width: 1920, height: 1080, suffix: '-1920w' },
    { width: 1280, height: 720, suffix: '-1280w' },
    { width: 768, height: 432, suffix: '-768w' },
    { width: 480, height: 270, suffix: '-480w' }
  ],
  regular: [
    { width: 1200, suffix: '-1200w' },
    { width: 800, suffix: '-800w' },
    { width: 600, suffix: '-600w' },
    { width: 400, suffix: '-400w' }
  ],
  thumbnails: [
    { width: 300, suffix: '-300w' },
    { width: 200, suffix: '-200w' },
    { width: 150, suffix: '-150w' }
  ]
};

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputDir, sizes, isHero = false) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();
  
  console.log(`Optimizing: ${filename}${ext}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Determine which size set to use
    const sizeSet = isHero ? SIZES.hero : 
                   metadata.width > 1000 ? SIZES.regular : SIZES.thumbnails;
    
    // Generate WebP versions
    for (const size of sizeSet) {
      let pipeline = image.clone();
      
      if (isHero && size.height) {
        // For hero images, maintain aspect ratio and crop if needed
        pipeline = pipeline.resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        });
      } else {
        // For regular images, just resize width
        pipeline = pipeline.resize(size.width, null, {
          withoutEnlargement: true
        });
      }
      
      // Generate WebP
      const webpPath = path.join(outputDir, `${filename}${size.suffix}.webp`);
      await pipeline.webp({ quality: QUALITY }).toFile(webpPath);
      
      // Generate JPEG fallback
      const jpegPath = path.join(outputDir, `${filename}${size.suffix}.jpg`);
      await pipeline.jpeg({ quality: JPEG_QUALITY }).toFile(jpegPath);
      
      console.log(`  Generated: ${filename}${size.suffix}.webp & .jpg`);
    }
    
    // Generate original size optimized versions
    const originalWebp = path.join(outputDir, `${filename}.webp`);
    const originalJpeg = path.join(outputDir, `${filename}.jpg`);
    
    await image.webp({ quality: QUALITY }).toFile(originalWebp);
    await image.jpeg({ quality: JPEG_QUALITY }).toFile(originalJpeg);
    
    console.log(`  Generated: ${filename}.webp & .jpg (original size)`);
    
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
  }
}

async function processImages() {
  console.log('Starting image optimization...\n');
  
  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
  
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const isHero = file.toLowerCase().includes('hero') || file.toLowerCase().includes('main');
    
    await optimizeImage(inputPath, OUTPUT_DIR, SIZES, isHero);
    console.log('');
  }
  
  console.log('Image optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
}

// Run the optimization
processImages().catch(console.error);
