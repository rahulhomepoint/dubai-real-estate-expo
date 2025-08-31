"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="about-title" className="text-2xl font-semibold text-primary">
            About the Expo
          </h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            The Dubai Real Estate Expo brings together the region’s leading developers, brokers, and investors to
            showcase residential and commercial opportunities across the city. Gain insights from expert-led sessions,
            learn about new regulations, and discover developments in Downtown, Dubai Marina, Palm Jumeirah, and more.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-foreground/80">
            <li className="rounded-md border bg-card p-3">Premium developments</li>
            <li className="rounded-md border bg-card p-3">Investor workshops</li>
            <li className="rounded-md border bg-card p-3">Networking lounges</li>
            <li className="rounded-md border bg-card p-3">On-site bookings</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/modern-expo-floor-dubai-world-trade-centre.png"
            alt="Expo floor with booths and attendees at Dubai World Trade Centre"
            className="w-full rounded-lg border object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
