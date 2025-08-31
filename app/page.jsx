import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { ExhibitorsGrid } from "@/components/exhibitors-grid"
import { Schedule } from "@/components/schedule"
import { Venue } from "@/components/venue"
import { CTA } from "@/components/cta"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Highlights from "@/components/highlights"
import About from "@/components/about"
import Properties from "@/components/properties"
import Speakers from "@/components/speakers"
import Tickets from "@/components/tickets"
import Sponsors from "@/components/sponsors"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ExhibitorsGrid />
        <Highlights />
        <About />
        <Properties />
        <Speakers />
        <Schedule />
        <Tickets />
        <Venue />
        <Sponsors />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
