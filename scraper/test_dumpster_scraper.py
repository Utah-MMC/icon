#!/usr/bin/env python3
"""
Icon Dumpsters - Test Script for Lead Generation System
This script tests the converted scraper system for dumpster rental business
"""

import sys
import os
import logging
from datetime import datetime

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import our converted modules
from competitor_scraper import DumpsterCompetitorScraper
from lead_generation_system import DumpsterLeadGenerationSystem

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('dumpster_scraper_test.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def test_competitor_scraper():
    """Test the competitor scraper"""
    logger.info("Testing Dumpster Competitor Scraper...")
    
    try:
        scraper = DumpsterCompetitorScraper()
        
        # Test with a single URL first
        test_url = "https://www.budgetdumpster.com/"
        test_industry = "dumpster_rentals"
        
        logger.info(f"Testing scraper with URL: {test_url}")
        result = scraper.scrape_competitor(test_url, test_industry)
        
        if result:
            logger.info("✅ Competitor scraper test successful!")
            logger.info(f"Company: {result.get('company_name', 'N/A')}")
            logger.info(f"Phone: {result.get('phone', 'N/A')}")
            logger.info(f"Services: {result.get('services', 'N/A')[:100]}...")
            return True
        else:
            logger.error("❌ Competitor scraper test failed - no data returned")
            return False
            
    except Exception as e:
        logger.error(f"❌ Competitor scraper test failed with error: {str(e)}")
        return False

def test_lead_generation_system():
    """Test the lead generation system"""
    logger.info("Testing Dumpster Lead Generation System...")
    
    try:
        lead_system = DumpsterLeadGenerationSystem()
        
        # Test lead scoring
        test_content = "Looking for dumpster rental for construction project in Salt Lake City"
        test_location = "Salt Lake City"
        test_services = "dumpster rental"
        
        score = lead_system.score_lead(test_content, test_location, test_services)
        logger.info(f"Lead scoring test - Score: {score}")
        
        if score > 0:
            logger.info("✅ Lead scoring test successful!")
        else:
            logger.warning("⚠️ Lead scoring returned 0 - check scoring criteria")
        
        # Test database initialization
        lead_system.init_database()
        logger.info("✅ Database initialization test successful!")
        
        return True
        
    except Exception as e:
        logger.error(f"❌ Lead generation system test failed with error: {str(e)}")
        return False

def test_search_keywords():
    """Test the search keywords configuration"""
    logger.info("Testing search keywords configuration...")
    
    try:
        lead_system = DumpsterLeadGenerationSystem()
        
        keywords = lead_system.search_keywords
        logger.info(f"Total search keywords: {len(keywords)}")
        
        # Check for dumpster-related keywords
        dumpster_keywords = [kw for kw in keywords if 'dumpster' in kw.lower()]
        logger.info(f"Dumpster-related keywords: {len(dumpster_keywords)}")
        
        # Check for Utah location keywords
        utah_keywords = [kw for kw in keywords if 'utah' in kw.lower() or 'salt lake' in kw.lower()]
        logger.info(f"Utah location keywords: {len(utah_keywords)}")
        
        if len(dumpster_keywords) > 0 and len(utah_keywords) > 0:
            logger.info("✅ Search keywords test successful!")
            return True
        else:
            logger.error("❌ Search keywords test failed - missing dumpster or Utah keywords")
            return False
            
    except Exception as e:
        logger.error(f"❌ Search keywords test failed with error: {str(e)}")
        return False

def test_competitor_urls():
    """Test the competitor URLs configuration"""
    logger.info("Testing competitor URLs configuration...")
    
    try:
        scraper = DumpsterCompetitorScraper()
        
        # Check if dumpster_rentals industry exists
        if 'dumpster_rentals' in scraper.base_urls:
            dumpster_urls = scraper.base_urls['dumpster_rentals']
            logger.info(f"Total dumpster rental competitor URLs: {len(dumpster_urls)}")
            
            # Check for Utah-specific URLs
            utah_urls = [url for url in dumpster_urls if 'utah' in url.lower() or 'saltlake' in url.lower()]
            logger.info(f"Utah-specific competitor URLs: {len(utah_urls)}")
            
            if len(dumpster_urls) > 0:
                logger.info("✅ Competitor URLs test successful!")
                return True
            else:
                logger.error("❌ Competitor URLs test failed - no dumpster rental URLs found")
                return False
        else:
            logger.error("❌ Competitor URLs test failed - dumpster_rentals industry not found")
            return False
            
    except Exception as e:
        logger.error(f"❌ Competitor URLs test failed with error: {str(e)}")
        return False

def main():
    """Run all tests"""
    logger.info("🚀 Starting Icon Dumpsters Scraper System Tests")
    logger.info("=" * 60)
    
    tests = [
        ("Search Keywords Configuration", test_search_keywords),
        ("Competitor URLs Configuration", test_competitor_urls),
        ("Lead Generation System", test_lead_generation_system),
        ("Competitor Scraper", test_competitor_scraper)
    ]
    
    results = []
    
    for test_name, test_func in tests:
        logger.info(f"\n🧪 Running test: {test_name}")
        logger.info("-" * 40)
        
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            logger.error(f"❌ Test {test_name} crashed: {str(e)}")
            results.append((test_name, False))
    
    # Summary
    logger.info("\n" + "=" * 60)
    logger.info("📊 TEST SUMMARY")
    logger.info("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        logger.info(f"{test_name}: {status}")
        if result:
            passed += 1
    
    logger.info(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        logger.info("🎉 All tests passed! The Icon Dumpsters scraper system is ready to use.")
    else:
        logger.warning(f"⚠️ {total - passed} tests failed. Please review the errors above.")
    
    logger.info(f"\nTest log saved to: dumpster_scraper_test.log")
    
    return passed == total

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
