const { generateComprehensiveSitemap, getPageCount } = require('./app/lib/comprehensiveSitemapGenerator.ts');

console.log('Testing comprehensive sitemap generator...');
console.log(`Total pages found: ${getPageCount()}`);

const sitemap = generateComprehensiveSitemap();
console.log(`Sitemap entries generated: ${sitemap.length}`);

// Show first 10 URLs as examples
console.log('\nFirst 10 URLs:');
sitemap.slice(0, 10).forEach((entry, index) => {
  console.log(`${index + 1}. ${entry.url} (priority: ${entry.priority})`);
});

// Show some statistics
const priorities = sitemap.reduce((acc, entry) => {
  const priority = entry.priority || 0;
  acc[priority] = (acc[priority] || 0) + 1;
  return acc;
}, {});

console.log('\nPriority distribution:');
Object.entries(priorities).sort((a, b) => b[0] - a[0]).forEach(([priority, count]) => {
  console.log(`Priority ${priority}: ${count} pages`);
});
