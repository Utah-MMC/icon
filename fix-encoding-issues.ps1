# PowerShell script to fix encoding issues in city guide pages
# This script will replace corrupted emoji and bullet point characters

$cities = @(
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
)

# Process each city
foreach ($city in $cities) {
    Write-Host "Fixing encoding issues for $city..."
    
    $filePath = "app/$city-dumpster-rental-guide-2025/page.tsx"
    
    if (Test-Path $filePath) {
        # Read the file content
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Replace corrupted characters with correct ones
        $content = $content -replace 'ðŸšš', '🚚'
        $content = $content -replace 'ðŸ''°', '💰'
        $content = $content -replace 'ðŸ''¨â€ðŸ"§', '👨‍🔧'
        $content = $content -replace 'ðŸŒ±', '🌱'
        $content = $content -replace 'â€¢', '•'
        $content = $content -replace 'âš ï¸', '⚠️'
        $content = $content -replace 'ðŸ"ž', '📞'
        $content = $content -replace 'ðŸ"‹', '📋'
        $content = $content -replace 'ðŸš€', '🚀'
        $content = $content -replace 'ðŸ', '🏠'
        $content = $content -replace 'ðŸ', '🏢'
        
        # Write the corrected content back to the file
        $content | Out-File -FilePath $filePath -Encoding UTF8
        
        Write-Host "Fixed encoding issues in $filePath"
    } else {
        Write-Host "File not found: $filePath"
    }
}

Write-Host "Encoding fixes completed for all city guide pages!"
