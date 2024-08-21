import { NextResponse } from 'next/server'
 
export function middleware(request) {
  // if (request.nextUrl.pathname.startsWith('/academy/booklet')) {
  //   return NextResponse.rewrite(new URL('https://www.figma.com/slides/AdcmoUcleIzn8gtGFtvEYK/Booklet-ArachnoVa-Academy-(BasPro)?node-id=2-439&t=e8wXSkLiHTiR4HfQ-1', request.url))
  // }
  // else
  if (request.nextUrl.pathname.startsWith('/academy')) {
    return NextResponse.rewrite(new URL('https://forms.gle/47BD69dSta8wDPrV8', request.url))
  }
}
