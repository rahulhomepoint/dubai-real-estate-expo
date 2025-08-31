"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.phone || !form.location) {
      setStatus({
        ok: false,
        msg: "Please fill name, email, phone, and location.",
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location,
          source: "contact",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus({
        ok: true,
        msg: "Thanks! Your appointment request has been received.",
      });
      setForm({ name: "", email: "", phone: "", location: "" });
    } catch (err) {
      setStatus({
        ok: false,
        msg: err?.message || "Failed to submit appointment.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-title" className="text-4xl font-bold text-slate-900 mb-4">
            Contact & Appointment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For group bookings, partnerships, press inquiries, or to schedule a
            meeting during the expo. Our team is here to help make your DREX 2026 experience exceptional.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h3>
              <p className="text-slate-600">We'll get back to you within 24 hours</p>
            </div>
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-describedby="contact-status"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all duration-200"
                    placeholder="Enter your full name"
                    aria-label="Full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all duration-200"
                    placeholder="Enter your email"
                    type="email"
                    aria-label="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all duration-200"
                    placeholder="Enter your phone number"
                    aria-label="Phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Location</label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all duration-200"
                    placeholder="City/Area"
                    aria-label="Location"
                    required
                    value={form.location}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, location: e.target.value }))
                    }
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-slate-900 text-white font-semibold text-lg px-8 py-4 hover:bg-slate-800 shadow-lg transition-all duration-200 rounded-lg disabled:opacity-70"
                >
                  {submitting ? "Booking..." : "Book Appointment"}
                </Button>
                
                <div
                  id="contact-status"
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-medium px-4 py-2 rounded-lg ${
                    status?.ok
                      ? "text-green-700 bg-green-100 border border-green-200"
                      : status
                      ? "text-red-700 bg-red-100 border border-red-200"
                      : "text-slate-500"
                  }`}
                >
                  {status?.msg || ""}
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
