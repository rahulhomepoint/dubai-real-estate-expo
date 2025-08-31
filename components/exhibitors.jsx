"use client"

import { motion } from "framer-motion"

const logos = [
  "/images/logo-emaar.png",
  "/images/logo-damac.png",
  "/images/logo-nakheel.png",
  "/images/logo-meraas.png",
  "/images/logo-sobha.png",
  "/images/logo-azizi.png",
]

export default function Exhibitors() {
  return (
    <section aria-labelledby="exhibitors" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="exhibitors" className="text-2xl font-semibold text-blue-900">
          Featured Developers
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-md border bg-white"
            >
              <img
                src={src || "/placeholder.svg"}
                alt="Developer logo"
                className="absolute inset-0 h-full w-full object-cover transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
