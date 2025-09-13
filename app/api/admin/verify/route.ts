import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const adminAuth = req.cookies.get('admin_auth');
    
    if (!adminAuth) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Decode and verify session token
    try {
      const sessionData = JSON.parse(Buffer.from(adminAuth.value, 'base64').toString());
      
      // Check if session is expired (2 hours)
      const sessionAge = Date.now() - sessionData.timestamp;
      const maxAge = 2 * 60 * 60 * 1000; // 2 hours
      
      if (sessionAge > maxAge) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }

      // Check if IP matches (basic security)
      const currentIp = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
      if (sessionData.ip !== currentIp) {
        console.warn('IP mismatch detected:', { sessionIp: sessionData.ip, currentIp });
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }

      if (!sessionData.authenticated) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }
    } catch (error) {
      console.error('Session token decode error:', error);
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Additional security checks
    const userAgent = req.headers.get('user-agent') || '';
    const referer = req.headers.get('referer') || '';
    
    // Basic bot detection
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /curl/i,
      /wget/i,
      /python/i,
      /php/i
    ];

    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
    
    if (isSuspicious) {
      console.warn('Suspicious user agent detected:', userAgent);
      return NextResponse.json({ authenticated: false }, { status: 403 });
    }

    // Check if request is from same origin (basic CSRF protection)
    const origin = req.headers.get('origin');
    const host = req.headers.get('host');
    
    if (origin && !origin.includes(host || '')) {
      console.warn('Cross-origin request detected:', { origin, host });
      return NextResponse.json({ authenticated: false }, { status: 403 });
    }

    return NextResponse.json({ 
      authenticated: true,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
