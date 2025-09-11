#!/usr/bin/env python3
"""
Interactive Browser Scraper
Opens browsers for you to log in, then scrapes data automatically
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from enhanced_lead_generator import EnhancedLeadGenerator
import time
import json
import os

class InteractiveScraper:
    def __init__(self):
        self.generator = EnhancedLeadGenerator()
        self.drivers = {}
    
    def get_driver(self, website_name):
        """Get or create a driver for a website"""
        if website_name not in self.drivers:
            options = Options()
            options.add_argument('--no-sandbox')
            options.add_argument('--disable-dev-shm-usage')
            options.add_argument('--window-size=1920,1080')
            options.add_experimental_option("detach", True)
            
            self.drivers[website_name] = webdriver.Chrome(options=options)
        
        return self.drivers[website_name]
    
    def setup_website_session(self, website_name):
        """Setup a session for a specific website"""
        print(f"\n🔧 Setting up {website_name.upper()} session...")
        
        driver = self.get_driver(website_name)
        
        # Navigate to the website
        if website_name == 'reddit':
            url = 'https://www.reddit.com'
        elif website_name == 'craigslist':
            url = 'https://saltlakecity.craigslist.org'
        elif website_name == 'yellowpages':
            url = 'https://www.yellowpages.com'
        else:
            url = 'https://www.google.com'
        
        print(f"🌐 Opening {url}...")
        driver.get(url)
        
        # Wait for page to load
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            print("✅ Page loaded successfully!")
        except Exception as e:
            print(f"⚠️ Page load warning: {e}")
        
        return driver
    
    def manual_login_flow(self, website_name):
        """Guide user through manual login"""
        driver = self.setup_website_session(website_name)
        
        print(f"\n🔐 MANUAL LOGIN for {website_name.upper()}")
        print("=" * 50)
        print("📋 Instructions:")
        print("1. Log in to your account manually")
        print("2. Navigate to the search page you want to scrape")
        print("3. Make sure you can see the results you want")
        print("4. Press ENTER here when ready")
        print("=" * 50)
        
        input("Press ENTER when you're logged in and ready to scrape...")
        
        # Save cookies
        try:
            cookies = driver.get_cookies()
            cookie_file = f"cookies_{website_name}.json"
            with open(cookie_file, 'w') as f:
                json.dump(cookies, f)
            print(f"✅ Login session saved for {website_name}!")
        except Exception as e:
            print(f"⚠️ Could not save cookies: {e}")
        
        return driver
    
    def scrape_current_page(self, driver, website_name):
        """Scrape the current page the user is on"""
        print(f"\n🔍 Scraping current {website_name} page...")
        
        try:
            # Get page source
            page_source = driver.page_source
            
            # Look for leads based on website type
            if website_name == 'reddit':
                leads = self.generator.extract_reddit_leads_from_browser(driver)
            elif website_name == 'craigslist':
                leads = self.generator.extract_craigslist_leads_from_browser(driver)
            elif website_name == 'yellowpages':
                leads = self.generator.extract_yellowpages_leads_from_browser(driver)
            else:
                leads = self.generator.extract_generic_leads_from_browser(driver, website_name)
            
            print(f"📊 Found {len(leads)} leads on this page")
            
            if leads:
                print("\n📋 Lead Summary:")
                for i, lead in enumerate(leads[:5], 1):
                    print(f"{i}. {lead['name']} - {lead['company'] or 'N/A'}")
                    print(f"   📞 {lead['phone'] or 'No phone'}")
                    print(f"   📧 {lead['email'] or 'No email'}")
                    print(f"   📍 {lead['location']}")
                    print(f"   ⭐ Score: {lead['lead_score']}/100")
                    print()
                
                # Save to database
                self.generator.save_leads_to_database(leads)
                print(f"💾 Saved {len(leads)} leads to database")
            
            return leads
            
        except Exception as e:
            print(f"❌ Error scraping page: {e}")
            return []
    
    def run_interactive_scraping(self):
        """Main interactive scraping flow"""
        print("🚀 Interactive Browser Scraper")
        print("=" * 40)
        print("This will help you log in to websites and scrape data")
        print()
        
        websites = {
            '1': ('reddit', 'Reddit (HomeImprovement, Construction)'),
            '2': ('craigslist', 'Craigslist (Salt Lake City)'),
            '3': ('yellowpages', 'Yellow Pages (Utah contractors)'),
            '4': ('all', 'All websites')
        }
        
        print("📋 Available websites:")
        for key, (name, description) in websites.items():
            print(f"{key}. {description}")
        
        choice = input("\nEnter your choice (1-4): ").strip()
        
        if choice in websites:
            website_name, description = websites[choice]
            
            if website_name == 'all':
                # Setup all websites
                for name, desc in websites.items():
                    if name != '4':  # Skip 'all' option
                        site_name, _ = websites[name]
                        self.manual_login_flow(site_name)
                
                # Scrape all
                total_leads = []
                for name, desc in websites.items():
                    if name != '4':
                        site_name, _ = websites[name]
                        driver = self.get_driver(site_name)
                        leads = self.scrape_current_page(driver, site_name)
                        total_leads.extend(leads)
                
                print(f"\n🎉 Total leads found: {len(total_leads)}")
                
            else:
                # Setup single website
                driver = self.manual_login_flow(website_name)
                
                # Ask if user wants to scrape current page
                scrape_choice = input(f"\nScrape the current {website_name} page? (y/n): ").strip().lower()
                
                if scrape_choice == 'y':
                    leads = self.scrape_current_page(driver, website_name)
                    print(f"\n🎉 Found {len(leads)} leads from {website_name}")
        
        print("\n✅ Interactive scraping completed!")
        print("💡 Your login sessions are saved for future runs")

def main():
    scraper = InteractiveScraper()
    scraper.run_interactive_scraping()

if __name__ == "__main__":
    main()
