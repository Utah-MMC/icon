#!/usr/bin/env python3
"""
Working Sources Scraper
Focuses on sources that actually work and bypasses blocks
"""

from enhanced_lead_generator import EnhancedLeadGenerator
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import requests
import json

def working_sources_scraper():
    """Scrape from sources that actually work"""
    print("🚀 Working Sources Scraper")
    print("=" * 40)
    print("Focusing on sources that bypass blocks and actually work")
    print()
    
    # Initialize lead generator
    generator = EnhancedLeadGenerator()
    all_leads = []
    
    # 1. Reddit API (Most Reliable)
    print("🔴 1. Reddit API Scraping (Most Reliable)")
    print("-" * 40)
    reddit_leads = scrape_reddit_api()
    all_leads.extend(reddit_leads)
    print(f"✅ Found {len(reddit_leads)} Reddit leads")
    
    # 2. Craigslist (Usually Works)
    print("\n🟡 2. Craigslist Scraping")
    print("-" * 40)
    craigslist_leads = scrape_craigslist_stealth()
    all_leads.extend(craigslist_leads)
    print(f"✅ Found {len(craigslist_leads)} Craigslist leads")
    
    # 3. Government Sites (Public Data)
    print("\n🏛️ 3. Government Sites Scraping")
    print("-" * 40)
    government_leads = scrape_government_sites()
    all_leads.extend(government_leads)
    print(f"✅ Found {len(government_leads)} Government leads")
    
    # 4. Alternative Directories
    print("\n📞 4. Alternative Business Directories")
    print("-" * 40)
    directory_leads = scrape_alternative_directories()
    all_leads.extend(directory_leads)
    print(f"✅ Found {len(directory_leads)} Directory leads")
    
    # Summary
    print(f"\n🎉 Total Leads Found: {len(all_leads)}")
    
    if all_leads:
        print("\n📋 Lead Summary:")
        for i, lead in enumerate(all_leads[:10], 1):
            print(f"{i}. {lead['name']} - {lead['company'] or 'N/A'}")
            print(f"   📞 {lead['phone'] or 'No phone'}")
            print(f"   📧 {lead['email'] or 'No email'}")
            print(f"   📍 {lead['location']}")
            print(f"   🏗️ {lead['project_description'][:50]}...")
            print(f"   ⭐ Score: {lead['lead_score']}/100")
            print()
        
        # Save to database
        generator.save_leads_to_database(all_leads)
        print(f"💾 Saved {len(all_leads)} leads to database")
    
    print("\n✅ Working sources scraping completed!")

def scrape_reddit_api():
    """Scrape Reddit using their API (most reliable)"""
    leads = []
    
    try:
        # Reddit API endpoints that work
        reddit_urls = [
            "https://www.reddit.com/r/HomeImprovement/search.json?q=construction&sort=new&limit=25",
            "https://www.reddit.com/r/HomeImprovement/search.json?q=renovation&sort=new&limit=25",
            "https://www.reddit.com/r/HomeImprovement/search.json?q=dumpster&sort=new&limit=25",
            "https://www.reddit.com/r/Construction/search.json?q=utah&sort=new&limit=25",
            "https://www.reddit.com/r/SaltLakeCity/search.json?q=construction&sort=new&limit=25",
            "https://www.reddit.com/r/Utah/search.json?q=construction&sort=new&limit=25"
        ]
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.9'
        }
        
        for url in reddit_urls:
            try:
                print(f"  📡 Fetching: {url}")
                response = requests.get(url, headers=headers, timeout=10)
                
                if response.status_code == 200:
                    data = response.json()
                    
                    for post in data.get('data', {}).get('children', []):
                        post_data = post.get('data', {})
                        title = post_data.get('title', '')
                        selftext = post_data.get('selftext', '')
                        author = post_data.get('author', '')
                        subreddit = post_data.get('subreddit', '')
                        
                        # Look for Utah-specific content
                        full_text = (title + " " + selftext).lower()
                        if any(keyword in full_text for keyword in ['renovation', 'remodel', 'construction', 'demolition', 'dumpster']):
                            # Check for Utah location
                            if any(city.lower() in full_text for city in ['salt lake', 'utah', 'provo', 'west jordan', 'sandy', 'ogden']):
                                lead = {
                                    'name': f"Reddit User {author}",
                                    'email': None,
                                    'phone': None,
                                    'company': None,
                                    'location': 'Utah',
                                    'source': f'Reddit r/{subreddit}',
                                    'lead_type': 'Residential Project',
                                    'project_description': title[:100] + "..." if len(title) > 100 else title,
                                    'estimated_value': 15000,
                                    'lead_score': 80,
                                    'contact_method': 'Reddit message',
                                    'notes': f"Reddit post: {full_text[:200]}..."
                                }
                                leads.append(lead)
                                print(f"    ✅ Found lead: {title[:50]}...")
                
                time.sleep(2)  # Be respectful
                
            except Exception as e:
                print(f"    ❌ Error: {e}")
                continue
                
    except Exception as e:
        print(f"❌ Reddit API error: {e}")
    
    return leads

