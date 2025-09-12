#!/usr/bin/env python3
"""
Nextdoor Scraper
Scrapes Nextdoor for construction/dumpster rental leads
Requires manual login - uses persistent sessions
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import json
import csv
import re
import logging
import hashlib
import random
import os
from datetime import datetime, timedelta
import phonenumbers

class NextdoorScraper:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.logged_in = False
        self.seen = set()  # Track seen posts to avoid duplicates
        
        # High-intent phrases (must include at least one)
        self.INTENT_POS = [
            r"\blooking for\b", r"\bneed (?:a|an|to)\b", r"\brecommend(?:ation)?\b", r"\bISO\b",
            r"\banyone rent\b", r"\bwho can\b", r"\bdumpster\b", r"\bbin\b", r"\broll off\b",
            r"\bhaul away\b", r"\bdebris removal\b", r"\bjunk removal\b", r"\bdemolition\b",
            r"\bcleanout\b", r"\broof tear-off\b", r"\bconcrete removal\b", r"\bquote\b", r"\bestimate\b"
        ]
        
        # Exclude time-wasters
        self.INTENT_NEG = [
            r"\bDIY\b", r"\bjust sharing\b", r"\bsold\b", r"\bfree\b", r"\bgiveaway\b", 
            r"\bmeme\b", r"\bphoto dump\b"
        ]
        
        # Utah city abbreviations for location detection
        self.UT_CITY_ABBRS = {
            "salt lake": "Salt Lake City, UT", "sandy": "Sandy, UT", "ogden": "Ogden, UT", 
            "west jordan": "West Jordan, UT", "provo": "Provo, UT", "orem": "Orem, UT",
            "st. george": "St. George, UT", "lehi": "Lehi, UT", "south jordan": "South Jordan, UT",
            "taylorsville": "Taylorsville, UT", "murray": "Murray, UT", "draper": "Draper, UT",
            "riverton": "Riverton, UT", "layton": "Layton, UT", "pleasant grove": "Pleasant Grove, UT"
        }
        
        # Nextdoor neighborhoods and areas to search
        self.target_areas = [
            'Salt Lake City',
            'West Valley City', 
            'Provo',
            'West Jordan',
            'Orem',
            'Sandy',
            'Ogden',
            'St. George',
            'Layton',
            'Taylorsville',
            'Murray',
            'Draper',
            'Riverton',
            'Lehi',
            'South Jordan',
            'Roy',
            'Pleasant Grove'
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
        """Setup Chrome driver with stealth options and persistent session"""
        chrome_options = Options()
        
        # Stealth options (but not incognito)
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # Additional stealth options
        chrome_options.add_argument('--disable-web-security')
        chrome_options.add_argument('--allow-running-insecure-content')
        chrome_options.add_argument('--disable-extensions')
        chrome_options.add_argument('--disable-plugins')
        chrome_options.add_argument('--disable-images')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--disable-features=VizDisplayCompositor')
        chrome_options.add_argument('--disable-background-timer-throttling')
        chrome_options.add_argument('--disable-backgrounding-occluded-windows')
        chrome_options.add_argument('--disable-renderer-backgrounding')
        
        # User agent
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        
        # Window size
        chrome_options.add_argument('--window-size=1920,1080')
        
        # Persistent session
        chrome_options.add_argument(f'--user-data-dir={os.path.abspath("./chrome_profile")}')
        chrome_options.add_argument('--profile-directory=Default')
        
        # Disable images for faster loading
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2
        }
        chrome_options.add_experimental_option("prefs", prefs)
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 20)
        
        # Execute script to hide automation
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        
        self.logger.info("Chrome driver setup complete with persistent session")
    
    def _jitter(self, base=1.2, spread=0.8):
        """Add randomized delays to look more human"""
        time.sleep(max(0.2, random.uniform(base-spread, base+spread)))
    
    def _human_like_delay(self, min_seconds=2, max_seconds=5):
        """Add human-like delays between actions"""
        delay = random.uniform(min_seconds, max_seconds)
        time.sleep(delay)
    
    def _check_for_rate_limit(self):
        """Check if we're being rate limited or blocked"""
        try:
            # Check for common rate limiting indicators
            page_source = self.driver.page_source.lower()
            rate_limit_indicators = [
                'rate limit', 'too many requests', 'blocked', 'access denied',
                'captcha', 'robot', 'automated', 'suspicious activity'
            ]
            
            for indicator in rate_limit_indicators:
                if indicator in page_source:
                    print(f"⚠️ Possible rate limiting detected: {indicator}")
                    return True
            
            # Check if we're on a login page when we shouldn't be
            current_url = self.driver.current_url.lower()
            if 'login' in current_url or 'signin' in current_url:
                print("⚠️ Redirected to login page - possible session timeout")
                return True
                
            return False
        except Exception:
            return False
    
    def _is_high_intent(self, text):
        """Check if text contains high-intent phrases and excludes time-wasters"""
        tx = text.lower()
        pos = any(re.search(p, tx) for p in self.INTENT_POS)
        neg = any(re.search(n, tx) for n in self.INTENT_NEG)
        return pos and not neg
    
    def _norm_phone(self, text):
        """Normalize phone numbers using phonenumbers library"""
        try:
            for match in phonenumbers.PhoneNumberMatcher(text, "US"):
                if phonenumbers.is_possible_number(match.number) and phonenumbers.is_valid_number(match.number):
                    return phonenumbers.format_number(match.number, phonenumbers.PhoneNumberFormat.NATIONAL)
        except Exception as e:
            self.logger.debug(f"Phone normalization error: {e}")
        return None
    
    def _lead_key(self, post_text):
        """Generate unique key for post to avoid duplicates"""
        return hashlib.sha1(post_text.strip().encode('utf-8')).hexdigest()
    
    def _extract_budget(self, text):
        """Extract budget/price from text"""
        m = re.search(r'\$(\d{2,3}(?:,\d{3})*)', text.replace(" ", ""))
        return int(m.group(1).replace(",", "")) if m else None
    
    def _infer_location(self, text):
        """Infer location from text"""
        tl = text.lower()
        for k, v in self.UT_CITY_ABBRS.items():
            if k in tl:
                return v
        return "Utah"
    
    def _expand_post(self, post):
        """Expand 'See more' buttons in posts"""
        try:
            # Look for various "See more" button patterns
            see_more_selectors = [
                ".//div[@role='button' and .//span[contains(., 'See more')]]",
                ".//button[contains(., 'See more')]",
                ".//span[contains(., 'See more')]/..",
                ".//div[contains(., 'See more')]",
                ".//*[contains(text(), 'See more')]"
            ]
            
            for selector in see_more_selectors:
                try:
                    buttons = post.find_elements(By.XPATH, selector)
                    for b in buttons[:2]:
                        try:
                            self.driver.execute_script("arguments[0].click();", b)
                            time.sleep(0.5)
                        except Exception:
                            try:
                                b.click()
                                time.sleep(0.5)
                            except Exception:
                                pass
                except Exception:
                    continue
        except Exception:
            pass
    
    def _get_permalink_and_time(self, post):
        """Get permalink and timestamp from post"""
        link = None
        ts_iso = None
        
        # Look for post links
        anchors = post.find_elements(By.XPATH, ".//a[contains(@href,'/posts/') or contains(@href, '/permalink/')]")
        if anchors:
            link = anchors[0].get_attribute('href')
        
        # Look for timestamps
        time_els = post.find_elements(By.XPATH, ".//a/time|.//span[@data-tooltip-content]|.//time")
        if time_els:
            try:
                ts = time_els[0].get_attribute('datetime') or time_els[0].get_attribute('data-tooltip-content')
                ts_iso = ts if ts and 'T' in ts else None
            except Exception:
                pass
        
        return link, ts_iso
    
    def manual_login(self):
        """Guide user through manual login process"""
        print("\n🔐 Nextdoor Login Check")
        print("=" * 50)
        
        # Open Nextdoor
        self.driver.get('https://www.nextdoor.com')
        time.sleep(5)
        
        # Check if already logged in with multiple strategies
        login_indicators = [
            # Search elements
            'input[placeholder*="Search"]',
            '[data-testid="search"]',
            '[aria-label="Search"]',
            'input[type="search"]',
            # Profile/menu elements
            '[data-testid="profile-menu"]',
            '[aria-label="Profile"]',
            '[data-testid="user-menu"]',
            # Navigation elements
            '[data-testid="navigation"]',
            'nav',
            # Content elements that indicate logged in state
            '[data-testid="feed"]',
            '[class*="feed"]',
            'main',
            # Post elements
            'article',
            '[role="article"]',
            '[class*="post"]',
            '[class*="Post"]'
        ]
        
        logged_in = False
        for indicator in login_indicators:
            try:
                elements = self.driver.find_elements(By.CSS_SELECTOR, indicator)
                if elements:
                    print(f"✅ Found login indicator: {indicator} ({len(elements)} elements)")
                    logged_in = True
                    break
            except Exception:
                continue
        
        if logged_in:
            self.logged_in = True
            print("✅ Already logged in! Starting to scrape...")
            
            # Debug: Show what's on the page
            print("\n🔍 Debug: Checking page content...")
            print(f"Current URL: {self.driver.current_url}")
            print(f"Page title: {self.driver.title}")
            
            # Test a simple search
            print("\n🧪 Testing simple search...")
            try:
                test_url = "https://www.nextdoor.com/search/?query=dumpster"
                print(f"Testing URL: {test_url}")
                self.driver.get(test_url)
                time.sleep(5)
                
                print(f"Search page URL: {self.driver.current_url}")
                print(f"Search page title: {self.driver.title}")
                
                # Check for search results with multiple selectors
                search_selectors = [
                    'article', '[role="article"]', '[class*="post"]', '[class*="Post"]', 
                    '[class*="result"]', '[class*="search-result"]', '[data-testid="post"]'
                ]
                
                search_results = []
                for selector in search_selectors:
                    try:
                        results = self.driver.find_elements(By.CSS_SELECTOR, selector)
                        if results:
                            search_results.extend(results)
                            print(f"  Found {len(results)} results with selector: {selector}")
                    except Exception:
                        continue
                
                # Remove duplicates
                search_results = list(set(search_results))
                print(f"Total unique search results found: {len(search_results)}")
                
                if search_results:
                    print("✅ Search is working! Found results.")
                else:
                    print("❌ No search results found. This might be the issue.")
                    
            except Exception as e:
                print(f"❌ Search test failed: {e}")
            
            return True
            
        else:
            print("❌ Not logged in. Please log in manually:")
            print("1. Log in with your credentials in the browser")
            print("2. Complete any 2FA if required")
            print("3. Once logged in, press ENTER here to continue")
            print("4. Do NOT close the browser window")
            print()
            
            # Wait for user to log in
            input("Press ENTER after you have successfully logged into Nextdoor...")
            
            # Verify login again with improved detection
            print("\n🔍 Verifying login...")
            time.sleep(2)
            
            logged_in = False
            for indicator in login_indicators:
                try:
                    elements = self.driver.find_elements(By.CSS_SELECTOR, indicator)
                    if elements:
                        print(f"✅ Found login indicator: {indicator} ({len(elements)} elements)")
                        logged_in = True
                        break
                except Exception:
                    continue
            
            if logged_in:
                self.logged_in = True
                print("✅ Login verified! Starting to scrape...")
                return True
            else:
                print("❌ Login verification failed. Please make sure you're logged in.")
                print("Current URL:", self.driver.current_url)
                print("Page title:", self.driver.title)
                return False
    
    def search_nextdoor_posts(self, test_mode=False):
        """Search for relevant Nextdoor posts with multiple strategies"""
        leads = []
        
        if not self.logged_in:
            print("❌ Not logged in. Please log in first.")
            return leads
        
        print("\n🔍 Aggressive Nextdoor Lead Hunting...")
        print("=" * 50)
        
        # Strategy 1: Search by area + keywords
        print("📍 Strategy 1: Area + Keyword Search")
        
        areas_to_search = self.target_areas[:2] if test_mode else self.target_areas
        terms_to_search = self.search_terms[:3] if test_mode else self.search_terms[:20]
        
        for area in areas_to_search:
            for search_term in terms_to_search:
                try:
                    print(f"Searching: {area} + {search_term}")
                    
                    # Go to Nextdoor search with combined query
                    search_url = f'https://www.nextdoor.com/search/?query={area.replace(" ", "%20")}%20{search_term.replace(" ", "%20")}'
                    self.driver.get(search_url)
                    self._human_like_delay(3, 6)  # Longer, more human-like delays
                    
                    # Check for rate limiting
                    if self._check_for_rate_limit():
                        print(f"  ⚠️ Rate limiting detected, waiting 60 seconds...")
                        time.sleep(60)
                        continue
                    
                    # Look for post results with multiple selectors
                    posts = []
                    selectors = [
                        '[data-testid="post"]',
                        '[data-testid="Post"]',
                        'article',
                        '[role="article"]',
                        '.post',
                        '[class*="post"]',
                        '[class*="Post"]',
                        '.PostCard',
                        '.post-card',
                        '[class*="PostCard"]',
                        '[class*="post-card"]',
                        '[class*="result"]',
                        '[class*="search-result"]',
                        '[class*="item"]',
                        '[class*="card"]'
                    ]
                    
                    for selector in selectors:
                        try:
                            found_posts = self.driver.find_elements(By.CSS_SELECTOR, selector)
                            if found_posts:
                                posts.extend(found_posts)
                                print(f"  🔍 Found {len(found_posts)} posts with selector: {selector}")
                                # Don't break - collect from all selectors to get more posts
                        except Exception as e:
                            continue
                    
                    if posts:
                        # Remove duplicates
                        posts = list(set(posts))
                        print(f"  📝 Total unique posts found: {len(posts)}")
                        
                        # Scrape posts from this search
                        search_leads = self.scrape_area_posts(f"{area} - {search_term}", posts)
                        leads.extend(search_leads)
                        
                        if search_leads:
                            print(f"  ✅ Found {len(search_leads)} leads")
                        else:
                            print(f"  ⚠️ No leads extracted from {len(posts)} posts")
                    else:
                        print(f"  ❌ No posts found for: {area} + {search_term}")
                        # Debug: show page source snippet
                        try:
                            page_source = self.driver.page_source[:1000]
                            print(f"  🔍 Page source snippet: {page_source[:200]}...")
                        except:
                            pass
                    
                    self._human_like_delay(4, 8)
                    
                except Exception as e:
                    self.logger.error(f"Error searching {area} + {search_term}: {e}")
                    continue
        
        # Strategy 2: Hashtag search
        print("\n🏷️ Strategy 2: Hashtag Search")
        for hashtag in self.hashtags[:15]:  # Top 15 hashtags
            try:
                print(f"Searching hashtag: {hashtag}")
                
                # Go to Nextdoor search for hashtag
                search_url = f'https://www.nextdoor.com/search/?query={hashtag}'
                self.driver.get(search_url)
                self._human_like_delay(3, 6)
                
                # Look for post results
                posts = self.driver.find_elements(By.CSS_SELECTOR, '[data-testid="post"], .post, [class*="post"], [class*="Post"]')
                
                if posts:
                    # Scrape posts from this hashtag
                    hashtag_leads = self.scrape_area_posts(f"Hashtag: {hashtag}", posts)
                    leads.extend(hashtag_leads)
                    
                    if hashtag_leads:
                        print(f"  ✅ Found {len(hashtag_leads)} leads")
                
                self._human_like_delay(4, 8)
                
            except Exception as e:
                self.logger.error(f"Error searching hashtag {hashtag}: {e}")
                continue
        
        # Strategy 3: Recent posts in construction/renovation categories
        print("\n🏗️ Strategy 3: Category-based Search")
        categories = ['construction', 'renovation', 'home-improvement', 'contractors', 'services']
        for category in categories:
            try:
                print(f"Searching category: {category}")
                
                # Go to Nextdoor category search
                search_url = f'https://www.nextdoor.com/search/?query={category}&type=posts'
                self.driver.get(search_url)
                self._jitter(2, 1)
                
                # Look for post results
                posts = self.driver.find_elements(By.CSS_SELECTOR, '[data-testid="post"], .post, [class*="post"], [class*="Post"]')
                
                if posts:
                    # Scrape posts from this category
                    category_leads = self.scrape_area_posts(f"Category: {category}", posts)
                    leads.extend(category_leads)
                    
                    if category_leads:
                        print(f"  ✅ Found {len(category_leads)} leads")
                
                self._human_like_delay(4, 8)
                
            except Exception as e:
                self.logger.error(f"Error searching category {category}: {e}")
                continue
        
        return leads
    
    def scrape_area_posts(self, area_name, posts):
        """Scrape posts from a Nextdoor area"""
        leads = []
        
        try:
            for post in posts[:15]:  # Limit to 15 posts per area
                try:
                    lead = self.extract_lead_from_post(post, area_name)
                    if lead:
                        leads.append(lead)
                except Exception as e:
                    self.logger.error(f"Error extracting lead from post: {e}")
                    continue
            
        except Exception as e:
            self.logger.error(f"Error scraping area posts: {e}")
        
        return leads
    
    def extract_lead_from_post(self, post_element, area_name):
        """Extract lead information from a Nextdoor post"""
        try:
            # Expand post if needed
            self._expand_post(post_element)
            
            # Collect text from various elements with multiple strategies
            post_text = ""
            
            # Strategy 1: Look for specific data attributes and content areas
            try:
                # Try various data attributes that might contain post content
                data_selectors = [
                    ".//*[@data-ad-preview='message']//*[self::span or self::div]",
                    ".//*[@data-testid='post-content']//*[self::span or self::div]",
                    ".//*[@data-testid='post-text']//*[self::span or self::div]",
                    ".//*[@class*='post-content']//*[self::span or self::div]",
                    ".//*[@class*='post-text']//*[self::span or self::div]"
                ]
                
                for selector in data_selectors:
                    try:
                        message_elements = post_element.find_elements(By.XPATH, selector)
                        if message_elements:
                            text_parts = [c.text.strip() for c in message_elements if c.text and len(c.text.strip()) > 3]
                            if text_parts:
                                post_text = " ".join(text_parts)
                                if len(post_text) > 20:
                                    break
                    except:
                        continue
            except:
                pass
            
            # Strategy 2: Look for common post text containers with more specific selectors
            if not post_text or len(post_text) < 20:
                try:
                    text_selectors = [
                        # More specific selectors first
                        ".//div[contains(@class, 'post-content')]//span",
                        ".//div[contains(@class, 'post-content')]//div",
                        ".//div[contains(@class, 'post-text')]//span",
                        ".//div[contains(@class, 'post-text')]//div",
                        ".//div[contains(@class, 'content')]//span",
                        ".//div[contains(@class, 'content')]//div",
                        ".//div[contains(@class, 'message')]//span",
                        ".//div[contains(@class, 'message')]//div",
                        ".//div[contains(@class, 'body')]//span",
                        ".//div[contains(@class, 'body')]//div",
                        # Generic selectors
                        ".//span[contains(@class, 'text')]",
                        ".//div[contains(@class, 'text')]",
                        ".//p",
                        ".//span[contains(@class, 'content')]",
                        ".//div[contains(@class, 'content')]",
                        ".//span[contains(@class, 'message')]",
                        ".//div[contains(@class, 'message')]",
                        ".//span[contains(@class, 'body')]",
                        ".//div[contains(@class, 'body')]"
                    ]
                    
                    for selector in text_selectors:
                        try:
                            elements = post_element.find_elements(By.XPATH, selector)
                            if elements:
                                text_parts = [e.text.strip() for e in elements if e.text and len(e.text.strip()) > 3]
                                if text_parts:
                                    candidate_text = " ".join(text_parts)
                                    if len(candidate_text) > len(post_text):
                                        post_text = candidate_text
                                        if len(post_text) > 50:  # Good enough
                                            break
                        except:
                            continue
                except:
                    pass
            
            # Strategy 3: Get all text from the post element (fallback)
            if not post_text or len(post_text) < 20:
                try:
                    full_text = post_element.text.strip()
                    if len(full_text) > len(post_text):
                        post_text = full_text
                except:
                    pass
            
            # Strategy 4: Try to get text using JavaScript (for dynamic content)
            if not post_text or len(post_text) < 20:
                try:
                    js_text = self.driver.execute_script("""
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
                    """, post_element)
                    
                    if js_text and len(js_text) > len(post_text):
                        post_text = js_text
                except:
                    pass
            
            # Clean up the text
            post_text = re.sub(r"\s+", " ", post_text).strip()
            
            # Debug output
            print(f"    🔍 Post text length: {len(post_text)}")
            if len(post_text) > 0:
                print(f"    📝 Text preview: {post_text[:100]}...")
            
            # Early filtering - must be substantial and high-intent
            if len(post_text) < 40:
                print(f"    ❌ Post too short: {len(post_text)} chars")
                return None
            
            if not self._is_high_intent(post_text):
                print(f"    ❌ Post doesn't meet high-intent criteria")
                return None
            
            print(f"    ✅ Post passed initial filters")
            
            # Skip duplicates
            key = self._lead_key(post_text)
            if key in self.seen:
                return None
            self.seen.add(key)
            
            # Get permalink and timestamp
            permalink, ts_iso = self._get_permalink_and_time(post_element)
            
            # Check recency (posts ≤ 14 days old only)
            if ts_iso:
                try:
                    dt = datetime.fromisoformat(ts_iso.replace('Z', '+00:00'))
                    age_days = (datetime.now(dt.tzinfo) - dt).days
                    if age_days > 14:
                        return None
                except Exception:
                    pass
            
            # Extract author name
            author = "Nextdoor User"
            auth_el = post_element.find_elements(By.XPATH, ".//h3//a|.//strong//a|.//*[@role='link'][@tabindex='0']|.//a[contains(@href, '/profile/')]")
            if auth_el:
                author = auth_el[0].text.strip() or author
            
            # Extract contact information
            phone = self._norm_phone(post_text)
            email = None
            m = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', post_text)
            if m:
                email = m.group(0)
            
            # Extract budget and location
            budget = self._extract_budget(post_text)
            location = self._infer_location(post_text)
            
            # Determine project type and value
            project_type, est_value = self.analyze_nextdoor_project(post_text)
            
            # Calculate lead score
            score = self.calculate_nextdoor_lead_score(phone, email, post_text, author, ts_iso)
            
            # HARD FILTER: must have either contact OR permalink (so you can DM)
            if not (phone or email or permalink):
                return None
            
            lead = {
                'name': author,
                'email': email,
                'phone': phone,
                'company': None,
                'location': location,
                'source': f'Nextdoor: {area_name}',
                'lead_type': project_type,
                'project_description': (post_text[:300] + '...') if len(post_text) > 300 else post_text,
                'estimated_value': budget or est_value,
                'lead_score': score,
                'contact_method': 'Phone preferred' if phone else ('Email preferred' if email else 'Nextdoor message'),
                'notes': f"Found in Nextdoor area: {area_name}",
                'scraped_date': datetime.now().isoformat(),
                'permalink': permalink,
                'posted_at': ts_iso
            }
            
            return lead
            
        except Exception as e:
            self.logger.error(f"Error extracting lead from Nextdoor post: {e}")
            return None
    
    def analyze_nextdoor_project(self, text):
        """Analyze Nextdoor post to determine project type and value"""
        text_lower = text.lower()
        
        # Project type analysis
        if any(word in text_lower for word in ['dumpster', 'waste removal', 'debris', 'roll off']):
            project_type = 'Waste Removal Project'
            estimated_value = 2000
        elif any(word in text_lower for word in ['demolition', 'tear down', 'remove', 'cleanout']):
            project_type = 'Demolition Project'
            estimated_value = 25000
        elif any(word in text_lower for word in ['renovation', 'remodel', 'renovate']):
            project_type = 'Renovation Project'
            estimated_value = 35000
        elif any(word in text_lower for word in ['construction', 'build', 'new construction']):
            project_type = 'Construction Project'
            estimated_value = 50000
        elif any(word in text_lower for word in ['roofing', 'roof', 'shingle', 'roof tear-off']):
            project_type = 'Roofing Project'
            estimated_value = 15000
        elif any(word in text_lower for word in ['landscaping', 'landscape', 'yard']):
            project_type = 'Landscaping Project'
            estimated_value = 12000
        elif any(word in text_lower for word in ['concrete', 'driveway', 'patio', 'concrete removal']):
            project_type = 'Concrete Project'
            estimated_value = 18000
        elif any(word in text_lower for word in ['junk removal', 'haul away']):
            project_type = 'Junk Removal Project'
            estimated_value = 1500
        else:
            project_type = 'General Construction'
            estimated_value = 20000
        
        return project_type, estimated_value
    
    def calculate_nextdoor_lead_score(self, phone, email, text, author_name, ts_iso=None):
        """Calculate lead quality score for Nextdoor leads"""
        score = 0
        
        # Intent (40 points max)
        score += 40 if self._is_high_intent(text) else 0
        
        # Contactability (35 points max)
        if phone:
            score += 25
        if email:
            score += 10
        
        # Author credibility (5 points max)
        if author_name and len(author_name.split()) >= 2:
            score += 5
        
        # Budget mention (10 points max)
        if self._extract_budget(text):
            score += 10
        
        # Project-type multiplier (10 points max)
        if any(w in text.lower() for w in ['dumpster', 'roll off', 'haul', 'cleanout', 'demolition']):
            score += 10
        
        # Recency (15 points max)
        try:
            if ts_iso:
                dt = datetime.fromisoformat(ts_iso.replace('Z', '+00:00'))
                age_days = (datetime.now(dt.tzinfo) - dt).days
                if age_days <= 3:
                    score += 15
                elif age_days <= 7:
                    score += 8
        except Exception:
            pass
        
        return min(score, 100)  # Cap at 100
    
    def save_leads_to_file(self, leads, filename='nextdoor_leads.json'):
        """Save leads to JSON file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(leads, f, indent=2, ensure_ascii=False)
            self.logger.info(f"Saved {len(leads)} leads to {filename}")
        except Exception as e:
            self.logger.error(f"Error saving leads: {e}")
    
    def save_leads_csv(self, leads, filename='nextdoor_leads.csv'):
        """Save leads to CSV file for easy CRM import"""
        try:
            fields = ['posted_at', 'permalink', 'name', 'phone', 'email', 'location', 'lead_type',
                      'lead_score', 'estimated_value', 'project_description', 'source', 'notes']
            
            with open(filename, 'w', newline='', encoding='utf-8') as f:
                w = csv.DictWriter(f, fieldnames=fields)
                w.writeheader()
                for lead in leads:
                    w.writerow({k: lead.get(k, '') for k in fields})
            
            self.logger.info(f"Saved {len(leads)} leads to {filename}")
        except Exception as e:
            self.logger.error(f"Error saving CSV: {e}")
    
    def run_nextdoor_scraper(self, test_mode=False):
        """Main function to run the Nextdoor scraper"""
        print("🚀 Nextdoor Scraper for Construction Leads")
        print("=" * 50)
        print("This scraper will help you find construction and dumpster rental leads")
        print("from Nextdoor neighborhood posts.")
        print()
        
        if test_mode:
            print("🧪 TEST MODE: Will only search first 2 areas with first 3 keywords")
            print()
        
        try:
            # Setup driver
            self.setup_driver()
            
            # Manual login
            if not self.manual_login():
                return []
            
            all_leads = []
            
            # Search Nextdoor posts
            leads = self.search_nextdoor_posts(test_mode)
            all_leads.extend(leads)
            
            # Save results
            if all_leads:
                self.save_leads_to_file(all_leads)
                self.save_leads_csv(all_leads)
                
                print(f"\n🎉 Scraping Complete!")
                print(f"✅ Found {len(all_leads)} total leads")
                print(f"📁 Results saved to nextdoor_leads.json and nextdoor_leads.csv")
                
                # Show summary
                print(f"\n📊 Lead Summary:")
                print(f"   🏘️ Nextdoor leads: {len(all_leads)}")
                print(f"   ⭐ Average score: {sum(lead['lead_score'] for lead in all_leads) / len(all_leads):.1f}/100")
                print(f"   💰 Total estimated value: ${sum(lead['estimated_value'] for lead in all_leads):,}")
                
                # Show high-scoring leads
                high_score_leads = [lead for lead in all_leads if lead['lead_score'] >= 80]
                if high_score_leads:
                    print(f"   🔥 High-score leads (80+): {len(high_score_leads)}")
            
            else:
                print("\n⚠️ No leads found. This could be due to:")
                print("   - No relevant posts in the searched areas")
                print("   - Nextdoor's content filtering")
                print("   - Network connectivity issues")
                print("   - Posts not meeting high-intent criteria")
            
            return all_leads
            
        except Exception as e:
            self.logger.error(f"Error running Nextdoor scraper: {e}")
            return []
        
        finally:
            # Keep browser open for user to review
            print(f"\n🔍 Browser will remain open for you to review results.")
            print("Close the browser window when you're done.")
            input("Press ENTER to close the scraper...")
            
            if self.driver:
                self.driver.quit()

def main():
    """Run the Nextdoor scraper"""
    import sys
    
    # Check for test mode
    test_mode = '--test' in sys.argv or '-t' in sys.argv
    
    scraper = NextdoorScraper()
    leads = scraper.run_nextdoor_scraper(test_mode=test_mode)
    
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
            print(f"   🔗 Link: {lead['permalink'] or 'No link'}")
            print()
    else:
        print("\n⚠️ No leads found. Try running with --test flag to debug:")
        print("python nextdoor_scraper.py --test")

if __name__ == "__main__":
    main()
