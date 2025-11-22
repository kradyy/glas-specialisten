"use client"

import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"

interface ProductHeaderProps {
  product: HttpTypes.StoreProduct
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  const rating = 4.5 // TODO: Connect to actual reviews
  const reviewCount = 128 // TODO: Connect to actual reviews

  return (
    <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50 border-b border-slate-200 py-8 md:py-12">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
          <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
          <span>/</span>
          <a href="/se/store" className="hover:text-emerald-600 transition-colors">Shop</a>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.title}</span>
        </div>

        {/* Product Title & Meta */}
        <div className="max-w-3xl">
          <Heading level="h1" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {product.title}
          </Heading>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">
                    {i < Math.floor(rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-sm text-slate-600 ml-2">
                {rating} ({reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              {product.description}
            </p>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-2xl">✓</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-2xl">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-2xl">🔄</span>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader
