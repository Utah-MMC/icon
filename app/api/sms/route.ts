import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../services/EmailService';
import { securityUtils } from '../../config/security';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const phone = securityUtils.sanitizeInput(String(body.phone || ''));
    const message = securityUtils.sanitizeInput(String(body.message || ''));
    const transcript = Array.isArray(body.transcript) ? body.transcript : [];

    if (!phone) {
      return NextResponse.json({ ok: false, error: 'Phone required' }, { status: 400 });
    }

    // Placeholder: integrate Twilio or SMS provider here
    // For now, email the request so the team can text the user manually
    const subject = `SMS Request from Chat: ${phone}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:16px;">
        <h2 style="color:#4e37a8;">SMS Hand-off Requested</h2>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <h3 style="color:#4e37a8;">Recent Chat Transcript</h3>
        <pre style="white-space:pre-wrap;background:#f7f7fb;border:1px solid #e5e7eb;padding:12px;border-radius:8px;">${transcript.map((m: any) => `${m.timestamp || ''} [${m.role}] ${m.content}`).join('\n')}</pre>
      </div>
    `;

    await emailService.sendEmail({ to: 'icondumpsters@gmail.com', subject, html, bcc: 'icondumpsters@gmail.com' });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}


