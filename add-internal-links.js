const fs = require('fs');
const path = require('path');

// City data - this should match your cityData.ts
const cities = [
  'american-fork', 'bountiful', 'centerville', 'clearfield', 'cottonwood-heights',
  'draper', 'eagle-mountain', 'fairpark', 'farmington', 'glendale', 'herriman',
  'holladay', 'kaysville', 'kearns', 'layton', 'lehi', 'magna', 'midvale',
  'millcreek', 'murray', 'north-salt-lake', 'ogden', 'orem', 'park-city',
  'pleasant-grove', 'poplar-grove', 'provo', 'riverton', 'roy', 'salt-lake-city',
  'sandy', 'saratoga-springs', 'south-jordan', 'south-salt-lake', 'sugar-house',
  'syracuse', 'taylorsville', 'tooele', 'west-jordan', 'west-valley-city', 'woods-cross'
];

// Function to add internal links to a file
function addInternalLinksToFile(filePath, citySlug) {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const cityName = citySlug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Add internal link to the new exact format URL
  const newUrl = `/dumpster-rental-${citySlug}-ut`;
  
  // Look for opportunities to add internal links
  // 1. Add to city descriptions
  const cityDescriptionPattern = new RegExp(`(${cityName}[^.!?]*[.!?])`, 'gi');
  if (cityDescriptionPattern.test(content)) {
    content = content.replace(cityDescriptionPattern, (match) => {
      if (match.includes(cityName) && !match.includes(newUrl)) {
        return match.replace(
          new RegExp(`(${cityName})`, 'gi'),
          `$1 (<a href="${newUrl}" className="text-blue-600 hover:text-blue-800 underline">dumpster rental services</a>)`
        );
      }
      return match;
    });
    modified = true;
  }

  // 2. Add to service lists
  const serviceListPattern = /(dumpster rental|waste removal|construction cleanup)/gi;
  if (serviceListPattern.test(content)) {
    content = content.replace(serviceListPattern, (match) => {
      if (!content.includes(newUrl)) {
        return `<a href="${newUrl}" className="text-blue-600 hover:text-blue-800 underline">${match}</a>`;
      }
      return match;
    });
    modified = true;
  }

  // 3. Add to CTA sections
  if (content.includes('Get Quote') || content.includes('Get Free Quote')) {
    const ctaPattern = /(Get Quote|Get Free Quote)/g;
    if (!content.includes(newUrl)) {
      content = content.replace(ctaPattern, (match) => {
        return `<a href="${newUrl}" className="text-blue-600 hover:text-blue-800 underline">${match}</a>`;
      });
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }

  return false;
}

// Function to add internal links to main pages
function addInternalLinksToMainPages() {
  console.log('🔗 Adding internal links to main pages...\n');

  // Add to main page
  const mainPagePath = path.join(__dirname, 'app', 'page.tsx');
  if (fs.existsSync(mainPagePath)) {
    let content = fs.readFileSync(mainPagePath, 'utf8');
    
    // Add a section with links to all city dumpster rental pages
    const cityLinksSection = `
      {/* City Dumpster Rental Links */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Rental Services by City</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            ${cities.map(citySlug => {
              const cityName = citySlug.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              return `<Link href="/dumpster-rental-${citySlug}-ut" className="text-blue-600 hover:text-blue-800 underline text-center p-2 rounded hover:bg-blue-50">${cityName}</Link>`;
            }).join('\n            ')}
          </div>
        </div>
      </section>`;

    if (!content.includes('City Dumpster Rental Links')) {
      content = content.replace(
        /(\s*<\/main>)/,
        `${cityLinksSection}\n$1`
      );
      fs.writeFileSync(mainPagePath, content);
      console.log('✅ Added city links section to main page');
    }
  }

  // Add to services page
  const servicesPagePath = path.join(__dirname, 'app', 'services', 'page.tsx');
  if (fs.existsSync(servicesPagePath)) {
    let content = fs.readFileSync(servicesPagePath, 'utf8');
    
    // Add city-specific service links
    const cityServicesSection = `
      {/* City-Specific Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Local Dumpster Rental Services</h2>
          <p className="text-lg text-center text-gray-600 mb-8">We provide dumpster rental services throughout Utah with local expertise in each city.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            ${cities.slice(0, 16).map(citySlug => {
              const cityName = citySlug.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              return `<Link href="/dumpster-rental-${citySlug}-ut" className="text-blue-600 hover:text-blue-800 underline text-center p-2 rounded hover:bg-blue-50">${cityName}</Link>`;
            }).join('\n            ')}
          </div>
          <div className="text-center mt-6">
            <Link href="/utah-dumpster-rental-locations" className="text-blue-600 hover:text-blue-800 underline font-semibold">
              View All Cities →
            </Link>
          </div>
        </div>
      </section>`;

    if (!content.includes('City-Specific Services')) {
      content = content.replace(
        /(\s*<\/div>)/,
        `${cityServicesSection}\n$1`
      );
      fs.writeFileSync(servicesPagePath, content);
      console.log('✅ Added city services section to services page');
    }
  }

  // Add to locations page
  const locationsPagePath = path.join(__dirname, 'app', 'locations', 'page.tsx');
  if (fs.existsSync(locationsPagePath)) {
    let content = fs.readFileSync(locationsPagePath, 'utf8');
    
    // Add comprehensive city links
    const cityLocationsSection = `
      {/* City Locations Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dumpster Rental Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            ${cities.map(citySlug => {
              const cityName = citySlug.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              return `<div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <Link href="/dumpster-rental-${citySlug}-ut" className="text-blue-600 hover:text-blue-800 underline font-semibold">${cityName}</Link>
                <p className="text-sm text-gray-600 mt-2">Dumpster Rental Services</p>
              </div>`;
            }).join('\n            ')}
          </div>
        </div>
      </section>`;

    if (!content.includes('City Locations Grid')) {
      content = content.replace(
        /(\s*<\/div>)/,
        `${cityLocationsSection}\n$1`
      );
      fs.writeFileSync(locationsPagePath, content);
      console.log('✅ Added city locations grid to locations page');
    }
  }
}

// Function to add internal links to blog posts
function addInternalLinksToBlogPosts() {
  console.log('\n📝 Adding internal links to blog posts...\n');

  cities.forEach(citySlug => {
    const blogPostPath = path.join(__dirname, 'app', `${citySlug}-dumpster-rental-guide-2025`, 'page.tsx');
    if (fs.existsSync(blogPostPath)) {
      let content = fs.readFileSync(blogPostPath, 'utf8');
      const cityName = citySlug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // Add internal link to the exact format page
      const newUrl = `/dumpster-rental-${citySlug}-ut`;
      
      if (!content.includes(newUrl)) {
        // Add a CTA section with internal link
        const ctaSection = `
      {/* Internal Link CTA */}
      <div className="bg-blue-600 text-white py-12 my-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Your ${cityName} Project?</h3>
          <p className="text-lg mb-6">Get fast, reliable dumpster rental services in ${cityName}</p>
          <Link 
            href="${newUrl}"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get ${cityName} Dumpster Quote
          </Link>
        </div>
      </div>`;

        content = content.replace(
          /(\s*<\/div>)/,
          `${ctaSection}\n$1`
        );
        
        fs.writeFileSync(blogPostPath, content);
        console.log(`✅ Added internal link to ${citySlug} blog post`);
      }
    }
  });
}

// Function to add internal links to city pages
function addInternalLinksToCityPages() {
  console.log('\n🏙️ Adding internal links to city pages...\n');

  cities.forEach(citySlug => {
    const cityPagePath = path.join(__dirname, 'app', 'cities', citySlug, 'page.tsx');
    if (fs.existsSync(cityPagePath)) {
      let content = fs.readFileSync(cityPagePath, 'utf8');
      const cityName = citySlug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // Add internal link to the exact format page
      const newUrl = `/dumpster-rental-${citySlug}-ut`;
      
      if (!content.includes(newUrl)) {
        // Add a services section with internal link
        const servicesSection = `
      {/* Internal Link to Exact Format Page */}
      <div className="bg-blue-50 py-12 my-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">${cityName} Dumpster Rental Services</h3>
          <p className="text-lg text-gray-600 mb-6">Get detailed information about dumpster sizes, pricing, and local service areas in ${cityName}</p>
          <Link 
            href="${newUrl}"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View ${cityName} Dumpster Services
          </Link>
        </div>
      </div>`;

        content = content.replace(
          /(\s*<\/div>)/,
          `${servicesSection}\n$1`
        );
        
        fs.writeFileSync(cityPagePath, content);
        console.log(`✅ Added internal link to ${citySlug} city page`);
      }
    }
  });
}

// Main execution
console.log('🚀 Adding comprehensive internal links to new URLs...\n');

// Add internal links to main pages
addInternalLinksToMainPages();

// Add internal links to blog posts
addInternalLinksToBlogPosts();

// Add internal links to city pages
addInternalLinksToCityPages();

console.log('\n🎉 INTERNAL LINKING COMPLETE!');
console.log('\n🔗 Internal links added to:');
console.log('   ✅ Main page - City dumpster rental links section');
console.log('   ✅ Services page - City-specific services');
console.log('   ✅ Locations page - Comprehensive city grid');
console.log('   ✅ All blog posts - CTAs to exact format pages');
console.log('   ✅ All city pages - Links to exact format pages');
console.log('\n🚀 SEO benefits:');
console.log('   - Improved internal linking structure');
console.log('   - Better search engine crawling');
console.log('   - Enhanced user navigation');
console.log('   - Increased page authority distribution');
console.log('\n✨ Your site now has a comprehensive internal linking strategy!');
