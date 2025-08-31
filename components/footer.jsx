export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Dubai Real Estate Expo</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-4">
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground">
              About
            </a>
            <a href="#exhibitors" className="text-sm text-foreground/70 hover:text-foreground">
              Exhibitors
            </a>
            <a href="#properties" className="text-sm text-foreground/70 hover:text-foreground">
              Properties
            </a>
            <a href="#speakers" className="text-sm text-foreground/70 hover:text-foreground">
              Speakers
            </a>
            <a href="#schedule" className="text-sm text-foreground/70 hover:text-foreground">
              Schedule
            </a>
            <a href="#tickets" className="text-sm text-foreground/70 hover:text-foreground">
              Tickets
            </a>
            <a href="#venue" className="text-sm text-foreground/70 hover:text-foreground">
              Venue
            </a>
            <a href="#faq" className="text-sm text-foreground/70 hover:text-foreground">
              FAQ
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
