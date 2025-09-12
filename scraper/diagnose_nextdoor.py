#!/usr/bin/env python3
"""
Diagnostic script for Nextdoor scraper
This will help understand what's happening with the search results
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from nextdoor_scraper import NextdoorScraper
from selenium.webdriver.common.by import By
import time

def diagnose_nextdoor():
    """Diagnose Nextdoor search issues"""
    print("🔍 Nextdoor Diagnostic Tool")
    print("=" * 50)
    
    scraper = NextdoorScraper()
    
    try:
        # Setup driver
        scraper.setup_driver()
        print("✅ Driver setup successful")
        
        # Test login detection
        if scraper.manual_login():
            print("✅ Login detection working")
            
            # Test different search approaches
            test_searches = [
                "https://www.nextdoor.com/search/?query=dumpster",
                "https://www.nextdoor.com/search/?query=construction",
                "https://www.nextdoor.com/search/?query=renovation",
                "https://www.nextdoor.com/search/?query=contractor",
                "https://www.nextdoor.com/",
                "https://www.nextdoor.com/news_feed/"
            ]
            
            for search_url in test_searches:
                print(f"\n🔍 Testing: {search_url}")
                scraper.driver.get(search_url)
                time.sleep(5)
                
                print(f"Current URL: {scraper.driver.current_url}")
                print(f"Page title: {scraper.driver.title}")
                
                # Check for various post selectors
                selectors_to_test = [
                    'article',
                    '[role="article"]',
                    '[class*="post"]',
                    '[class*="Post"]',
                    '[data-testid="post"]',
                    '[data-testid="Post"]',
                    '.post',
                    '.Post',
                    '[class*="card"]',
                    '[class*="Card"]',
                    '[class*="item"]',
                    '[class*="Item"]',
                    '[class*="result"]',
                    '[class*="Result"]',
                    'div[class*="post"]',
                    'div[class*="Post"]',
                    'div[class*="card"]',
                    'div[class*="Card"]'
                ]
                
                for selector in selectors_to_test:
                    try:
                        elements = scraper.driver.find_elements(By.CSS_SELECTOR, selector)
                        if elements:
                            print(f"  ✅ Found {len(elements)} elements with: {selector}")
                            
                            # Test text extraction on first element
                            if elements:
                                first_element = elements[0]
                                try:
                                    text = first_element.text.strip()
                                    if text:
                                        print(f"    📝 Text preview: {text[:100]}...")
                                    else:
                                        print(f"    ❌ No text found in element")
                                except Exception as e:
                                    print(f"    ❌ Text extraction error: {e}")
                        else:
                            print(f"  ❌ No elements found with: {selector}")
                    except Exception as e:
                        print(f"  ❌ Selector error: {e}")
                
                # Check page source for clues
                try:
                    page_source = scraper.driver.page_source
                    if "captcha" in page_source.lower():
                        print("  ⚠️ CAPTCHA detected in page source")
                    if "rate limit" in page_source.lower():
                        print("  ⚠️ Rate limiting detected in page source")
                    if "blocked" in page_source.lower():
                        print("  ⚠️ Blocking detected in page source")
                    
                    # Look for common Nextdoor class patterns
                    import re
                    class_patterns = re.findall(r'class="([^"]*post[^"]*)"', page_source, re.IGNORECASE)
                    if class_patterns:
                        print(f"  🔍 Found post-related classes: {class_patterns[:5]}")
                    
                    card_patterns = re.findall(r'class="([^"]*card[^"]*)"', page_source, re.IGNORECASE)
                    if card_patterns:
                        print(f"  🔍 Found card-related classes: {card_patterns[:5]}")
                        
                except Exception as e:
                    print(f"  ❌ Page source analysis error: {e}")
                
                print("-" * 30)
                
        else:
            print("❌ Login detection failed")
            
    except Exception as e:
        print(f"❌ Diagnostic failed: {e}")
        
    finally:
        if scraper.driver:
            print("\n🔍 Browser will remain open for manual inspection...")
            input("Press ENTER to close...")
            scraper.driver.quit()

if __name__ == "__main__":
    diagnose_nextdoor()
