"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const tiers = [
  { 
    name: "Visitor", 
    price: "AED 99", 
    features: ["Expo floor access", "General sessions", "Networking opportunities"],
    cta: "Get Visitor Pass",
    icon: "🎫"
  },
  {
    name: "Investor",
    price: "AED 399",
    features: ["Priority seating", "Investor lounge", "Workshop access", "Exclusive networking"],
    cta: "Get Investor Pass",
    highlight: true,
    icon: "💼"
  },
  {
    name: "VIP",
    price: "AED 899",
    features: ["All-access", "VIP lounge", "Speaker meet & greet", "Private consultations"],
    cta: "Get VIP Pass",
    icon: "👑"
  },
]

export default function Tickets() {
  return (
    <section id="tickets" aria-labelledby="tickets-title" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="tickets-title" className="text-4xl font-bold text-slate-900 mb-4">
            Tickets & Registration
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect pass for your DREX 2026 experience. Early bird pricing available until December 31st.
          </p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative ${t.highlight ? "lg:scale-105 z-10" : ""}`}
            >
              <div className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${t.highlight ? "ring-2 ring-slate-900" : ""}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{t.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.name}</h3>
                  <div className="text-3xl font-bold text-slate-700">{t.price}</div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-slate-400 flex-shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button className="w-full bg-slate-900 text-white font-semibold text-lg py-4 hover:bg-slate-800 shadow-sm transition-all duration-200 rounded-lg">
                  {t.cta}
                </Button>
                
                {/* Highlight badge */}
                {t.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-900 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