def scrape_craigslist_stealth():
    """Scrape Craigslist with stealth techniques"""
    leads = []
    
    try:
        # Use requests with stealth headers
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none'
        }
        
        craigslist_urls = [
            'https://saltlakecity.craigslist.org/search/sss?query=construction+services',
            'https://saltlakecity.craigslist.org/search/sss?query=home+renovation',
            'https://saltlakecity.craigslist.org/search/sss?query=demolition',
            'https://saltlakecity.craigslist.org/search/sss?query=contractor'
        ]
        
        for url in craigslist_urls:
            try:
                print(f"  📡 Fetching: {url}")
                response = requests.get(url, headers=headers, timeout=15)
                
                if response.status_code == 200:
                    from bs4 import BeautifulSoup
                    soup = BeautifulSoup(response.content, 'html.parser')
                    
                    # Look for Craigslist listings
                    listings = soup.find_all(['p', 'div'], class_=lambda x: x and ('result' in x or 'listing' in x))
                    
                    for listing in listings[:10]:
                        text = listing.get_text()
                        
                        if any(keyword in text.lower() for keyword in ['construction', 'renovation', 'demolition', 'contractor']):
                            # Look for phone numbers
                            import re
                            phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text)
                            phone = phone_match.group() if phone_match else None
                            
                            if phone:
                                lead = {
                                    'name': 'Craigslist User',
                                    'email': None,
                                    'phone': phone,
                                    'company': None,
                                    'location': 'Salt Lake City, UT',
                                    'source': 'Craigslist',
                                    'lead_type': 'Residential Project',
                                    'project_description': text[:100] + "..." if len(text) > 100 else text,
                                    'estimated_value': 15000,
                                    'lead_score': 75,
                                    'contact_method': 'Phone preferred',
                                    'notes': f"Craigslist listing: {text[:200]}..."
                                }
                                leads.append(lead)
                                print(f"    ✅ Found lead with phone: {phone}")
                
                time.sleep(3)  # Be respectful
                
            except Exception as e:
                print(f"    ❌ Error: {e}")
                continue
                
    except Exception as e:
        print(f"❌ Craigslist error: {e}")
    
    return leads

def scrape_government_sites():
    """Scrape government sites for permits and projects"""
    leads = []
    
    try:
        # Government sites that are usually accessible
        government_urls = [
            'https://www.utah.gov/permits/',
            'https://www.slc.gov/development-services/',
            'https://www.westjordan.utah.gov/departments/community-development/',
            'https://www.sandy.utah.gov/departments/community-development/'
        ]
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9'
        }
        
        for url in government_urls:
            try:
                print(f"  📡 Fetching: {url}")
                response = requests.get(url, headers=headers, timeout=10)
                
                if response.status_code == 200:
                    from bs4 import BeautifulSoup
                    soup = BeautifulSoup(response.content, 'html.parser')
                    
                    # Look for permit or project information
                    text = soup.get_text()
                    
                    if any(keyword in text.lower() for keyword in ['permit', 'construction', 'building', 'development']):
                        # Create a generic lead for government site
                        lead = {
                            'name': 'Government Contact',
                            'email': None,
                            'phone': None,
                            'company': 'Government Office',
                            'location': 'Utah',
                            'source': 'Government Website',
                            'lead_type': 'Government Project',
                            'project_description': 'Government construction or permit project',
                            'estimated_value': 25000,
                            'lead_score': 70,
                            'contact_method': 'Government contact',
                            'notes': f"Found on government site: {url}"
                        }
                        leads.append(lead)
                        print(f"    ✅ Found government lead from {url}")
                
                time.sleep(2)
                
            except Exception as e:
                print(f"    ❌ Error: {e}")
                continue
                
    except Exception as e:
        print(f"❌ Government sites error: {e}")
    
    return leads

def scrape_alternative_directories():
    """Scrape alternative business directories"""
    leads = []
    
    try:
        # Alternative directories that are less protected
        directory_urls = [
            'https://www.bbb.org/search?find_country=USA&find_text=construction+contractors&find_loc=Utah',
            'https://www.angieslist.com/companylist/us/ut/construction-contractors.htm',
            'https://www.homeadvisor.com/c.Utah.html'
        ]
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9'
        }
        
        for url in directory_urls:
            try:
                print(f"  📡 Fetching: {url}")
                response = requests.get(url, headers=headers, timeout=10)
                
                if response.status_code == 200:
                    from bs4 import BeautifulSoup
                    soup = BeautifulSoup(response.content, 'html.parser')
                    
                    # Look for business listings
                    text = soup.get_text()
                    
                    if any(keyword in text.lower() for keyword in ['contractor', 'construction', 'builder']):
                        # Look for phone numbers
                        import re
                        phone_match = re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text)
                        phone = phone_match.group() if phone_match else None
                        
                        if phone:
                            lead = {
                                'name': 'Business Owner',
                                'email': None,
                                'phone': phone,
                                'company': 'Construction Contractor',
                                'location': 'Utah',
                                'source': 'Business Directory',
                                'lead_type': 'Business Project',
                                'project_description': 'Construction contractor seeking dumpster services',
                                'estimated_value': 20000,
                                'lead_score': 80,
                                'contact_method': 'Phone preferred',
                                'notes': f"Found in business directory: {url}"
                            }
                            leads.append(lead)
                            print(f"    ✅ Found business lead with phone: {phone}")
                
                time.sleep(3)
                
            except Exception as e:
                print(f"    ❌ Error: {e}")
                continue
                
    except Exception as e:
        print(f"❌ Alternative directories error: {e}")
    
    return leads

if __name__ == "__main__":
    working_sources_scraper()
