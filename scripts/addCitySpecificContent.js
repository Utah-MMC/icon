const fs = require('fs');
const path = require('path');

// City-specific data with unique content
const citySpecificData = {
  'murray': {
    displayName: 'Murray',
    historicalInfo: "Murray, established in 1903, is home to Murray Park - one of Utah's largest city parks - and the historic Murray Theater. Our dumpster services support Murray's growing residential and commercial development.",
    landmarks: "Murray Park, Murray Theater, Murray City Hall, Murray Parkway",
    localProjects: "Recent projects include the Murray City Hall renovation and Murray Parkway development",
    neighborhoods: "Murray Central, Murray East, Murray West, Murray North, Murray South",
    localBusinesses: "Trusted by Murray's top contractors and construction companies"
  },
  'sandy': {
    displayName: 'Sandy',
    historicalInfo: "Sandy, the gateway to Little Cottonwood Canyon, serves as the access point to world-famous Alta and Snowbird ski resorts. Our dumpster services support Sandy's residential and commercial growth.",
    landmarks: "Little Cottonwood Canyon, Alta Ski Resort, Snowbird, Sandy City Hall",
    localProjects: "Supporting Sandy's annual Harvest Festival cleanup and residential development projects",
    neighborhoods: "Sandy Heights, Bell Canyon, White City, Sandy Central, Sandy East",
    localBusinesses: "Preferred dumpster provider for Sandy's residential development projects"
  },
  'west-jordan': {
    displayName: 'West Jordan',
    historicalInfo: "West Jordan, named after the Jordan River, is home to the historic Gardner Village and Jordan Landing shopping center. We provide reliable dumpster services for West Jordan's diverse community.",
    landmarks: "Gardner Village, Jordan Landing, Jordan River Parkway, West Jordan City Hall",
    localProjects: "Proud to serve West Jordan's community garden projects and Jordan Landing developments",
    neighborhoods: "Jordan Landing, West Jordan Central, West Jordan East, West Jordan West",
    localBusinesses: "Trusted partner for West Jordan's construction and renovation projects"
  },
  'salt-lake-city': {
    displayName: 'Salt Lake City',
    historicalInfo: "Founded by Brigham Young in 1847, Salt Lake City is Utah's capital and home to Temple Square and the Utah State Capitol. Our dumpster services support the city's ongoing development.",
    landmarks: "Temple Square, Utah State Capitol, Liberty Park, The Gateway, Downtown",
    localProjects: "Supporting downtown Salt Lake City renovations and Liberty Park improvements",
    neighborhoods: "Downtown, Sugar House, Rose Park, Poplar Grove, Glendale, Fairpark",
    localBusinesses: "Preferred provider for downtown Salt Lake City construction projects"
  },
  'draper': {
    displayName: 'Draper',
    historicalInfo: "Draper, located at the base of the Wasatch Mountains, is known for its beautiful views and growing tech corridor. Our dumpster services support Draper's residential and commercial expansion.",
    landmarks: "Point of the Mountain, Draper City Hall, Corner Canyon, Draper Park",
    localProjects: "Supporting Draper's tech corridor development and residential growth",
    neighborhoods: "Suncrest, Corner Canyon, Draper Central, Draper East, Draper West",
    localBusinesses: "Trusted by Draper's growing tech companies and residential developers"
  },
  'south-jordan': {
    displayName: 'South Jordan',
    historicalInfo: "South Jordan, part of the Salt Lake Valley, is known for its family-friendly communities and the South Jordan City Hall. We provide reliable dumpster services for South Jordan's growing population.",
    landmarks: "South Jordan City Hall, South Jordan Parkway, Daybreak Community",
    localProjects: "Supporting South Jordan's Daybreak community development and park improvements",
    neighborhoods: "Daybreak, South Jordan Central, South Jordan East, South Jordan West",
    localBusinesses: "Preferred provider for South Jordan's residential and commercial projects"
  },
  'west-valley-city': {
    displayName: 'West Valley City',
    historicalInfo: "West Valley City, Utah's second-largest city, is home to the Maverik Center and the Utah Cultural Celebration Center. Our dumpster services support West Valley City's diverse community.",
    landmarks: "Maverik Center, Utah Cultural Celebration Center, West Valley City Hall",
    localProjects: "Supporting West Valley City's cultural events and community projects",
    neighborhoods: "West Valley Central, West Valley East, West Valley West, Kearns area",
    localBusinesses: "Trusted partner for West Valley City's cultural and community projects"
  },
  'taylorsville': {
    displayName: 'Taylorsville',
    historicalInfo: "Taylorsville, established in 1996, is a growing community in the Salt Lake Valley. Our dumpster services support Taylorsville's residential and commercial development.",
    landmarks: "Taylorsville City Hall, Taylorsville Park, Valley Regional Park",
    localProjects: "Supporting Taylorsville's park improvements and residential development",
    neighborhoods: "Taylorsville Central, Taylorsville East, Taylorsville West",
    localBusinesses: "Trusted by Taylorsville's local contractors and developers"
  },
  'midvale': {
    displayName: 'Midvale',
    historicalInfo: "Midvale, centrally located in the Salt Lake Valley, is known for its convenient location and growing business community. Our dumpster services support Midvale's development projects.",
    landmarks: "Midvale City Hall, Midvale Park, Historic Midvale Main Street",
    localProjects: "Supporting Midvale's Main Street revitalization and business development",
    neighborhoods: "Midvale Central, Midvale East, Midvale West",
    localBusinesses: "Preferred provider for Midvale's business and residential projects"
  },
  'holladay': {
    displayName: 'Holladay',
    historicalInfo: "Holladay, known for its tree-lined streets and historic homes, is one of Salt Lake Valley's most desirable communities. Our dumpster services support Holladay's residential projects.",
    landmarks: "Holladay City Hall, Holladay Park, Historic Holladay Village",
    localProjects: "Supporting Holladay's historic home renovations and residential projects",
    neighborhoods: "Holladay Village, Holladay Central, Holladay East, Holladay West",
    localBusinesses: "Trusted by Holladay's historic home renovation specialists"
  },
  'cottonwood-heights': {
    displayName: 'Cottonwood Heights',
    historicalInfo: "Cottonwood Heights, nestled at the base of the Wasatch Mountains, offers stunning mountain views and easy access to Big Cottonwood Canyon. Our dumpster services support this beautiful community.",
    landmarks: "Big Cottonwood Canyon, Cottonwood Heights City Hall, Butler Park",
    localProjects: "Supporting Cottonwood Heights' residential projects and canyon access improvements",
    neighborhoods: "Cottonwood Heights Central, Cottonwood Heights East, Cottonwood Heights West",
    localBusinesses: "Preferred provider for Cottonwood Heights' luxury home projects"
  },
  'millcreek': {
    displayName: 'Millcreek',
    historicalInfo: "Millcreek, named after the historic mill and creek, is a vibrant community in the Salt Lake Valley. Our dumpster services support Millcreek's residential and commercial growth.",
    landmarks: "Millcreek City Hall, Millcreek Park, Historic Millcreek",
    localProjects: "Supporting Millcreek's community projects and residential development",
    neighborhoods: "Millcreek Central, Millcreek East, Millcreek West",
    localBusinesses: "Trusted by Millcreek's local contractors and developers"
  },
  'ogden': {
    displayName: 'Ogden',
    historicalInfo: "Ogden, Utah's historic railroad hub, is the gateway to Weber Canyon and home to Weber State University. Our dumpster services support Ogden's ongoing revitalization.",
    landmarks: "Union Station, Weber State University, Ogden City Hall, Historic 25th Street",
    localProjects: "Supporting Ogden's historic 25th Street revitalization and university projects",
    neighborhoods: "Ogden Central, Ogden East, Ogden West, Weber State area",
    localBusinesses: "Trusted partner for Ogden's historic renovation and university projects"
  },
  'provo': {
    displayName: 'Provo',
    historicalInfo: "Provo, home to Brigham Young University, is located along the beautiful Provo River and offers stunning mountain views. Our dumpster services support Provo's educational and residential growth.",
    landmarks: "Brigham Young University, Provo River, Provo City Hall, Provo Canyon",
    localProjects: "Supporting BYU campus projects and Provo's residential development",
    neighborhoods: "BYU Campus, Provo Central, Provo East, Provo West",
    localBusinesses: "Preferred provider for BYU campus projects and Provo's residential development"
  },
  'orem': {
    displayName: 'Orem',
    historicalInfo: "Orem, known as 'Family City USA,' is home to Utah Valley University and offers beautiful mountain views. Our dumpster services support Orem's family-friendly community.",
    landmarks: "Utah Valley University, Orem City Hall, University Place, Orem Park",
    localProjects: "Supporting UVU campus projects and Orem's family-oriented developments",
    neighborhoods: "UVU Campus, Orem Central, Orem East, Orem West",
    localBusinesses: "Trusted by UVU campus projects and Orem's family-oriented developers"
  },
  'lehi': {
    displayName: 'Lehi',
    historicalInfo: "Lehi, home to Thanksgiving Point and the Lehi Roller Mills, is experiencing rapid growth in Utah County. Our dumpster services support Lehi's expanding community.",
    landmarks: "Thanksgiving Point, Lehi Roller Mills, Lehi City Hall, Traverse Mountain",
    localProjects: "Supporting Lehi's Thanksgiving Point expansion and residential growth",
    neighborhoods: "Thanksgiving Point, Lehi Central, Lehi East, Lehi West, Traverse Mountain",
    localBusinesses: "Preferred provider for Lehi's Thanksgiving Point and residential projects"
  },
  'american-fork': {
    displayName: 'American Fork',
    historicalInfo: "American Fork, located at the mouth of American Fork Canyon, offers stunning mountain views and outdoor recreation. Our dumpster services support American Fork's community growth.",
    landmarks: "American Fork Canyon, American Fork City Hall, American Fork Park",
    localProjects: "Supporting American Fork's canyon access improvements and residential projects",
    neighborhoods: "American Fork Central, American Fork East, American Fork West",
    localBusinesses: "Trusted by American Fork's outdoor recreation and residential developers"
  },
  'pleasant-grove': {
    displayName: 'Pleasant Grove',
    historicalInfo: "Pleasant Grove, known as 'Utah's City of Trees,' offers a beautiful, tree-lined community in Utah County. Our dumpster services support Pleasant Grove's natural beauty.",
    landmarks: "Pleasant Grove City Hall, Grove Creek Canyon, Pleasant Grove Park",
    localProjects: "Supporting Pleasant Grove's tree preservation and residential projects",
    neighborhoods: "Pleasant Grove Central, Pleasant Grove East, Pleasant Grove West",
    localBusinesses: "Preferred provider for Pleasant Grove's tree-friendly development projects"
  },
  'saratoga-springs': {
    displayName: 'Saratoga Springs',
    historicalInfo: "Saratoga Springs, located on the shores of Utah Lake, offers beautiful lake views and outdoor recreation. Our dumpster services support Saratoga Springs' lakeside community.",
    landmarks: "Utah Lake, Saratoga Springs City Hall, Saratoga Springs Park",
    localProjects: "Supporting Saratoga Springs' lakeside development and residential growth",
    neighborhoods: "Saratoga Springs Central, Saratoga Springs East, Saratoga Springs West",
    localBusinesses: "Trusted by Saratoga Springs' lakeside and residential developers"
  },
  'eagle-mountain': {
    displayName: 'Eagle Mountain',
    historicalInfo: "Eagle Mountain, one of Utah's fastest-growing cities, offers beautiful mountain views and family-friendly communities. Our dumpster services support Eagle Mountain's rapid growth.",
    landmarks: "Eagle Mountain City Hall, Eagle Mountain Park, Cedar Valley",
    localProjects: "Supporting Eagle Mountain's residential expansion and community development",
    neighborhoods: "Eagle Mountain Central, Eagle Mountain East, Eagle Mountain West",
    localBusinesses: "Preferred provider for Eagle Mountain's residential and community projects"
  },
  'herriman': {
    displayName: 'Herriman',
    historicalInfo: "Herriman, located in the southwest Salt Lake Valley, offers beautiful mountain views and growing residential communities. Our dumpster services support Herriman's development.",
    landmarks: "Herriman City Hall, Herriman Park, Rose Canyon",
    localProjects: "Supporting Herriman's residential growth and community projects",
    neighborhoods: "Herriman Central, Herriman East, Herriman West",
    localBusinesses: "Trusted by Herriman's residential developers and community projects"
  },
  'riverton': {
    displayName: 'Riverton',
    historicalInfo: "Riverton, located along the Jordan River, offers beautiful river views and family-friendly communities. Our dumpster services support Riverton's riverside development.",
    landmarks: "Jordan River, Riverton City Hall, Riverton Park",
    localProjects: "Supporting Riverton's Jordan River Parkway improvements and residential projects",
    neighborhoods: "Riverton Central, Riverton East, Riverton West",
    localBusinesses: "Preferred provider for Riverton's riverside and residential projects"
  },
  'bluffdale': {
    displayName: 'Bluffdale',
    historicalInfo: 'Bluffdale, located in the southwest Salt Lake Valley, offers beautiful mountain views and growing residential communities. Our dumpster services support Bluffdale\'s development.',
    landmarks: 'Bluffdale City Hall, Bluffdale Park, Point of the Mountain',
    localProjects: 'Supporting Bluffdale\'s residential growth and community projects',
    neighborhoods: 'Bluffdale Central, Bluffdale East, Bluffdale West',
    localBusinesses: 'Trusted by Bluffdale\'s residential developers and community projects'
  },
  'south-salt-lake': {
    displayName: 'South Salt Lake',
    historicalInfo: 'South Salt Lake, centrally located in the Salt Lake Valley, offers convenient access to downtown and growing business opportunities. Our dumpster services support South Salt Lake\'s development.',
    landmarks: 'South Salt Lake City Hall, South Salt Lake Park, Central Valley',
    localProjects: 'Supporting South Salt Lake\'s business development and community projects',
    neighborhoods: 'South Salt Lake Central, South Salt Lake East, South Salt Lake West',
    localBusinesses: 'Preferred provider for South Salt Lake\'s business and community projects'
  },
  'sugar-house': {
    displayName: 'Sugar House',
    historicalInfo: 'Sugar House, a historic neighborhood in Salt Lake City, is known for its eclectic shops, restaurants, and community feel. Our dumpster services support Sugar House\'s unique character.',
    landmarks: 'Sugar House Park, Sugar House City Hall, Historic Sugar House',
    localProjects: 'Supporting Sugar House\'s historic preservation and community projects',
    neighborhoods: 'Sugar House Central, Sugar House East, Sugar House West',
    localBusinesses: 'Trusted by Sugar House\'s historic preservation and community projects'
  },
  'rose-park': {
    displayName: 'Rose Park',
    historicalInfo: 'Rose Park, a diverse neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Rose Park\'s community growth.',
    landmarks: 'Rose Park City Hall, Rose Park Park, Jordan River',
    localProjects: 'Supporting Rose Park\'s community development and residential projects',
    neighborhoods: 'Rose Park Central, Rose Park East, Rose Park West',
    localBusinesses: 'Preferred provider for Rose Park\'s community and residential projects'
  },
  'poplar-grove': {
    displayName: 'Poplar Grove',
    historicalInfo: 'Poplar Grove, a historic neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Poplar Grove\'s community growth.',
    landmarks: 'Poplar Grove City Hall, Poplar Grove Park, Jordan River',
    localProjects: 'Supporting Poplar Grove\'s community development and residential projects',
    neighborhoods: 'Poplar Grove Central, Poplar Grove East, Poplar Grove West',
    localBusinesses: 'Preferred provider for Poplar Grove\'s community and residential projects'
  },
  'glendale': {
    displayName: 'Glendale',
    historicalInfo: 'Glendale, a diverse neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Glendale\'s community growth.',
    landmarks: 'Glendale City Hall, Glendale Park, Jordan River',
    localProjects: 'Supporting Glendale\'s community development and residential projects',
    neighborhoods: 'Glendale Central, Glendale East, Glendale West',
    localBusinesses: 'Preferred provider for Glendale\'s community and residential projects'
  },
  'fairpark': {
    displayName: 'Fairpark',
    historicalInfo: 'Fairpark, home to the Utah State Fairgrounds, offers a unique blend of history and community in Salt Lake City. Our dumpster services support Fairpark\'s community growth.',
    landmarks: 'Utah State Fairgrounds, Fairpark City Hall, Fairpark Park',
    localProjects: 'Supporting Fairpark\'s fairgrounds events and community projects',
    neighborhoods: 'Fairpark Central, Fairpark East, Fairpark West',
    localBusinesses: 'Preferred provider for Fairpark\'s fairgrounds and community projects'
  },
  'downtown-salt-lake': {
    displayName: 'Downtown Salt Lake',
    historicalInfo: 'Downtown Salt Lake City, the heart of Utah\'s capital, is home to Temple Square, the Utah State Capitol, and vibrant business district. Our dumpster services support downtown development.',
    landmarks: 'Temple Square, Utah State Capitol, The Gateway, Downtown Salt Lake',
    localProjects: 'Supporting downtown Salt Lake City renovations and business development',
    neighborhoods: 'Downtown Central, Downtown East, Downtown West',
    localBusinesses: 'Preferred provider for downtown Salt Lake City construction and business projects'
  },
  'park-city': {
    displayName: 'Park City',
    historicalInfo: 'Park City, a historic mining town turned world-class ski destination, is home to the Sundance Film Festival and three world-class ski resorts. Our dumpster services support Park City\'s unique character.',
    landmarks: 'Park City Mountain Resort, Deer Valley, Sundance Film Festival, Historic Main Street',
    localProjects: 'Supporting Park City\'s historic preservation and resort development',
    neighborhoods: 'Park City Central, Park City East, Park City West',
    localBusinesses: 'Trusted by Park City\'s luxury resort and historic preservation projects'
  },
  'layton': {
    displayName: 'Layton',
    historicalInfo: 'Layton, located in Davis County, offers beautiful mountain views and growing residential communities. Our dumpster services support Layton\'s development in the northern Salt Lake Valley.',
    landmarks: 'Layton City Hall, Layton Park, Antelope Island',
    localProjects: 'Supporting Layton\'s residential growth and community projects',
    neighborhoods: 'Layton Central, Layton East, Layton West',
    localBusinesses: 'Preferred provider for Layton\'s residential and community projects'
  },
  'kaysville': {
    displayName: 'Kaysville',
    historicalInfo: 'Kaysville, a family-friendly community in Davis County, offers beautiful mountain views and excellent schools. Our dumpster services support Kaysville\'s family-oriented development.',
    landmarks: 'Kaysville City Hall, Kaysville Park, Davis High School',
    localProjects: 'Supporting Kaysville\'s family-oriented development and community projects',
    neighborhoods: 'Kaysville Central, Kaysville East, Kaysville West',
    localBusinesses: 'Trusted by Kaysville\'s family-oriented developers and community projects'
  },
  'bountiful': {
    displayName: 'Bountiful',
    historicalInfo: 'Bountiful, located at the base of the Wasatch Mountains, offers stunning mountain views and a strong sense of community. Our dumpster services support Bountiful\'s mountain community.',
    landmarks: 'Bountiful City Hall, Bountiful Park, Mueller Park',
    localProjects: 'Supporting Bountiful\'s mountain community development and residential projects',
    neighborhoods: 'Bountiful Central, Bountiful East, Bountiful West',
    localBusinesses: 'Preferred provider for Bountiful\'s mountain community and residential projects'
  },
  'centerville': {
    displayName: 'Centerville',
    historicalInfo: 'Centerville, located in Davis County, offers beautiful mountain views and family-friendly communities. Our dumpster services support Centerville\'s development in the northern Salt Lake Valley.',
    landmarks: 'Centerville City Hall, Centerville Park, Mueller Park',
    localProjects: 'Supporting Centerville\'s residential growth and community projects',
    neighborhoods: 'Centerville Central, Centerville East, Centerville West',
    localBusinesses: 'Trusted by Centerville\'s residential developers and community projects'
  },
  'farmington': {
    displayName: 'Farmington',
    historicalInfo: 'Farmington, home to Lagoon Amusement Park, offers family entertainment and beautiful mountain views. Our dumpster services support Farmington\'s family-oriented community.',
    landmarks: 'Lagoon Amusement Park, Farmington City Hall, Farmington Park',
    localProjects: 'Supporting Farmington\'s family entertainment and residential projects',
    neighborhoods: 'Farmington Central, Farmington East, Farmington West',
    localBusinesses: 'Preferred provider for Farmington\'s family entertainment and residential projects'
  },
  'north-salt-lake': {
    displayName: 'North Salt Lake',
    historicalInfo: 'North Salt Lake, located along the Great Salt Lake, offers beautiful lake views and convenient access to downtown. Our dumpster services support North Salt Lake\'s lakeside community.',
    landmarks: 'Great Salt Lake, North Salt Lake City Hall, North Salt Lake Park',
    localProjects: 'Supporting North Salt Lake\'s lakeside development and residential projects',
    neighborhoods: 'North Salt Lake Central, North Salt Lake East, North Salt Lake West',
    localBusinesses: 'Trusted by North Salt Lake\'s lakeside and residential developers'
  },
  'woods-cross': {
    displayName: 'Woods Cross',
    historicalInfo: 'Woods Cross, a small community in Davis County, offers a close-knit community feel and beautiful mountain views. Our dumpster services support Woods Cross\'s community growth.',
    landmarks: 'Woods Cross City Hall, Woods Cross Park, Bountiful Peak',
    localProjects: 'Supporting Woods Cross\'s community development and residential projects',
    neighborhoods: 'Woods Cross Central, Woods Cross East, Woods Cross West',
    localBusinesses: 'Preferred provider for Woods Cross\'s community and residential projects'
  },
  'clearfield': {
    displayName: 'Clearfield',
    historicalInfo: 'Clearfield, located near Hill Air Force Base, offers a strong military community and beautiful mountain views. Our dumpster services support Clearfield\'s military and residential community.',
    landmarks: 'Hill Air Force Base, Clearfield City Hall, Clearfield Park',
    localProjects: 'Supporting Clearfield\'s military community and residential projects',
    neighborhoods: 'Clearfield Central, Clearfield East, Clearfield West',
    localBusinesses: 'Trusted by Clearfield\'s military community and residential developers'
  },
  'roy': {
    displayName: 'Roy',
    historicalInfo: 'Roy, located near Hill Air Force Base, offers a strong military community and family-friendly environment. Our dumpster services support Roy\'s military and residential community.',
    landmarks: 'Hill Air Force Base, Roy City Hall, Roy Park',
    localProjects: 'Supporting Roy\'s military community and residential projects',
    neighborhoods: 'Roy Central, Roy East, Roy West',
    localBusinesses: 'Preferred provider for Roy\'s military community and residential projects'
  },
  'syracuse': {
    displayName: 'Syracuse',
    historicalInfo: 'Syracuse, located along the Great Salt Lake, offers beautiful lake views and growing residential communities. Our dumpster services support Syracuse\'s lakeside development.',
    landmarks: 'Great Salt Lake, Syracuse City Hall, Syracuse Park',
    localProjects: 'Supporting Syracuse\'s lakeside development and residential projects',
    neighborhoods: 'Syracuse Central, Syracuse East, Syracuse West',
    localBusinesses: 'Trusted by Syracuse\'s lakeside and residential developers'
  },
  'kearns': {
    displayName: 'Kearns',
    historicalInfo: 'Kearns, a diverse community in the Salt Lake Valley, offers a strong sense of community and convenient access to the valley. Our dumpster services support Kearns\' community growth.',
    landmarks: 'Kearns City Hall, Kearns Park, Kearns High School',
    localProjects: 'Supporting Kearns\' community development and residential projects',
    neighborhoods: 'Kearns Central, Kearns East, Kearns West',
    localBusinesses: 'Preferred provider for Kearns\' community and residential projects'
  },
  'magna': {
    displayName: 'Magna',
    historicalInfo: 'Magna, a historic mining community in the Salt Lake Valley, offers a strong sense of history and community. Our dumpster services support Magna\'s historic preservation and growth.',
    landmarks: 'Magna City Hall, Magna Park, Historic Magna Main Street',
    localProjects: 'Supporting Magna\'s historic preservation and community projects',
    neighborhoods: 'Magna Central, Magna East, Magna West',
    localBusinesses: 'Trusted by Magna\'s historic preservation and community projects'
  },
  'tooele': {
    displayName: 'Tooele',
    historicalInfo: 'Tooele, located in Tooele County, offers beautiful mountain views and a strong sense of community. Our dumpster services support Tooele\'s mountain community development.',
    landmarks: 'Tooele City Hall, Tooele Park, Oquirrh Mountains',
    localProjects: 'Supporting Tooele\'s mountain community development and residential projects',
    neighborhoods: 'Tooele Central, Tooele East, Tooele West',
    localBusinesses: 'Preferred provider for Tooele\'s mountain community and residential projects'
  }
};

