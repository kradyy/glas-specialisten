"use client"

import { useState } from "react"
import { Button, Heading, Input } from "@medusajs/ui"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to your newsletter service
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="max-w-2xl mx-auto text-center">
        <Heading level="h2" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Stay Updated
        </Heading>
        <p className="text-slate-600 mb-8">
          Subscribe to our newsletter for exclusive offers, new arrivals, and design inspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800">
            Subscribe
          </Button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-4 text-sm">
            ✓ Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  )
}

export default Newsletter
