"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Venue() {
  return (
    <section id="venue" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/images/expo-hall.png"
              alt="Dubai World Trade Centre exhibition hall"
              className="h-72 w-full object-cover md:h-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-lg border p-6"
          >
            <h3 className="text-lg font-semibold text-foreground">Venue</h3>
            <p className="mt-2 text-sm text-foreground/70">Dubai World Trade Centre, Sheikh Zayed Rd, Dubai, UAE</p>
            <p className="mt-4 text-sm text-foreground/70">
              Easy access via metro (World Trade Centre Station), taxis, and ample on-site parking.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://maps.google.com/?q=Dubai+World+Trade+Centre"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open venue location in Google Maps"
                >
                  View on Maps
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
