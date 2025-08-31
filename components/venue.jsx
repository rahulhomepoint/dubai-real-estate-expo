"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Venue() {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Venue & Location</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience DREX 2026 at the iconic Dubai World Trade Centre, the heart of business and innovation in Dubai.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
          >
            <img
              src="/images/expo-hall.png"
              alt="Dubai World Trade Centre exhibition hall"
              className="h-80 w-full object-cover md:h-96 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Dubai World Trade Centre
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-lg h-full">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Venue Details</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-2">📍 Address</h4>
                  <p className="text-slate-600">Dubai World Trade Centre, Sheikh Zayed Rd, Dubai, UAE</p>
                </div>
                
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-2">🚇 Transportation</h4>
                  <ul className="text-slate-600 space-y-1 text-sm">
                    <li>• Metro: World Trade Centre Station (Red Line)</li>
                    <li>• Taxi: Available 24/7</li>
                    <li>• Parking: Ample on-site parking</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-semibold text-slate-900 mb-2">⏰ Event Hours</h4>
                  <p className="text-slate-600">March 12-14, 2026 • 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-slate-900 text-white font-semibold text-lg px-8 py-4 hover:bg-slate-800 shadow-lg transition-all duration-200 rounded-lg w-full">
                  <a
                    href="https://maps.google.com/?q=Dubai+World+Trade+Centre"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open venue location in Google Maps"
                  >
                    🗺️ View on Maps
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
