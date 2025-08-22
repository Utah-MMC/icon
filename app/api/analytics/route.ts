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

export async function GET() {
  try {
    // Optionally refresh from upstream every 10s (mocked here)
    const now = Date.now();
    if (now - lastStatusUpdateAt > 10000) {
      lastStatusUpdateAt = now;
      // keep existing mock values; in real impl pull from provider
    }
    return NextResponse.json({ ok: true, status: cachedStatus });
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

    // In production, forward analytics elsewhere. Acknowledge receipt here.
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


