'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-TCJ2JFCZ1V';
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17497114208';
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      {/* Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Respect Consent Mode (updated by CookieConsent)
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${gaId}');
          gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  );
}
