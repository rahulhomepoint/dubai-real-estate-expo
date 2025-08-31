"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-xl"
        >
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-balance text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                Secure your place at DREX 2026
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 leading-relaxed"
              >
                Join investors, developers, and brokers from around the world for three days of premium opportunities, exclusive networking, and groundbreaking insights into Dubai's real estate market.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button className="bg-slate-900 text-white font-semibold text-lg px-8 py-4 hover:bg-slate-800 shadow-lg transition-all duration-200 rounded-lg">
                Buy Tickets
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 font-semibold px-8 py-4 transition-all duration-200 rounded-lg"
              >
                Exhibit
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
