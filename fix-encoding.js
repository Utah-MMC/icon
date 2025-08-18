const fs = require('fs');
const path = require('path');

// List of all cities
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

// Character replacements
const replacements = [
    { from: 'ðŸšš', to: '🚚' },
    { from: 'ðŸ\'°', to: '💰' },
    { from: 'ðŸ\'¨â€ðŸ"§', to: '👨‍🔧' },
    { from: 'ðŸŒ±', to: '🌱' },
    { from: 'â€¢', to: '•' },
    { from: 'âš ï¸', to: '⚠️' },
    { from: 'ðŸ"ž', to: '📞' },
    { from: 'ðŸ"‹', to: '📋' },
    { from: 'ðŸš€', to: '🚀' },
    { from: 'ðŸ', to: '🏠' },
    { from: 'ðŸ', to: '🏢' }
];

console.log('Fixing encoding issues in city guide pages...');

cities.forEach(city => {
    const filePath = path.join('app', `${city}-dumpster-rental-guide-2025`, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            
            // Apply all replacements
            replacements.forEach(replacement => {
                content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
            });
            
            // Only write if content changed
            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Fixed encoding issues in ${filePath}`);
            } else {
                console.log(`No changes needed for ${filePath}`);
            }
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error.message);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Encoding fixes completed for all city guide pages!');
