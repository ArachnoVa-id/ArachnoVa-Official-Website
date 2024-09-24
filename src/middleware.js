import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/academy/booklet") {
    return NextResponse.redirect(
      "https://www.figma.com/slides/AdcmoUcleIzn8gtGFtvEYK/Booklet-ArachnoVa-Academy-(BasPro)?node-id=2-439&t=e8wXSkLiHTiR4HfQ-1"
    );
  } else if (pathname === "/academy/evaluation") {
    return NextResponse.redirect("https://forms.gle/YWGea3bFusN9hc5E8");
  } else if (pathname === "/academy") {
    return NextResponse.redirect("https://forms.gle/47BD69dSta8wDPrV8");
  } else if (pathname === "/client-evaluation") {
    return NextResponse.redirect("https://forms.gle/JiMFkhp88KmL1xR89");
  }

  return NextResponse.next();
}
