"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      className="py-12 sm:py-16 bg-background"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="text-2xl font-semibold text-primary">
          Contact & Appointment
        </h2>
        <p className="mt-2 text-foreground/80">
          For group bookings, partnerships, press inquiries, or to schedule a
          meeting during the expo.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4"
          aria-describedby="contact-status"
        >
          <div className="grid gap-2 sm:grid-cols-2">
            <input
              className="rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
              placeholder="Full name"
              aria-label="Full name"
              required
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              className="rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email"
              type="email"
              aria-label="Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <input
              className="rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
              placeholder="Phone"
              aria-label="Phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) =>
                setForm((s) => ({ ...s, phone: e.target.value }))
              }
            />
            <input
              className="rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
              placeholder="Location (City/Area)"
              aria-label="Location"
              required
              value={form.location}
              onChange={(e) =>
                setForm((s) => ({ ...s, location: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
            >
              {submitting ? "Booking..." : "Book Appointment"}
            </Button>
            <p
              id="contact-status"
              role="status"
              aria-live="polite"
              className={`text-sm ${
                status?.ok
                  ? "text-green-600"
                  : status
                  ? "text-red-600"
                  : "text-foreground/60"
              }`}
            >
              {status?.msg || ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
