const fs = require('fs');
const path = require('path');
const https = require('https');

// IndexNow submission script for Icon Dumpsters
// This script reads the CSV file and submits all pages to IndexNow API

class IndexNowSubmitter {
  constructor() {
    this.apiKey = 'icondumpsters-2024-seo-key'; // Generate a unique key for your site
    this.indexNowUrl = 'https://api.indexnow.org/indexnow';
    this.bingIndexNowUrl = 'https://www.bing.com/indexnow';
    this.yandexIndexNowUrl = 'https://yandex.com/indexnow';
    
    // Rate limiting
    this.batchSize = 100; // Submit in batches of 100 URLs
    this.delayBetweenBatches = 2000; // 2 seconds between batches
    this.delayBetweenRequests = 100; // 100ms between individual requests
  }

  // Generate a unique API key file for IndexNow
  generateApiKeyFile() {
    const keyContent = this.apiKey;
    const keyFilePath = path.join(__dirname, 'indexnow-key.txt');
    
    if (!fs.existsSync(keyFilePath)) {
      fs.writeFileSync(keyFilePath, keyContent, 'utf8');
      console.log(`✅ Created IndexNow API key file: ${keyFilePath}`);
      console.log(`📝 Key: ${this.apiKey}`);
      console.log(`🌐 Upload this file to: https://icondumpsters.com/indexnow-key.txt`);
    } else {
      console.log(`ℹ️  IndexNow API key file already exists: ${keyFilePath}`);
    }
    
    return keyFilePath;
  }

  // Parse CSV file and extract URLs
  parseCSV(csvFilePath) {
    console.log('📖 Reading CSV file...');
    const csvContent = fs.readFileSync(csvFilePath, 'utf8');
    const lines = csvContent.split('\n');
    const urls = [];
    
    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const columns = line.split(',');
        if (columns.length > 2 && columns[2]) {
          const url = columns[2].replace(/"/g, '').trim();
          if (url && url.startsWith('https://icondumpsters.com/')) {
            urls.push(url);
          }
        }
      }
    }
    
    console.log(`📊 Found ${urls.length} URLs to submit`);
    return urls;
  }

  // Submit URLs to IndexNow API
  async submitToIndexNow(urls, searchEngine = 'indexnow') {
    const apiUrl = searchEngine === 'bing' ? this.bingIndexNowUrl : 
                   searchEngine === 'yandex' ? this.yandexIndexNowUrl : 
                   this.indexNowUrl;
    
    const payload = {
      host: 'icondumpsters.com',
      key: this.apiKey,
      keyLocation: 'https://icondumpsters.com/indexnow-key.txt',
      urlList: urls
    };

    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(payload);
      
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
          'User-Agent': 'IconDumpsters-IndexNow/1.0'
        }
      };

      const req = https.request(apiUrl, options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve({ success: true, statusCode: res.statusCode, data });
          } else {
            resolve({ success: false, statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(postData);
      req.end();
    });
  }

  // Submit URLs in batches
  async submitInBatches(urls) {
    const totalBatches = Math.ceil(urls.length / this.batchSize);
    let successCount = 0;
    let errorCount = 0;
    
    console.log(`\n🚀 Starting IndexNow submission in ${totalBatches} batches...`);
    
    for (let i = 0; i < urls.length; i += this.batchSize) {
      const batch = urls.slice(i, i + this.batchSize);
      const batchNumber = Math.floor(i / this.batchSize) + 1;
      
      console.log(`\n📦 Batch ${batchNumber}/${totalBatches} (${batch.length} URLs)`);
      
      try {
        // Submit to multiple search engines
        const results = await Promise.allSettled([
          this.submitToIndexNow(batch, 'indexnow'),
          this.submitToIndexNow(batch, 'bing'),
          this.submitToIndexNow(batch, 'yandex')
        ]);
        
        results.forEach((result, index) => {
          const engine = ['IndexNow', 'Bing', 'Yandex'][index];
          if (result.status === 'fulfilled' && result.value.success) {
            console.log(`✅ ${engine}: Success (${result.value.statusCode})`);
            successCount++;
          } else {
            console.log(`❌ ${engine}: Failed (${result.status === 'fulfilled' ? result.value.statusCode : 'Error'})`);
            errorCount++;
          }
        });
        
        // Delay between batches
        if (i + this.batchSize < urls.length) {
          console.log(`⏳ Waiting ${this.delayBetweenBatches}ms before next batch...`);
          await new Promise(resolve => setTimeout(resolve, this.delayBetweenBatches));
        }
        
      } catch (error) {
        console.error(`❌ Batch ${batchNumber} failed:`, error.message);
        errorCount++;
      }
    }
    
    return { successCount, errorCount, totalBatches };
  }

  // Generate sitemap for IndexNow
  generateSitemap(urls) {
    const sitemapPath = path.join(__dirname, 'indexnow-sitemap.xml');
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    urls.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log(`✅ Generated sitemap: ${sitemapPath}`);
    
    return sitemapPath;
  }

  // Main execution function
  async run(csvFilePath) {
    console.log('🎯 Icon Dumpsters - IndexNow Submission Tool');
    console.log('==========================================\n');
    
    try {
      // Step 1: Generate API key file
      this.generateApiKeyFile();
      
      // Step 2: Parse CSV file
      const urls = this.parseCSV(csvFilePath);
      
      if (urls.length === 0) {
        console.log('❌ No URLs found in CSV file');
        return;
      }
      
      // Step 3: Generate sitemap
      this.generateSitemap(urls);
      
      // Step 4: Submit to IndexNow
      const results = await this.submitInBatches(urls);
      
      // Step 5: Summary
      console.log('\n📊 IndexNow Submission Summary');
      console.log('==============================');
      console.log(`✅ Successful submissions: ${results.successCount}`);
      console.log(`❌ Failed submissions: ${results.errorCount}`);
      console.log(`📦 Total batches: ${results.totalBatches}`);
      console.log(`🌐 Total URLs: ${urls.length}`);
      
      // Step 6: Next steps
      console.log('\n📋 Next Steps:');
      console.log('1. Upload indexnow-key.txt to your website root');
      console.log('2. Upload indexnow-sitemap.xml to your website');
      console.log('3. Monitor search engine indexing in Google Search Console');
      console.log('4. Check Bing Webmaster Tools for IndexNow status');
      
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  }
}

// Run the script
if (require.main === module) {
  const csvFilePath = process.argv[2];
  
  if (!csvFilePath) {
    console.log('Usage: node submit-to-indexnow.js <csv-file-path>');
    console.log('Example: node submit-to-indexnow.js "C:\\Users\\jlafaver\\Downloads\\icondumpsters_15-sep-2025_pages-to-submit-to_2025-09-16_11-15-46.csv"');
    process.exit(1);
  }
  
  if (!fs.existsSync(csvFilePath)) {
    console.log(`❌ CSV file not found: ${csvFilePath}`);
    process.exit(1);
  }
  
  const submitter = new IndexNowSubmitter();
  submitter.run(csvFilePath);
}

module.exports = IndexNowSubmitter;
