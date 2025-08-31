"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const tiers = [
  { name: "Visitor", price: "AED 99", features: ["Expo floor access", "General sessions"], cta: "Get Visitor Pass" },
  {
    name: "Investor",
    price: "AED 399",
    features: ["Priority seating", "Investor lounge", "Workshop access"],
    cta: "Get Investor Pass",
    highlight: true,
  },
  {
    name: "VIP",
    price: "AED 899",
    features: ["All-access", "VIP lounge", "Speaker meet & greet"],
    cta: "Get VIP Pass",
  },
]

export default function Tickets() {
  return (
    <section id="tickets" aria-labelledby="tickets-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="tickets-title" className="text-2xl font-semibold text-primary">
          Tickets & Registration
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-lg border bg-card p-6 ${t.highlight ? "ring-2 ring-accent" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <div className="text-primary font-semibold">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">{t.cta}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
