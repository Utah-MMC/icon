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

// Function to update city page to use PageHero
function updateCityPageToPageHero(citySlug) {
  const cityPagePath = path.join(__dirname, 'app', 'cities', citySlug, 'page.tsx');
  
  if (!fs.existsSync(cityPagePath)) {
    console.log(`⚠️  City page not found: ${cityPagePath}`);
    return;
  }

  let content = fs.readFileSync(cityPagePath, 'utf8');
  
  // Check if PageHero is already imported
  if (content.includes('import PageHero')) {
    console.log(`ℹ️  ${citySlug} page already uses PageHero`);
    return;
  }

  const cityName = citySlug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Add PageHero import
  content = content.replace(
    'import Link from \'next/link\';',
    'import Link from \'next/link\';\nimport PageHero from \'@/app/components/PageHero\';'
  );

  // Find and replace the hero section more flexibly
  const heroSectionRegex = /      \{\/\* Hero Section \*\/\}[^}]*      \{\/\* City Info Section \*\/\}/s;
  
  if (heroSectionRegex.test(content)) {
    const newHeroSection = `      {/* Hero Section using PageHero component */}
      <PageHero
        title={\`${cityName}, Utah\`}
        subtitle={\`Your trusted partner for dumpster rental services in ${cityName}\`}
        primaryCtaText="Get Dumpster Quote"
        primaryCtaLink="/dumpster-rental-${citySlug}-ut"
        secondaryCtaText="Read Our Guide"
        secondaryCtaLink="/${citySlug}-dumpster-rental-guide-2025"
      />

      {/* City Info Section */}`;

    content = content.replace(heroSectionRegex, newHeroSection);
    fs.writeFileSync(cityPagePath, content);
    console.log(`✅ Updated ${citySlug} page to use PageHero`);
  } else {
    console.log(`⚠️  Could not find hero section in ${citySlug} page`);
  }
}

// Update all city pages
console.log('🚀 Updating city pages to use PageHero component...\n');

cities.forEach(citySlug => {
  updateCityPageToPageHero(citySlug);
});

console.log('\n✅ All city pages updated to use PageHero component!');
console.log('\n🎨 Benefits of using PageHero:');
console.log('   - Consistent styling across all pages');
console.log('   - Professional branding with Icon Dumpsters logo');
console.log('   - Responsive design for all devices');
console.log('   - Easy maintenance and updates');
console.log('\n🚀 All pages now have consistent, professional hero sections!');
