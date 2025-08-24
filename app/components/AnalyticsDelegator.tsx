'use client';

import { useEffect } from 'react';
import { track } from './analytics';

export default function AnalyticsDelegator() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest('[data-analytics-type]') as HTMLElement | null;
      if (!el) return;
      const type = el.getAttribute('data-analytics-type');
      const name = el.getAttribute('data-analytics-name');
      if (!type || !name) return;
      const meta: Record<string, any> = {};
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('data-analytics-meta-')) {
          meta[attr.name.replace('data-analytics-meta-','')] = attr.value;
        }
      });
      try { track(type, name, meta); } catch {}
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}


