#!/usr/bin/env python3
"""
Test Nextdoor Scraper - Debug Mode
Simple test to see what's happening after login
"""

from nextdoor_scraper import NextdoorScraper
import time

def main():
    print("🧪 NEXTDOOR SCRAPER TEST MODE")
    print("=" * 40)
    print("This will help debug what's happening after login")
    print()
    
    scraper = NextdoorScraper()
    
    try:
        # Setup driver
        scraper.setup_driver()
        
        # Manual login
        if not scraper.manual_login():
            print("❌ Login failed")
            return
        
        print("\n🔍 Testing search functionality...")
        
        # Test a simple search
        test_url = "https://www.nextdoor.com/search/?query=dumpster%20rental"
        print(f"Testing URL: {test_url}")
        
        scraper.driver.get(test_url)
        time.sleep(5)  # Wait for page to load
        
        # Check what we can find on the page
        print("\n📄 Page analysis:")
        print(f"Current URL: {scraper.driver.current_url}")
        print(f"Page title: {scraper.driver.title}")
        
        # Try different selectors
        selectors_to_test = [
            '[data-testid="post"]',
            '.post',
            '[class*="post"]',
            '[class*="Post"]',
            'article',
            '[role="article"]',
            '.PostCard',
            '.post-card'
        ]
        
        for selector in selectors_to_test:
            try:
                elements = scraper.driver.find_elements(scraper.driver.find_element.__globals__['By'].CSS_SELECTOR, selector)
                print(f"Selector '{selector}': {len(elements)} elements found")
                if elements:
                    print(f"  First element text: {elements[0].text[:100]}...")
            except Exception as e:
                print(f"Selector '{selector}': Error - {e}")
        
        # Check if we're on the right page
        page_source = scraper.driver.page_source
        if "nextdoor" in page_source.lower():
            print("✅ Confirmed on Nextdoor page")
        else:
            print("❌ Not on Nextdoor page")
        
        # Look for any text containing our keywords
        keywords = ['dumpster', 'rental', 'construction', 'demolition']
        for keyword in keywords:
            if keyword.lower() in page_source.lower():
                print(f"✅ Found keyword '{keyword}' in page source")
            else:
                print(f"❌ Keyword '{keyword}' not found in page source")
        
        print("\n🔍 Page source snippet (first 500 chars):")
        print(page_source[:500])
        
        print("\n⏳ Keeping browser open for 30 seconds for manual inspection...")
        time.sleep(30)
        
    except Exception as e:
        print(f"❌ Error: {e}")
    
    finally:
        if scraper.driver:
            scraper.driver.quit()

if __name__ == "__main__":
    main()
