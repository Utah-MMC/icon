import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (in production, use Redis or similar)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getRateLimitKey(req: NextRequest): string {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.headers.get('x-client-ip') || 'unknown';
  return `login_${ip}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(key);
  
  if (!attempts) {
    loginAttempts.set(key, { count: 1, lastAttempt: now });
    return true;
  }
  
  // Reset if window has passed
  if (now - attempts.lastAttempt > WINDOW_MS) {
    loginAttempts.set(key, { count: 1, lastAttempt: now });
    return true;
  }
  
  // Check if exceeded limit
  if (attempts.count >= MAX_ATTEMPTS) {
    return false;
  }
  
  // Increment attempts
  attempts.count++;
  attempts.lastAttempt = now;
  loginAttempts.set(key, attempts);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const rateLimitKey = getRateLimitKey(req);
    
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Too many login attempts. Please try again in 15 minutes.' 
      }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    const password = String(body?.password || '');
    
    // Case-sensitive password. If ADMIN_PASSWORD is not set, fallback to default.
    const expected = process.env.ADMIN_PASSWORD || 'IconDumpsters2024!';
    if (password !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
    const res = NextResponse.json({ ok: true });
    // Create session token with timestamp
    const sessionToken = Buffer.from(JSON.stringify({
      authenticated: true,
      timestamp: Date.now(),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.headers.get('x-client-ip') || 'unknown'
    })).toString('base64');

    res.cookies.set('admin_auth', sessionToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 2, // 2 hours (reduced from 8 for security)
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


