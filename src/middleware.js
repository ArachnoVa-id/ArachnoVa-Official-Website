import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/academy/booklet")) {
    return NextResponse.redirect(
      "https://www.figma.com/slides/AdcmoUcleIzn8gtGFtvEYK/Booklet-ArachnoVa-Academy-(BasPro)?node-id=2-439&t=e8wXSkLiHTiR4HfQ-1"
    );
  } else if (pathname.startsWith("/academy")) {
    return NextResponse.redirect("https://forms.gle/47BD69dSta8wDPrV8");
  }

  return NextResponse.next();
}
