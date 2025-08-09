const fs = require('fs');
const path = require('path');

// Build script for HostGator deployment
console.log('🚀 Preparing build for HostGator...');

// Temporarily rename API routes to avoid static export issues
const apiDir = path.join(__dirname, 'app', 'api');
const tempDir = path.join(__dirname, 'temp-api-backup');

// Create temp directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Move API routes to temp directory
if (fs.existsSync(apiDir)) {
  console.log('📁 Moving API routes to temp directory...');
  const apiFiles = fs.readdirSync(apiDir, { recursive: true });
  
  apiFiles.forEach(file => {
    if (typeof file === 'string' && file.endsWith('route.ts')) {
      const sourcePath = path.join(apiDir, file);
      const destPath = path.join(tempDir, file);
      
      // Ensure destination directory exists
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Move file
      if (fs.existsSync(sourcePath)) {
        fs.renameSync(sourcePath, destPath);
        console.log(`   Moved: ${file}`);
      }
    }
  });
}

console.log('✅ API routes temporarily moved. Ready for build.');
console.log('💡 After build, API routes will be restored from temp-api-backup directory.');
