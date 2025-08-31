import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, location, source } = data || {}
    if (!name || !email || !phone || !location) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, save to a DB or send to a CRM/email.
    console.log("[v0] Appointment request received:", { name, email, phone, location, source })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}
