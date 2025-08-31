"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 rounded-xl border bg-card p-6 md:flex-row md:items-center"
        >
          <div>
            <h3 className="text-balance text-2xl font-semibold text-foreground">Secure your place at DREX 2026</h3>
            <p className="mt-2 max-w-xl text-foreground/70">
              Join investors, developers, and brokers from around the world for three days of premium opportunities.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Buy Tickets</Button>
            <Button variant="outline" className="border-border bg-transparent text-foreground hover:bg-muted/50">
              Exhibit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
