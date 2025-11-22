"use client"

const TrustSignals = () => {
  const signals = [
    {
      id: 1,
      title: "Fri frakt",
      description: "Inom Sverige på alla beställningar",
    },
    {
      id: 2,
      title: "Måttanpassat",
      description: "Designa ditt räcke exakt som du vill",
    },
    {
      id: 3,
      title: "Säker betalning",
      description: "Faktura, kort eller delbetalning",
    },
    {
      id: 4,
      title: "Kundservice",
      description: "0431-37 10 60 • info@rackesbutiken.se",
    },
  ]

  return (
    <section className="bg-slate-50 py-20 md:py-28 border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {signals.map((signal) => (
            <div key={signal.id}>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">
                {signal.title}
              </h3>
              <p className="text-slate-600 text-lg">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
