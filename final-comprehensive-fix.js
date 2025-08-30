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
    console.log(`Final comprehensive fix for ${city}...`);
    
    const filePath = path.join('app', `${city}-dumpster-rental-guide-2025`, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Comprehensive replacement of all corrupted characters
        const replacements = [
            // Bullet points
            { from: /â€¢/g, to: '•' },
            
            // Emoji characters
            { from: /🏠'°/g, to: '💰' },
            { from: /🏠'¨â€🏠"§/g, to: '👨‍🔧' },
            { from: /🏠'¨â€🏠"§/g, to: '👨‍🔧' },
            { from: /ðŸšš/g, to: '🚚' },
            { from: /ðŸ''°/g, to: '💰' },
            { from: /ðŸ''¨â€ðŸ"§/g, to: '👨‍🔧' },
            { from: /ðŸŒ±/g, to: '🌱' },
            { from: /âš ï¸/g, to: '⚠️' },
            { from: /ðŸ"ž/g, to: '📞' },
            { from: /ðŸ"‹/g, to: '📋' },
            { from: /ðŸš€/g, to: '🚀' },
            { from: /ðŸ/g, to: '🏠' },
            { from: /ðŸ/g, to: '🏢' },
            
            // Additional corrupted patterns
            { from: /Ã¢Å¡Â Ã¯Â¸Â/g, to: '⚠️' },
            { from: /🏠 Â Â/g, to: '🏠' },
            { from: /🏠 Â¢/g, to: '🏠' },
            { from: /🏠 â€œÅ¾/g, to: '📞' },
            { from: /🏠 â€œâ€¹/g, to: '📋' },
        ];
        
        // Apply all replacements
        replacements.forEach(({ from, to }) => {
            content = content.replace(from, to);
        });
        
        // Write the corrected content back to the file with UTF-8 encoding
        fs.writeFileSync(filePath, content, { encoding: 'utf8' });
        
        console.log(`Final comprehensive fix completed for ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Final comprehensive encoding fixes completed for all city guide pages!');
