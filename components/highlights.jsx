"use client"

import { motion } from "framer-motion"

const items = [
  { 
    label: "Developers", 
    value: "120+", 
    icon: "🏢", 
    description: "Leading developers"
  },
  { 
    label: "Exhibitors", 
    value: "300+", 
    icon: "🎪", 
    description: "Global exhibitors"
  },
  { 
    label: "Attendees", 
    value: "25k+", 
    icon: "👥", 
    description: "Industry professionals"
  },
  { 
    label: "Sessions", 
    value: "80+", 
    icon: "🎯", 
    description: "Expert sessions"
  },
]

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="highlights-title" className="text-4xl font-bold text-slate-900 mb-4">
            Expo Highlights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover why DREX 2026 is the must-attend real estate event in the Middle East
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {it.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{it.value}</div>
                <div className="text-lg font-medium text-slate-700 mb-1">{it.label}</div>
                <div className="text-sm text-slate-500">{it.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
