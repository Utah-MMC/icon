#!/usr/bin/env python3
"""
Facebook Group Manager
Helps you join relevant Facebook groups for lead generation
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import json
import logging

class FacebookGroupManager:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        self.joined_groups = []
        self.pending_groups = []
        
        # Target groups for construction/dumpster rental leads
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
            'South Jordan Contractors',
            'Utah Remodeling Professionals',
            'Salt Lake City Real Estate Investors',
            'Utah Property Management',
            'Utah Construction Jobs',
            'Utah Home Renovation',
            'Utah Construction Services',
            'Salt Lake City Home Builders',
            'Utah Construction Equipment',
            'Utah Construction Materials',
            'Utah Construction Safety'
        ]
        
        logging.basicConfig(level=logging.INFO)
        self.logger = logging.getLogger(__name__)
    
    def setup_driver(self):
        """Setup Chrome driver"""
        chrome_options = Options()
        
        # Basic options
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # User agent
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        
        # Window size
        chrome_options.add_argument('--window-size=1920,1080')
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 10)
        
        # Execute script to hide automation
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        self.logger.info("Chrome driver setup complete")
    
    def manual_login(self):
        """Guide user through manual login"""
        print("\n🔐 Facebook Login Required")
        print("=" * 50)
        print("1. The browser will open to Facebook")
        print("2. Please log in manually with your credentials")
        print("3. Complete any 2FA if required")
        print("4. Once logged in, press ENTER here to continue")
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
            print("✅ Login verified!")
            return True
            
        except TimeoutException:
            print("❌ Login verification failed. Please make sure you're logged in.")
            return False
    
    def search_and_join_groups(self):
        """Search for and attempt to join target groups"""
        if not self.logged_in:
            print("❌ Not logged in. Please log in first.")
            return
        
        print("\n🔍 Searching for Target Groups...")
        print("=" * 50)
        
        for group_name in self.target_groups:
            try:
                print(f"\nSearching for: {group_name}")
                
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
                    
                    # Check current status and attempt to join
                    status = self.check_and_join_group(group_name)
                    
                    if status == 'joined':
                        self.joined_groups.append(group_name)
                        print(f"✅ Successfully joined: {group_name}")
                    elif status == 'pending':
                        self.pending_groups.append(group_name)
                        print(f"⏳ Join request sent (pending approval): {group_name}")
                    elif status == 'already_member':
                        self.joined_groups.append(group_name)
                        print(f"ℹ️ Already a member: {group_name}")
                    else:
                        print(f"❌ Could not join: {group_name}")
                else:
                    print(f"⚠️ Group not found: {group_name}")
                
                time.sleep(2)
                
            except Exception as e:
                self.logger.error(f"Error processing group {group_name}: {e}")
                continue
        
        # Save results
        self.save_group_status()
    
    def check_and_join_group(self, group_name):
        """Check group status and attempt to join"""
        try:
            # Look for join button
            join_selectors = [
                '[aria-label*="Join"]',
                '[data-testid*="join"]',
                'button:contains("Join")',
                'div[role="button"]:contains("Join")'
            ]
            
            join_button = None
            for selector in join_selectors:
                try:
                    join_button = self.driver.find_element(By.CSS_SELECTOR, selector)
                    if join_button and join_button.is_displayed():
                        break
                except:
                    continue
            
            if join_button:
                # Check if it's a "Join Group" button
                button_text = join_button.text.lower()
                if 'join' in button_text:
                    print(f"🔄 Attempting to join: {group_name}")
                    join_button.click()
                    time.sleep(3)
                    
                    # Check if join was successful or pending
                    try:
                        # Look for success indicators
                        success_indicators = [
                            'joined',
                            'member',
                            'leave group',
                            'post'
                        ]
                        
                        page_text = self.driver.page_source.lower()
                        if any(indicator in page_text for indicator in success_indicators):
                            return 'joined'
                        else:
                            return 'pending'
                    except:
                        return 'pending'
                else:
                    return 'already_member'
            else:
                # Check if already a member
                try:
                    # Look for indicators that we're already a member
                    member_indicators = [
                        'leave group',
                        'post',
                        'member',
                        'joined'
                    ]
                    
                    page_text = self.driver.page_source.lower()
                    if any(indicator in page_text for indicator in member_indicators):
                        return 'already_member'
                    else:
                        return 'not_accessible'
                except:
                    return 'not_accessible'
                    
        except Exception as e:
            self.logger.error(f"Error checking group status for {group_name}: {e}")
            return 'error'
    
    def save_group_status(self):
        """Save group membership status to file"""
        try:
            data = {
                'joined_groups': self.joined_groups,
                'pending_groups': self.pending_groups,
                'total_joined': len(self.joined_groups),
                'total_pending': len(self.pending_groups),
                'last_updated': time.strftime('%Y-%m-%d %H:%M:%S')
            }
            
            with open('facebook_group_status.json', 'w') as f:
                json.dump(data, f, indent=2)
            
            print(f"\n📁 Group status saved to facebook_group_status.json")
            
        except Exception as e:
            self.logger.error(f"Error saving group status: {e}")
    
    def show_group_recommendations(self):
        """Show additional group recommendations"""
        print("\n💡 Additional Group Recommendations:")
        print("=" * 50)
        print("Consider joining these additional groups for more leads:")
        print()
        
        additional_groups = [
            'Utah Business Network',
            'Salt Lake City Entrepreneurs',
            'Utah Small Business Owners',
            'Utah Service Providers',
            'Salt Lake City Local Business',
            'Utah Construction Equipment Rentals',
            'Utah Waste Management',
            'Utah Environmental Services',
            'Utah Recycling',
            'Utah Green Building',
            'Utah Sustainable Construction',
            'Utah Construction Safety',
            'Utah Building Codes',
            'Utah Construction Permits',
            'Utah Construction Inspections'
        ]
        
        for i, group in enumerate(additional_groups, 1):
            print(f"{i:2d}. {group}")
        
        print(f"\nTotal recommended groups: {len(additional_groups)}")
    
    def run_group_manager(self):
        """Main function to run the group manager"""
        print("🚀 Facebook Group Manager for Lead Generation")
        print("=" * 60)
        print("This tool will help you join relevant Facebook groups")
        print("for construction and dumpster rental lead generation.")
        print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return
            
            # Search and join groups
            self.search_and_join_groups()
            
            # Show results
            print(f"\n🎉 Group Management Complete!")
            print(f"✅ Successfully joined: {len(self.joined_groups)} groups")
            print(f"⏳ Pending approval: {len(self.pending_groups)} groups")
            
            if self.joined_groups:
                print(f"\n✅ Joined Groups:")
                for group in self.joined_groups:
                    print(f"   • {group}")
            
            if self.pending_groups:
                print(f"\n⏳ Pending Groups:")
                for group in self.pending_groups:
                    print(f"   • {group}")
            
            # Show additional recommendations
            self.show_group_recommendations()
            
            print(f"\n💡 Next Steps:")
            print("1. Wait for pending group approvals")
            print("2. Run the enhanced Facebook scraper")
            print("3. Check group status regularly")
            print("4. Consider joining additional recommended groups")
            
        except Exception as e:
            self.logger.error(f"Error running group manager: {e}")
        
        finally:
            # Keep browser open
            print(f"\n🔍 Browser will remain open for you to review.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the group manager...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the Facebook group manager"""
    manager = FacebookGroupManager()
    manager.run_group_manager()

if __name__ == "__main__":
    main()
