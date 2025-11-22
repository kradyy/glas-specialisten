const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Designa",
      description: "Använd vårt designverktyg för att skapa ditt glas. Ange mått, välj material och design.",
    },
    {
      number: "02",
      title: "Se pris",
      description: "Få direkt prisöverslag för ditt glas. Ingen dolda kostnader eller överraskningar.",
    },
    {
      number: "03",
      title: "Beställ",
      description: "Beställ enkelt online med säker betalning. Faktura, kort eller delbetalning.",
    },
    {
      number: "04",
      title: "Leverans",
      description: "Vi levererar fraktfritt hem till dig. Montering erbjuds i många områden.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-16">
          Så enkelt är det
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="font-heading text-6xl font-bold text-slate-200 mb-6">
                {step.number}
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/se/store"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-heading font-bold text-lg hover:bg-emerald-700 transition-colors"
          >
            Börja designa ditt glas
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
