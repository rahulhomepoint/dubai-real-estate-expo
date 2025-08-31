"use client"

import { motion } from "framer-motion"

const speakers = [
  { name: "Aisha Al Mansoori", role: "Urban Development Strategist", img: "/professional-woman-portrait.png" },
  { name: "Omar Al Farsi", role: "Investment Director", img: "/professional-portrait-man.png" },
  { name: "Layla Haddad", role: "Architect, Sustainable Design", img: "/architect-portrait-woman.png" },
]

export default function Speakers() {
  return (
    <section aria-labelledby="speakers-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="speakers-title" className="text-2xl font-semibold text-primary">
          Featured Speakers
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {speakers.map((sp, idx) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-lg border bg-card p-6 text-center"
            >
              <img
                src={sp.img || "/placeholder.svg"}
                alt={sp.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <div className="mt-4 font-medium text-foreground">{sp.name}</div>
              <div className="text-sm text-foreground/70">{sp.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
