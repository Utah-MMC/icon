'use client';

import { useEffect } from 'react';
import { track } from './analytics';

export default function AnalyticsBoot() {
  useEffect(() => {
    try { track('pageview','load'); } catch {}

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


