import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="max-w-2xl">
          <Heading
            level="h1"
            className="text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 font-bold mb-4"
          >
            Premium Glass & Home Decor
          </Heading>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Discover our curated collection of high-quality glass products and home accessories. From elegant vases to functional glassware, find the perfect pieces for your home.
          </p>
          <div className="flex gap-4">
            <Link href="/se/store">
              <Button className="bg-slate-900 text-white hover:bg-slate-800">
                Shop Now
              </Button>
            </Link>
            <Link href="/se/store">
              <Button variant="secondary">
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
