import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/academy')) {
    return NextResponse.rewrite(new URL('https://forms.gle/47BD69dSta8wDPrV8', request.url))
  }
}