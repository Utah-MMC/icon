#!/usr/bin/env python3
"""
Icon Dumpsters - Quick Lead Hunt Launcher
Easy launcher for aggressive lead hunting
"""

import os
import sys
import subprocess
from datetime import datetime

def main():
    print("🚀 ICON DUMPSTERS LEAD HUNTING LAUNCHER")
    print("=" * 50)
    print("Choose your lead hunting strategy:")
    print()
    print("1. 🔥 AGGRESSIVE HUNT (Facebook + Nextdoor)")
    print("2. 📘 Facebook Only")
    print("3. 🏘️  Nextdoor Only")
    print("4. 🎯 Custom Search")
    print()
    
    choice = input("Enter your choice (1-4): ").strip()
    
    if choice == "1":
        print("\n🔥 Starting AGGRESSIVE LEAD HUNT...")
        print("This will run both Facebook and Nextdoor scrapers in parallel")
        print("Estimated time: 15-30 minutes")
        print()
        input("Press ENTER to start...")
        
        try:
            subprocess.run([sys.executable, "aggressive_lead_hunter.py"], check=True)
        except subprocess.CalledProcessError as e:
            print(f"❌ Error running aggressive lead hunter: {e}")
    
    elif choice == "2":
        print("\n📘 Starting Facebook scraper...")
        print("Estimated time: 10-15 minutes")
        print()
        input("Press ENTER to start...")
        
        try:
            subprocess.run([sys.executable, "facebook_scraper.py"], check=True)
        except subprocess.CalledProcessError as e:
            print(f"❌ Error running Facebook scraper: {e}")
    
    elif choice == "3":
        print("\n🏘️ Starting Nextdoor scraper...")
        print("Estimated time: 10-15 minutes")
        print()
        input("Press ENTER to start...")
        
        try:
            subprocess.run([sys.executable, "nextdoor_scraper.py"], check=True)
        except subprocess.CalledProcessError as e:
            print(f"❌ Error running Nextdoor scraper: {e}")
    
    elif choice == "4":
        print("\n🎯 Custom search options:")
        print("1. Search specific keywords")
        print("2. Search specific areas")
        print("3. Search specific hashtags")
        print()
        
        custom_choice = input("Enter custom choice (1-3): ").strip()
        
        if custom_choice == "1":
            keywords = input("Enter keywords (comma-separated): ").strip()
            print(f"Searching for: {keywords}")
            # You could modify the scrapers to accept custom keywords here
        
        elif custom_choice == "2":
            areas = input("Enter areas (comma-separated): ").strip()
            print(f"Searching in: {areas}")
            # You could modify the scrapers to accept custom areas here
        
        elif custom_choice == "3":
            hashtags = input("Enter hashtags (comma-separated): ").strip()
            print(f"Searching hashtags: {hashtags}")
            # You could modify the scrapers to accept custom hashtags here
        
        else:
            print("❌ Invalid choice")
    
    else:
        print("❌ Invalid choice")
    
    print("\n✅ Lead hunting session completed!")
    print("Check the generated CSV and JSON files for your leads.")

if __name__ == "__main__":
    main()
