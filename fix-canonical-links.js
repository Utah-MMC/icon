#!/usr/bin/env node

/**
 * Script to fix all internal links to use canonical URLs
 * This addresses the 8000+ messed up URLs in GSC by ensuring all internal links
 * point to the canonical domain: https://icondumpsters.com/
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CANONICAL_DOMAIN = 'https://icondumpsters.com';

// Files and directories to process
const TARGET_DIRS = [
  'app',
  'blog'
];

// File extensions to process
const FILE_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.html', '.md'];

// Patterns to fix
const LINK_PATTERNS = [
  // Relative href patterns
  { pattern: /href=["']\/(?!https?:\/\/)([^"']*?)["']/g, replacement: `href="${CANONICAL_DOMAIN}/$1"` },
  // Relative src patterns for internal assets
  { pattern: /src=["']\/(?!https?:\/\/)([^"']*?)["']/g, replacement: `src="${CANONICAL_DOMAIN}/$1"` },
  // Canonical URL patterns that might be incorrect
  { pattern: /href=["']https:\/\/www\.icondumpsters\.com\/([^"']*?)["']/g, replacement: `href="${CANONICAL_DOMAIN}/$1"` },
  { pattern: /href=["']http:\/\/icondumpsters\.com\/([^"']*?)["']/g, replacement: `href="${CANONICAL_DOMAIN}/$1"` },
  // Fix anchor links to use canonical domain
  { pattern: /href=["']#([^"']*?)["']/g, replacement: `href="${CANONICAL_DOMAIN}/#$1"` }
];

// Patterns to skip (external links, data attributes, etc.)
const SKIP_PATTERNS = [
  /href=["']https?:\/\/(?!icondumpsters\.com)/, // External links
  /href=["']mailto:/, // Email links
  /href=["']tel:/, // Phone links
  /href=["']data:/, // Data URLs
  /href=["']javascript:/, // JavaScript URLs
  /data-[^=]*=["'][^"']*["']/, // Data attributes
  /src=["']data:/, // Data URLs in src
  /src=["']blob:/, // Blob URLs
  /src=["']javascript:/ // JavaScript URLs in src
];

function shouldSkipLine(line) {
  return SKIP_PATTERNS.some(pattern => pattern.test(line));
}

function fixLinksInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modifiedContent = content;
    let hasChanges = false;

    const lines = content.split('\n');
    const modifiedLines = lines.map(line => {
      if (shouldSkipLine(line)) {
        return line;
      }

      let modifiedLine = line;
      LINK_PATTERNS.forEach(({ pattern, replacement }) => {
        const originalLine = modifiedLine;
        modifiedLine = modifiedLine.replace(pattern, replacement);
        if (modifiedLine !== originalLine) {
          hasChanges = true;
        }
      });

      return modifiedLine;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, modifiedLines.join('\n'));
      console.log(`✅ Fixed links in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔧 Starting canonical link fix process...');
  console.log(`📝 Target domain: ${CANONICAL_DOMAIN}`);
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const targetDir of TARGET_DIRS) {
    if (!fs.existsSync(targetDir)) {
      console.log(`⚠️  Directory ${targetDir} not found, skipping...`);
      continue;
    }
    
    console.log(`\n📁 Processing directory: ${targetDir}`);
    const files = getAllFiles(targetDir, FILE_EXTENSIONS);
    
    for (const file of files) {
      totalFiles++;
      if (fixLinksInFile(file)) {
        modifiedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - modifiedFiles}`);
  
  if (modifiedFiles > 0) {
    console.log('\n🎉 Canonical link fix completed successfully!');
    console.log('📝 All internal links now point to canonical URLs.');
    console.log('🔍 This should resolve the 8000+ messed up URLs in GSC.');
  } else {
    console.log('\n✅ No changes needed - all links are already canonical!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixLinksInFile, getAllFiles };
