#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceOptimizer {
  constructor() {
    this.repoRoot = path.resolve(__dirname, '..');
    this.optimizations = [];
    this.issues = [];
  }

  async run() {
    console.log('🚀 Starting comprehensive performance optimization...\n');
    
    await this.analyzeCurrentPerformance();
    await this.optimizeImages();
    await this.optimizeFonts();
    await this.optimizeBundle();
    await this.optimizeCaching();
    await this.generateReport();
    
    console.log('\n✅ Performance optimization complete!');
  }

  async analyzeCurrentPerformance() {
    console.log('📊 Analyzing current performance...');
    
    // Check bundle size
    try {
      const bundleStats = execSync('npm run build 2>&1 | grep -E "(Size|First Load JS|+ First Load JS)"', { encoding: 'utf8' });
      console.log('📦 Bundle Analysis:', bundleStats);
    } catch (error) {
      console.log('📦 Bundle analysis not available in this environment');
    }

    // Check image optimization
    const imageDir = path.join(this.repoRoot, 'public/images');
    if (fs.existsSync(imageDir)) {
      const images = this.getImageFiles(imageDir);
      const totalSize = this.calculateImageSize(images);
      console.log(`🖼️  Images: ${images.length} files, ${this.formatBytes(totalSize)} total`);
      
      if (totalSize > 10 * 1024 * 1024) { // 10MB
        this.issues.push('Large image files detected - consider WebP conversion');
      }
    }
  }

  async optimizeImages() {
    console.log('\n🖼️  Optimizing images...');
    
    const imageDir = path.join(this.repoRoot, 'public/images');
    if (!fs.existsSync(imageDir)) return;

    const images = this.getImageFiles(imageDir);
    let optimized = 0;

    for (const image of images) {
      if (await this.optimizeImage(image)) {
        optimized++;
      }
    }

    console.log(`✅ Optimized ${optimized}/${images.length} images`);
  }

  async optimizeImage(imagePath) {
    try {
      const ext = path.extname(imagePath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Check if WebP version exists
        const webpPath = imagePath.replace(ext, '.webp');
        if (!fs.existsSync(webpPath)) {
          // Convert to WebP using sharp
          const sharp = await import('sharp');
          await sharp.default(imagePath)
            .webp({ quality: 85 })
            .toFile(webpPath);
          
          this.optimizations.push(`Converted ${path.basename(imagePath)} to WebP`);
          return true;
        }
      }
    } catch (error) {
      console.log(`⚠️  Could not optimize ${path.basename(imagePath)}: ${error.message}`);
    }
    return false;
  }

  async optimizeFonts() {
    console.log('\n🔤 Optimizing fonts...');
    
    // Check if fonts are properly optimized
    const fontFiles = this.findFontFiles();
    
    for (const font of fontFiles) {
      if (await this.optimizeFont(font)) {
        this.optimizations.push(`Optimized font: ${path.basename(font)}`);
      }
    }
  }

  async optimizeFont(fontPath) {
    try {
      // Check if font is WOFF2 (most compressed format)
      const ext = path.extname(fontPath).toLowerCase();
      if (ext !== '.woff2') {
        // Convert to WOFF2 if possible
        const woff2Path = fontPath.replace(ext, '.woff2');
        if (!fs.existsSync(woff2Path)) {
          // Note: Font conversion requires specialized tools
          console.log(`💡 Consider converting ${path.basename(fontPath)} to WOFF2 for better compression`);
        }
      }
    } catch (error) {
      console.log(`⚠️  Font optimization error: ${error.message}`);
    }
    return false;
  }

  async optimizeBundle() {
    console.log('\n📦 Optimizing bundle...');
    
    // Check package.json for optimization opportunities
    const packagePath = path.join(this.repoRoot, 'package.json');
    if (fs.existsSync(packagePath)) {
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Check for large dependencies
      const largeDeps = ['canvas', 'nodemailer'];
      for (const dep of largeDeps) {
        if (pkg.dependencies[dep]) {
          this.optimizations.push(`Consider lazy loading ${dep} or using alternatives`);
        }
      }
    }
  }

  async optimizeCaching() {
    console.log('\n💾 Optimizing caching...');
    
    // Check if service worker exists
    const swPath = path.join(this.repoRoot, 'public/sw.js');
    if (!fs.existsSync(swPath)) {
      await this.createServiceWorker();
      this.optimizations.push('Created service worker for offline caching');
    }
  }

  async createServiceWorker() {
    const swContent = `// Service Worker for Icon Dumpsters
const CACHE_NAME = 'icon-dumpsters-v1';
const urlsToCache = [
  '/',
  '/offline',
  '/images/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/offline');
        }
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});`;

    fs.writeFileSync(swPath, swContent);
  }

  getImageFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getImageFiles(fullPath));
      } else if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(path.extname(item).toLowerCase())) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  findFontFiles() {
    const fontFiles = [];
    const publicDir = path.join(this.repoRoot, 'public');
    
    if (fs.existsSync(publicDir)) {
      const items = fs.readdirSync(publicDir);
      for (const item of items) {
        if (item.includes('font') || item.includes('Font')) {
          const fullPath = path.join(publicDir, item);
          if (fs.statSync(fullPath).isFile()) {
            fontFiles.push(fullPath);
          }
        }
      }
    }
    
    return fontFiles;
  }

  calculateImageSize(images) {
    let totalSize = 0;
    for (const image of images) {
      try {
        const stat = fs.statSync(image);
        totalSize += stat.size;
      } catch (error) {
        // Skip if file doesn't exist
      }
    }
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    console.log('\n📋 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      issues: this.issues,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.repoRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report saved to: ${reportPath}`);
    
    // Display summary
    console.log('\n📊 Performance Optimization Summary:');
    console.log(`✅ Optimizations applied: ${this.optimizations.length}`);
    console.log(`⚠️  Issues found: ${this.issues.length}`);
    
    if (this.optimizations.length > 0) {
      console.log('\n🎯 Optimizations applied:');
      this.optimizations.forEach(opt => console.log(`   • ${opt}`));
    }
    
    if (this.issues.length > 0) {
      console.log('\n⚠️  Issues to address:');
      this.issues.forEach(issue => console.log(`   • ${issue}`));
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.issues.includes('Large image files detected')) {
      recommendations.push('Convert all images to WebP format for better compression');
      recommendations.push('Implement lazy loading for images below the fold');
    }
    
    recommendations.push('Use Next.js Image component for automatic optimization');
    recommendations.push('Implement critical CSS inlining for above-the-fold content');
    recommendations.push('Consider using a CDN for static assets');
    recommendations.push('Monitor Core Web Vitals in Google Search Console');
    
    return recommendations;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

export default PerformanceOptimizer;
