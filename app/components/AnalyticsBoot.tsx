'use client';

import { useEffect } from 'react';
import { track } from './analytics';

export default function AnalyticsBoot() {
  useEffect(() => {
    // Initialize session tracking on page load
    const initializeSession = () => {
      if (typeof window === 'undefined') return;
      
      // Generate or retrieve session ID
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('sessionId', sessionId);
      }

      // Parse and store UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_term: urlParams.get('utm_term'),
        utm_content: urlParams.get('utm_content')
      };

      // Only store if we have UTM parameters
      if (Object.values(utmParams).some(val => val)) {
        sessionStorage.setItem('utm', JSON.stringify(utmParams));
      }

      return { sessionId, utmParams };
    };

    // Track page view with enhanced data
    const sessionData = initializeSession();
    try { 
      track('pageview','load', {
        sessionId: sessionData?.sessionId,
        utm: sessionData?.utmParams,
        path: window.location.pathname,
        referrer: document.referrer,
        title: document.title
      }); 
    } catch {}

    let maxScroll = 0;
    function onScroll() {
      const total = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.round((window.scrollY / total) * 100));
      if (pct > maxScroll) {
        maxScroll = pct;
        if (pct >= 25 && pct < 50) try { track('scroll','25'); } catch {}
        if (pct >= 50 && pct < 75) try { track('scroll','50'); } catch {}
        if (pct >= 75 && pct < 90) try { track('scroll','75'); } catch {}
        if (pct >= 90) try { track('scroll','90'); } catch {}
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}


