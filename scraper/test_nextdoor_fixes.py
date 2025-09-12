#!/usr/bin/env python3
"""
Test script for Nextdoor scraper fixes
This will test the improved login detection and text extraction
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from nextdoor_scraper import NextdoorScraper
from selenium.webdriver.common.by import By

def test_scraper():
    """Test the improved scraper"""
    print("🧪 Testing Nextdoor Scraper Improvements")
    print("=" * 50)
    
    scraper = NextdoorScraper()
    
    try:
        # Setup driver
        scraper.setup_driver()
        print("✅ Driver setup successful")
        
        # Test login detection
        if scraper.manual_login():
            print("✅ Login detection working")
            
            # Test a simple search
            print("\n🔍 Testing search functionality...")
            scraper.driver.get('https://www.nextdoor.com/search/?query=dumpster')
            scraper._human_like_delay(3, 5)
            
            # Test post detection
            posts = scraper.driver.find_elements(By.CSS_SELECTOR, 'article, [role="article"], [class*="post"], [class*="Post"]')
            print(f"Found {len(posts)} posts")
            
            if posts:
                # Test text extraction on first post
                print("\n📝 Testing text extraction...")
                post = posts[0]
                scraper._expand_post(post)
                
                # Test the improved text extraction
                post_text = ""
                
                # Try the JavaScript method
                try:
                    js_text = scraper.driver.execute_script("""
                        var element = arguments[0];
                        var text = '';
                        var walker = document.createTreeWalker(
                            element,
                            NodeFilter.SHOW_TEXT,
                            null,
                            false
                        );
                        var node;
                        while (node = walker.nextNode()) {
                            if (node.textContent.trim().length > 3) {
                                text += node.textContent.trim() + ' ';
                            }
                        }
                        return text.trim();
                    """, post)
                    
                    if js_text:
                        post_text = js_text
                        print(f"✅ JavaScript text extraction: {len(post_text)} characters")
                        print(f"Preview: {post_text[:100]}...")
                    else:
                        print("❌ JavaScript text extraction failed")
                        
                except Exception as e:
                    print(f"❌ JavaScript text extraction error: {e}")
                
                # Test regular text extraction
                if not post_text:
                    try:
                        post_text = post.text.strip()
                        print(f"✅ Regular text extraction: {len(post_text)} characters")
                        print(f"Preview: {post_text[:100]}...")
                    except Exception as e:
                        print(f"❌ Regular text extraction error: {e}")
            
            else:
                print("❌ No posts found to test text extraction")
                
        else:
            print("❌ Login detection failed")
            
    except Exception as e:
        print(f"❌ Test failed: {e}")
        
    finally:
        if scraper.driver:
            print("\n🔍 Browser will remain open for manual inspection...")
            input("Press ENTER to close...")
            scraper.driver.quit()

if __name__ == "__main__":
    test_scraper()
