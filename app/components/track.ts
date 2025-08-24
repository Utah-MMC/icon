'use client';

function getAttribution() {
  try {
    const url = new URL(window.location.href);
    const utm: Record<string, string> = {};
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k => {
      const v = url.searchParams.get(k);
      if (v) utm[k] = v;
    });
    const referrer = document.referrer || undefined;
    const sessionId = getOrCreateSessionId();
    return { utm, referrer, sessionId, path: window.location.pathname };
  } catch { return {}; }
}

function getOrCreateSessionId(): string {
  try {
    const KEY = 'icon_session_id';
    let id = sessionStorage.getItem(KEY) || localStorage.getItem(KEY);
    if (!id) {
      id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`;
      try { sessionStorage.setItem(KEY, id); } catch {}
      try { localStorage.setItem(KEY, id); } catch {}
    }
    return id;
  } catch { return 'no-session'; }
}

export async function track(type: string, name: string, meta?: Record<string, any>) {
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
    const attribution = getAttribution();
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, name, ...meta, ...attribution }),
      keepalive: true,
    });
  } catch {}
}


