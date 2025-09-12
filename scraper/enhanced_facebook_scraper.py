#!/usr/bin/env python3
"""
Enhanced Facebook Scraper
Advanced Facebook scraping with group management and better lead detection
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
import random

class EnhancedFacebookScraper:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        self.joined_groups = []
        
        # Facebook groups to target (you'll need to join these first)
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
            'Ogden Contractors',
            'Utah Landscaping Professionals',
            'Salt Lake City Contractors',
            'Utah Home Improvement',
            'West Valley Construction',
            'Murray Home Renovation',
            'Taylorsville Contractors',
            'Draper Construction',
            'Riverton Home Improvement',
            'Lehi Construction',
            'South Jordan Contractors'
        ]
        
        # Search terms for posts
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
            'landscaping',
            'concrete work',
            'roofing',
            'siding',
            'deck construction',
            'basement finishing',
            'kitchen remodel',
            'bathroom renovation',
            'garage construction',
            'fence installation',
            'driveway repair'
        ]
        
        # Keywords that indicate high-value leads
        self.high_value_keywords = [
            'commercial', 'business', 'office', 'warehouse', 'large project',
            'urgent', 'asap', 'immediately', 'budget', 'quote', 'estimate',
            'experienced', 'licensed', 'insured', 'referral', 'recommendation'
        ]
        
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)
    
    def setup_driver(self):
        """Setup Chrome driver with advanced stealth options"""
        chrome_options = Options()
        
        # Advanced stealth options
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # User agent
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        
        # Window size
        chrome_options.add_argument('--window-size=1920,1080')
        
        # Performance optimizations
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2,
            "profile.default_content_setting_values.media_stream": 2
        }
        chrome_options.add_experimental_option("prefs", prefs)
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 15)
        
        # Execute script to hide automation
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        self.logger.info("Enhanced Chrome driver setup complete")
    
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
            print("✅ Login verified! Starting enhanced scraping...")
            return True
            
        except TimeoutException:
            print("❌ Login verification failed. Please make sure you're logged in.")
            return False
    
    def check_group_membership(self, group_name):
        """Check if user is a member of a specific group"""
        try:
            # Search for the group
            search_url = f'https://www.facebook.com/search/groups/?q={group_name.replace(" ", "%20")}'
            self.driver.get(search_url)
            time.sleep(3)
            
            # Look for group results
            group_links = self.driver.find_elements(By.CSS_SELECTOR, 'a[href*="/groups/"]')
            
            if group_links:
                # Click on the first group result
                group_links[0].click()
                time.sleep(3)
                
                # Check if we can see posts (indicates membership)
                try:
                    # Look for posts or "Join Group" button
                    posts = self.driver.find_elements(By.CSS_SELECTOR, '[data-pagelet="FeedUnit"]')
                    join_button = self.driver.find_elements(By.CSS_SELECTOR, '[aria-label*="Join"], [data-testid*="join"]')
                    
                    if posts:
                        print(f"✅ You are a member of: {group_name}")
                        return True
                    elif join_button:
                        print(f"❌ You need to join: {group_name}")
                        return False
                    else:
                        print(f"⚠️ Could not determine membership status for: {group_name}")
                        return False
                        
                except Exception as e:
                    self.logger.error(f"Error checking membership for {group_name}: {e}")
                    return False
            
            return False
            
        except Exception as e:
            self.logger.error(f"Error checking group membership: {e}")
            return False
    
    def join_group_if_needed(self, group_name):
        """Attempt to join a group if not already a member"""
        try:
            # Look for join button
            join_buttons = self.driver.find_elements(By.CSS_SELECTOR, 
                '[aria-label*="Join"], [data-testid*="join"], button:contains("Join")')
            
            if join_buttons:
                print(f"🔄 Attempting to join: {group_name}")
                join_buttons[0].click()
                time.sleep(2)
                
                # Check if join was successful
                time.sleep(3)
                posts = self.driver.find_elements(By.CSS_SELECTOR, '[data-pagelet="FeedUnit"]')
                if posts:
                    print(f"✅ Successfully joined: {group_name}")
                    return True
                else:
                    print(f"❌ Failed to join: {group_name} (may require approval)")
                    return False
            else:
                print(f"ℹ️ No join button found for: {group_name}")
                return False
                
        except Exception as e:
            self.logger.error(f"Error joining group {group_name}: {e}")
            return False
    
    def scrape_joined_groups(self):
        """Scrape posts from groups the user has joined"""
        leads = []
        
        if not self.logged_in:
            print("❌ Not logged in. Please log in first.")
            return leads
        
        print("\n🔍 Scraping Joined Facebook Groups...")
        print("=" * 50)
        
        for group_name in self.target_groups:
            try:
                print(f"\nChecking group: {group_name}")
                
                # Check membership and join if needed
                if self.check_group_membership(group_name):
                    self.joined_groups.append(group_name)
                    
                    # Scrape posts from this group
                    group_leads = self.scrape_group_posts_enhanced(group_name)
                    leads.extend(group_leads)
                    
                    print(f"Found {len(group_leads)} leads in {group_name}")
                else:
                    # Try to join the group
                    if self.join_group_if_needed(group_name):
                        self.joined_groups.append(group_name)
                        
                        # Scrape posts from this group
                        group_leads = self.scrape_group_posts_enhanced(group_name)
                        leads.extend(group_leads)
                        
                        print(f"Found {len(group_leads)} leads in {group_name}")
                    else:
                        print(f"⚠️ Skipping {group_name} - not accessible")
                
                # Be respectful
                time.sleep(random.uniform(3, 6))
                
            except Exception as e:
                self.logger.error(f"Error processing group {group_name}: {e}")
                continue
        
        return leads
    
    def scrape_group_posts_enhanced(self, group_name):
        """Enhanced scraping of group posts with better detection"""
        leads = []
        
        try:
            # Scroll down multiple times to load more posts
            for i in range(5):
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(random.uniform(2, 4))
            
            # Find all posts with multiple selectors
            post_selectors = [
                '[data-pagelet="FeedUnit"]',
                '[role="article"]',
                '[data-testid="post"]',
                'div[data-testid="post"]'
            ]
            
            posts = []
            for selector in post_selectors:
                found_posts = self.driver.find_elements(By.CSS_SELECTOR, selector)
                if found_posts:
                    posts = found_posts
                    self.logger.info(f"Found {len(posts)} posts using selector: {selector}")
                    break
            
            if not posts:
                # Fallback: look for any divs that might contain posts
                all_divs = self.driver.find_elements(By.CSS_SELECTOR, 'div')
                posts = [div for div in all_divs if len(div.text) > 50 and 'construction' in div.text.lower()]
                self.logger.info(f"Fallback found {len(posts)} potential posts")
            
            for post in posts[:30]:  # Limit to 30 posts per group
                try:
                    lead = self.extract_lead_from_post_enhanced(post, group_name)
                    if lead:
                        leads.append(lead)
                except Exception as e:
                    self.logger.error(f"Error extracting lead from post: {e}")
                    continue
            
        except Exception as e:
            self.logger.error(f"Error scraping group posts: {e}")
        
        return leads
    
    def extract_lead_from_post_enhanced(self, post_element, group_name):
        """Enhanced lead extraction with better text analysis"""
        try:
            # Get all text from the post
            post_text = post_element.text.strip()
            
            if not post_text or len(post_text) < 30:
                return None
            
            # Enhanced relevance checking
            relevant_keywords = [
                'dumpster', 'construction', 'renovation', 'demolition', 'contractor',
                'remodel', 'excavation', 'landscaping', 'concrete', 'roofing',
                'home improvement', 'building', 'repair', 'installation', 'waste removal',
                'kitchen', 'bathroom', 'basement', 'garage', 'deck', 'fence',
                'driveway', 'patio', 'siding', 'windows', 'doors'
            ]
            
            # Check for relevance
            text_lower = post_text.lower()
            relevance_score = sum(1 for keyword in relevant_keywords if keyword in text_lower)
            
            if relevance_score < 1:
                return None
            
            # Extract author name with better selectors
            author_selectors = [
                'strong a', 'h3 a', '[data-hovercard*="user"]', 
                '[data-testid="post_chevron_button"]', 'a[role="link"]'
            ]
            
            author_name = "Facebook User"
            for selector in author_selectors:
                author_elements = post_element.find_elements(By.CSS_SELECTOR, selector)
                if author_elements:
                    author_name = author_elements[0].text.strip()
                    if author_name and len(author_name) > 1:
                        break
            
            # Extract contact information
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', post_text)
            phone = phone_match.group() if phone_match else None
            
            email_match = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', post_text)
            email = email_match.group() if email_match else None
            
            # Enhanced location detection
            utah_cities = [
                'Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem',
                'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville', 'Murray',
                'Draper', 'Riverton', 'Lehi', 'South Jordan', 'Roy', 'Pleasant Grove',
                'Millcreek', 'Midvale', 'Spanish Fork', 'Springville', 'American Fork',
                'Bountiful', 'Clearfield', 'Kaysville', 'Farmington', 'Centerville'
            ]
            
            location = 'Utah'
            for city in utah_cities:
                if city.lower() in text_lower:
                    location = city + ', UT'
                    break
            
            # Enhanced project analysis
            project_type, estimated_value = self.analyze_facebook_project_enhanced(post_text)
            
            # Enhanced lead scoring
            lead_score = self.calculate_facebook_lead_score_enhanced(
                phone, email, post_text, author_name, relevance_score
            )
            
            # Only return high-quality leads
            if lead_score < 50:
                return None
            
            lead = {
                'name': author_name,
                'email': email,
                'phone': phone,
                'company': None,
                'location': location,
                'source': f'Facebook Group: {group_name}',
                'lead_type': project_type,
                'project_description': post_text[:400] + "..." if len(post_text) > 400 else post_text,
                'estimated_value': estimated_value,
                'lead_score': lead_score,
                'contact_method': self.determine_contact_method(phone, email),
                'notes': f"Found in Facebook group: {group_name} (Relevance: {relevance_score})",
                'scraped_date': datetime.now().isoformat(),
                'relevance_score': relevance_score
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Facebook post: {e}")
            return None
    
    def analyze_facebook_project_enhanced(self, text):
        """Enhanced project analysis with more categories"""
        text_lower = text.lower()
        
        # More detailed project type analysis
        if any(word in text_lower for word in ['dumpster', 'waste removal', 'debris', 'junk removal']):
            project_type = 'Waste Removal Project'
            estimated_value = 2000
        elif any(word in text_lower for word in ['demolition', 'tear down', 'remove', 'knock down']):
            project_type = 'Demolition Project'
            estimated_value = 25000
        elif any(word in text_lower for word in ['kitchen', 'bathroom', 'renovation', 'remodel']):
            project_type = 'Home Renovation Project'
            estimated_value = 35000
        elif any(word in text_lower for word in ['construction', 'build', 'new construction', 'addition']):
            project_type = 'Construction Project'
            estimated_value = 50000
        elif any(word in text_lower for word in ['roofing', 'roof', 'shingle', 'gutter']):
            project_type = 'Roofing Project'
            estimated_value = 15000
        elif any(word in text_lower for word in ['landscaping', 'landscape', 'yard', 'garden']):
            project_type = 'Landscaping Project'
            estimated_value = 12000
        elif any(word in text_lower for word in ['concrete', 'driveway', 'patio', 'sidewalk']):
            project_type = 'Concrete Project'
            estimated_value = 18000
        elif any(word in text_lower for word in ['basement', 'finishing', 'basement finish']):
            project_type = 'Basement Finishing Project'
            estimated_value = 25000
        elif any(word in text_lower for word in ['garage', 'garage construction', 'garage build']):
            project_type = 'Garage Construction Project'
            estimated_value = 30000
        elif any(word in text_lower for word in ['deck', 'deck construction', 'deck build']):
            project_type = 'Deck Construction Project'
            estimated_value = 15000
        elif any(word in text_lower for word in ['fence', 'fencing', 'fence installation']):
            project_type = 'Fence Installation Project'
            estimated_value = 8000
        else:
            project_type = 'General Construction Project'
            estimated_value = 20000
        
        # Adjust value based on project size indicators
        if any(word in text_lower for word in ['large', 'big', 'major', 'commercial', 'business']):
            estimated_value *= 1.5
        elif any(word in text_lower for word in ['small', 'minor', 'quick', 'simple']):
            estimated_value *= 0.7
        
        return project_type, int(estimated_value)
    
    def calculate_facebook_lead_score_enhanced(self, phone, email, text, author_name, relevance_score):
        """Enhanced lead scoring with more factors"""
        score = 50  # Base score
        
        # Contact information bonus
        if phone:
            score += 25
        if email:
            score += 15
        
        # Author credibility
        if author_name and author_name != "Facebook User" and len(author_name.split()) >= 2:
            score += 10
        
        # Relevance score bonus
        score += min(relevance_score * 5, 20)
        
        # High-value indicators
        if any(word in text.lower() for word in self.high_value_keywords):
            score += 15
        
        # Urgency indicators
        if any(word in text.lower() for word in ['urgent', 'asap', 'immediately', 'need help', 'emergency']):
            score += 15
        
        # Budget indicators
        if any(word in text.lower() for word in ['budget', 'price', 'cost', 'quote', 'estimate', 'affordable']):
            score += 10
        
        # Professional indicators
        if any(word in text.lower() for word in ['licensed', 'insured', 'experienced', 'professional', 'certified']):
            score += 10
        
        # Referral indicators
        if any(word in text.lower() for word in ['recommend', 'referral', 'reference', 'experienced']):
            score += 5
        
        return min(score, 100)  # Cap at 100
    
    def determine_contact_method(self, phone, email):
        """Determine the best contact method"""
        if phone and email:
            return 'Phone preferred, email backup'
        elif phone:
            return 'Phone preferred'
        elif email:
            return 'Email preferred'
        else:
            return 'Facebook message'
    
    def search_facebook_marketplace_enhanced(self):
        """Enhanced Facebook Marketplace search"""
        leads = []
        
        if not self.logged_in:
            return leads
        
        print("\n🛒 Enhanced Facebook Marketplace Search...")
        print("=" * 50)
        
        for search_term in self.search_terms:
            try:
                print(f"Searching marketplace for: {search_term}")
                
                # Go to Facebook Marketplace
                url = f'https://www.facebook.com/marketplace/search/?query={search_term.replace(" ", "%20")}'
                self.driver.get(url)
                time.sleep(3)
                
                # Scroll to load more results
                for i in range(3):
                    self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(2)
                
                # Look for service listings with multiple selectors
                listing_selectors = [
                    '[data-testid="marketplace-search-result"]',
                    '[role="article"]',
                    'div[data-testid="post"]'
                ]
                
                listings = []
                for selector in listing_selectors:
                    found = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    if found:
                        listings = found
                        break
                
                for listing in listings[:15]:  # Limit to 15 per search
                    try:
                        lead = self.extract_marketplace_lead_enhanced(listing, search_term)
                        if lead:
                            leads.append(lead)
                    except Exception as e:
                        self.logger.error(f"Error extracting marketplace lead: {e}")
                        continue
                
                time.sleep(random.uniform(2, 4))
                
            except Exception as e:
                self.logger.error(f"Error searching marketplace for {search_term}: {e}")
                continue
        
        return leads
    
    def extract_marketplace_lead_enhanced(self, listing_element, search_term):
        """Enhanced marketplace lead extraction"""
        try:
            # Get listing text
            listing_text = listing_element.text.strip()
            
            if not listing_text or len(listing_text) < 20:
                return None
            
            # Check relevance
            text_lower = listing_text.lower()
            if not any(keyword in text_lower for keyword in ['construction', 'contractor', 'renovation', 'remodel', 'dumpster']):
                return None
            
            # Extract author name
            author_elements = listing_element.find_elements(By.CSS_SELECTOR, 'strong, h3, a, span')
            author_name = "Marketplace User"
            for element in author_elements:
                text = element.text.strip()
                if text and len(text) > 1 and len(text) < 50:
                    author_name = text
                    break
            
            # Extract price if available
            price_match = re.search(r'\$[\d,]+', listing_text)
            price = price_match.group() if price_match else None
            
            # Extract phone number
            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', listing_text)
            phone = phone_match.group() if phone_match else None
            
            # Determine project type and value
            project_type, estimated_value = self.analyze_facebook_project_enhanced(listing_text)
            
            # Calculate lead score
            lead_score = self.calculate_facebook_lead_score_enhanced(phone, None, listing_text, author_name, 1)
            
            # Only return high-quality leads
            if lead_score < 50:
                return None
            
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
                'scraped_date': datetime.now().isoformat()
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting marketplace lead: {e}")
            return None
    
    def save_leads_to_file(self, leads, filename='enhanced_facebook_leads.json'):
        """Save leads to JSON file with metadata"""
        try:
            data = {
                'leads': leads,
                'metadata': {
                    'total_leads': len(leads),
                    'joined_groups': self.joined_groups,
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
    
    def run_enhanced_facebook_scraper(self):
        """Main function to run the enhanced Facebook scraper"""
        print("🚀 Enhanced Facebook Scraper for Construction Leads")
        print("=" * 60)
        print("This enhanced scraper will:")
        print("• Check your group memberships")
        print("• Attempt to join relevant groups")
        print("• Use advanced lead detection")
        print("• Provide better lead scoring")
        print("• Search both groups and marketplace")
        print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return []
            
            all_leads = []
            
            # Scrape joined groups
            group_leads = self.scrape_joined_groups()
            all_leads.extend(group_leads)
            
            # Search Facebook Marketplace
            marketplace_leads = self.search_facebook_marketplace_enhanced()
            all_leads.extend(marketplace_leads)
            
            # Save results
            if all_leads:
                self.save_leads_to_file(all_leads)
                
                print(f"\n🎉 Enhanced Scraping Complete!")
                print(f"✅ Found {len(all_leads)} total leads")
                print(f"📁 Results saved to enhanced_facebook_leads.json")
                print(f"🏢 Joined {len(self.joined_groups)} groups")
                
                # Show detailed summary
                print(f"\n📊 Detailed Lead Summary:")
                print(f"   🏢 Group leads: {len(group_leads)}")
                print(f"   🛒 Marketplace leads: {len(marketplace_leads)}")
                print(f"   ⭐ Average score: {sum(lead['lead_score'] for lead in all_leads) / len(all_leads):.1f}/100")
                print(f"   💰 Total estimated value: ${sum(lead['estimated_value'] for lead in all_leads):,}")
                
                # Show top leads
                top_leads = sorted(all_leads, key=lambda x: x['lead_score'], reverse=True)[:5]
                print(f"\n🏆 Top 5 Leads:")
                for i, lead in enumerate(top_leads, 1):
                    print(f"   {i}. {lead['name']} - Score: {lead['lead_score']}/100 - ${lead['estimated_value']:,}")
            
            else:
                print("\n⚠️ No leads found. This could be due to:")
                print("   - No relevant posts in the searched groups")
                print("   - Need to join more groups first")
                print("   - Facebook's content filtering")
                print("   - Network connectivity issues")
            
            return all_leads
            
        except Exception as e:
            self.logger.error(f"Error running enhanced Facebook scraper: {e}")
            return []
        
        finally:
            # Keep browser open for user to review
            print(f"\n🔍 Browser will remain open for you to review results.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the scraper...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the enhanced Facebook scraper"""
    scraper = EnhancedFacebookScraper()
    leads = scraper.run_enhanced_facebook_scraper()
    
    if leads:
        print(f"\n📋 Top Leads Found:")
        print("-" * 40)
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
