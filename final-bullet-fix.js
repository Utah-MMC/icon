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
    console.log(`Final bullet fix for ${city}...`);
    
    const filePath = path.join('app', `${city}-dumpster-rental-guide-2025`, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix bullet points
        content = content.replace(/â€¢/g, '•');
        
        // Write the corrected content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Final bullet fix completed for ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

// Also fix the main city pages
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
    console.log(`Final bullet fix for main ${city} page...`);
    
    const filePath = path.join('app', city, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix bullet points
        content = content.replace(/â€¢/g, '•');
        
        // Write the corrected content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Final bullet fix completed for ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Final bullet fixes completed for all city pages!');
