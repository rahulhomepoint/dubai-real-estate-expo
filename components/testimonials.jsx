"use client"

import { motion } from "framer-motion"

const quotes = [
  { quote: "A must-attend event for serious investors.", author: "Global Property Review" },
  { quote: "Incredible access to Dubai’s leading developers.", author: "Investment Weekly" },
  { quote: "The scale and quality are unmatched in the region.", author: "Real Estate Insider" },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-title" className="text-2xl font-semibold text-primary">
          What People Say
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-lg border bg-card p-6"
            >
              <p className="text-foreground">&ldquo;{q.quote}&rdquo;</p>
              <footer className="mt-3 text-sm text-foreground/70">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
