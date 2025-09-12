#!/usr/bin/env python3
"""
Clear Nextdoor Session
Removes the persistent Chrome session to force fresh login
"""

import os
import shutil
import sys

def main():
    print("🧹 CLEARING NEXTDOOR SESSION")
    print("=" * 40)
    
    # Path to Chrome profile
    profile_path = os.path.abspath("./chrome_profile")
    
    if os.path.exists(profile_path):
        try:
            print(f"Removing profile directory: {profile_path}")
            shutil.rmtree(profile_path)
            print("✅ Session cleared! Next run will require fresh login.")
        except Exception as e:
            print(f"❌ Error clearing session: {e}")
    else:
        print("ℹ️ No existing session found.")
    
    print("\nNow you can run the scraper and it will ask you to login:")
    print("python nextdoor_scraper.py --test")

if __name__ == "__main__":
    main()
