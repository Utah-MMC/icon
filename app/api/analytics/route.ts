import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../services/EmailService';

export const dynamic = 'force-dynamic';

// Simple in-memory agent status cache (ephemeral per server instance)
// In production, back this with a store (Redis) or your helpdesk API
let lastStatusUpdateAt = 0;
let cachedStatus: { online: boolean; queueSize: number; etaMinutes: number } = {
  online: true,
  queueSize: 0,
  etaMinutes: 2,
};

// Simple in-memory event store (per instance)
type AnalyticEvent = { name: string; type: string; ts: number; meta?: any };
const EVENTS: AnalyticEvent[] = [];

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
    const recent = EVENTS.filter(e => e.ts >= since);
    const byType = recent.reduce<Record<string, number>>((acc, e) => { acc[e.type] = (acc[e.type] || 0) + 1; return acc; }, {});
    const byName = recent.reduce<Record<string, number>>((acc, e) => { acc[e.name] = (acc[e.name] || 0) + 1; return acc; }, {});
    return NextResponse.json({ ok: true, status: cachedStatus, counts: { byType, byName, total: recent.length } });
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
      EVENTS.push({ name: String(body.name || body.type), type: String(body.type), ts: Date.now(), meta: body });
      // truncate to last 10k events to cap memory
      if (EVENTS.length > 10000) EVENTS.splice(0, EVENTS.length - 10000);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


