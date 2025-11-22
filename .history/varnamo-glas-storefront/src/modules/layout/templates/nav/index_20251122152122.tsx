import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Top announcement bar */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm">
        <p>Free shipping on orders over 500 SEK • Premium quality guaranteed</p>
      </div>

      {/* Main header */}
      <header className="relative h-20 mx-auto duration-200 bg-white border-b border-slate-200 shadow-sm">
        <nav className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between w-full h-full">
          {/* Left: Menu */}
          <div className="flex items-center h-full">
            <SideMenu regions={regions} />
          </div>

          {/* Center: Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors"
              data-testid="nav-store-link"
            >
              <span className="text-emerald-600">Varnamo</span> Glas
            </LocalizedClientLink>
          </div>

          {/* Right: Account & Cart */}
          <div className="flex items-center gap-x-6 h-full">
            <div className="hidden md:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
                href="/se/store"
                data-testid="nav-shop-link"
              >
                Shop
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-emerald-600 flex gap-2 font-medium text-slate-700 transition-colors"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
