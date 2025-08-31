"use client"

import { motion } from "framer-motion"

const exhibitors = [
  { name: "Emaar", placeholder: "/emaar-logo.png" },
  { name: "Nakheel", placeholder: "/nakheel-logo.png" },
  { name: "Meraas", placeholder: "/meraas-logo.png" },
  { name: "DAMAC", placeholder: "/damac-logo.png" },
  { name: "Select Group", placeholder: "/select-group-logo.png" },
  { name: "Sobha", placeholder: "/sobha-logo.png" },
  { name: "Aldar", placeholder: "/aldar-logo.png" },
  { name: "Ellington", placeholder: "/ellington-logo.png" },
]

export function ExhibitorsGrid() {
  return (
    <section id="exhibitors" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">Featured Exhibitors</h2>
          <p className="mt-2 max-w-xl text-slate-600">
            Meet top developers and agencies presenting premium residences and investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-8">
          {exhibitors.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative aspect-[8/5] w-full overflow-hidden rounded-lg border bg-white"
            >
              <img
                src={ex.placeholder || "/placeholder.svg"}
                alt={`${ex.name} logo`}
                className="absolute inset-0 h-full w-full object-contain transition group-hover:scale-[1.02]"
              />
            </motion.div>
          ))}
        </div>

        {/* Showcase images */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img
              src="/images/expo-hall.png"
              alt="Expo hall booths"
              className="h-full w-full object-cover transition hover:scale-[1.02]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img
              src="/images/palm-jumeirah.png"
              alt="Palm Jumeirah waterfront villas"
              className="h-full w-full object-cover transition hover:scale-[1.02]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-lg aspect-[16/9]"
          >
            <img
              src="/images/dubai-skyline.png"
              alt="Dubai skyline at golden hour"
              className="h-full w-full object-cover transition hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
