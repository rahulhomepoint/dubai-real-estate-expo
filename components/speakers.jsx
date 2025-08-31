"use client"

import { motion } from "framer-motion"

const speakers = [
  { 
    name: "Aisha Al Mansoori", 
    role: "Urban Development Strategist", 
    img: "/professional-woman-portrait.png",
    expertise: "Smart Cities & Sustainability",
  },
  { 
    name: "Omar Al Farsi", 
    role: "Investment Director", 
    img: "/professional-portrait-man.png",
    expertise: "Real Estate Investment",
  },
  { 
    name: "Layla Haddad", 
    role: "Architect, Sustainable Design", 
    img: "/architect-portrait-woman.png",
    expertise: "Green Architecture",
  },
]

export default function Speakers() {
  return (
    <section aria-labelledby="speakers-title" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="speakers-title" className="text-4xl font-bold text-slate-900 mb-4">
            Featured Speakers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn from industry experts and thought leaders shaping the future of real estate in Dubai and beyond
          </p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {speakers.map((sp, idx) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="relative mb-6">
                  <img
                    src={sp.img || "/placeholder.svg"}
                    alt={sp.name}
                    className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-slate-200 shadow-sm group-hover:shadow-md transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {sp.name}
                  </div>
                  <div className="text-lg font-medium text-slate-600">{sp.role}</div>
                  <div className="text-sm text-slate-500">{sp.expertise}</div>
                </div>
                
                {/* Expertise badge */}
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200">
                    {sp.expertise}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
