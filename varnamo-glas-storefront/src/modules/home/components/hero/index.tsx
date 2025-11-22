import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero section */}
      <div className="relative h-[55vh] md:h-[65vh] bg-gradient-to-b from-slate-50 to-white">
        {/* Faded gradient blobs - visible background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-slate-300 to-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-bl from-emerald-300 to-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        </div>

        {/* SVG pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="max-w-4xl">
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-tight text-slate-900 font-bold mb-6">
              Beställ anpassat glas
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-2 font-light">
              Se priset direkt. Måttanpassat för dig.
            </p>
            <p className="text-lg text-slate-500 mb-10">
              Fri frakt • Personlig köpresa • Säker betalning
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/se/store" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-heading font-bold text-lg rounded-none hover:bg-emerald-700 transition-colors duration-200 shadow-lg">
                  Börja designa
                </button>
              </Link>
              <Link href="/se/store" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 font-heading font-bold text-lg rounded-none hover:bg-slate-200 transition-colors duration-200">
                  Se alla produkter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