function generateCitySpecificContent(cityName, cityData) {
  return `
        {/* City-Specific Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About ${cityData.displayName}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ${cityData.historicalInfo}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Landmarks</h3>
              <p className="text-gray-600 text-sm">${cityData.landmarks}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Recent Projects</h3>
              <p className="text-gray-600 text-sm">${cityData.localProjects}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">${cityData.displayName} Service Areas</h2>
          <p className="text-gray-600 mb-4">We serve all of ${cityData.displayName} and surrounding communities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">${cityData.displayName} Areas:</h3>
              <ul className="space-y-1 text-gray-600">
                ${cityData.neighborhoods.split(', ').map(neighborhood => `<li>• ${neighborhood}</li>`).join('\n                ')}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Partnerships:</h3>
              <p className="text-gray-600 text-sm">${cityData.localBusinesses}</p>
            </div>
          </div>
        </div>`;
}

function updateCityPage(cityName) {
  const filePath = path.join(__dirname, '..', 'app', cityName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const cityData = citySpecificData[cityName];
  
  if (!cityData) {
    console.log(`No data found for ${cityName}`);
    return false;
  }
  
  // Check if city-specific content already exists
  if (content.includes('About ' + cityData.displayName)) {
    console.log(`City-specific content already exists for ${cityName}`);
    return false;
  }
  
  // Find the position to insert the new content (after the first service areas section)
  const serviceAreasIndex = content.indexOf('Service Areas');
  if (serviceAreasIndex === -1) {
    console.log(`Could not find service areas section in ${cityName}`);
    return false;
  }
  
  // Find the end of the service areas section
  const serviceAreasEndIndex = content.indexOf('</div>', serviceAreasIndex);
  if (serviceAreasEndIndex === -1) {
    console.log(`Could not find end of service areas section in ${cityName}`);
    return false;
  }
  
  // Generate the new content
  const newContent = generateCitySpecificContent(cityName, cityData);
  
  // Insert the new content after the service areas section
  const updatedContent = content.slice(0, serviceAreasEndIndex + 6) + newContent + content.slice(serviceAreasEndIndex + 6);
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent);
  console.log(`Added city-specific content to ${cityName}`);
  return true;
}

// Process all city pages
console.log('Adding city-specific content to pages...');
let updatedCount = 0;

for (const cityName of Object.keys(citySpecificData)) {
  try {
    if (updateCityPage(cityName)) {
      updatedCount++;
    }
  } catch (error) {
    console.error(`Error updating ${cityName}:`, error.message);
  }
}

console.log(`\nCompleted! Added city-specific content to ${updatedCount} city pages.`);
