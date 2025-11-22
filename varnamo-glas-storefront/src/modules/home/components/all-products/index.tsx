import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

export default async function AllProducts({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      fields: "*variants.calculated_price",
      limit: 30,
    },
  })

  if (!pricedProducts || pricedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-16">
          Våra glasprodukter
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {pricedProducts.map((product) => (
            <div key={product.id}>
              <ProductPreview product={product} region={region} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
