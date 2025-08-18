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

    // Tawk.to Widget Code
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/68a27b33d8c4f11928197886/1j2tb2gmu';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.head.appendChild(script);

    // Initialize Tawk.to with custom settings
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize the widget appearance to match your purple theme
    window.Tawk_API.onLoad = function() {
      try {
        // Set custom colors to match your purple theme
        if (window.Tawk_API.setAttributes) {
          window.Tawk_API.setAttributes({
            'theme': 'custom',
            'themeColor': '#4e37a8', // Your purple color
            'themeTextColor': '#ffffff',
            'themeBackgroundColor': '#4e37a8'
          });

          // Set custom greeting message
          window.Tawk_API.setAttributes({
            'name': 'Icon Dumpsters',
            'email': 'info@icondumpsters.com',
            'phone': '801-918-6000'
          });
        }

        // Custom welcome message
        if (window.Tawk_API.customStyle) {
          window.Tawk_API.customStyle = {
            visibility: 'visible',
            display: 'block'
          };
        }

        // Add CSS override for purple theme and hide branding
        const style = document.createElement('style');
        style.textContent = `
          /* Force purple theme on Tawk.to widget */
          #tawkto-container iframe {
            filter: hue-rotate(240deg) saturate(1.5) !important;
          }
          
          /* Override specific Tawk.to elements */
          .tawk-min-container {
            background-color: #4e37a8 !important;
          }
          
          .tawk-header {
            background-color: #4e37a8 !important;
          }
          
          .tawk-button {
            background-color: #4e37a8 !important;
          }
          
          .tawk-message-bubble {
            background-color: #4e37a8 !important;
          }
          
          .tawk-input {
            border-color: #4e37a8 !important;
          }
          
          /* Override green colors with purple */
          [style*="rgb(76, 175, 80)"], 
          [style*="#4CAF50"], 
          [style*="green"] {
            background-color: #4e37a8 !important;
            color: #ffffff !important;
          }

          /* Aggressive hiding of "Powered by tawk.to" branding */
          .tawk-branding,
          .tawk-powered-by,
          [class*="tawk-powered"],
          [class*="tawk-branding"],
          div[style*="tawk-powered"],
          div[style*="tawk-branding"],
          .tawk-footer,
          .tawk-credit,
          .tawk-attribution,
          [class*="tawk-footer"],
          [class*="tawk-credit"],
          [class*="tawk-attribution"],
          div:contains("Powered by tawk.to"),
          div:contains("tawk.to"),
          span:contains("Powered by tawk.to"),
          span:contains("tawk.to"),
          p:contains("Powered by tawk.to"),
          p:contains("tawk.to"),
          a:contains("tawk.to"),
          *:contains("Powered by tawk.to"),
          *:contains("tawk.to") {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            left: -9999px !important;
            top: -9999px !important;
            z-index: -9999 !important;
            pointer-events: none !important;
            clip: rect(0, 0, 0, 0) !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            font-size: 0 !important;
            line-height: 0 !important;
          }

          /* Target specific elements that might contain the branding */
          .tawk-min-container > div:last-child,
          .tawk-min-container > div:nth-last-child(1),
          .tawk-min-container > div:nth-last-child(2) {
            display: none !important;
          }

          /* Hide any element with tawk branding text */
          [data-testid*="tawk"],
          [data-testid*="branding"],
          [data-testid*="powered"] {
            display: none !important;
          }

          /* Additional selectors for iframe content */
          iframe[src*="tawk.to"] {
            filter: hue-rotate(240deg) saturate(1.5) !important;
          }

          /* Hide branding in iframe content */
          iframe[src*="tawk.to"] body *:contains("Powered by tawk.to"),
          iframe[src*="tawk.to"] body *:contains("tawk.to") {
            display: none !important;
          }
        `;
        document.head.appendChild(style);

        // Additional JavaScript to remove branding elements
        const removeBranding = () => {
          const elements = document.querySelectorAll('*');
          elements.forEach(element => {
            if (element.textContent && element.textContent.includes('Powered by tawk.to')) {
              const htmlElement = element as HTMLElement;
              htmlElement.style.display = 'none';
              htmlElement.style.visibility = 'hidden';
              htmlElement.style.opacity = '0';
              htmlElement.style.height = '0';
              htmlElement.style.width = '0';
            }
          });
        };

        // Run immediately and then periodically
        removeBranding();
        setInterval(removeBranding, 1000);
      } catch (error) {
        console.log('Tawk.to customization error:', error);
      }
    };

    // Handle chat events
    window.Tawk_API.onStatusChange = function(status: string) {
      console.log('Tawk.to status changed:', status);
    };

    // Cleanup function
    return () => {
      try {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      } catch (error) {
        console.log('Tawk.to cleanup error:', error);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
