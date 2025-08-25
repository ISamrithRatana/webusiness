import { NextResponse, NextRequest } from 'next/server'
// app/middleware.ts

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  return NextResponse.next();
}

// Apply middleware only to /admin paths
export const config = {
  matcher: ["/"],
};