const fs = require('fs');
const path = require('path');

// List of all cities with their new URL structure
const cities = [
  'salt-lake-city',
  'west-valley-city',
  'sugar-house',
  'american-fork',
  'bountiful',
  'centerville',
  'draper',
  'clearfield',
  'west-jordan',
  'murray',
  'sandy',
  'woods-cross',
  'taylorsville',
  'syracuse',
  'tooele',
  'south-salt-lake',
  'south-jordan',
  'saratoga-springs',
  'roy',
  'riverton',
  'poplar-grove',
  'pleasant-grove',
  'orem',
  'provo',
  'park-city',
  'ogden',
  'midvale',
  'magna',
  'layton',
  'kearns',
  'kaysville',
  'herriman',
  'holladay',
  'glendale',
  'farmington',
  'fairpark',
  'eagle-mountain',
  'spanish-fork',
  'springville',
  'lindon'
];

// Function to convert kebab-case to Title Case
function toTitleCase(str) {
  return str.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to update the EnhancedHeader navigation
function updateNavigation() {
  const headerPath = path.join(__dirname, 'app', 'components', 'EnhancedHeader.tsx');
  
  if (!fs.existsSync(headerPath)) {
    console.log('❌ EnhancedHeader.tsx not found');
    return false;
  }

  try {
    let content = fs.readFileSync(headerPath, 'utf8');
    
    // Create the new navigation structure with organized sections
    const newNavigation = `                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Major Cities
                      </div>
                      <a href="/salt-lake-city-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Salt Lake City
                      </a>
                      <a href="/west-valley-city-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        West Valley City
                      </a>
                      <a href="/sugar-house-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Sugar House
                      </a>
                      <a href="/murray-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Murray
                      </a>
                      <a href="/sandy-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Sandy
                      </a>
                      <a href="/west-jordan-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        West Jordan
                      </a>
                      <a href="/draper-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Draper
                      </a>
                      <a href="/bountiful-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Bountiful
                      </a>
                      <a href="/centerville-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Centerville
                      </a>
                      <a href="/american-fork-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        American Fork
                      </a>
                      <a href="/orem-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Orem
                      </a>
                      <a href="/provo-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Provo
                      </a>
                      <a href="/park-city-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Park City
                      </a>
                      <a href="/ogden-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Ogden
                      </a>
                      <a href="/tooele-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">
                        Tooele
                      </a>

                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                        Salt Lake County
                      </div>
                      <a href="/taylorsville-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Taylorsville</a>
                      <a href="/midvale-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Midvale</a>
                      <a href="/kearns-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Kearns</a>
                      <a href="/magna-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Magna</a>
                      <a href="/holladay-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Holladay</a>
                      <a href="/south-salt-lake-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">South Salt Lake</a>
                      <a href="/south-jordan-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">South Jordan</a>
                      <a href="/riverton-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Riverton</a>
                      <a href="/herriman-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Herriman</a>
                      <a href="/woods-cross-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Woods Cross</a>
                      <a href="/clearfield-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Clearfield</a>
                      <a href="/syracuse-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Syracuse</a>

                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                        Davis County
                      </div>
                      <a href="/north-salt-lake-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">North Salt Lake</a>
                      <a href="/farmington-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Farmington</a>
                      <a href="/layton-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Layton</a>
                      <a href="/kaysville-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Kaysville</a>
                      <a href="/roy-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Roy</a>

                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                        Utah County
                      </div>
                      <a href="/lehi-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Lehi</a>
                      <a href="/pleasant-grove-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Pleasant Grove</a>
                      <a href="/eagle-mountain-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Eagle Mountain</a>
                      <a href="/saratoga-springs-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Saratoga Springs</a>
                      <a href="/spanish-fork-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Spanish Fork</a>
                      <a href="/springville-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Springville</a>
                      <a href="/lindon-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Lindon</a>

                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2 pt-2">
                        Other Areas
                      </div>
                      <a href="/glendale-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Glendale</a>
                      <a href="/poplar-grove-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Poplar Grove</a>
                      <a href="/fairpark-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Fairpark</a>
                      <a href="/millcreek-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Millcreek</a>
                      <a href="/cottonwood-heights-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Cottonwood Heights</a>
                      <a href="/bluffdale-dumpster-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4e37a8]">Bluffdale</a>
                    </div>`;

    // Replace the old navigation section
    const oldNavigationRegex = /<div className="py-2">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
    const newNavigationSection = `<div className="py-2">${newNavigation}</div>
                  </div>
                )}`;

    if (content.replace(oldNavigationRegex, newNavigationSection) === content) {
      console.log('⚠️  Navigation section not found or already updated');
      return false;
    }

    content = content.replace(oldNavigationRegex, newNavigationSection);
    fs.writeFileSync(headerPath, content, 'utf8');
    
    console.log('✅ Navigation updated successfully with new URLs');
    return true;
  } catch (error) {
    console.error('❌ Error updating navigation:', error.message);
    return false;
  }
}

// Function to update internal links throughout the site
function updateInternalLinks() {
  console.log('\n🔗 Updating internal links throughout the site...');
  
  let updatedFiles = 0;
  const appDir = path.join(__dirname, 'app');
  
  // Function to recursively find and update files
  function updateFile(filePath) {
    if (fs.statSync(filePath).isDirectory()) {
      const files = fs.readdirSync(filePath);
      files.forEach(file => {
        updateFile(path.join(filePath, file));
      });
      return;
    }
    
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js')) {
      return;
    }
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fileUpdated = false;
      
      // Update old city links to new URLs
      cities.forEach(city => {
        const oldLink = `href="/${city}"`;
        const newLink = `href="/${city}-dumpster-rentals"`;
        
        if (content.includes(oldLink)) {
          content = content.replace(new RegExp(oldLink, 'g'), newLink);
          fileUpdated = true;
        }
      });
      
      if (fileUpdated) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedFiles++;
        console.log(`✅ Updated links in: ${path.relative(appDir, filePath)}`);
      }
    } catch (error) {
      console.log(`⚠️  Could not read/update: ${path.relative(appDir, filePath)}`);
    }
  }
  
  updateFile(appDir);
  console.log(`✅ Updated internal links in ${updatedFiles} files`);
  return updatedFiles;
}

