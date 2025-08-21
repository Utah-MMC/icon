# PowerShell script to remove "tons included" from all city guide pages
$searchPath = "app/*-dumpster-rental-guide-2025/page.tsx"

# Find all city guide pages
$files = Get-ChildItem -Path $searchPath -Recurse

Write-Host "Found $($files.Count) city guide pages to update..."

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)"
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Remove "4 tons included" and "Up to 2 tons included"
    $content = $content -replace '<p className="text-gray-600 mb-4">4 tons included</p>', ''
    $content = $content -replace '<p>• Up to 2 tons included</p>', ''
    
    # Write back to file
    Set-Content $file.FullName $content -NoNewline
    
    Write-Host "Updated: $($file.Name)"
}

Write-Host "Completed removing 'tons included' from all city guide pages!"
