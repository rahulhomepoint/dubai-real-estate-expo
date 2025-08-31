"use client"

import { motion } from "framer-motion"

const quotes = [
  { 
    quote: "A must-attend event for serious investors. The networking opportunities alone are worth the investment.", 
    author: "Global Property Review",
    role: "Industry Publication",
    rating: 5,
  },
  { 
    quote: "Incredible access to Dubai's leading developers. We've secured partnerships worth millions at DREX.", 
    author: "Investment Weekly",
    role: "Financial Magazine",
    rating: 5,
  },
  { 
    quote: "The scale and quality are unmatched in the region. This is where the future of real estate is shaped.", 
    author: "Real Estate Insider",
    role: "Industry Expert",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-title" className="text-4xl font-bold text-slate-900 mb-4">
            What People Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from industry experts and attendees about their DREX experience
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.div
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Quote icon */}
                <div className="text-4xl mb-4 text-slate-400">💬</div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(q.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-slate-700 text-lg leading-relaxed italic">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                </blockquote>
                
                {/* Author info */}
                <footer className="border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-lg">
                      {q.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{q.author}</div>
                      <div className="text-sm text-slate-500">{q.role}</div>
                    </div>
                  </div>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 p-8 rounded-2xl border border-slate-200 bg-white"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Share Your Experience</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Attended DREX before? We'd love to hear about your experience and feature your testimonial.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Share Your Story
          </a>
        </motion.div>
      </div>
    </section>
  )
}
