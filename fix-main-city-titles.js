const fs = require('fs');
const path = require('path');

const mainCities = [
    "american-fork",
    "bluffdale",
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
    "murray",
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

// Process main city pages
mainCities.forEach(city => {
    console.log(`Fixing main city titles for ${city}...`);
    
    const filePath = path.join('app', city, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix corrupted emoji characters in titles
        content = content.replace(/ðŸŸ /g, '🏠 ');
        content = content.replace(/ðŸŸ¢/g, '🏢');
        content = content.replace(/ðŸŸ Need a Permit\?/g, '📞 Need a Permit?');
        
        // Write the corrected content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Fixed main city titles for ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Main city title fixes completed!');
