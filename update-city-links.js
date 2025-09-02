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

// Function to update city page links
function updateCityPageLinks(citySlug) {
  const cityPagePath = path.join(__dirname, 'app', 'cities', citySlug, 'page.tsx');
  
  if (!fs.existsSync(cityPagePath)) {
    console.log(`⚠️  City page not found: ${cityPagePath}`);
    return;
  }

  let content = fs.readFileSync(cityPagePath, 'utf8');
  
  // Replace the old /cities/{city}/dumpster-rental links with new /dumpster-rental-{city}-ut format
  const oldLink = `/cities/${citySlug}/dumpster-rental`;
  const newLink = `/dumpster-rental-${citySlug}-ut`;
  
  if (content.includes(oldLink)) {
    content = content.replace(new RegExp(oldLink, 'g'), newLink);
    fs.writeFileSync(cityPagePath, content);
    console.log(`✅ Updated ${citySlug} page: ${oldLink} → ${newLink}`);
  } else {
    console.log(`ℹ️  No links to update in ${citySlug} page`);
  }
}

// Update all city pages
console.log('🚀 Updating city page links to use new URL format...\n');

cities.forEach(citySlug => {
  updateCityPageLinks(citySlug);
});

console.log('\n✅ All city page links updated successfully!');
console.log('\n🔗 New URL structure available:');
console.log('   /dumpster-rental-murray-ut');
console.log('   /dumpster-rental-centerville-ut');
console.log('   /dumpster-rental-draper-ut');
console.log('   And so on for all cities...');
console.log('\n📁 You now have BOTH URL structures:');
console.log('   1. /cities/murray/dumpster-rental (organized structure)');
console.log('   2. /dumpster-rental-murray-ut (exact format you wanted)');
console.log('\n🔄 All city pages now link to the new /dumpster-rental-{city}-ut format');
