"use client"

import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="newsletter-title" className="text-2xl font-semibold text-primary">
          Get Expo Updates
        </h2>
        <p className="mt-2 text-foreground/80">
          Be the first to know about new exhibitors, sessions, and on-site launches.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-md items-center gap-2"
          aria-label="Newsletter signup form"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email address"
          />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
