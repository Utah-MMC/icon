import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Protect KPI dashboard and any /admin-only pages
  const protectedPaths = ['/kpi-dashboard'];
  if (protectedPaths.some(p => pathname.startsWith(p))) {
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
  matcher: ['/kpi-dashboard'],
};


