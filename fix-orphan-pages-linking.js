const fs = require('fs');
const path = require('path');

// Orphan pages data from the SEO audit
const orphanPages = [
  // High priority (PR 32-24)
  { url: '/services/residential-dumpster-rental-fairpark-ut', city: 'Fairpark', type: 'residential', pr: 32 },
  { url: '/services/residential-dumpster-rental-south-jordan-ut', city: 'South Jordan', type: 'residential', pr: 24 },
  
  // Medium priority (PR 20)
  { url: '/services/residential-dumpster-rental-eagle-mountain-ut', city: 'Eagle Mountain', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-kearns-ut', city: 'Kearns', type: 'residential', pr: 20 },
  { url: '/orem-dumpster-rentals/services', city: 'Orem', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-clearfield-ut', city: 'Clearfield', type: 'commercial', pr: 20 },
  { url: '/springville-dumpster-rentals/services', city: 'Springville', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-sugar-house-ut', city: 'Sugar House', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-murray-ut', city: 'Murray', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-taylorsville-ut', city: 'Taylorsville', type: 'commercial', pr: 20 },
  { url: '/magna-dumpster-rentals/services', city: 'Magna', type: 'services', pr: 20 },
  { url: '/murray-dumpster-rentals/services', city: 'Murray', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-clearfield-ut', city: 'Clearfield', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-centerville-ut', city: 'Centerville', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-north-salt-lake-ut', city: 'North Salt Lake', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-american-fork-ut', city: 'American Fork', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-fairpark-ut', city: 'Fairpark', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-orem-ut', city: 'Orem', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-park-city-ut', city: 'Park City', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-holladay-ut', city: 'Holladay', type: 'rolloff', pr: 20 },
  { url: '/roll-off-dumpster-rental-bluffdale', city: 'Bluffdale', type: 'rolloff', pr: 20 },
  { url: '/cheap-dumpster-rentals-near-me', city: 'General', type: 'general', pr: 20 },
  { url: '/services/commercial-dumpster-rental-ogden-ut', city: 'Ogden', type: 'commercial', pr: 20 },
  { url: '/eagle-mountain-dumpster-rentals/services', city: 'Eagle Mountain', type: 'services', pr: 20 },
  { url: '/park-city-dumpster-rentals/services', city: 'Park City', type: 'services', pr: 20 },
  { url: '/poplar-grove-dumpster-rentals/services', city: 'Poplar Grove', type: 'services', pr: 20 },
  { url: '/dumpster-rental-near-me-murray-ut', city: 'Murray', type: 'near-me', pr: 20 },
  { url: '/blog/dumpster-size-estimation-guide', city: 'General', type: 'blog', pr: 20 },
  { url: '/services/residential-dumpster-rental-taylorsville-ut', city: 'Taylorsville', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-syracuse-ut', city: 'Syracuse', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-copperton-ut', city: 'Copperton', type: 'rolloff', pr: 20 },
  { url: '/dumpster-rental-near-me-magna-ut', city: 'Magna', type: 'near-me', pr: 20 },
  { url: '/roy-dumpster-rentals/services', city: 'Roy', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-south-salt-lake-ut', city: 'South Salt Lake', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-herriman-ut', city: 'Herriman', type: 'rolloff', pr: 20 },
  { url: '/holladay-dumpster-rentals/services', city: 'Holladay', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-kaysville-ut', city: 'Kaysville', type: 'residential', pr: 20 },
  { url: '/30-yard-dumpster-rental-copperton-ut', city: 'Copperton', type: '30-yard', pr: 20 },
  { url: '/services/commercial-dumpster-rental-farmington-ut', city: 'Farmington', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-west-jordan-ut', city: 'West Jordan', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-saratoga-springs-ut', city: 'Saratoga Springs', type: 'commercial', pr: 20 },
  { url: '/roll-off-dumpster-rental-riverton', city: 'Riverton', type: 'rolloff', pr: 20 },
  { url: '/american-fork-dumpster-rentals/services', city: 'American Fork', type: 'services', pr: 20 },
  { url: '/dumpster-rental-near-me-brighton-ut', city: 'Brighton', type: 'near-me', pr: 20 },
  { url: '/roll-off-dumpster-rental-midvale', city: 'Midvale', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-west-jordan-ut', city: 'West Jordan', type: 'commercial', pr: 20 },
  { url: '/syracuse-dumpster-rentals/services', city: 'Syracuse', type: 'services', pr: 20 },
  { url: '/tooele-dumpster-rentals/services', city: 'Tooele', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-woods-cross-ut', city: 'Woods Cross', type: 'residential', pr: 20 },
  { url: '/rolloff-dumpster-rental-brighton-ut', city: 'Brighton', type: 'rolloff', pr: 20 },
  { url: '/rolloff-dumpster-rental-alta-ut', city: 'Alta', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-herriman-ut', city: 'Herriman', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-bountiful-ut', city: 'Bountiful', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-south-jordan-ut', city: 'South Jordan', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-magna-ut', city: 'Magna', type: 'residential', pr: 20 },
  { url: '/roll-off-dumpster-rental-alta', city: 'Alta', type: 'rolloff', pr: 20 },
  { url: '/roll-off-dumpster-rental-copperton', city: 'Copperton', type: 'rolloff', pr: 20 },
  { url: '/dumpster-rental-near-me-sandy-ut', city: 'Sandy', type: 'near-me', pr: 20 },
  { url: '/sugar-house-dumpster-rentals/services', city: 'Sugar House', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-farmington-ut', city: 'Farmington', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-park-city-ut', city: 'Park City', type: 'residential', pr: 20 },
  { url: '/woods-cross-dumpster-rentals/services', city: 'Woods Cross', type: 'services', pr: 20 },
  { url: '/rolloff-dumpster-rental-riverton-ut', city: 'Riverton', type: 'rolloff', pr: 20 },
  { url: '/dumpster-rental-near-me-holladay-ut', city: 'Holladay', type: 'near-me', pr: 20 },
  { url: '/services/residential-dumpster-rental-millcreek-ut', city: 'Millcreek', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-syracuse-ut', city: 'Syracuse', type: 'residential', pr: 20 },
  { url: '/spanish-fork-dumpster-rentals/services', city: 'Spanish Fork', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-riverton-ut', city: 'Riverton', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-provo-ut', city: 'Provo', type: 'residential', pr: 20 },
  { url: '/draper-dumpster-rentals/services', city: 'Draper', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-american-fork-ut', city: 'American Fork', type: 'residential', pr: 20 },
  { url: '/roll-off-dumpster-rental-draper', city: 'Draper', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-kearns-ut', city: 'Kearns', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-draper-ut', city: 'Draper', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-roy-ut', city: 'Roy', type: 'commercial', pr: 20 },
  { url: '/dumpster-rental-near-me-alta-ut', city: 'Alta', type: 'near-me', pr: 20 },
  { url: '/services/commercial-dumpster-rental-woods-cross-ut', city: 'Woods Cross', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-saratoga-springs-ut', city: 'Saratoga Springs', type: 'residential', pr: 20 },
  { url: '/midvale-city-dumpster-rental', city: 'Midvale', type: 'city', pr: 20 },
  { url: '/rolloff-dumpster-rental-kearns-ut', city: 'Kearns', type: 'rolloff', pr: 20 },
  { url: '/services/residential-dumpster-rental-poplar-grove-ut', city: 'Poplar Grove', type: 'residential', pr: 20 },
  { url: '/rolloff-dumpster-rental-millcreek-ut', city: 'Millcreek', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-millcreek-ut', city: 'Millcreek', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-bountiful-ut', city: 'Bountiful', type: 'residential', pr: 20 },
  { url: '/provo-dumpster-rentals/services', city: 'Provo', type: 'services', pr: 20 },
  { url: '/roll-off-dumpster-rental-sandy', city: 'Sandy', type: 'rolloff', pr: 20 },
  { url: '/west-jordan-dumpster-rentals/services', city: 'West Jordan', type: 'services', pr: 20 },
  { url: '/30-yard-dumpster-rental-holladay-ut', city: 'Holladay', type: '30-yard', pr: 20 },
  { url: '/services/commercial-dumpster-rental-poplar-grove-ut', city: 'Poplar Grove', type: 'commercial', pr: 20 },
  { url: '/dumpster-rental-near-me-draper-ut', city: 'Draper', type: 'near-me', pr: 20 },
  { url: '/services/commercial-dumpster-rental-tooele-ut', city: 'Tooele', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-layton-ut', city: 'Layton', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-pleasant-grove-ut', city: 'Pleasant Grove', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-glendale-ut', city: 'Glendale', type: 'commercial', pr: 20 },
  { url: '/saratoga-springs-dumpster-rentals/services', city: 'Saratoga Springs', type: 'services', pr: 20 },
  { url: '/30-yard-dumpster-rental-midvale-ut', city: 'Midvale', type: '30-yard', pr: 20 },
  { url: '/sandy-dumpster-rentals/services', city: 'Sandy', type: 'services', pr: 20 },
  { url: '/bountiful-dumpster-rentals/services', city: 'Bountiful', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-kaysville-ut', city: 'Kaysville', type: 'commercial', pr: 20 },
  { url: '/dumpster-rental-near-me-herriman-ut', city: 'Herriman', type: 'near-me', pr: 20 },
  { url: '/30-yard-dumpster-rental-alta-ut', city: 'Alta', type: '30-yard', pr: 20 },
  { url: '/herriman-dumpster-rentals/services', city: 'Herriman', type: 'services', pr: 20 },
  { url: '/pleasant-grove-dumpster-rentals/services', city: 'Pleasant Grove', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-glendale-ut', city: 'Glendale', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-draper-ut', city: 'Draper', type: 'residential', pr: 20 },
  { url: '/ogden-dumpster-rentals/services', city: 'Ogden', type: 'services', pr: 20 },
  { url: '/kearns-dumpster-rentals/services', city: 'Kearns', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-west-valley-city-ut', city: 'West Valley City', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-west-valley-city-ut', city: 'West Valley City', type: 'residential', pr: 20 },
  { url: '/glendale-dumpster-rentals/services', city: 'Glendale', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-south-salt-lake-ut', city: 'South Salt Lake', type: 'residential', pr: 20 },
  { url: '/taylorsville-dumpster-rentals/services', city: 'Taylorsville', type: 'services', pr: 20 },
  { url: '/west-valley-city-dumpster-rentals/services', city: 'West Valley City', type: 'services', pr: 20 },
  { url: '/dumpster-rental-near-me-midvale-ut', city: 'Midvale', type: 'near-me', pr: 20 },
  { url: '/rolloff-dumpster-rental-sandy-ut', city: 'Sandy', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-sandy-ut', city: 'Sandy', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-murray-ut', city: 'Murray', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-centerville-ut', city: 'Centerville', type: 'residential', pr: 20 },
  { url: '/rolloff-dumpster-rental-magna-ut', city: 'Magna', type: 'rolloff', pr: 20 },
  { url: '/dumpster-rental-near-me-riverton-ut', city: 'Riverton', type: 'near-me', pr: 20 },
  { url: '/multiple-sizes-available', city: 'General', type: 'general', pr: 20 },
  { url: '/services/residential-dumpster-rental-layton-ut', city: 'Layton', type: 'residential', pr: 20 },
  { url: '/farmington-dumpster-rentals/services', city: 'Farmington', type: 'services', pr: 20 },
  { url: '/roll-off-dumpster-rental-herriman', city: 'Herriman', type: 'rolloff', pr: 20 },
  { url: '/services/residential-dumpster-rental-salt-lake-city-ut', city: 'Salt Lake City', type: 'residential', pr: 20 },
  { url: '/rolloff-dumpster-rental-midvale-ut', city: 'Midvale', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-orem-ut', city: 'Orem', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-eagle-mountain-ut', city: 'Eagle Mountain', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-taylorsville-ut', city: 'Taylorsville', type: 'rolloff', pr: 20 },
  { url: '/south-jordan-dumpster-rentals/services', city: 'South Jordan', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-lehi-ut', city: 'Lehi', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-north-salt-lake-ut', city: 'North Salt Lake', type: 'commercial', pr: 20 },
  { url: '/south-salt-lake-dumpster-rentals/services', city: 'South Salt Lake', type: 'services', pr: 20 },
  { url: '/salt-lake-city-dumpster-rentals/services', city: 'Salt Lake City', type: 'services', pr: 20 },
  { url: '/30-yard-dumpster-rental-magna-ut', city: 'Magna', type: '30-yard', pr: 20 },
  { url: '/services/commercial-dumpster-rental-pleasant-grove-ut', city: 'Pleasant Grove', type: 'commercial', pr: 20 },
  { url: '/30-yard-dumpster-rental-brighton-ut', city: 'Brighton', type: '30-yard', pr: 20 },
  { url: '/services/residential-dumpster-rental-sandy-ut', city: 'Sandy', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-tooele-ut', city: 'Tooele', type: 'residential', pr: 20 },
  { url: '/roll-off-dumpster-rental-millcreek', city: 'Millcreek', type: 'rolloff', pr: 20 },
  { url: '/centerville-dumpster-rentals/services', city: 'Centerville', type: 'services', pr: 20 },
  { url: '/roll-off-dumpster-rental-murray', city: 'Murray', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-cottonwood-heights-ut', city: 'Cottonwood Heights', type: 'commercial', pr: 20 },
  { url: '/dumpster-rentals-near-me-prices', city: 'General', type: 'general', pr: 20 },
  { url: '/dumpster-rental-near-me-bluffdale-ut', city: 'Bluffdale', type: 'near-me', pr: 20 },
  { url: '/services/commercial-dumpster-rental-holladay-ut', city: 'Holladay', type: 'commercial', pr: 20 },
  { url: '/lindon-dumpster-rentals/services', city: 'Lindon', type: 'services', pr: 20 },
  { url: '/services/commercial-dumpster-rental-magna-ut', city: 'Magna', type: 'commercial', pr: 20 },
  { url: '/rolloff-dumpster-rental-murray-ut', city: 'Murray', type: 'rolloff', pr: 20 },
  { url: '/roll-off-dumpster-rental-kearns', city: 'Kearns', type: 'rolloff', pr: 20 },
  { url: '/services/commercial-dumpster-rental-draper-ut', city: 'Draper', type: 'commercial', pr: 20 },
  { url: '/dumpster-rental-near-me-millcreek-ut', city: 'Millcreek', type: 'near-me', pr: 20 },
  { url: '/services/commercial-dumpster-rental-midvale-ut', city: 'Midvale', type: 'commercial', pr: 20 },
  { url: '/services/commercial-dumpster-rental-salt-lake-city-ut', city: 'Salt Lake City', type: 'commercial', pr: 20 },
  { url: '/clearfield-dumpster-rentals/services', city: 'Clearfield', type: 'services', pr: 20 },
  { url: '/dumpster-rental-near-me-copperton-ut', city: 'Copperton', type: 'near-me', pr: 20 },
  { url: '/services/commercial-dumpster-rental-provo-ut', city: 'Provo', type: 'commercial', pr: 20 },
  { url: '/layton-dumpster-rentals/services', city: 'Layton', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-cottonwood-heights-ut', city: 'Cottonwood Heights', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-holladay-ut', city: 'Holladay', type: 'residential', pr: 20 },
  { url: '/dumpster-rental-near-me-kearns-ut', city: 'Kearns', type: 'near-me', pr: 20 },
  { url: '/rolloff-dumpster-rental-bluffdale-ut', city: 'Bluffdale', type: 'rolloff', pr: 20 },
  { url: '/fairpark-dumpster-rentals/services', city: 'Fairpark', type: 'services', pr: 20 },
  { url: '/30-yard-dumpster-rental-bluffdale-ut', city: 'Bluffdale', type: '30-yard', pr: 20 },
  { url: '/services/residential-dumpster-rental-riverton-ut', city: 'Riverton', type: 'residential', pr: 20 },
  { url: '/services/commercial-dumpster-rental-sugar-house-ut', city: 'Sugar House', type: 'commercial', pr: 20 },
  { url: '/services/residential-dumpster-rental-midvale-ut', city: 'Midvale', type: 'residential', pr: 20 },
  { url: '/kaysville-dumpster-rentals/services', city: 'Kaysville', type: 'services', pr: 20 },
  { url: '/riverton-dumpster-rentals/services', city: 'Riverton', type: 'services', pr: 20 },
  { url: '/services/residential-dumpster-rental-herriman-ut', city: 'Herriman', type: 'residential', pr: 20 },
  { url: '/services/residential-dumpster-rental-ogden-ut', city: 'Ogden', type: 'residential', pr: 20 },
  { url: '/utah-wide-coverage', city: 'General', type: 'general', pr: 20 },
  { url: '/services/residential-dumpster-rental-roy-ut', city: 'Roy', type: 'residential', pr: 20 },
  { url: '/roll-off-dumpster-rental-brighton', city: 'Brighton', type: 'rolloff', pr: 20 },
  { url: '/30-yard-dumpster-rental-millcreek-ut', city: 'Millcreek', type: '30-yard', pr: 20 },
  { url: '/services/residential-dumpster-rental-lehi-ut', city: 'Lehi', type: 'residential', pr: 20 },
  { url: '/roll-off-dumpster-rental-holladay', city: 'Holladay', type: 'rolloff', pr: 20 },
  { url: '/midvale-dumpster-rentals/services', city: 'Midvale', type: 'services', pr: 20 },
  { url: '/30-yard-dumpster-rental-herriman-ut', city: 'Herriman', type: '30-yard', pr: 20 },
  { url: '/30-yard-dumpster-rental-murray-ut', city: 'Murray', type: '30-yard', pr: 20 }
];

// Function to find all pages that should link to orphan pages
function findLinkingPages() {
  const appDir = path.join(process.cwd(), 'app');
  const linkingPages = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        
        // Check if this directory has a page.tsx
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          // Extract route from directory structure
          const route = fullPath.replace(appDir, '').replace(/\\/g, '/');
          const cleanRoute = route === '' ? '/' : route;
          
          linkingPages.push({
            path: pagePath,
            route: cleanRoute,
            name: entry.name
          });
        }
        
        // Recursively search subdirectories
        walkDir(fullPath);
      }
    }
  }
  
  walkDir(appDir);
  return linkingPages;
}

// Function to generate internal links for orphan pages
function generateInternalLinks(orphanPage, linkingPages) {
  const links = [];
  
  // Get city name for context
  const cityName = orphanPage.city;
  const pageType = orphanPage.type;
  
  // Generate contextual links based on page type
  if (pageType === 'services') {
    // For service pages, link to main city page and related services
    links.push({
      text: `${cityName} Dumpster Rental`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals`,
      context: 'main city page'
    });
    
    // Add related service links
    if (cityName !== 'General') {
      links.push({
        text: `${cityName} Residential Services`,
        url: `/services/residential-dumpster-rental-${cityName.toLowerCase().replace(/\s+/g, '-')}-ut`,
        context: 'residential services'
      });
      
      links.push({
        text: `${cityName} Commercial Services`,
        url: `/services/commercial-dumpster-rental-${cityName.toLowerCase().replace(/\s+/g, '-')}-ut`,
        context: 'commercial services'
      });
    }
  } else if (pageType === 'residential') {
    // For residential pages, link to main city page and services
    links.push({
      text: `${cityName} Dumpster Rental`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals`,
      context: 'main city page'
    });
    
    links.push({
      text: `${cityName} Services`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals/services`,
      context: 'services page'
    });
  } else if (pageType === 'commercial') {
    // For commercial pages, link to main city page and services
    links.push({
      text: `${cityName} Dumpster Rental`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals`,
      context: 'main city page'
    });
    
    links.push({
      text: `${cityName} Services`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals/services`,
      context: 'services page'
    });
  } else if (pageType === 'rolloff' || pageType === '30-yard') {
    // For rolloff pages, link to main city page
    links.push({
      text: `${cityName} Dumpster Rental`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals`,
      context: 'main city page'
    });
  } else if (pageType === 'near-me') {
    // For near-me pages, link to main city page
    links.push({
      text: `${cityName} Dumpster Rental`,
      url: `/${cityName.toLowerCase().replace(/\s+/g, '-')}-dumpster-rentals`,
      context: 'main city page'
    });
  }
  
  // Add general service links
  links.push({
    text: 'Dumpster Sizes Guide',
    url: '/dumpster-sizes-1',
    context: 'sizes guide'
  });
  
  links.push({
    text: 'Transparent Pricing',
    url: '/transparent-pricing',
    context: 'pricing'
  });
  
  links.push({
    text: 'Same-Day Delivery',
    url: '/same-day-delivery',
    context: 'delivery'
  });
  
  return links;
}

// Function to add internal links to a page
function addInternalLinksToPage(pagePath, orphanPage) {
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if this page already has the orphan page linked
    if (content.includes(orphanPage.url)) {
      return false; // Already linked
    }
    
    // Generate internal links for this orphan page
    const internalLinks = generateInternalLinks(orphanPage, []);
    
    // Find a good place to add the links (before closing </div> or </section>)
    const linkSection = `
        {/* Related Services and Resources */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Related Services and Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Cities</h3>
              <div className="space-y-2">
                ${internalLinks.filter(link => link.context === 'main city page' || link.context === 'services page').map(link => 
                  `<Link href="${link.url}" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">${link.text}</Link>`
                ).join('\n                ')}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Helpful Resources</h3>
              <div className="space-y-2">
                ${internalLinks.filter(link => link.context === 'sizes guide' || link.context === 'pricing' || link.context === 'delivery').map(link => 
                  `<Link href="${link.url}" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">${link.text}</Link>`
                ).join('\n                ')}
              </div>
            </div>
          </div>
        </section>`;
    
    // Add the link section before the CTA section
    const ctaSection = '        {/* CTA Section */}';
    if (content.includes(ctaSection)) {
      const newContent = content.replace(ctaSection, linkSection + '\n\n' + ctaSection);
      
      // Create backup
      const backupPath = pagePath + '.backup';
      fs.copyFileSync(pagePath, backupPath);
      
      // Write new content
      fs.writeFileSync(pagePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${pagePath}:`, error.message);
    return false;
  }
}

// Function to add links to orphan pages from other pages
function addLinksToOrphanPages() {
  console.log('🔍 Finding pages to add internal links...');
  
  const linkingPages = findLinkingPages();
  console.log(`Found ${linkingPages.length} pages that can link to orphan pages`);
  
  let totalLinksAdded = 0;
  let pagesUpdated = 0;
  
  // Process each orphan page
  for (const orphanPage of orphanPages) {
    console.log(`\n📝 Processing orphan page: ${orphanPage.url}`);
    
    // Find the file path for this orphan page
    const orphanPagePath = path.join(process.cwd(), 'app', orphanPage.url.replace(/^\//, ''), 'page.tsx');
    
    if (fs.existsSync(orphanPagePath)) {
      console.log(`  ✅ Found orphan page file: ${orphanPagePath}`);
      
      // Add internal links to this orphan page
      const linksAdded = addInternalLinksToPage(orphanPagePath, orphanPage);
      
      if (linksAdded) {
        totalLinksAdded += 5; // Approximate number of links added
        pagesUpdated++;
        console.log(`  ✅ Added internal links to ${orphanPage.url}`);
      } else {
        console.log(`  ⚠️  No changes made to ${orphanPage.url} (may already have links)`);
      }
    } else {
      console.log(`  ❌ Orphan page file not found: ${orphanPagePath}`);
    }
  }
  
  console.log('\n🎉 Orphan page linking complete!');
  console.log(`✅ Pages updated: ${pagesUpdated}`);
  console.log(`✅ Total internal links added: ${totalLinksAdded}`);
  
  return { pagesUpdated, totalLinksAdded };
}

// Function to create a comprehensive linking strategy report
function generateLinkingStrategyReport() {
  console.log('\n📊 ORPHAN PAGE LINKING STRATEGY REPORT');
  console.log('=====================================');
  
  // Group orphan pages by type
  const pagesByType = {};
  orphanPages.forEach(page => {
    if (!pagesByType[page.type]) {
      pagesByType[page.type] = [];
    }
    pagesByType[page.type].push(page);
  });
  
  console.log('\n📈 Orphan Pages by Type:');
  Object.entries(pagesByType).forEach(([type, pages]) => {
    console.log(`  ${type}: ${pages.length} pages`);
  });
  
  console.log('\n🎯 Linking Strategy:');
  console.log('  1. Add "Related Services and Resources" section to each orphan page');
  console.log('  2. Link to main city pages and related services');
  console.log('  3. Include general service links (sizes, pricing, delivery)');
  console.log('  4. Create contextual internal linking structure');
  
  console.log('\n📋 Priority Order:');
  const sortedPages = orphanPages.sort((a, b) => b.pr - a.pr);
  console.log('  High Priority (PR 32-24):');
  sortedPages.filter(p => p.pr >= 24).forEach(page => {
    console.log(`    - ${page.url} (PR: ${page.pr})`);
  });
  
  console.log('\n  Medium Priority (PR 20):');
  const mediumPriority = sortedPages.filter(p => p.pr === 20);
  console.log(`    - ${mediumPriority.length} pages with PR 20`);
  
  console.log('\n💡 Expected Results:');
  console.log('  - Eliminate 0 internal link pages');
  console.log('  - Improve page authority distribution');
  console.log('  - Enhance user navigation experience');
  console.log('  - Boost SEO performance');
  
  return {
    totalOrphanPages: orphanPages.length,
    pagesByType,
    highPriorityPages: sortedPages.filter(p => p.pr >= 24),
    mediumPriorityPages: sortedPages.filter(p => p.pr === 20)
  };
}

// Main function to execute the orphan page linking strategy
async function executeOrphanPageLinkingStrategy() {
  console.log('🚀 Starting Orphan Page Linking Strategy...');
  
  // Generate strategy report
  const report = generateLinkingStrategyReport();
  
  // Execute the linking strategy
  const results = addLinksToOrphanPages();
  
  console.log('\n📊 FINAL RESULTS:');
  console.log('================');
  console.log(`Total orphan pages identified: ${report.totalOrphanPages}`);
  console.log(`Pages updated with internal links: ${results.pagesUpdated}`);
  console.log(`Total internal links added: ${results.totalLinksAdded}`);
  
  console.log('\n💡 Next Steps:');
  console.log('1. Test the build: npm run build');
  console.log('2. Check for any linting errors');
  console.log('3. Verify internal links are working');
  console.log('4. Monitor SEO improvements');
  console.log('5. Run another SEO audit to confirm orphan pages are fixed');
  
  return results;
}

// Run the script
if (require.main === module) {
  executeOrphanPageLinkingStrategy().catch(console.error);
}

module.exports = { 
  executeOrphanPageLinkingStrategy, 
  generateLinkingStrategyReport,
  orphanPages 
};
