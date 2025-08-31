"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  { q: "Where is the expo taking place?", a: "Dubai World Trade Centre, Halls 4–6." },
  { q: "Can I buy property on-site?", a: "Yes, many developers will facilitate on-site bookings and reservations." },
  {
    q: "Do I need a visa?",
    a: "Visa support is available for international attendees. Contact support for assistance.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="faq-title" className="text-2xl font-semibold text-primary">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/80">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
