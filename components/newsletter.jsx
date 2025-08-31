"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="mb-8">
              <div className="text-5xl mb-4">📧</div>
              <h2 id="newsletter-title" className="text-4xl font-bold text-slate-900 mb-4">
                Get Expo Updates
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Be the first to know about new exhibitors, exclusive sessions, on-site launches, and early bird ticket offers.
              </p>
            </div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto max-w-md space-y-4"
              aria-label="Newsletter signup form"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-900 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all duration-200"
                  aria-label="Email address"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-semibold text-lg py-4 hover:bg-slate-800 shadow-lg transition-all duration-200 rounded-lg"
              >
                Subscribe to Updates
              </Button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-slate-500 mt-6"
            >
              🔒 We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
