"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Dubai Real Estate Expo home">
          <div className="h-8 w-8 rounded bg-primary" aria-hidden />
          <span className="font-semibold text-foreground">Dubai Real Estate Expo</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <Link href="#about" className="text-sm text-foreground/70 hover:text-foreground">
            About
          </Link>
          <Link href="#exhibitors" className="text-sm text-foreground/70 hover:text-foreground">
            Exhibitors
          </Link>
          <Link href="#properties" className="text-sm text-foreground/70 hover:text-foreground">
            Properties
          </Link>
          <Link href="#speakers" className="text-sm text-foreground/70 hover:text-foreground">
            Speakers
          </Link>
          <Link href="#schedule" className="text-sm text-foreground/70 hover:text-foreground">
            Schedule
          </Link>
          <Link href="#tickets" className="text-sm text-foreground/70 hover:text-foreground">
            Tickets
          </Link>
          <Link href="#venue" className="text-sm text-foreground/70 hover:text-foreground">
            Venue
          </Link>
          <Link href="#faq" className="text-sm text-foreground/70 hover:text-foreground">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Register</Button>
        </div>
      </div>
    </header>
  )
}