// Function to create a comprehensive sitemap
function createSitemap() {
  console.log('\n🗺️  Creating comprehensive sitemap...');
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>https://icondumpsters.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Services -->
  <url>
    <loc>https://icondumpsters.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Dumpster Sizes -->
  <url>
    <loc>https://icondumpsters.com/dumpster-sizes</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Calculator -->
  <url>
    <loc>https://icondumpsters.com/dumpster-calculator</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Pricing -->
  <url>
    <loc>https://icondumpsters.com/pricing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Contact -->
  <url>
    <loc>https://icondumpsters.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- About -->
  <url>
    <loc>https://icondumpsters.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- FAQ -->
  <url>
    <loc>https://icondumpsters.com/faq</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- City Dumpster Rental Pages -->
${cities.map(city => {
  const cityDisplayName = toTitleCase(city);
  return `  <url>
    <loc>https://icondumpsters.com/${city}-dumpster-rentals</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://icondumpsters.com/${city}-dumpster-rentals/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n')}
  
  <!-- Legacy City Pages (for SEO preservation) -->
${cities.map(city => {
  const cityDisplayName = toTitleCase(city);
  return `  <url>
    <loc>https://icondumpsters.com/${city}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n')}
  
  <!-- Guide Pages -->
  <url>
    <loc>https://icondumpsters.com/dumpster-rental-guide-2025</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Additional Service Pages -->
  <url>
    <loc>https://icondumpsters.com/residential-dumpsters</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://icondumpsters.com/commercial-dumpsters</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://icondumpsters.com/construction-dumpsters</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  try {
    // Ensure public directory exists
    if (!fs.existsSync(path.dirname(sitemapPath))) {
      fs.mkdirSync(path.dirname(sitemapPath), { recursive: true });
    }
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap created successfully at public/sitemap.xml');
    return true;
  } catch (error) {
    console.error('❌ Error creating sitemap:', error.message);
    return false;
  }
}

// Main execution
console.log('🚀 Starting comprehensive site updates...\n');

console.log('1️⃣  Updating navigation with new URLs...');
const navUpdated = updateNavigation();

console.log('\n2️⃣  Updating internal links throughout the site...');
const linksUpdated = updateInternalLinks();

console.log('\n3️⃣  Creating comprehensive sitemap...');
const sitemapCreated = createSitemap();

console.log('\n📊 UPDATE SUMMARY:');
console.log(`✅ Navigation updated: ${navUpdated ? 'Yes' : 'No'}`);
console.log(`✅ Internal links updated: ${linksUpdated > 0 ? `${linksUpdated} files` : 'No'}`);
console.log(`✅ Sitemap created: ${sitemapCreated ? 'Yes' : 'No'}`);

if (navUpdated && linksUpdated > 0 && sitemapCreated) {
  console.log('\n🎉 All updates completed successfully!');
  console.log('\n✨ What was accomplished:');
  console.log('   • Navigation updated with new -dumpster-rentals URLs');
  console.log('   • Internal links throughout the site updated');
  console.log('   • Comprehensive sitemap.xml created');
  console.log('\n🔗 New URL structure now accessible via:');
  console.log('   • Main navigation dropdown');
  console.log('   • Direct links throughout the site');
  console.log('   • Sitemap for search engines');
  console.log('\n💡 Next steps:');
  console.log('   1. Test the new navigation');
  console.log('   2. Submit sitemap to Google Search Console');
  console.log('   3. Monitor traffic to new URLs');
  console.log('   4. Consider setting up redirects from old URLs');
} else {
  console.log('\n⚠️  Some updates failed. Check the errors above.');
}
