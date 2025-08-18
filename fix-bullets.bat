@echo off
echo Fixing bullet point characters in city guide pages...

powershell -Command "Get-ChildItem -Path 'app' -Filter '*dumpster-rental-guide-2025' -Directory | ForEach-Object { $file = '$($_.FullName)/page.tsx'; if (Test-Path $file) { $content = Get-Content $file -Raw; $content = $content -replace 'â€¢', '•'; Set-Content $file $content -Encoding UTF8; Write-Host 'Fixed bullets in' $file } }"

echo Bullet point fixes completed!
pause
