#!/usr/bin/env python3
"""
Simple browser test - just opens a browser and navigates to a website
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_simple_browser():
    """Simple test to open browser and navigate"""
    print("🚀 Simple Browser Test")
    print("=" * 30)
    
    # Setup Chrome options
    options = Options()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--window-size=1920,1080')
    options.add_experimental_option("detach", True)  # Keep browser open
    
    print("🌐 Starting Chrome browser...")
    driver = webdriver.Chrome(options=options)
    
    try:
        # Test 1: Google
        print("📍 Test 1: Navigating to Google...")
        driver.get('https://www.google.com')
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        print("✅ Google loaded successfully!")
        time.sleep(2)
        
        # Test 2: Yellow Pages
        print("📍 Test 2: Navigating to Yellow Pages...")
        driver.get('https://www.yellowpages.com')
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        print("✅ Yellow Pages loaded successfully!")
        time.sleep(2)
        
        # Test 3: Craigslist
        print("📍 Test 3: Navigating to Craigslist...")
        driver.get('https://saltlakecity.craigslist.org')
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        print("✅ Craigslist loaded successfully!")
        time.sleep(2)
        
        # Test 4: Reddit
        print("📍 Test 4: Navigating to Reddit...")
        driver.get('https://www.reddit.com')
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        print("✅ Reddit loaded successfully!")
        
        print("\n🎉 All tests passed!")
        print("💡 The browser will stay open for you to explore")
        print("📋 You can now manually log in to any of these sites")
        
        # Keep browser open
        input("\nPress ENTER to close the browser...")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        driver.quit()
        print("🔒 Browser closed")

if __name__ == "__main__":
    test_simple_browser()
