'use client';

export type AnalyticsPayload = {
  type: string;
  name: string;
  meta?: Record<string, any>;
};

export function track(type: string, name: string, meta?: Record<string, any>) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'analytics', type, name, meta });
  } catch {}
  try {
    (window as any).__analyticsEvents = (window as any).__analyticsEvents || [];
    (window as any).__analyticsEvents.push({ type, name, meta, ts: Date.now() });
    window.dispatchEvent(new CustomEvent('analytics-event', { detail: { type, name, meta } }));
  } catch {}
  try {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, name, ...meta }),
      keepalive: true,
    });
  } catch {}
}


