"use client"

import { motion } from "framer-motion"

const items = [
  {
    day: "Day 1 — Vision",
    sessions: [
      { time: "09:30", title: "Opening Keynote: Dubai 2030" },
      { time: "11:00", title: "Prime Waterfront Developments" },
      { time: "14:00", title: "Global Investor Roundtable" },
    ],
  },
  {
    day: "Day 2 — Innovation",
    sessions: [
      { time: "10:00", title: "PropTech & Smart Living" },
      { time: "13:00", title: "Sustainable Luxury" },
      { time: "15:30", title: "Financing and REITs" },
    ],
  },
  {
    day: "Day 3 — Deals",
    sessions: [
      { time: "10:00", title: "Off-Plan Investments" },
      { time: "12:00", title: "Brokerage Power Sessions" },
      { time: "16:00", title: "Closing & Awards" },
    ],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-balance text-2xl font-semibold text-foreground md:text-3xl">Schedule Highlights</h2>
          <p className="mt-2 max-w-xl text-foreground/70">Three days of insights, networking, and opportunities.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-lg border p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium text-foreground">{day.day}</h3>
                <span className="text-xs text-accent">Featured</span>
              </div>
              <ul className="space-y-3">
                {day.sessions.map((s) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex w-14 shrink-0 rounded border bg-background px-2 py-1 text-center text-xs text-foreground/70">
                      {s.time}
                    </span>
                    <p className="text-sm text-foreground">{s.title}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
