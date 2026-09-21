import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = req.nextUrl.pathname === '/admin/login';
  
  if (isAdminRoute && !isLoginPage) {
    const sessionCookie = req.cookies.get('admin_session');
    
    if (!sessionCookie || sessionCookie.value !== 'authenticated') {
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect authenticated users away from login page
  if (isLoginPage) {
    const sessionCookie = req.cookies.get('admin_session');
    if (sessionCookie && sessionCookie.value === 'authenticated') {
      return NextResponse.redirect(new URL('/admin/inquiries', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
