const fs = require('fs');
const path = require('path');

// High-priority orphan pages that need internal links
const orphanPagesToFix = [
  {
    file: 'app/dumpster-size-guide-utah/page.tsx',
    links: [
      { text: 'Dumpster Calculator', href: '/dumpster-calculator' },
      { text: 'Dumpster Sizes', href: '/dumpster-sizes' },
      { text: 'Cheap Dumpster Rentals Near Me', href: '/cheap-dumpster-rentals-near-me' },
      { text: 'Utah Waste Management Regulations', href: '/utah-waste-management-regulations' }
    ]
  },
  {
    file: 'app/cheap-dumpster-rentals-near-me/page.tsx',
    links: [
      { text: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
      { text: 'Dumpster Rental Cost Calculator', href: '/dumpster-rental-cost-calculator' },
      { text: 'Dumpster Rentals Near Me Prices', href: '/dumpster-rentals-near-me-prices' },
      { text: 'Frequent Buyers Program', href: '/frequent-buyers' }
    ]
  },
  {
    file: 'app/dumpster-rental-cost-calculator/page.tsx',
    links: [
      { text: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
      { text: 'Cheap Dumpster Rentals Near Me', href: '/cheap-dumpster-rentals-near-me' },
      { text: 'Dumpster Rentals Near Me Prices', href: '/dumpster-rentals-near-me-prices' },
      { text: 'Transparent Pricing', href: '/transparent-pricing' }
    ]
  },
  {
    file: 'app/utah-waste-management-regulations/page.tsx',
    links: [
      { text: 'Dumpster Permit Guide Utah', href: '/dumpster-permit-guide-utah' },
      { text: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
      { text: 'Construction Waste Management 2025', href: '/construction-waste-management-2025' },
      { text: 'Responsible Disposal', href: '/responsible-disposal' }
    ]
  },
  {
    file: 'app/dumpster-permit-guide-utah/page.tsx',
    links: [
      { text: 'Utah Waste Management Regulations', href: '/utah-waste-management-regulations' },
      { text: 'Dumpster Size Guide Utah', href: '/dumpster-size-guide-utah' },
      { text: 'Construction Waste Management 2025', href: '/construction-waste-management-2025' },
      { text: 'Local Pros', href: '/local-pros' }
    ]
  },
  {
    file: 'app/frequent-buyers/page.tsx',
    links: [
      { text: 'Cheap Dumpster Rentals Near Me', href: '/cheap-dumpster-rentals-near-me' },
      { text: 'Dumpster Rentals Near Me Prices', href: '/dumpster-rentals-near-me-prices' },
      { text: 'Multiple Sizes Available', href: '/multiple-sizes-available' },
      { text: 'Utah-Wide Coverage', href: '/utah-wide-coverage' }
    ]
  }
];

function addInternalLinksToPage(filePath, links) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Create internal links section
    const internalLinksSection = `
      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more helpful resources for your dumpster rental needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${links.map(link => `
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a href="${link.href}" className="text-[#4e37a8] hover:text-purple-700 transition-colors">
                    ${link.text}
                  </a>
                </h3>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    // Find the FAQ Schema section and insert before it
    const faqSchemaIndex = content.indexOf('<FAQSchema');
    if (faqSchemaIndex !== -1) {
      // Find the start of the line with FAQSchema
      const lineStart = content.lastIndexOf('\n', faqSchemaIndex);
      content = content.slice(0, lineStart) + internalLinksSection + '\n      ' + content.slice(lineStart + 1);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Added internal links to ${filePath}`);
    } else {
      // Fallback: find the last </div> before the closing );
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        content = content.slice(0, lastDivIndex) + internalLinksSection + '\n    </div>';
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Added internal links to ${filePath} (fallback method)`);
      } else {
        console.log(`❌ Could not find insertion point in ${filePath}`);
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all orphan pages
console.log('🔧 Adding internal links to orphan pages...\n');

orphanPagesToFix.forEach(({ file, links }) => {
  addInternalLinksToPage(file, links);
});

console.log('\n✅ Internal linking complete!');
console.log('\n📊 Summary:');
console.log(`- Processed ${orphanPagesToFix.length} high-priority orphan pages`);
console.log('- Added contextual internal links to each page');
console.log('- Links will help search engines discover these pages');
console.log('\n🚀 Next steps:');
console.log('1. Test the pages to ensure links work correctly');
console.log('2. Monitor search console for improved indexing');
console.log('3. Consider adding more internal links to other orphan pages');
