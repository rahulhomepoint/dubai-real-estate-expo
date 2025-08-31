export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="nav_logo.jpg"
                alt="Dubai Real Estate Expo Logo"
                className="w-16 h-12 rounded-lg shadow-sm"
              />
              <div>
                <h3 className="font-bold text-lg text-white">Dubai Real Estate Expo</h3>
                <p className="text-sm text-slate-300">Where Innovation Meets Opportunity</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              The premier real estate event in the Middle East, connecting global investors with Dubai's most prestigious developments.
            </p>
          </div>
          
          <nav aria-label="Footer" className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-6">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#exhibitors" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Exhibitors
            </a>
            <a href="#properties" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Properties
            </a>
            <a href="#speakers" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Speakers
            </a>
            <a href="#schedule" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Schedule
            </a>
            <a href="#tickets" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Tickets
            </a>
            <a href="#venue" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Venue
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Dubai Real Estate Expo. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                March 12-14, 2026
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                Dubai World Trade Centre
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
