"use client"

import Link from "next/link"
import { Heading } from "@medusajs/ui"

const CategoriesShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Vases",
      description: "Elegant vases for every style",
      image: "🏺",
      href: "/se/store?category=vases",
    },
    {
      id: 2,
      name: "Drinkware",
      description: "Premium glasses and mugs",
      image: "🥃",
      href: "/se/store?category=drinkware",
    },
    {
      id: 3,
      name: "Decorative",
      description: "Home decor accessories",
      image: "✨",
      href: "/se/store?category=decorative",
    },
    {
      id: 4,
      name: "Tableware",
      description: "Dining essentials",
      image: "🍽️",
      href: "/se/store?category=tableware",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="mb-12">
        <Heading level="h2" className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Shop by Category
        </Heading>
        <p className="text-slate-600">Explore our diverse range of glass and home products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.href}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4 flex items-center justify-center text-6xl group-hover:bg-slate-200 transition-colors">
                {category.image}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-slate-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoriesShowcase
