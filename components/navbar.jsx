"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="Dubai Real Estate Expo home"
        >
          <img
            src="nav_logo.jpg"
            alt="logo image dubai real estate expo"
            className="w-30 h-20 rounded-lg shadow-sm"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#exhibitors"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Exhibitors
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#properties"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Properties
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#speakers"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Speakers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#schedule"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Schedule
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#tickets"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Tickets
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#venue"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Venue
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}
