#!/usr/bin/env python3
"""
Reddit Manual Scraper
Opens Reddit in incognito mode and lets you manually navigate to scrape data
"""

from enhanced_lead_generator import EnhancedLeadGenerator
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import re

def reddit_manual_scraper():
    """Manual Reddit scraper with incognito mode"""
    print("🔴 Reddit Manual Scraper")
    print("=" * 40)
    print("This will open Reddit in incognito mode for manual navigation")
    print()
    
    # Initialize lead generator
    generator = EnhancedLeadGenerator()
    
    # Setup incognito Chrome with stealth
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
        # Start with Reddit homepage
        print("🌐 Opening Reddit...")
        driver.get('https://www.reddit.com')
        
        # Wait for page to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        
        print("✅ Reddit loaded successfully!")
        print("\n📋 Manual Navigation Instructions:")
        print("1. Navigate to subreddits like:")
        print("   - r/HomeImprovement")
        print("   - r/Construction") 
        print("   - r/SaltLakeCity")
        print("   - r/Utah")
        print("2. Search for keywords like:")
        print("   - 'construction'")
        print("   - 'renovation'")
        print("   - 'dumpster'")
        print("   - 'demolition'")
        print("3. When you find posts you want to scrape, press ENTER")
        print("4. The system will extract leads from the current page")
        print()
        
        while True:
            choice = input("Press ENTER to scrape current page, or 'q' to quit: ").strip().lower()
            
            if choice == 'q':
                break
            
            print("\n🔍 Scraping current page...")
            
            try:
                # Get current page content
                page_source = driver.page_source
                
                # Look for Reddit posts using multiple selectors
                leads = []
                
                # Try different Reddit post selectors
                selectors = [
                    '[data-testid="post-container"]',
                    '.Post',
                    '[data-click-id="body"]',
                    '.thing',
                    '.entry'
                ]
                
                for selector in selectors:
                    try:
                        posts = driver.find_elements(By.CSS_SELECTOR, selector)
                        if posts:
                            print(f"Found {len(posts)} posts with selector: {selector}")
                            break
                    except:
                        continue
                
                if not posts:
                    # Fallback: look for any text content
                    print("No posts found with standard selectors, analyzing page content...")
                    body = driver.find_element(By.TAG_NAME, "body")
                    text = body.text
                    
                    # Look for construction-related content
                    if any(keyword in text.lower() for keyword in ['construction', 'renovation', 'demolition', 'dumpster']):
                        # Look for Utah locations
                        if any(city.lower() in text.lower() for city in generator.utah_cities) or 'utah' in text.lower():
                            lead = {
                                'name': 'Reddit User',
                                'email': None,
                                'phone': None,
                                'company': None,
                                'location': 'Utah',
                                'source': 'Reddit Manual',
                                'lead_type': 'Residential Project',
                                'project_description': 'Construction project discussion on Reddit',
                                'estimated_value': 15000,
                                'lead_score': 75,
                                'contact_method': 'Reddit message',
                                'notes': f"Found on Reddit: {text[:200]}..."
                            }
                            leads.append(lead)
                            print(f"📊 Found 1 lead from page content")
                
                # Process found posts
                for post in posts[:10]:  # Limit to 10 posts
                    try:
                        # Get post text
                        post_text = post.text
                        
                        # Check if it's construction-related
                        if any(keyword in post_text.lower() for keyword in ['construction', 'renovation', 'demolition', 'dumpster']):
                            # Check for Utah location
                            if any(city.lower() in post_text.lower() for city in generator.utah_cities) or 'utah' in post_text.lower():
                                lead = {
                                    'name': 'Reddit User',
                                    'email': None,
                                    'phone': None,
                                    'company': None,
                                    'location': 'Utah',
                                    'source': 'Reddit Manual',
                                    'lead_type': 'Residential Project',
                                    'project_description': post_text[:100] + "...",
                                    'estimated_value': 15000,
                                    'lead_score': 75,
                                    'contact_method': 'Reddit message',
                                    'notes': f"Reddit post: {post_text[:200]}..."
                                }
                                leads.append(lead)
                    except Exception as e:
                        continue
                
                print(f"📊 Found {len(leads)} leads on this page")
                
                if leads:
                    print("\n📋 Lead Summary:")
                    for i, lead in enumerate(leads[:5], 1):
                        print(f"{i}. {lead['name']} - {lead['company'] or 'N/A'}")
                        print(f"   📍 {lead['location']}")
                        print(f"   🏗️ {lead['project_description'][:50]}...")
                        print(f"   ⭐ Score: {lead['lead_score']}/100")
                        print()
                    
                    # Save to database
                    generator.save_leads_to_database(leads)
                    print(f"💾 Saved {len(leads)} leads to database")
                else:
                    print("No construction-related leads found on this page")
                    print("💡 Try navigating to posts about construction, renovation, or dumpster needs")
                
            except Exception as e:
                print(f"❌ Error scraping page: {e}")
        
        print("\n✅ Reddit manual scraping completed!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        driver.quit()
        print("🔒 Browser closed")

if __name__ == "__main__":
    reddit_manual_scraper()
