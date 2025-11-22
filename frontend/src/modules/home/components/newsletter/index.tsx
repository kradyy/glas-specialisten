"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-3xl mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Få nyheter & inspiration
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Prenumerera på vårt nyhetsbrev för erbjudanden, nya produkter och designinspiration.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Din e-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-slate-100 border-none focus:outline-none focus:ring-2 focus:ring-emerald-600 text-lg"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-emerald-600 text-white font-heading font-bold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            Prenumerera
          </button>
        </form>

        {submitted && (
          <p className="text-emerald-600 mt-6 text-lg font-bold">
            ✓ Tack för att du prenumererar!
          </p>
        )}
      </div>
    </section>
  )
}

export default Newsletter
