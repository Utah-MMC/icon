const fs = require('fs');
const path = require('path');

const cities = [
    "american-fork",
    "bountiful", 
    "centerville",
    "clearfield",
    "cottonwood-heights",
    "downtown-salt-lake",
    "draper",
    "eagle-mountain",
    "fairpark",
    "farmington",
    "glendale",
    "herriman",
    "holladay",
    "kaysville",
    "kearns",
    "layton",
    "lehi",
    "magna",
    "midvale",
    "millcreek",
    "north-salt-lake",
    "ogden",
    "orem",
    "park-city",
    "pleasant-grove",
    "poplar-grove",
    "provo",
    "riverton",
    "roy",
    "sandy",
    "saratoga-springs",
    "south-jordan",
    "south-salt-lake",
    "sugar-house",
    "syracuse",
    "taylorsville",
    "tooele",
    "west-jordan",
    "west-valley-city",
    "woods-cross"
];

// Process each city
cities.forEach(city => {
    console.log(`Fixing all remaining encoding issues for ${city}...`);
    
    const filePath = path.join('app', `${city}-dumpster-rental-guide-2025`, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix all remaining encoding issues
        content = content.replace(/🏠'°/g, '💰');
        content = content.replace(/🏠'¨â€🏠"§/g, '👨‍🔧');
        content = content.replace(/🏠'¨â€🏠"§/g, '👨‍🔧');
        content = content.replace(/â€¢/g, '•');
        content = content.replace(/Ã¢Å¡Â Ã¯Â¸Â/g, '⚠️');
        content = content.replace(/🏠 Â Â/g, '🏠');
        content = content.replace(/🏠 Â¢/g, '🏠');
        content = content.replace(/🏠 â€œÅ¾/g, '📞');
        content = content.replace(/🏠 â€œâ€¹/g, '📋');
        content = content.replace(/ðŸšš/g, '🚚');
        content = content.replace(/ðŸ''°/g, '💰');
        content = content.replace(/ðŸ''¨â€ðŸ"§/g, '👨‍🔧');
        content = content.replace(/ðŸŒ±/g, '🌱');
        content = content.replace(/âš ï¸/g, '⚠️');
        content = content.replace(/ðŸ"ž/g, '📞');
        content = content.replace(/ðŸ"‹/g, '📋');
        content = content.replace(/ðŸš€/g, '🚀');
        content = content.replace(/ðŸ/g, '🏠');
        content = content.replace(/ðŸ/g, '🏢');
        
        // Write the corrected content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Fixed all remaining encoding issues in ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('All remaining encoding fixes completed for all city guide pages!');
