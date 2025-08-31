"use client"

import { motion } from "framer-motion"

const items = [
  { label: "Developers", value: "120+" },
  { label: "Exhibitors", value: "300+" },
  { label: "Attendees", value: "25k+" },
  { label: "Sessions", value: "80+" },
]

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="highlights-title" className="text-balance text-2xl font-semibold text-primary">
          Expo Highlights
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="rounded-lg border bg-card p-4 text-center"
            >
              <div className="text-3xl font-semibold text-primary">{it.value}</div>
              <div className="mt-1 text-sm text-foreground/70">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
