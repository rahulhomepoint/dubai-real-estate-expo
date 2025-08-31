"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-title" className="text-4xl font-bold text-slate-900 mb-4">
            About the Expo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The premier real estate event in the Middle East, bringing together industry leaders and innovators
          </p>
        </motion.div>
        
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Where Innovation Meets Opportunity
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                The Dubai Real Estate Expo brings together the region's leading developers, brokers, and investors to
                showcase residential and commercial opportunities across the city. Gain insights from expert-led sessions,
                learn about new regulations, and discover developments in Downtown, Dubai Marina, Palm Jumeirah, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center group hover:bg-slate-100 transition-colors duration-200">
                <div className="text-2xl mb-2">🏗️</div>
                <div className="font-medium text-slate-900">Premium developments</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center group hover:bg-slate-100 transition-colors duration-200">
                <div className="text-2xl mb-2">💼</div>
                <div className="font-medium text-slate-900">Investor workshops</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center group hover:bg-slate-100 transition-colors duration-200">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-medium text-slate-900">Networking lounges</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center group hover:bg-slate-100 transition-colors duration-200">
                <div className="text-2xl mb-2">📋</div>
                <div className="font-medium text-slate-900">On-site bookings</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <img
              src="/modern-expo-floor-dubai-world-trade-centre.png"
              alt="Expo floor with booths and attendees at Dubai World Trade Centre"
              className="w-full rounded-2xl border border-slate-200 object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
