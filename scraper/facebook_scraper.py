#!/usr/bin/env python3
"""
Facebook Scraper
Scrapes Facebook groups and pages for construction/dumpster rental leads
Requires manual login - no incognito mode
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
import os

class FacebookScraper:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        
        # Facebook groups and pages to scrape
        self.target_groups = [
            'Utah Construction Network',
            'Salt Lake City Home Improvement',
            'Utah Contractors Association',
            'West Jordan Construction',
            'Sandy Home Renovation',
            'Utah Real Estate Investors',
            'Salt Lake City Real Estate',
            'Utah Home Builders',
            'Provo Construction',
            'Ogden Contractors'
        ]
        
        # Expanded search terms for posts - more aggressive lead hunting
        self.search_terms = [
            'dumpster rental', 'dumpster', 'roll off', 'construction waste', 'demolition',
            'renovation', 'remodel', 'contractor needed', 'construction project', 'home improvement',
            'excavation', 'landscaping', 'junk removal', 'haul away', 'cleanout', 'roof tear-off',
            'concrete removal', 'debris removal', 'waste disposal', 'construction cleanup',
            'house cleanout', 'garage cleanout', 'basement cleanout', 'attic cleanout',
            'moving out', 'moving', 'estate sale', 'estate cleanout', 'hoarder cleanout',
            'fire damage', 'water damage', 'flood damage', 'storm damage', 'insurance claim',
            'roof replacement', 'siding replacement', 'window replacement', 'kitchen remodel',
            'bathroom remodel', 'basement finish', 'deck removal', 'fence removal',
            'pool removal', 'hot tub removal', 'tree removal', 'stump removal',
            'driveway replacement', 'patio removal', 'concrete work', 'asphalt work',
            'landscaping project', 'yard cleanup', 'garden removal', 'shed removal',
            'garage demolition', 'shed demolition', 'deck demolition', 'fence demolition',
            'pool demolition', 'hot tub demolition', 'concrete demolition', 'asphalt demolition'
        ]
        
        # Hashtags to search for
        self.hashtags = [
            '#dumpsterrental', '#construction', '#renovation', '#demolition', '#cleanout',
            '#junkremoval', '#haulaway', '#wasteremoval', '#constructionwaste', '#debrisremoval',
            '#homerenovation', '#homeimprovement', '#contractor', '#constructionproject',
            '#roofing', '#landscaping', '#concretework', '#excavation', '#moving',
            '#estatecleanout', '#garagecleanout', '#basementcleanout', '#atticcleanout',
            '#firedamage', '#waterdamage', '#flooddamage', '#stormdamage', '#insuranceclaim',
            '#roofreplacement', '#sidingreplacement', '#windowreplacement', '#kitchenremodel',
            '#bathroomremodel', '#basementfinish', '#deckremoval', '#fenceremoval',
            '#poolremoval', '#hottubremoval', '#treeremoval', '#stumpremoval',
            '#drivewayreplacement', '#patioremoval', '#concretework', '#asphaltwork',
            '#landscapingproject', '#yardcleanup', '#gardenremoval', '#shedremoval',
            '#garagedemolition', '#sheddemolition', '#deckdemolition', '#fencedemolition',
            '#pooldemolition', '#hottubdemolition', '#concretedemolition', '#asphaltdemolition'
        ]
        
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)
    
    def setup_driver(self):
        """Setup Chrome driver with stealth options"""
        chrome_options = Options()
        
        # Stealth options (but not incognito)
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
        self.wait = WebDriverWait(self.driver, 10)
        
        # Execute script to hide automation
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        self.logger.info("Chrome driver setup complete")
    
    def manual_login(self):
        """Guide user through manual login process"""
        print("\n🔐 Facebook Login Required")
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
            # Look for elements that indicate successful login
            self.wait.until(EC.any_of(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, '[aria-label="Search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, 'input[placeholder*="Search"]'))
            ))
            
            self.logged_in = True
            print("✅ Login verified! Starting to scrape...")
            return True
            
        except TimeoutException:
            print("❌ Login verification failed. Please make sure you're logged in.")
            return False
    
    def search_facebook_groups(self):
        """Search for relevant Facebook groups"""
        leads = []
        
        if not self.logged_in:
            print("❌ Not logged in. Please log in first.")
            return leads
        
        print("\n🔍 Searching Facebook Groups...")
        print("=" * 40)
        
        for group_name in self.target_groups:
            try:
                print(f"Searching for group: {group_name}")
                
                # Go to Facebook search
                self.driver.get('https://www.facebook.com/search/groups/?q=' + group_name.replace(' ', '%20'))
                time.sleep(3)
                
                # Look for group results
                group_links = self.driver.find_elements(By.CSS_SELECTOR, 'a[href*="/groups/"]')
                
                if group_links:
                    # Click on the first group result
                    group_links[0].click()
                    time.sleep(3)
                    
                    # Scrape posts from this group
                    group_leads = self.scrape_group_posts(group_name)
                    leads.extend(group_leads)
                    
                    print(f"Found {len(group_leads)} leads in {group_name}")
                
                time.sleep(2)
                
            except Exception as e:
                self.logger.error(f"Error searching group {group_name}: {e}")
                continue
        
        return leads
    
    def scrape_group_posts(self, group_name):
        """Scrape posts from a Facebook group"""
        leads = []
        
        try:
            # Scroll down to load more posts
            for i in range(3):
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(2)
            
            # Find all posts
            posts = self.driver.find_elements(By.CSS_SELECTOR, '[data-pagelet="FeedUnit"]')
            
            for post in posts[:20]:  # Limit to 20 posts per group
                try:
                    lead = self.extract_lead_from_post(post, group_name)
                    if lead:
                        leads.append(lead)
                except Exception as e:
                    self.logger.error(f"Error extracting lead from post: {e}")
                    continue
            
        except Exception as e:
            self.logger.error(f"Error scraping group posts: {e}")
        
        return leads
    
    def extract_lead_from_post(self, post_element, group_name):
        """Extract lead information from a Facebook post"""
        try:
            # Get post URL/link
            post_url = None
            try:
                # Look for post links
                post_links = post_element.find_elements(By.CSS_SELECTOR, 'a[href*="/posts/"], a[href*="/groups/"]')
                if post_links:
                    post_url = post_links[0].get_attribute('href')
                    if post_url and not post_url.startswith('http'):
                        post_url = 'https://www.facebook.com' + post_url
            except Exception as e:
                self.logger.debug(f"Could not extract post URL: {e}")
            
            # Get post text
            text_elements = post_element.find_elements(By.CSS_SELECTOR, '[data-ad-preview="message"]')
            if not text_elements:
                text_elements = post_element.find_elements(By.CSS_SELECTOR, 'div[data-ad-preview="message"]')
            if not text_elements:
                text_elements = post_element.find_elements(By.CSS_SELECTOR, 'span')
            
            post_text = ""
            for element in text_elements:
                text = element.text.strip()
                if len(text) > 20:  # Only consider substantial text
                    post_text += text + " "
            
            if not post_text or len(post_text) < 30:
                return None
            
            # Check if post is relevant to our business
            relevant_keywords = [
                'dumpster', 'construction', 'renovation', 'demolition', 'contractor',
                'remodel', 'excavation', 'landscaping', 'concrete', 'roofing',
                'home improvement', 'building', 'repair', 'installation', 'waste removal'
            ]
            
            if not any(keyword in post_text.lower() for keyword in relevant_keywords):
                return None
            
            # Extract author name
            author_elements = post_element.find_elements(By.CSS_SELECTOR, 'strong a, h3 a, [data-hovercard*="user"]')
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
                if city.lower() in post_text.lower():
                    location = city + ', UT'
                    break
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_facebook_project(post_text)
            
            # Calculate lead score
            lead_score = self.calculate_facebook_lead_score(phone, email, post_text, author_name)
            
            lead = {
                'name': author_name,
                'email': email,
                'phone': phone,
                'company': None,
                'location': location,
                'source': f'Facebook Group: {group_name}',
                'lead_type': project_type,
                'project_description': post_text[:300] + "..." if len(post_text) > 300 else post_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Facebook message' if not phone and not email else 'Phone preferred' if phone else 'Email preferred',
                'notes': f"Found in Facebook group: {group_name}",
                'post_url': post_url,
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Facebook post: {e}")
            return None
    
    def analyze_facebook_project(self, text):
        """Analyze Facebook post to determine project type and value"""
        text_lower = text.lower()
        
        # Project type analysis
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
    
    def calculate_facebook_lead_score(self, phone, email, text, author_name):
        """Calculate lead quality score for Facebook leads"""
        score = 60  # Base score for Facebook leads (higher than other sources)
        
        # Contact information bonus
        if phone:
            score += 20
        if email:
            score += 15
        
        # Author credibility (real name vs generic)
        if author_name and author_name != "Facebook User" and len(author_name.split()) >= 2:
            score += 10
        
        # Post quality indicators
        if any(word in text.lower() for word in ['urgent', 'asap', 'immediately', 'need help']):
            score += 15
        if any(word in text.lower() for word in ['budget', 'price', 'cost', 'quote', 'estimate']):
            score += 10
        if any(word in text.lower() for word in ['recommend', 'referral', 'experienced']):
            score += 5
        
        # Project size indicators
        if any(word in text.lower() for word in ['large', 'big', 'major', 'commercial']):
            score += 10
        if any(word in text.lower() for word in ['small', 'minor', 'quick']):
            score += 5
        
        return min(score, 100)  # Cap at 100
    
    def search_facebook_marketplace(self):
        """Search Facebook Marketplace for construction services"""
        leads = []
        
        if not self.logged_in:
            return leads
        
        print("\n🛒 Searching Facebook Marketplace...")
        print("=" * 40)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching marketplace for: {search_term}")
                
                # Go to Facebook Marketplace
                url = f'https://www.facebook.com/marketplace/search/?query={search_term.replace(" ", "%20")}'
                self.driver.get(url)
                time.sleep(3)
                
                # Look for service listings
                listings = self.driver.find_elements(By.CSS_SELECTOR, '[data-testid="marketplace-search-result"]')
                
                for listing in listings[:10]:  # Limit to 10 per search
                    try:
                        lead = self.extract_marketplace_lead(listing, search_term)
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting marketplace lead: {e}")
                        continue
                
                time.sleep(2)
                
            except Exception as e:
                self.logger.error(f"Error searching marketplace for {search_term}: {e}")
                continue
        
        return leads
    
    def extract_marketplace_lead(self, listing_element, search_term):
        """Extract lead from Facebook Marketplace listing"""
        try:
            # Get listing URL/link
            listing_url = None
            try:
                # Look for marketplace listing links
                listing_links = listing_element.find_elements(By.CSS_SELECTOR, 'a[href*="/marketplace/"]')
                if listing_links:
                    listing_url = listing_links[0].get_attribute('href')
                    if listing_url and not listing_url.startswith('http'):
                        listing_url = 'https://www.facebook.com' + listing_url
            except Exception as e:
                self.logger.debug(f"Could not extract listing URL: {e}")
            
            # Get listing text
            text_elements = listing_element.find_elements(By.CSS_SELECTOR, 'span, div')
            listing_text = ""
            for element in text_elements:
                text = element.text.strip()
                if len(text) > 10:
                    listing_text += text + " "
            
            if not listing_text or len(listing_text) < 20:
                return None
            
            # Extract author name
            author_elements = listing_element.find_elements(By.CSS_SELECTOR, 'strong, h3, a')
            author_name = "Marketplace User"
            if author_elements:
                author_name = author_elements[0].text.strip()
            
            # Extract price if available
            price_match = re.search(r'\$[\d,]+', listing_text)
            price = price_match.group() if price_match else None
            
            # Extract phone number
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', listing_text)
            phone = phone_match.group() if phone_match else None
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_facebook_project(listing_text)
            
            # Calculate lead score
            lead_score = self.calculate_facebook_lead_score(phone, None, listing_text, author_name)
            
            lead = {
                'name': author_name,
                'email': None,
                'phone': phone,
                'company': None,
                'location': 'Utah',
                'source': f'Facebook Marketplace: {search_term}',
                'lead_type': project_type,
                'project_description': listing_text[:300] + "..." if len(listing_text) > 300 else listing_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Facebook message' if not phone else 'Phone preferred',
                'notes': f"Found on Facebook Marketplace searching for: {search_term}",
                'post_url': listing_url,
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting marketplace lead: {e}")
            return None
    
    def save_leads_to_file(self, leads, filename='working_facebook_leads.json'):
        """Save leads to JSON file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(leads, f, indent=2, ensure_ascii=False)
            self.logger.info(f"Saved {len(leads)} leads to {filename}")
        except Exception as e:
            self.logger.error(f"Error saving leads: {e}")
    
    def run_facebook_scraper(self):
        """Main function to run the Facebook scraper"""
        print("🚀 Facebook Scraper for Construction Leads")
        print("=" * 50)
        print("This scraper will help you find construction and dumpster rental leads")
        print("from Facebook groups and marketplace.")
        print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return []
            
            all_leads = []
            
            # Search Facebook groups
            group_leads = self.search_facebook_groups()
            all_leads.extend(group_leads)
            
            # Search Facebook Marketplace
            marketplace_leads = self.search_facebook_marketplace()
            all_leads.extend(marketplace_leads)
            
            # Save results
            if all_leads:
                self.save_leads_to_file(all_leads)
                
                print(f"\n🎉 Scraping Complete!")
                print(f"✅ Found {len(all_leads)} total leads")
                print(f"📁 Results saved to facebook_leads.json")
                
                # Show summary
                print(f"\n📊 Lead Summary:")
                print(f"   🏢 Group leads: {len(group_leads)}")
                print(f"   🛒 Marketplace leads: {len(marketplace_leads)}")
                print(f"   ⭐ Average score: {sum(lead['lead_score'] for lead in all_leads) / len(all_leads):.1f}/100")
                print(f"   💰 Total estimated value: ${sum(lead['estimated_value'] for lead in all_leads):,}")
            
            else:
                print("\n⚠️ No leads found. This could be due to:")
                print("   - No relevant posts in the searched groups")
                print("   - Facebook's content filtering")
                print("   - Network connectivity issues")
            
            return all_leads
            
        except Exception as e:
            self.logger.error(f"Error running Facebook scraper: {e}")
            return []
        
        finally:
            # Keep browser open for user to review
            print(f"\n🔍 Browser will remain open for you to review results.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the scraper...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the Facebook scraper"""
    scraper = FacebookScraper()
    leads = scraper.run_facebook_scraper()
    
    if leads:
        print(f"\n📋 Top Leads Found:")
        print("-" * 30)
        for i, lead in enumerate(leads[:10], 1):
            print(f"{i}. {lead['name']}")
            print(f"   📞 {lead['phone'] or 'No phone'}")
            print(f"   📧 {lead['email'] or 'No email'}")
            print(f"   📍 {lead['location']}")
            print(f"   🏗️ {lead['project_description'][:60]}...")
            print(f"   ⭐ Score: {lead['lead_score']}/100")
            print(f"   💰 Value: ${lead['estimated_value']:,}")
            print()

if __name__ == "__main__":
    main()
