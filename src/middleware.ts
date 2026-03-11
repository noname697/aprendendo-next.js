import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const authenticated = false;

  if (request.nextUrl.pathname.startsWith("/dashboard") && !authenticated) {
    console.log("Acesso negado.")
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};
