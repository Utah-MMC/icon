import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protect admin routes
  if (pathname.startsWith('/admin-dashboard')) {
    const adminAuth = request.cookies.get('admin_auth');
    
    if (!adminAuth || adminAuth.value !== '1') {
      // Redirect to admin login if not authenticated
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Protect API admin routes
  if (pathname.startsWith('/api/admin') && !pathname.includes('/login')) {
    const adminAuth = request.cookies.get('admin_auth');
    
    if (!adminAuth || adminAuth.value !== '1') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  // Add security headers
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // CSP for admin pages
  if (pathname.startsWith('/admin')) {
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; script-src-elem 'self' 'unsafe-inline' blob: data:; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; connect-src 'self' https:; font-src 'self' https://fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self';"
    );
  }

  return response;
}

export const config = {
  matcher: [
    '/admin-dashboard/:path*',
    '/api/admin/:path*',
    '/admin/:path*'
  ]
};