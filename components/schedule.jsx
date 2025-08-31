"use client"

import { motion } from "framer-motion"

const items = [
  {
    day: "Day 1 — Vision",
    theme: "Vision & Strategy",
    icon: "🎯",
    sessions: [
      { time: "09:30", title: "Opening Keynote: Dubai 2030", speaker: "H.E. Sheikh Ahmed" },
      { time: "11:00", title: "Prime Waterfront Developments", speaker: "Emaar & Nakheel" },
      { time: "14:00", title: "Global Investor Roundtable", speaker: "International Panel" },
    ],
  },
  {
    day: "Day 2 — Innovation",
    theme: "Innovation & Technology",
    icon: "🚀",
    sessions: [
      { time: "10:00", title: "PropTech & Smart Living", speaker: "Tech Leaders" },
      { time: "13:00", title: "Sustainable Luxury", speaker: "Green Developers" },
      { time: "15:30", title: "Financing and REITs", speaker: "Financial Experts" },
    ],
  },
  {
    day: "Day 3 — Deals",
    theme: "Deals & Networking",
    icon: "💼",
    sessions: [
      { time: "10:00", title: "Off-Plan Investments", speaker: "Investment Advisors" },
      { time: "12:00", title: "Brokerage Power Sessions", speaker: "Top Brokers" },
      { time: "16:00", title: "Closing & Awards", speaker: "Industry Leaders" },
    ],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Schedule Highlights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three days of insights, networking, and opportunities. Experience the future of real estate in Dubai.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{day.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{day.day}</h3>
                  <p className="text-sm text-slate-500">{day.theme}</p>
                </div>
                
                {/* Sessions */}
                <ul className="space-y-4">
                  {day.sessions.map((s, idx) => (
                    <li key={s.title} className="group/item">
                      <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                        <span className="inline-flex w-16 shrink-0 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-center text-sm font-bold text-slate-700">
                          {s.time}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 group-hover/item:text-slate-700 transition-colors duration-200">
                            {s.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{s.speaker}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                {/* Day badge */}
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-slate-700 bg-slate-100 border border-slate-200">
                    {day.theme}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-6 rounded-2xl border border-slate-200 bg-white"
        >
          <p className="text-slate-600 mb-4">
            📅 Full detailed schedule will be available 30 days before the event
          </p>
          <a 
            href="#tickets" 
            className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Get Your Pass
          </a>
        </motion.div>
      </div>
    </section>
  )
}
