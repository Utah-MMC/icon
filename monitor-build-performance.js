const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build performance monitoring
class BuildPerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.memoryUsage = process.memoryUsage();
    this.buildStats = {
      totalPages: 0,
      buildTime: 0,
      memoryPeak: 0,
      errors: [],
      warnings: []
    };
  }

  start() {
    console.log('🚀 Starting build performance monitoring...');
    console.log(`📊 Initial memory usage: ${this.formatBytes(this.memoryUsage.heapUsed)}`);
    console.log(`⏰ Start time: ${new Date().toISOString()}`);
    console.log('─'.repeat(60));
  }

  monitor() {
    // Monitor memory usage during build
    const interval = setInterval(() => {
      const currentMemory = process.memoryUsage();
      const heapUsed = currentMemory.heapUsed;
      
      if (heapUsed > this.buildStats.memoryPeak) {
        this.buildStats.memoryPeak = heapUsed;
      }
      
      console.log(`📊 Memory: ${this.formatBytes(heapUsed)} | Peak: ${this.formatBytes(this.buildStats.memoryPeak)}`);
    }, 10000); // Check every 10 seconds

    return interval;
  }

  stop() {
    this.buildStats.buildTime = Date.now() - this.startTime;
    console.log('─'.repeat(60));
    console.log('✅ Build completed!');
    console.log(`⏱️  Total build time: ${this.formatTime(this.buildStats.buildTime)}`);
    console.log(`📊 Peak memory usage: ${this.formatBytes(this.buildStats.memoryPeak)}`);
    console.log(`📁 Total pages generated: ${this.buildStats.totalPages}`);
    
    if (this.buildStats.errors.length > 0) {
      console.log(`❌ Errors: ${this.buildStats.errors.length}`);
      this.buildStats.errors.forEach(error => console.log(`   - ${error}`));
    }
    
    if (this.buildStats.warnings.length > 0) {
      console.log(`⚠️  Warnings: ${this.buildStats.warnings.length}`);
      this.buildStats.warnings.forEach(warning => console.log(`   - ${warning}`));
    }
  }

  formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  }

  formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  // Count total pages in the app directory
  countPages() {
    let count = 0;
    
    function countPagesRecursive(dir) {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (item === 'page.tsx' || item === 'page.js') {
            count++;
          } else {
            countPagesRecursive(fullPath);
          }
        }
      });
    }
    
    try {
      countPagesRecursive(path.join(__dirname, 'app'));
      this.buildStats.totalPages = count;
      return count;
    } catch (error) {
      console.error('Error counting pages:', error);
      return 0;
    }
  }

  // Generate performance report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildStats: this.buildStats,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(__dirname, 'build-performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📋 Performance report saved to: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.buildStats.buildTime > 120000) { // > 2 minutes
      recommendations.push('Consider implementing incremental builds');
      recommendations.push('Optimize image processing and optimization');
      recommendations.push('Review and reduce bundle sizes');
    }
    
    if (this.buildStats.memoryPeak > 2 * 1024 * 1024 * 1024) { // > 2GB
      recommendations.push('Increase Node.js memory limit (--max-old-space-size)');
      recommendations.push('Implement memory-efficient page generation');
      recommendations.push('Consider parallel processing for large builds');
    }
    
    if (this.buildStats.totalPages > 500) {
      recommendations.push('Implement lazy loading for non-critical pages');
      recommendations.push('Consider using ISR (Incremental Static Regeneration)');
      recommendations.push('Optimize static generation with selective pre-rendering');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Build performance is optimal!');
    }
    
    return recommendations;
  }
}

// Main execution
async function main() {
  const monitor = new BuildPerformanceMonitor();
  
  try {
    monitor.start();
    
    // Count existing pages
    const existingPages = monitor.countPages();
    console.log(`📁 Existing pages: ${existingPages}`);
    
    // Start monitoring
    const monitoringInterval = monitor.monitor();
    
    // Run the build
    console.log('🔨 Starting Next.js build...');
    execSync('npm run build', { 
      stdio: 'inherit',
      env: { 
        ...process.env,
        NODE_OPTIONS: '--max-old-space-size=4096' // 4GB memory limit
      }
    });
    
    // Stop monitoring
    clearInterval(monitoringInterval);
    monitor.stop();
    
    // Count final pages
    const finalPages = monitor.countPages();
    console.log(`📁 Final page count: ${finalPages}`);
    console.log(`📈 Pages added: ${finalPages - existingPages}`);
    
    // Generate performance report
    const report = monitor.generateReport();
    
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach(rec => console.log(`   • ${rec}`));
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    monitor.buildStats.errors.push(error.message);
    monitor.stop();
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = BuildPerformanceMonitor;
