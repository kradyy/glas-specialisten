const FAQ = () => {
  const faqs = [
    {
      question: "Hur beställer jag ett glas?",
      answer: "Du designar ditt glas i vårt designverktyg genom att ange dina mått och välja design. Därefter kan du beställa direkt online med säker betalning via faktura, kort eller delbetalning.",
    },
    {
      question: "Erbjuder ni montering?",
      answer: "Ja, vi erbjuder montering i stora delar av Skåne, Halland, Göteborg och hela Stockholm med omnejd. Du kan välja montering när du designar ditt glas. Det är upp till 30% ROT-avdrag på montagekostnaden.",
    },
    {
      question: "Vad är leveranstiden?",
      answer: "Vi erbjuder korta leveranstider. Alla produkter levereras fraktfritt hem till dig inom Sverige.",
    },
    {
      question: "Kan jag anpassa glaset efter mina behov?",
      answer: "Ja, alla våra glas är måttanpassade. Du väljer själv hur ditt glas ska se ut genom att välja material, färg, glas och monteringsmetod.",
    },
    {
      question: "Vilka betalningsmetoder accepterar ni?",
      answer: "Vi accepterar betalning via faktura, kreditkort och delbetalning. Alla transaktioner är säkra och krypterade.",
    },
    {
      question: "Hur kontaktar jag kundservice?",
      answer: "Du kan kontakta oss via telefon 0431-37 10 60 (mån-torsdag 08.00-17.00, fredag 08.00-15.00), e-post info@rackesbutiken.se eller genom att fylla i formuläret på vår hemsida.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 mx-auto max-w-4xl">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-16">
          Vanliga frågor
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-slate-300 pb-6"
            >
              <summary className="flex items-center justify-between w-full cursor-pointer">
                <h3 className="font-heading text-xl font-bold text-slate-900 group-open:text-emerald-600 transition-colors">
                  {faq.question}
                </h3>
                <span className="text-slate-600 group-open:rotate-180 transition-transform inline-block text-2xl">
                  +
                </span>
              </summary>
              <div className="pt-6">
                <p className="text-slate-700 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-slate-300">
          <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6">
            Behöver du personlig rådgivning?
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Vår kundservice hjälper dig att välja rätt glas för dina behov
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:0431371060"
              className="px-8 py-4 bg-emerald-600 text-white font-heading font-bold text-lg hover:bg-emerald-700 transition-colors"
            >
              Ring: 0431-37 10 60
            </a>
            <a
              href="mailto:info@rackesbutiken.se"
              className="px-8 py-4 bg-slate-200 text-slate-900 font-heading font-bold text-lg hover:bg-slate-300 transition-colors"
            >
              E-post: info@rackesbutiken.se
            </a>
          </div>
          <p className="text-slate-600 mt-6">
            Mån-torsdag 08.00-17.00 • Fredag 08.00-15.00
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
