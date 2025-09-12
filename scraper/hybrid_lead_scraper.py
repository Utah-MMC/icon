#!/usr/bin/env python3
"""
Hybrid Lead Scraper
Combines multiple sources for real, actionable leads
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import json
import re
import logging
from datetime import datetime
import random
import requests
from bs4 import BeautifulSoup

class HybridLeadScraper:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        self.session = requests.Session()
        
        # Real sources that actually work
        self.sources = {
            'facebook_search': True,
            'facebook_marketplace': True,
            'facebook_groups': True,
            'google_my_business': True,
            'yellow_pages': True,
            'craigslist': True,
            'nextdoor': True,
            'angie_list': True
        }
        
        # High-value search terms
        self.search_terms = [
            'dumpster rental',
            'construction waste',
            'demolition',
            'renovation',
            'remodel',
            'contractor needed',
            'construction project',
            'home improvement',
            'excavation',
            'landscaping'
        ]
        
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)
    
    def setup_driver(self):
        """Setup Chrome driver with maximum stealth"""
        chrome_options = Options()
        
        # Maximum stealth options
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # User agent
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        
        # Window size
        chrome_options.add_argument('--window-size=1920,1080')
        
        # Disable images for faster loading
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2
        }
        chrome_options.add_experimental_option("prefs", prefs)
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 15)
        
        # Execute script to hide automation
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        self.logger.info("Hybrid Chrome driver setup complete")
    
    def manual_login(self):
        """Guide user through manual login"""
        print("\n🔐 Login Required")
        print("=" * 50)
        print("1. The browser will open to Facebook")
        print("2. Please log in manually with your credentials")
        print("3. Complete any 2FA if required")
        print("4. Once logged in, press ENTER here to continue")
        print("5. Do NOT close the browser window")
        print()
        
        # Open Facebook
        self.driver.get('https://www.facebook.com')
        
        # Wait for user to log in
        input("Press ENTER after you have successfully logged into Facebook...")
        
        # Verify login
        try:
            self.wait.until(EC.any_of(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, '[aria-label="Search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, 'input[placeholder*="Search"]'))
            ))
            
            self.logged_in = True
            print("✅ Login verified! Starting hybrid scraping...")
            return True
            
        except TimeoutException:
            print("❌ Login verification failed. Please make sure you're logged in.")
            return False
    
    def scrape_facebook_search_aggressive(self):
        """Aggressive Facebook search scraping"""
        leads = []
        
        if not self.logged_in:
            return leads
        
        print("\n🔍 Aggressive Facebook Search...")
        print("=" * 50)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching for: {search_term}")
                
                # Go to Facebook search
                search_url = f'https://www.facebook.com/search/posts/?q={search_term.replace(" ", "%20")}'
                self.driver.get(search_url)
                time.sleep(5)
                
                # Scroll multiple times to load more results
                for i in range(8):
                    self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(3)
                
                # Find all posts with multiple selectors
                post_selectors = [
                    '[role="article"]',
                    'div[data-testid="post"]',
                    'div[data-pagelet="FeedUnit"]',
                    'div[data-testid="post"]'
                ]
                
                posts = []
                for selector in post_selectors:
                    found = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    if found:
                        posts = found
                        self.logger.info(f"Found {len(posts)} posts using selector: {selector}")
                        break
                
                print(f"Found {len(posts)} posts for '{search_term}'")
                
                for post in posts[:30]:  # Limit to 30 posts per search
                    try:
                        lead = self.extract_lead_from_facebook_post(post, search_term, 'Facebook Search')
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting lead from Facebook post: {e}")
                        continue
                
                time.sleep(random.uniform(5, 8))
                
            except Exception as e:
                self.logger.error(f"Error searching for {search_term}: {e}")
                continue
        
        return leads
    
    def scrape_facebook_marketplace_aggressive(self):
        """Aggressive Facebook Marketplace scraping"""
        leads = []
        
        if not self.logged_in:
            return leads
        
        print("\n🛒 Aggressive Facebook Marketplace...")
        print("=" * 50)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching marketplace for: {search_term}")
                
                # Go to Facebook Marketplace
                url = f'https://www.facebook.com/marketplace/search/?query={search_term.replace(" ", "%20")}'
                self.driver.get(url)
                time.sleep(5)
                
                # Scroll multiple times to load more results
                for i in range(6):
                    self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(3)
                
                # Find all listings with multiple selectors
                listing_selectors = [
                    '[data-testid="marketplace-search-result"]',
                    'div[role="article"]',
                    'div[data-testid="post"]'
                ]
                
                listings = []
                for selector in listing_selectors:
                    found = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    if found:
                        listings = found
                        self.logger.info(f"Found {len(listings)} listings using selector: {selector}")
                        break
                
                print(f"Found {len(listings)} marketplace listings for '{search_term}'")
                
                for listing in listings[:25]:  # Limit to 25 per search
                    try:
                        lead = self.extract_lead_from_facebook_post(listing, search_term, 'Facebook Marketplace')
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting marketplace lead: {e}")
                        continue
                
                time.sleep(random.uniform(5, 8))
                
            except Exception as e:
                self.logger.error(f"Error searching marketplace for {search_term}: {e}")
                continue
        
        return leads
    
    def scrape_google_my_business(self):
        """Scrape Google My Business for construction leads"""
        leads = []
        
        print("\n🏢 Scraping Google My Business...")
        print("=" * 50)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching Google My Business for: {search_term}")
                
                # Go to Google My Business
                url = f'https://www.google.com/maps/search/{search_term.replace(" ", "+")}+utah'
                self.driver.get(url)
                time.sleep(5)
                
                # Scroll to load more results
                for i in range(3):
                    self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(3)
                
                # Find all business listings
                listings = self.driver.find_elements(By.CSS_SELECTOR, '[data-result-index]')
                
                print(f"Found {len(listings)} Google My Business listings for '{search_term}'")
                
                for listing in listings[:20]:  # Limit to 20 per search
                    try:
                        lead = self.extract_lead_from_google_business(listing, search_term)
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting Google business lead: {e}")
                        continue
                
                time.sleep(random.uniform(3, 6))
                
            except Exception as e:
                self.logger.error(f"Error searching Google My Business for {search_term}: {e}")
                continue
        
        return leads
    
    def scrape_craigslist_aggressive(self):
        """Aggressive Craigslist scraping"""
        leads = []
        
        print("\n📋 Aggressive Craigslist Scraping...")
        print("=" * 50)
        
        # Utah Craigslist cities
        craigslist_cities = [
            'saltlakecity',
            'provo',
            'ogden',
            'stgeorge'
        ]
        
        for city in craigslist_cities:
            for search_term in self.search_terms:
                try:
                    print(f"Searching Craigslist {city} for: {search_term}")
                    
                    # Go to Craigslist
                    url = f'https://{city}.craigslist.org/search/sss?query={search_term.replace(" ", "+")}'
                    self.driver.get(url)
                    time.sleep(5)
                    
                    # Find all listings
                    listings = self.driver.find_elements(By.CSS_SELECTOR, '.result-row')
                    
                    print(f"Found {len(listings)} Craigslist listings for '{search_term}' in {city}")
                    
                    for listing in listings[:15]:  # Limit to 15 per search
                        try:
                            lead = self.extract_lead_from_craigslist(listing, search_term, city)
                            if lead:
                                leads.append(lead)
                        except Exception as e:
                            self.logger.error(f"Error extracting Craigslist lead: {e}")
                            continue
                    
                    time.sleep(random.uniform(3, 6))
                    
                except Exception as e:
                    self.logger.error(f"Error searching Craigslist {city} for {search_term}: {e}")
                    continue
        
        return leads
    
    def extract_lead_from_facebook_post(self, post_element, search_term, source):
        """Extract lead from Facebook post (search or marketplace)"""
        try:
            # Get all text from the post
            post_text = post_element.text.strip()
            
            if not post_text or len(post_text) < 30:
                return None
            
            # Check for construction-related content
            construction_keywords = [
                'dumpster', 'construction', 'renovation', 'demolition', 'contractor',
                'remodel', 'excavation', 'landscaping', 'concrete', 'roofing',
                'home improvement', 'building', 'repair', 'installation', 'waste removal'
            ]
            
            text_lower = post_text.lower()
            if not any(keyword in text_lower for keyword in construction_keywords):
                return None
            
            # Extract author name
            author_elements = post_element.find_elements(By.CSS_SELECTOR, 'strong a, h3 a, a[role="link"]')
            author_name = "Facebook User"
            if author_elements:
                author_name = author_elements[0].text.strip()
            
            # Extract phone number
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', post_text)
            phone = phone_match.group() if phone_match else None
            
            # Extract email
            email_match = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', post_text)
            email = email_match.group() if email_match else None
            
            # Determine location
            utah_cities = [
                'Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem',
                'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville', 'Murray',
                'Draper', 'Riverton', 'Lehi', 'South Jordan', 'Roy', 'Pleasant Grove'
            ]
            
            location = 'Utah'
            for city in utah_cities:
                if city.lower() in text_lower:
                    location = city + ', UT'
                    break
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_project(post_text)
            
            # Calculate lead score
            lead_score = self.calculate_lead_score(phone, email, post_text, author_name)
            
            # Only return high-quality leads
            if lead_score < 60:
                return None
            
            lead = {
                'name': author_name,
                'email': email,
                'phone': phone,
                'company': None,
                'location': location,
                'source': f'{source}: {search_term}',
                'lead_type': project_type,
                'project_description': post_text[:300] + "..." if len(post_text) > 300 else post_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Phone preferred' if phone else 'Facebook message',
                'notes': f"Found via {source} searching for: {search_term}",
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Facebook post: {e}")
            return None
    
    def extract_lead_from_google_business(self, listing_element, search_term):
        """Extract lead from Google My Business listing"""
        try:
            # Get listing text
            listing_text = listing_element.text.strip()
            
            if not listing_text or len(listing_text) < 20:
                return None
            
            # Check for construction-related content
            text_lower = listing_text.lower()
            if not any(keyword in text_lower for keyword in ['construction', 'contractor', 'renovation', 'remodel', 'dumpster']):
                return None
            
            # Extract business name
            name_elements = listing_element.find_elements(By.CSS_SELECTOR, 'h3, .fontHeadlineSmall')
            business_name = "Google Business"
            if name_elements:
                business_name = name_elements[0].text.strip()
            
            # Extract phone number
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', listing_text)
            phone = phone_match.group() if phone_match else None
            
            # Extract address
            address_elements = listing_element.find_elements(By.CSS_SELECTOR, '.fontBodyMedium')
            address = "Utah"
            if address_elements:
                address = address_elements[0].text.strip()
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_project(listing_text)
            
            # Calculate lead score
            lead_score = self.calculate_lead_score(phone, None, listing_text, business_name)
            
            # Only return high-quality leads
            if lead_score < 60:
                return None
            
            lead = {
                'name': business_name,
                'email': None,
                'phone': phone,
                'company': business_name,
                'location': address,
                'source': f'Google My Business: {search_term}',
                'lead_type': project_type,
                'project_description': listing_text[:300] + "..." if len(listing_text) > 300 else listing_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Phone preferred' if phone else 'Google contact',
                'notes': f"Found on Google My Business searching for: {search_term}",
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Google business: {e}")
            return None
    
    def extract_lead_from_craigslist(self, listing_element, search_term, city):
        """Extract lead from Craigslist listing"""
        try:
            # Get listing text
            listing_text = listing_element.text.strip()
            
            if not listing_text or len(listing_text) < 20:
                return None
            
            # Check for construction-related content
            text_lower = listing_text.lower()
            if not any(keyword in text_lower for keyword in ['construction', 'contractor', 'renovation', 'remodel', 'dumpster']):
                return None
            
            # Extract title
            title_elements = listing_element.find_elements(By.CSS_SELECTOR, '.result-title')
            title = "Craigslist Listing"
            if title_elements:
                title = title_elements[0].text.strip()
            
            # Extract phone number
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', listing_text)
            phone = phone_match.group() if phone_match else None
            
            # Extract price
            price_elements = listing_element.find_elements(By.CSS_SELECTOR, '.result-price')
            price = None
            if price_elements:
                price = price_elements[0].text.strip()
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_project(listing_text)
            
            # Calculate lead score
            lead_score = self.calculate_lead_score(phone, None, listing_text, title)
            
            # Only return high-quality leads
            if lead_score < 60:
                return None
            
            lead = {
                'name': title,
                'email': None,
                'phone': phone,
                'company': None,
                'location': city.title(),
                'source': f'Craigslist {city}: {search_term}',
                'lead_type': project_type,
                'project_description': listing_text[:300] + "..." if len(listing_text) > 300 else listing_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Phone preferred' if phone else 'Craigslist contact',
                'notes': f"Found on Craigslist {city} searching for: {search_term}",
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Craigslist: {e}")
            return None
    
    def analyze_project(self, text):
        """Analyze text to determine project type and value"""
        text_lower = text.lower()
        
        if any(word in text_lower for word in ['dumpster', 'waste removal', 'debris']):
            project_type = 'Waste Removal Project'
            estimated_value = 2000
        elif any(word in text_lower for word in ['demolition', 'tear down', 'remove']):
            project_type = 'Demolition Project'
            estimated_value = 25000
        elif any(word in text_lower for word in ['renovation', 'remodel', 'renovate']):
            project_type = 'Renovation Project'
            estimated_value = 35000
        elif any(word in text_lower for word in ['construction', 'build', 'new construction']):
            project_type = 'Construction Project'
            estimated_value = 50000
        elif any(word in text_lower for word in ['roofing', 'roof', 'shingle']):
            project_type = 'Roofing Project'
            estimated_value = 15000
        elif any(word in text_lower for word in ['landscaping', 'landscape', 'yard']):
            project_type = 'Landscaping Project'
            estimated_value = 12000
        elif any(word in text_lower for word in ['concrete', 'driveway', 'patio']):
            project_type = 'Concrete Project'
            estimated_value = 18000
        else:
            project_type = 'General Construction'
            estimated_value = 20000
        
        return project_type, estimated_value
    
    def calculate_lead_score(self, phone, email, text, author_name):
        """Calculate lead quality score"""
        score = 50  # Base score
        
        # Contact information bonus
        if phone:
            score += 25
        if email:
            score += 15
        
        # Author credibility
        if author_name and author_name != "Facebook User" and len(author_name.split()) >= 2:
            score += 10
        
        # High-value indicators
        if any(word in text.lower() for word in ['urgent', 'asap', 'immediately', 'need help']):
            score += 15
        if any(word in text.lower() for word in ['budget', 'price', 'cost', 'quote', 'estimate']):
            score += 10
        if any(word in text.lower() for word in ['commercial', 'business', 'large', 'major']):
            score += 10
        
        return min(score, 100)
    
    def save_leads_to_file(self, leads, filename='hybrid_leads.json'):
        """Save leads to JSON file"""
        try:
            data = {
                'leads': leads,
                'metadata': {
                    'total_leads': len(leads),
                    'scraped_date': datetime.now().isoformat(),
                    'average_score': sum(lead['lead_score'] for lead in leads) / len(leads) if leads else 0,
                    'total_estimated_value': sum(lead['estimated_value'] for lead in leads)
                }
            }
            
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            self.logger.info(f"Saved {len(leads)} leads to {filename}")
        except Exception as e:
            self.logger.error(f"Error saving leads: {e}")
    
    def run_hybrid_scraper(self):
        """Main function to run the hybrid scraper"""
        print("🚀 Hybrid Lead Scraper for Real Results")
        print("=" * 60)
        print("This scraper will:")
        print("• Search Facebook posts aggressively")
        print("• Scrape Facebook Marketplace")
        print("• Search Google My Business")
        print("• Scrape Craigslist")
        print("• Combine all sources for maximum leads")
        print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return []
            
            all_leads = []
            
            # Scrape Facebook search results
            if self.sources['facebook_search']:
                search_leads = self.scrape_facebook_search_aggressive()
                all_leads.extend(search_leads)
                print(f"✅ Facebook Search: {len(search_leads)} leads")
            
            # Scrape Facebook Marketplace
            if self.sources['facebook_marketplace']:
                marketplace_leads = self.scrape_facebook_marketplace_aggressive()
                all_leads.extend(marketplace_leads)
                print(f"✅ Facebook Marketplace: {len(marketplace_leads)} leads")
            
            # Scrape Google My Business
            if self.sources['google_my_business']:
                google_leads = self.scrape_google_my_business()
                all_leads.extend(google_leads)
                print(f"✅ Google My Business: {len(google_leads)} leads")
            
            # Scrape Craigslist
            if self.sources['craigslist']:
                craigslist_leads = self.scrape_craigslist_aggressive()
                all_leads.extend(craigslist_leads)
                print(f"✅ Craigslist: {len(craigslist_leads)} leads")
            
            # Save results
            if all_leads:
                self.save_leads_to_file(all_leads)
                
                print(f"\n🎉 Hybrid Scraping Complete!")
                print(f"✅ Found {len(all_leads)} total leads")
                print(f"📁 Results saved to hybrid_leads.json")
                
                # Show detailed summary
                print(f"\n📊 Lead Summary:")
                print(f"   ⭐ Average score: {sum(lead['lead_score'] for lead in all_leads) / len(all_leads):.1f}/100")
                print(f"   💰 Total estimated value: ${sum(lead['estimated_value'] for lead in all_leads):,}")
                
                # Show top leads
                top_leads = sorted(all_leads, key=lambda x: x['lead_score'], reverse=True)[:15]
                print(f"\n🏆 Top 15 Leads:")
                for i, lead in enumerate(top_leads, 1):
                    print(f"   {i:2d}. {lead['name']} - Score: {lead['lead_score']}/100 - ${lead['estimated_value']:,}")
                    print(f"       📞 {lead['phone'] or 'No phone'} | 📧 {lead['email'] or 'No email'}")
                    print(f"       🏗️ {lead['project_description'][:60]}...")
                    print()
            
            else:
                print("\n⚠️ No leads found. This could be due to:")
                print("   - Anti-bot measures on websites")
                print("   - No relevant posts found")
                print("   - Network connectivity issues")
                print("   - Need to try different search terms")
            
            return all_leads
            
        except Exception as e:
            self.logger.error(f"Error running hybrid scraper: {e}")
            return []
        
        finally:
            # Keep browser open for user to review
            print(f"\n🔍 Browser will remain open for you to review results.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the scraper...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the hybrid lead scraper"""
    scraper = HybridLeadScraper()
    leads = scraper.run_hybrid_scraper()
    
    if leads:
        print(f"\n📋 All Leads Found:")
        print("-" * 50)
        for i, lead in enumerate(leads, 1):
            print(f"{i:2d}. {lead['name']}")
            print(f"    📞 {lead['phone'] or 'No phone'}")
            print(f"    📧 {lead['email'] or 'No email'}")
            print(f"    📍 {lead['location']}")
            print(f"    🏗️ {lead['project_description'][:60]}...")
            print(f"    ⭐ Score: {lead['lead_score']}/100")
            print(f"    💰 Value: ${lead['estimated_value']:,}")
            print()

if __name__ == "__main__":
    main()
