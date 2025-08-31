"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Emaar",
    src: "/emaar-logo.png",
    tier: "Platinum",
    category: "Developer",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Damac",
    src: "/placeholder-j1i8i.png",
    tier: "Gold",
    category: "Developer",
    color: "from-amber-500 to-amber-600",
  },
  {
    name: "Nakheel",
    src: "/nakheel-logo.png",
    tier: "Platinum",
    category: "Developer",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Meraas",
    src: "/meraas-logo.png",
    tier: "Gold",
    category: "Developer",
    color: "from-amber-500 to-amber-600",
  },
];

export default function Sponsors() {
  return (
    <section
      aria-labelledby="sponsors-title"
      className="py-16 sm:py-20 bg-gradient-to-br from-background via-card/20 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="sponsors-title"
            className="text-4xl font-bold text-primary mb-4"
          >
            Our Sponsors
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Proudly supported by the leading names in Dubai's real estate
            industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[6/3] w-full overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-card to-card/80 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105">
                <img
                  src={s.src || "/placeholder.svg"}
                  alt={`${s.name} logo`}
                  className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />

                {/* Tier badge */}
                {/* <div className="absolute top-2 right-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${s.color} shadow-lg`}>
                    {s.tier}
                  </span>
                </div> */}

                {/* Category badge */}
                {/* <div className="absolute bottom-2 left-2">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-accent to-accent/80 shadow-lg">
                    {s.category}
                  </span>
                </div> */}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Company name on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white px-4 py-2 rounded-lg font-semibold text-center">
                  {s.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 p-8 rounded-2xl border-2 border-accent/20 bg-gradient-to-r from-accent/10 to-primary/10"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Become a Sponsor
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join industry leaders and showcase your brand to thousands of real
            estate professionals and investors.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-accent to-accent/80 text-primary font-bold text-lg px-8 py-4 rounded-lg hover:from-accent/90 hover:to-accent shadow-xl shadow-accent/25 transition-all duration-200 hover:scale-105 border-2 border-white/30"
          >
            Sponsor DREX 2026
          </a>
        </motion.div>
      </div>
    </section>
  );
}
