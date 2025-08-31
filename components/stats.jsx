"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Exhibitors", value: "200+" },
  { label: "Attendees", value: "15k+" },
  { label: "Countries", value: "40+" },
  { label: "Sessions", value: "60+" },
]

export function Stats() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-lg border p-5"
          >
            <div className="text-2xl font-semibold text-primary">{s.value}</div>
            <div className="text-sm text-foreground/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
