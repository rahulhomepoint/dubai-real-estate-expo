"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Exhibitors", value: "200+", icon: "🏢" },
  { label: "Attendees", value: "15k+", icon: "👥" },
  { label: "Countries", value: "40+", icon: "🌍" },
  { label: "Sessions", value: "60+", icon: "🎯" },
]

export function Stats() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Highlights</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join thousands of real estate professionals and investors at the region's premier property exhibition
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="text-lg font-medium text-slate-600 mb-2">{s.label}</div>
                <div className="text-3xl font-bold text-slate-900">{s.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
