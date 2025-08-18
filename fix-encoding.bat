@echo off
echo Fixing encoding issues in city guide pages...

powershell -Command "Get-ChildItem -Path 'app' -Filter '*dumpster-rental-guide-2025' -Directory | ForEach-Object { $file = '$($_.FullName)/page.tsx'; if (Test-Path $file) { $content = Get-Content $file -Raw; $content = $content -replace 'ðŸšš', '🚚'; $content = $content -replace 'ðŸ''°', '💰'; $content = $content -replace 'ðŸ''¨â€ðŸ\"§', '👨‍🔧'; $content = $content -replace 'ðŸŒ±', '🌱'; $content = $content -replace 'â€¢', '•'; $content = $content -replace 'âš ï¸', '⚠️'; $content = $content -replace 'ðŸ\"ž', '📞'; $content = $content -replace 'ðŸ\"‹', '📋'; $content = $content -replace 'ðŸš€', '🚀'; $content = $content -replace 'ðŸ', '🏠'; $content = $content -replace 'ðŸ', '🏢'; Set-Content $file $content -Encoding UTF8; Write-Host 'Fixed' $file } }"

echo Encoding fixes completed!
pause
