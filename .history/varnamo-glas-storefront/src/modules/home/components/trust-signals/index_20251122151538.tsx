"use client"

import { Heading } from "@medusajs/ui"

const TrustSignals = () => {
  const signals = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "On orders over 500 SEK",
    },
    {
      id: 2,
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      id: 4,
      icon: "💬",
      title: "Customer Support",
      description: "Available 24/7",
    },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {signals.map((signal) => (
          <div key={signal.id} className="text-center">
            <div className="text-4xl mb-4">{signal.icon}</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {signal.title}
            </h3>
            <p className="text-slate-600 text-sm">{signal.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustSignals
