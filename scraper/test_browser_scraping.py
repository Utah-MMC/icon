#!/usr/bin/env python3
"""
Test script for browser-based lead scraping
This will open browsers and help you log in to scrape real data
"""

from enhanced_lead_generator import EnhancedLeadGenerator
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def test_browser_scraping():
    """Test the browser-based scraping system"""
    print("🚀 Testing Browser-Based Lead Scraping")
    print("=" * 50)
    
    # Initialize the lead generator
    generator = EnhancedLeadGenerator()
    
    print("\n📋 Available scraping options:")
    print("1. Reddit (HomeImprovement, Construction, SaltLakeCity)")
    print("2. Craigslist (Salt Lake City)")
    print("3. Yellow Pages (Utah contractors)")
    print("4. All sources")
    
    choice = input("\nEnter your choice (1-4): ").strip()
    
    if choice == "1":
        print("\n🔴 Starting Reddit scraping...")
        urls = [
            'https://www.reddit.com/r/HomeImprovement/search?q=construction&sort=new&t=week',
            'https://www.reddit.com/r/Construction/search?q=utah&sort=new&t=week'
        ]
        leads = generator.scrape_with_logged_in_browser('reddit', urls)
        
    elif choice == "2":
        print("\n🟡 Starting Craigslist scraping...")
        urls = [
            'https://saltlakecity.craigslist.org/search/sss?query=construction+services',
            'https://saltlakecity.craigslist.org/search/sss?query=home+renovation'
        ]
        leads = generator.scrape_with_logged_in_browser('craigslist', urls)
        
    elif choice == "3":
        print("\n📞 Starting Yellow Pages scraping...")
        urls = [
            'https://www.yellowpages.com/search?search_terms=construction+contractors&geo_location_terms=Utah'
        ]
        leads = generator.scrape_with_logged_in_browser('yellowpages', urls)
        
    elif choice == "4":
        print("\n🌐 Starting comprehensive scraping...")
        leads = generator.scrape_construction_with_browser()
        
    else:
        print("Invalid choice. Running comprehensive scraping...")
        leads = generator.scrape_construction_with_browser()
    
    print(f"\n✅ Scraping completed!")
    print(f"📊 Found {len(leads)} leads")
    
    if leads:
        print("\n📋 Lead Summary:")
        for i, lead in enumerate(leads[:5], 1):  # Show first 5 leads
            print(f"{i}. {lead['name']} - {lead['company'] or 'N/A'}")
            print(f"   📞 {lead['phone'] or 'No phone'}")
            print(f"   📧 {lead['email'] or 'No email'}")
            print(f"   📍 {lead['location']}")
            print(f"   🏗️ {lead['project_description'][:50]}...")
            print(f"   ⭐ Score: {lead['lead_score']}/100")
            print()
    
    # Save leads to database
    if leads:
        generator.save_leads_to_database(leads)
        print(f"💾 Saved {len(leads)} leads to database")
    
    print("\n🎉 Browser scraping test completed!")
    print("💡 Tip: Your login sessions are saved for future runs!")

if __name__ == "__main__":
    test_browser_scraping()
