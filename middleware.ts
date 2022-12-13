import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest, res: NextResponse) {
  // filter requests based on url containing /posts/*
  // get the frontmatter from the requested post

  console.log({ auth: req.cookies.get("authenticated") });
  if (req.cookies.get("authenticated") === "true") {
    return NextResponse.next();
  }

  // if paywall and there is no cookie, redirect
  return NextResponse.redirect(
    new URL(`/sign-in?returnUrl=${req.nextUrl.pathname}`, req.url)
  );
}

export const config = {
  matcher: "/posts/:path*",
};
