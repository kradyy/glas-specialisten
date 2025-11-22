"use client"

import Link from "next/link"

const CategoriesShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Glasräcken",
      count: "12 produkter",
      href: "/se/store",
      image: "🪟",
    },
    {
      id: 2,
      name: "Rostfritt glas",
      count: "8 produkter",
      href: "/se/store",
      image: "⚙️",
    },
    {
      id: 3,
      name: "Vajerräcken",
      count: "6 produkter",
      href: "/se/store",
      image: "🔗",
    },
    {
      id: 4,
      name: "Specialglas",
      count: "5 produkter",
      href: "/se/store",
      image: "🪜",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-16">
          Shoppa efter kategori
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 aspect-square mb-6 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 flex items-center justify-center text-5xl opacity-70 group-hover:opacity-100">
                  {category.image}
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-600 mb-4">{category.count}</p>
                <div className="text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                  Utforska →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesShowcase
