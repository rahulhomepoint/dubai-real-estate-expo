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
  },
  {
    title: "Downtown Skyline Villas",
    area: "Downtown Dubai",
    img: "/downtown-dubai-skyline-luxury-villa-view.png",
    price: "AED 4.9M+",
  },
  {
    title: "Palm Jumeirah Beachfront",
    area: "Palm Jumeirah",
    img: "/palm-jumeirah-beachfront-villa-sunset.png",
    price: "AED 7.5M+",
  },
]

export default function Properties() {
  return (
    <section id="properties" aria-labelledby="properties-title" className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="properties-title" className="text-2xl font-semibold text-primary">
          Property Showcase
        </h2>
        <p className="mt-2 text-foreground/80">
          Explore flagship projects and premium developments launching at the expo.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <Card className="overflow-hidden transition hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground/80">
                  <div className="flex items-center justify-between">
                    <span>{p.area}</span>
                    <span className="font-medium text-accent">{p.price}</span>
                  </div>
                  <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
