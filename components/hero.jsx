"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[68vh] w-full md:h-[82vh]">
        <img
          src="/images/dubai-skyline.png"
          alt="Dubai skyline at golden hour with Burj Khalifa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/40 to-slate-800/30" aria-hidden />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
          <div className="max-w-2xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm uppercase tracking-wider text-slate-200 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block border border-white/20"
            >
              March 12–14, 2026 • Dubai World Trade Centre
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-4xl font-bold leading-tight md:text-6xl text-white mb-6"
            >
              Where Global Property Leaders Meet Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-200 leading-relaxed mb-8 max-w-xl"
            >
              Explore premium developments, connect with investors, and discover
              the future of luxury living in the heart of Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button className="bg-white text-slate-900 font-semibold text-lg px-8 py-4 hover:bg-slate-100 transition-all duration-200 rounded-lg shadow-lg">
                Get Tickets
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm font-semibold px-8 py-4 transition-all duration-200 rounded-lg"
              >
                Become an Exhibitor
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee of highlights */}
      <div className="border-b border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center gap-8 overflow-hidden">
            <motion.div
              className="flex min-w-full shrink-0 items-center justify-between gap-8"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 20,
                ease: "linear",
              }}
              aria-hidden
            >
              <Pill>200+ Exhibitors</Pill>
              <Pill>15,000+ Attendees</Pill>
              <Pill>Keynotes & Panels</Pill>
              <Pill>Investment Sessions</Pill>
              <Pill>Luxury Developments</Pill>
              <Pill>PropTech Showcase</Pill>
            </motion.div>
            <motion.div
              className="flex min-w-full shrink-0 items-center justify-between gap-8"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 20,
                ease: "linear",
              }}
              aria-hidden
            >
              <Pill>200+ Exhibitors</Pill>
              <Pill>15,000+ Attendees</Pill>
              <Pill>Keynotes & Panels</Pill>
              <Pill>Investment Sessions</Pill>
              <Pill>Luxury Developments</Pill>
              <Pill>PropTech Showcase</Pill>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}
