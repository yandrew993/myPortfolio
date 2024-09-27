// pages/_middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const maintenanceMode = true; // Set this to true when you want to enable maintenance mode

  const url = req.nextUrl.clone();
  if (
    maintenanceMode &&
    !url.pathname.startsWith("/maintenance") &&
    !url.pathname.startsWith("/_next") &&
    !url.pathname.startsWith("/public")
  ) {
    return NextResponse.redirect("/maintenance");
  }

  return NextResponse.next();
}
