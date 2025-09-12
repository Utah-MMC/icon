#!/usr/bin/env python3
"""
Icon Dumpsters - Aggressive Lead Hunter
Comprehensive lead generation system that combines multiple sources
for maximum lead discovery for icondumpsters.com
"""

import os
import sys
import time
import json
import csv
import logging
from datetime import datetime
from typing import List, Dict
import concurrent.futures
import threading

# Import our scrapers
from facebook_scraper import FacebookScraper
from nextdoor_scraper import NextdoorScraper

class AggressiveLeadHunter:
    def __init__(self):
        self.all_leads = []
        self.seen_leads = set()
        self.logger = self.setup_logging()
        
        # Lead quality thresholds
        self.min_lead_score = 60
        self.max_age_days = 14
        
        # Results tracking
        self.results = {
            'facebook': {'leads': [], 'count': 0, 'errors': []},
            'nextdoor': {'leads': [], 'count': 0, 'errors': []},
            'total_leads': 0,
            'high_quality_leads': 0,
            'start_time': datetime.now(),
            'end_time': None
        }
    
    def setup_logging(self):
        """Setup comprehensive logging"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('aggressive_lead_hunter.log'),
                logging.StreamHandler()
            ]
        )
        return logging.getLogger(__name__)
    
    def deduplicate_leads(self, leads: List[Dict]) -> List[Dict]:
        """Remove duplicate leads based on content similarity"""
        unique_leads = []
        
        for lead in leads:
            # Create a unique key based on content
            content_key = f"{lead.get('name', '')}_{lead.get('phone', '')}_{lead.get('project_description', '')[:100]}"
            
            if content_key not in self.seen_leads:
                self.seen_leads.add(content_key)
                unique_leads.append(lead)
        
        return unique_leads
    
    def run_facebook_scraper(self):
        """Run Facebook scraper in separate thread"""
        try:
            self.logger.info("🚀 Starting Facebook scraper...")
            scraper = FacebookScraper()
            leads = scraper.run_facebook_scraper()
            
            # Filter and process leads
            filtered_leads = [lead for lead in leads if lead.get('lead_score', 0) >= self.min_lead_score]
            
            self.results['facebook']['leads'] = filtered_leads
            self.results['facebook']['count'] = len(filtered_leads)
            
            self.logger.info(f"✅ Facebook scraper completed: {len(filtered_leads)} high-quality leads")
            
        except Exception as e:
            error_msg = f"Facebook scraper error: {str(e)}"
            self.logger.error(error_msg)
            self.results['facebook']['errors'].append(error_msg)
    
    def run_nextdoor_scraper(self):
        """Run Nextdoor scraper in separate thread"""
        try:
            self.logger.info("🚀 Starting Nextdoor scraper...")
            scraper = NextdoorScraper()
            leads = scraper.run_nextdoor_scraper()
            
            # Filter and process leads
            filtered_leads = [lead for lead in leads if lead.get('lead_score', 0) >= self.min_lead_score]
            
            self.results['nextdoor']['leads'] = filtered_leads
            self.results['nextdoor']['count'] = len(filtered_leads)
            
            self.logger.info(f"✅ Nextdoor scraper completed: {len(filtered_leads)} high-quality leads")
            
        except Exception as e:
            error_msg = f"Nextdoor scraper error: {str(e)}"
            self.logger.error(error_msg)
            self.results['nextdoor']['errors'].append(error_msg)
    
    def run_parallel_scraping(self):
        """Run all scrapers in parallel for maximum efficiency"""
        print("🔥 AGGRESSIVE LEAD HUNTING FOR ICONDUMPSTERS.COM")
        print("=" * 60)
        print("Running multiple scrapers in parallel for maximum lead discovery...")
        print()
        
        # Run scrapers in parallel
        with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
            # Submit both scrapers
            facebook_future = executor.submit(self.run_facebook_scraper)
            nextdoor_future = executor.submit(self.run_nextdoor_scraper)
            
            # Wait for completion
            concurrent.futures.wait([facebook_future, nextdoor_future])
        
        # Combine results
        self.combine_results()
    
    def combine_results(self):
        """Combine results from all scrapers"""
        all_leads = []
        
        # Add Facebook leads
        all_leads.extend(self.results['facebook']['leads'])
        
        # Add Nextdoor leads
        all_leads.extend(self.results['nextdoor']['leads'])
        
        # Deduplicate
        unique_leads = self.deduplicate_leads(all_leads)
        
        # Sort by lead score (highest first)
        unique_leads.sort(key=lambda x: x.get('lead_score', 0), reverse=True)
        
        self.all_leads = unique_leads
        self.results['total_leads'] = len(unique_leads)
        self.results['high_quality_leads'] = len([lead for lead in unique_leads if lead.get('lead_score', 0) >= 80])
        self.results['end_time'] = datetime.now()
    
    def save_comprehensive_results(self):
        """Save results in multiple formats"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Save JSON
        json_filename = f'icon_dumpsters_leads_{timestamp}.json'
        with open(json_filename, 'w', encoding='utf-8') as f:
            json.dump({
                'leads': self.all_leads,
                'summary': self.results,
                'generated_at': datetime.now().isoformat()
            }, f, indent=2, ensure_ascii=False)
        
        # Save CSV for CRM import
        csv_filename = f'icon_dumpsters_leads_{timestamp}.csv'
        if self.all_leads:
            fields = ['name', 'phone', 'email', 'location', 'source', 'lead_type', 
                     'project_description', 'estimated_value', 'lead_score', 'contact_method', 
                     'notes', 'permalink', 'posted_at', 'scraped_date']
            
            with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=fields)
                writer.writeheader()
                for lead in self.all_leads:
                    writer.writerow({field: lead.get(field, '') for field in fields})
        
        # Save high-priority leads separately
        high_priority_leads = [lead for lead in self.all_leads if lead.get('lead_score', 0) >= 80]
        if high_priority_leads:
            high_priority_filename = f'icon_dumpsters_high_priority_{timestamp}.csv'
            with open(high_priority_filename, 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=fields)
                writer.writeheader()
                for lead in high_priority_leads:
                    writer.writerow({field: lead.get(field, '') for field in fields})
        
        return json_filename, csv_filename
    
    def print_comprehensive_summary(self):
        """Print detailed summary of results"""
        duration = self.results['end_time'] - self.results['start_time']
        
        print("\n" + "="*60)
        print("🎯 ICON DUMPSTERS LEAD HUNTING RESULTS")
        print("="*60)
        print(f"⏱️  Total Runtime: {duration}")
        print(f"📊 Total Leads Found: {self.results['total_leads']}")
        print(f"🔥 High-Quality Leads (80+ score): {self.results['high_quality_leads']}")
        print()
        
        print("📈 Source Breakdown:")
        print(f"   📘 Facebook: {self.results['facebook']['count']} leads")
        print(f"   🏘️  Nextdoor: {self.results['nextdoor']['count']} leads")
        print()
        
        if self.results['facebook']['errors']:
            print("⚠️  Facebook Errors:")
            for error in self.results['facebook']['errors']:
                print(f"   - {error}")
        
        if self.results['nextdoor']['errors']:
            print("⚠️  Nextdoor Errors:")
            for error in self.results['nextdoor']['errors']:
                print(f"   - {error}")
        
        print()
        
        # Show top leads
        if self.all_leads:
            print("🏆 TOP 10 LEADS:")
            print("-" * 60)
            for i, lead in enumerate(self.all_leads[:10], 1):
                print(f"{i:2d}. {lead.get('name', 'Unknown')}")
                print(f"    📞 {lead.get('phone', 'No phone')}")
                print(f"    📧 {lead.get('email', 'No email')}")
                print(f"    📍 {lead.get('location', 'Unknown')}")
                print(f"    🏗️  {lead.get('project_description', '')[:80]}...")
                print(f"    ⭐ Score: {lead.get('lead_score', 0)}/100")
                print(f"    💰 Value: ${lead.get('estimated_value', 0):,}")
                print(f"    🔗 Source: {lead.get('source', 'Unknown')}")
                print()
        
        # Show lead value summary
        total_value = sum(lead.get('estimated_value', 0) for lead in self.all_leads)
        avg_score = sum(lead.get('lead_score', 0) for lead in self.all_leads) / len(self.all_leads) if self.all_leads else 0
        
        print("💰 LEAD VALUE SUMMARY:")
        print(f"   💵 Total Estimated Value: ${total_value:,}")
        print(f"   📊 Average Lead Score: {avg_score:.1f}/100")
        print(f"   🎯 Conversion Rate (est.): {len([l for l in self.all_leads if l.get('lead_score', 0) >= 80]) / len(self.all_leads) * 100:.1f}%")
        print()
    
    def run_aggressive_hunt(self):
        """Main function to run aggressive lead hunting"""
        try:
            # Run parallel scraping
            self.run_parallel_scraping()
            
            # Save results
            json_file, csv_file = self.save_comprehensive_results()
            
            # Print summary
            self.print_comprehensive_summary()
            
            print(f"📁 Results saved to:")
            print(f"   📄 {json_file}")
            print(f"   📊 {csv_file}")
            
            if self.results['high_quality_leads'] > 0:
                print(f"   🔥 High-priority leads: icon_dumpsters_high_priority_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv")
            
            return self.all_leads
            
        except Exception as e:
            self.logger.error(f"Error in aggressive lead hunting: {e}")
            return []

def main():
    """Run the aggressive lead hunter"""
    hunter = AggressiveLeadHunter()
    leads = hunter.run_aggressive_hunt()
    
    if leads:
        print(f"\n🎉 SUCCESS! Found {len(leads)} leads for icondumpsters.com")
        print("Ready to start calling and converting these leads!")
    else:
        print("\n⚠️ No leads found. Check the logs for errors.")

if __name__ == "__main__":
    main()
