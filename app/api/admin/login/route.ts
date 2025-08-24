import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const password = String(body?.password || '');
    // Case-sensitive password. If ADMIN_PASSWORD is not set, fallback to default.
    const expected = process.env.ADMIN_PASSWORD || 'IconDumpsters2024!';
    if (password !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
    const res = NextResponse.json({ ok: true });
    res.cookies.set('admin_auth', '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


