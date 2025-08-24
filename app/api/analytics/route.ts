import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../services/EmailService';
import path from 'path';
import fs from 'fs/promises';

export const dynamic = 'force-dynamic';

// Simple in-memory agent status cache (ephemeral per server instance)
// In production, back this with a store (Redis) or your helpdesk API
let lastStatusUpdateAt = 0;
let cachedStatus: { online: boolean; queueSize: number; etaMinutes: number } = {
  online: true,
  queueSize: 0,
  etaMinutes: 2,
};

// Persistent event store (JSON on disk)
type AnalyticEvent = { name: string; type: string; ts: number; meta?: any };
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'analytics.json');

async function readAllEvents(): Promise<AnalyticEvent[]> {
  try {
    const buf = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(buf);
    return Array.isArray(parsed) ? parsed as AnalyticEvent[] : [];
  } catch {
    return [];
  }
}

async function writeAllEvents(events: AnalyticEvent[]): Promise<void> {
  try { await fs.mkdir(DATA_DIR, { recursive: true }); } catch {}
  try { await fs.writeFile(DATA_FILE, JSON.stringify(events), 'utf8'); } catch {}
}

export async function GET() {
  try {
    // Optionally refresh from upstream every 10s (mocked here)
    const now = Date.now();
    if (now - lastStatusUpdateAt > 10000) {
      lastStatusUpdateAt = now;
      // keep existing mock values; in real impl pull from provider
    }
    // Aggregate simple 24h counters
    const DAY = 24 * 60 * 60 * 1000;
    const since = now - DAY;
    const all = await readAllEvents();
    const recent = all.filter(e => e.ts >= since);
    const byType = recent.reduce<Record<string, number>>((acc, e) => { acc[e.type] = (acc[e.type] || 0) + 1; return acc; }, {});
    const byName = recent.reduce<Record<string, number>>((acc, e) => { acc[e.name] = (acc[e.name] || 0) + 1; return acc; }, {});
    // Attribution summaries
    const sessions = new Set<string>();
    const utmSources: Record<string, number> = {};
    const referrers: Record<string, number> = {};
    const paths: Record<string, number> = {};
    let sessionsWithCTA = new Set<string>();
    let sessionsWithForm = new Set<string>();
    const ctas: Record<string, number> = {};
    for (const ev of recent) {
      const m = (ev.meta || {}) as any;
      const sid = m.sessionId ? String(m.sessionId) : '';
      if (sid) sessions.add(sid);
      const src = m.utm?.utm_source ? String(m.utm.utm_source) : '';
      if (src) utmSources[src] = (utmSources[src] || 0) + 1;
      const ref = m.referrer ? String(m.referrer) : '';
      if (ref) referrers[ref] = (referrers[ref] || 0) + 1;
      const p = m.path ? String(m.path) : '';
      if (p) paths[p] = (paths[p] || 0) + 1;
      if (ev.type === 'cta' && sid) sessionsWithCTA.add(sid);
      if (ev.type === 'form' && sid) sessionsWithForm.add(sid);
      if (ev.type === 'cta') {
        const nm = String(ev.name || 'cta');
        ctas[nm] = (ctas[nm] || 0) + 1;
      }
    }
    const summary = { 
      sessions: sessions.size, 
      utmSources, 
      referrers, 
      paths,
      sessionsWithCTA: sessionsWithCTA.size,
      sessionsWithForm: sessionsWithForm.size,
      conversionRate: sessionsWithCTA.size ? Math.round((sessionsWithForm.size / sessionsWithCTA.size) * 100) : 0,
      topCTAs: ctas,
    };
    return NextResponse.json({ ok: true, status: cachedStatus, counts: { byType, byName, total: recent.length }, summary });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Accept either analytics events or agent handoff requests
    if (body?.type === 'handoff_request') {
      const transcript = Array.isArray(body.transcript) ? body.transcript : [];
      const contact = body.contact || {};
      const subject = `Live Agent Handoff Requested${contact?.name ? ` - ${contact.name}` : ''}`;
      const html = `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:16px;">
          <h2 style="color:#4e37a8;">Live Agent Requested</h2>
          <p><strong>Name:</strong> ${contact?.name || ''}</p>
          <p><strong>Phone:</strong> ${contact?.phone || ''}</p>
          <p><strong>Email:</strong> ${contact?.email || ''}</p>
          <h3 style="color:#4e37a8;">Recent Chat Transcript</h3>
          <pre style="white-space:pre-wrap;background:#f7f7fb;border:1px solid #e5e7eb;padding:12px;border-radius:8px;">${transcript.map((m: any) => `${m.timestamp || ''} [${m.role}] ${m.content}`).join('\n')}</pre>
        </div>
      `;
      try { await emailService.sendEmail({ to: 'icondumpsters@gmail.com', subject, html, bcc: 'icondumpsters@gmail.com' }); } catch {}
      return NextResponse.json({ ok: true });
    }

    // Store basic analytics event
    if (body?.type) {
      const events = await readAllEvents();
      events.push({ name: String(body.name || body.type), type: String(body.type), ts: Date.now(), meta: body });
      // keep file from growing forever
      const capped = events.slice(-10000);
      await writeAllEvents(capped);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


