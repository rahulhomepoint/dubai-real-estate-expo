"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[68vh] w-full md:h-[76vh]">
        <img
          src="/images/dubai-skyline.png"
          alt="Dubai skyline at golden hour with Burj Khalifa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
          <div className="max-w-2xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-sm uppercase tracking-wide text-amber-400"
            >
              March 12–14, 2026 • Dubai World Trade Centre
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-4xl font-semibold leading-tight md:text-5xl"
            >
              Where Global Property Leaders Meet Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 max-w-xl text-pretty text-white/80"
            >
              Explore premium developments, connect with investors, and discover
              the future of luxury living in the heart of Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Tickets
              </Button>
              <Button
                variant="outline"
                className="border-white/60 bg-white/10 text-white hover:bg-white/20"
              >
                Become an Exhibitor
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee of highlights */}
      <div className="border-b border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center gap-6 overflow-hidden">
            <motion.div
              className="flex min-w-full shrink-0 items-center justify-between gap-6"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 18,
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
              className="flex min-w-full shrink-0 items-center justify-between gap-6"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 18,
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
    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}
