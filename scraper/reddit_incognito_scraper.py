#!/usr/bin/env python3
"""
Reddit Incognito Scraper
Uses incognito mode to avoid login detection issues
"""

from enhanced_lead_generator import EnhancedLeadGenerator
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def reddit_incognito_scraper():
    """Scrape Reddit using incognito mode to avoid login issues"""
    print("🔴 Reddit Incognito Scraper")
    print("=" * 40)
    print("This will open Reddit in incognito mode to avoid login detection")
    print()
    
    # Initialize lead generator
    generator = EnhancedLeadGenerator()
    
    # Setup incognito Chrome
    options = Options()
    options.add_argument('--incognito')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.add_argument('--disable-extensions')
    options.add_argument('--disable-plugins')
    options.add_argument('--disable-default-apps')
    options.add_argument('--disable-sync')
    options.add_argument('--disable-translate')
    options.add_argument('--hide-scrollbars')
    options.add_argument('--mute-audio')
    options.add_argument('--no-first-run')
    options.add_argument('--window-size=1920,1080')
    
    # Remove automation indicators
    options.add_experimental_option("excludeSwitches", ["enable-automation", "enable-logging"])
    options.add_experimental_option('useAutomationExtension', False)
    options.add_experimental_option("detach", True)
    
    # Random user agent
    from fake_useragent import UserAgent
    ua = UserAgent()
    options.add_argument(f'--user-agent={ua.random}')
    
    print("🌐 Starting incognito Chrome browser...")
    driver = webdriver.Chrome(options=options)
    
    # Execute stealth scripts
    driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    driver.execute_script("Object.defineProperty(navigator, 'plugins', {get: () => [1, 2, 3, 4, 5]})")
    driver.execute_script("Object.defineProperty(navigator, 'languages', {get: () => ['en-US', 'en']})")
    driver.execute_script("window.chrome = { runtime: {} }")
    
    try:
        # Reddit URLs to scrape
        reddit_urls = [
            'https://www.reddit.com/r/HomeImprovement/search?q=construction&sort=new&t=week',
            'https://www.reddit.com/r/HomeImprovement/search?q=dumpster&sort=new&t=week',
            'https://www.reddit.com/r/HomeImprovement/search?q=renovation&sort=new&t=week',
            'https://www.reddit.com/r/Construction/search?q=utah&sort=new&t=week',
            'https://www.reddit.com/r/SaltLakeCity/search?q=construction&sort=new&t=week'
        ]
        
        all_leads = []
        
        for i, url in enumerate(reddit_urls, 1):
            print(f"\n📍 Scraping Reddit URL {i}/{len(reddit_urls)}")
            print(f"🔗 {url}")
            
            try:
                # Navigate to Reddit
                driver.get(url)
                
                # Wait for page to load
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.TAG_NAME, "body"))
                )
                
                print("✅ Page loaded successfully!")
                
                # Simulate human behavior
                time.sleep(2)
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight/2);")
                time.sleep(1)
                
                # Extract leads
                leads = generator.extract_reddit_leads_from_browser(driver)
                all_leads.extend(leads)
                
                print(f"📊 Found {len(leads)} leads on this page")
                
                # Be respectful
                time.sleep(3)
                
            except Exception as e:
                print(f"❌ Error scraping {url}: {e}")
                continue
        
        print(f"\n🎉 Reddit scraping completed!")
        print(f"📊 Total leads found: {len(all_leads)}")
        
        if all_leads:
            print("\n📋 Lead Summary:")
            for i, lead in enumerate(all_leads[:10], 1):  # Show first 10 leads
                print(f"{i}. {lead['name']} - {lead['company'] or 'N/A'}")
                print(f"   📞 {lead['phone'] or 'No phone'}")
                print(f"   📧 {lead['email'] or 'No email'}")
                print(f"   📍 {lead['location']}")
                print(f"   🏗️ {lead['project_description'][:50]}...")
                print(f"   ⭐ Score: {lead['lead_score']}/100")
                print()
            
            # Save to database
            generator.save_leads_to_database(all_leads)
            print(f"💾 Saved {len(all_leads)} leads to database")
        
        print("\n✅ Reddit incognito scraping completed!")
        print("💡 The browser will stay open for you to explore")
        
        # Keep browser open
        input("\nPress ENTER to close the browser...")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        driver.quit()
        print("🔒 Browser closed")

if __name__ == "__main__":
    reddit_incognito_scraper()
