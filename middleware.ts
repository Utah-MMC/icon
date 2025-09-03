import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname, hostname } = req.nextUrl;
  
  // Redirect www to non-www
  if (hostname === 'www.icondumpsters.com') {
    const url = req.nextUrl.clone();
    url.hostname = 'icondumpsters.com';
    return NextResponse.redirect(url, 301);
  }
  
  // Protect the KPI dashboard
  if (pathname.startsWith('/kpi-dashboard')) {
    const cookie = req.cookies.get('admin_auth');
    if (!cookie || cookie.value !== '1') {
      const url = req.nextUrl.clone();
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};


