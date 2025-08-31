import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "Dubai Real Estate Expo API",
    },
    { status: 200 }
  );
}
