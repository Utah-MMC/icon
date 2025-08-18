'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkToChat() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return;
    }

    // Check if Tawk.to is already loaded
    if (window.Tawk_API) {
      return;
    }

    try {
      // Tawk.to Widget Code
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/68a27b33d8c4f11928197886/1j2tb2gmu';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      document.head.appendChild(script);

      // Initialize Tawk.to with basic settings
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Basic customization without aggressive DOM manipulation
      window.Tawk_API.onLoad = function() {
        try {
          // Set basic attributes
          if (window.Tawk_API.setAttributes) {
            window.Tawk_API.setAttributes({
              'name': 'Icon Dumpsters',
              'email': 'info@icondumpsters.com',
              'phone': '801-918-6000'
            });
          }

          console.log('Tawk.to loaded successfully');
        } catch (error) {
          console.log('Tawk.to customization error:', error);
        }
      };

      // Handle chat events
      window.Tawk_API.onStatusChange = function(status: string) {
        console.log('Tawk.to status changed:', status);
      };

    } catch (error) {
      console.log('Tawk.to initialization error:', error);
    }

    // Cleanup function
    return () => {
      try {
        // Only remove the script if it exists
        const existingScript = document.querySelector('script[src*="tawk.to"]');
        if (existingScript && existingScript.parentNode) {
          existingScript.parentNode.removeChild(existingScript);
        }
      } catch (error) {
        console.log('Tawk.to cleanup error:', error);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
