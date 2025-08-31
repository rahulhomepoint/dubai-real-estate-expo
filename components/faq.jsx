"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  { 
    q: "Where is the expo taking place?", 
    a: "Dubai World Trade Centre, Halls 4–6. The venue is easily accessible by metro, car, and taxi with ample parking facilities.",
    icon: "📍"
  },
  { 
    q: "Can I buy property on-site?", 
    a: "Yes, many developers will facilitate on-site bookings and reservations. You can also schedule viewings and consultations during the event.",
    icon: "🏠"
  },
  {
    q: "Do I need a visa?",
    a: "Visa support is available for international attendees. Contact our support team for assistance with visa applications and travel arrangements.",
    icon: "🛂"
  },
  {
    q: "What's included in my ticket?",
    a: "Ticket benefits vary by tier. All tickets include expo floor access, while premium tiers offer additional perks like workshops and networking events.",
    icon: "🎫"
  },
  {
    q: "Can I bring guests?",
    a: "Each ticket is valid for one person. Additional tickets can be purchased for guests at the same pricing tier.",
    icon: "👥"
  },
]

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="faq-title" className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about DREX 2026. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border border-slate-200 rounded-xl bg-slate-50 px-6 py-2 data-[state=open]:shadow-md data-[state=open]:bg-white transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-slate-900 hover:text-slate-700 transition-colors duration-200 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold text-lg">{item.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 pl-12">
                  <p className="text-base leading-relaxed">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 p-6 rounded-2xl border border-slate-200 bg-slate-50"
        >
          <p className="text-slate-600 mb-4">
            Still have questions? Our team is here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
