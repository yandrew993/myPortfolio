// pages/_middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const maintenanceMode = false; // Set this to true when you want to enable maintenance mode

  if (maintenanceMode) {
    return NextResponse.redirect("/maintanance");
  }

  return NextResponse.next();
}
