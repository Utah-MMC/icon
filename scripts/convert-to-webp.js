const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to convert images to WebP
async function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    console.log(`✅ Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

// Function to process all images in a directory
async function processDirectory(directoryPath) {
  const supportedFormats = ['.jpg', '.jpeg', '.png'];
  
  try {
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const ext = path.extname(file).toLowerCase();
      
      if (supportedFormats.includes(ext)) {
        const fileName = path.basename(file, ext);
        const webpPath = path.join(directoryPath, `${fileName}.webp`);
        
        // Only convert if WebP doesn't already exist
        if (!fs.existsSync(webpPath)) {
          await convertToWebP(filePath, webpPath);
        } else {
          console.log(`⏭️  WebP already exists: ${webpPath}`);
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${directoryPath}:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('🔄 Starting WebP conversion...\n');
  
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  if (fs.existsSync(imagesDir)) {
    console.log(`📁 Processing images in: ${imagesDir}\n`);
    await processDirectory(imagesDir);
  } else {
    console.log(`❌ Images directory not found: ${imagesDir}`);
  }
  
  console.log('\n✅ WebP conversion completed!');
}

// Run the script
main().catch(console.error);
