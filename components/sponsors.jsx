"use client"

import { motion } from "framer-motion"

const sponsors = [
  { name: "Emaar", src: "/emaar-logo.png" },
  { name: "Damac", src: "/placeholder-j1i8i.png" },
  { name: "Nakheel", src: "/nakheel-logo.png" },
  { name: "Meraas", src: "/meraas-logo.png" },
]

export default function Sponsors() {
  return (
    <section aria-labelledby="sponsors-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="sponsors-title" className="text-2xl font-semibold text-primary">
          Sponsors
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 h-">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-[6/3] w-full overflow-hidden rounded-md border bg-card leading-4"
              aria-label={`${s.name} sponsor logo`}
            >
              <img
                src={s.src || "/placeholder.svg"}
                alt={`${s.name} logo`}
                className="absolute inset-0 h-full w-full object-cover transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
