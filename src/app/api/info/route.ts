import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    name: "Arthur Manenti",
    instagram: "@arthur.manenti",
    github: "@noname697",
  });
};
