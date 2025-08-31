"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const properties = [
  {
    title: "Marina Vista Residences",
    area: "Dubai Marina",
    img: "/dubai-marina-luxury-residences-waterfront.png",
    price: "AED 2.1M+",
    badge: "New Launch",
  },
  {
    title: "Downtown Skyline Villas",
    area: "Downtown Dubai",
    img: "/downtown-dubai-skyline-luxury-villa-view.png",
    price: "AED 4.9M+",
    badge: "Premium",
  },
  {
    title: "Palm Jumeirah Beachfront",
    area: "Palm Jumeirah",
    img: "/palm-jumeirah-beachfront-villa-sunset.png",
    price: "AED 7.5M+",
    badge: "Luxury",
  },
]

export default function Properties() {
  return (
    <section id="properties" aria-labelledby="properties-title" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="properties-title" className="text-4xl font-bold text-slate-900 mb-4">
            Property Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore flagship projects and premium developments launching at the expo. Discover your dream property in Dubai's most prestigious locations.
          </p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-200 bg-white">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900 shadow-sm">
                      {p.badge}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-600 font-medium">{p.area}</span>
                    <span className="font-bold text-lg text-slate-900">{p.price}</span>
                  </div>
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all duration-200">
                    Request Brochure
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
