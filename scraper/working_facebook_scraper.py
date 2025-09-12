#!/usr/bin/env python3
"""
Working Facebook Scraper
Focuses on sources that actually work for real leads
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

class WorkingFacebookScraper:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        
        # Search terms that actually work
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
        """Setup Chrome driver with stealth"""
        chrome_options = Options()
        
        # Stealth options
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
        
        self.logger.info("Working Chrome driver setup complete")
    
    def manual_login(self):
        """Guide user through manual login"""
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
            self.wait.until(EC.any_of(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, '[aria-label="Search"]')),
                EC.presence_of_element_located((By.CSS_SELECTOR, 'input[placeholder*="Search"]'))
            ))
            
            self.logged_in = True
            print("✅ Login verified! Starting working scraper...")
            return True
            
        except TimeoutException:
            print("❌ Login verification failed. Please make sure you're logged in.")
            return False
    
    def scrape_facebook_search_working(self):
        """Scrape Facebook search results - working version"""
        leads = []
        
        if not self.logged_in:
            return leads
        
        print("\n🔍 Scraping Facebook Search Results...")
        print("=" * 50)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching for: {search_term}")
                
                # Go to Facebook search
                search_url = f'https://www.facebook.com/search/posts/?q={search_term.replace(" ", "%20")}'
                self.driver.get(search_url)
                time.sleep(5)
                
                # Scroll to load more results
                for i in range(5):
                    self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(3)
                
                # Find all posts
                posts = self.driver.find_elements(By.CSS_SELECTOR, '[role="article"]')
                
                print(f"Found {len(posts)} posts for '{search_term}'")
                
                for post in posts[:20]:  # Limit to 20 posts per search
                    try:
                        lead = self.extract_lead_from_post(post, search_term)
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting lead from post: {e}")
                        continue
                
                time.sleep(random.uniform(3, 6))
                
            except Exception as e:
                self.logger.error(f"Error searching for {search_term}: {e}")
                continue
        
        return leads
    
    def extract_lead_from_post(self, post_element, search_term):
        """Extract lead from Facebook post"""
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
                'source': f'Facebook Search: {search_term}',
                'lead_type': project_type,
                'project_description': post_text[:300] + "..." if len(post_text) > 300 else post_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': 'Phone preferred' if phone else 'Facebook message',
                'notes': f"Found via Facebook search for: {search_term}",
                'post_url': post_url,
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from post: {e}")
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
    
    def save_leads_to_file(self, leads, filename='working_facebook_leads.json'):
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
    
    def run_working_scraper(self):
        """Main function to run the working scraper"""
        print("🚀 Working Facebook Scraper for Real Leads")
        print("=" * 60)
        print("This scraper focuses on sources that actually work:")
        print("• Facebook search results")
        print("• Real lead detection")
        print("• High-quality lead scoring")
        print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return []
            
            all_leads = []
            
            # Scrape Facebook search results
            search_leads = self.scrape_facebook_search_working()
            all_leads.extend(search_leads)
            
            # Save results
            if all_leads:
                self.save_leads_to_file(all_leads)
                
                print(f"\n🎉 Working Scraper Complete!")
                print(f"✅ Found {len(all_leads)} total leads")
                print(f"📁 Results saved to working_facebook_leads.json")
                
                # Show detailed summary
                print(f"\n📊 Lead Summary:")
                print(f"   ⭐ Average score: {sum(lead['lead_score'] for lead in all_leads) / len(all_leads):.1f}/100")
                print(f"   💰 Total estimated value: ${sum(lead['estimated_value'] for lead in all_leads):,}")
                
                # Show top leads
                top_leads = sorted(all_leads, key=lambda x: x['lead_score'], reverse=True)[:10]
                print(f"\n🏆 Top 10 Leads:")
                for i, lead in enumerate(top_leads, 1):
                    print(f"   {i:2d}. {lead['name']} - Score: {lead['lead_score']}/100 - ${lead['estimated_value']:,}")
                    print(f"       📞 {lead['phone'] or 'No phone'} | 📧 {lead['email'] or 'No email'}")
                    print(f"       🏗️ {lead['project_description'][:60]}...")
                    print()
            
            else:
                print("\n⚠️ No leads found. This could be due to:")
                print("   - No relevant posts found")
                print("   - Facebook's content filtering")
                print("   - Network connectivity issues")
            
            return all_leads
            
        except Exception as e:
            self.logger.error(f"Error running working scraper: {e}")
            return []
        
        finally:
            # Keep browser open for user to review
            print(f"\n🔍 Browser will remain open for you to review results.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the scraper...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the working Facebook scraper"""
    scraper = WorkingFacebookScraper()
    leads = scraper.run_working_scraper()
    
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
