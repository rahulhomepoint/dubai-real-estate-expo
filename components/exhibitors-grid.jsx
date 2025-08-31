"use client"

import { motion } from "framer-motion"

const exhibitors = [
  { name: "Emaar", placeholder: "/emaar-logo.png", category: "Developer" },
  { name: "Nakheel", placeholder: "/nakheel-logo.png", category: "Developer" },
  { name: "Meraas", placeholder: "/meraas-logo.png", category: "Developer" },
  { name: "DAMAC", placeholder: "/damac-logo.png", category: "Developer" },
  { name: "Select Group", placeholder: "/select-group-logo.png", category: "Agency" },
  { name: "Sobha", placeholder: "/sobha-logo.png", category: "Developer" },
  { name: "Aldar", placeholder: "/aldar-logo.png", category: "Developer" },
  { name: "Ellington", placeholder: "/ellington-logo.png", category: "Agency" },
]

export function ExhibitorsGrid() {
  return (
    <section id="exhibitors" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Exhibitors</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet top developers and agencies presenting premium residences and investment opportunities at DREX 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 mb-12">
          {exhibitors.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[8/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={ex.placeholder || "/placeholder.svg"}
                  alt={`${ex.name} logo`}
                  className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Expo Highlights</h3>
          <p className="text-slate-600">Experience the grandeur of Dubai's real estate showcase</p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl aspect-[16/9] border border-slate-200 shadow-sm hover:shadow-md"
          >
            <img
              src="/images/expo-hall.png"
              alt="Expo hall booths"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Expo Hall
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-[16/9] border border-slate-200 shadow-sm hover:shadow-md"
          >
            <img
              src="/images/palm-jumeirah.png"
              alt="Palm Jumeirah waterfront villas"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Palm Jumeirah
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl aspect-[16/9] border border-slate-200 shadow-sm hover:shadow-md"
          >
            <img
              src="/images/dubai-skyline.png"
              alt="Dubai skyline at golden hour"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Dubai Skyline
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
