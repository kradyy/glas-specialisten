import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import CategoriesShowcase from "@modules/home/components/categories-showcase"
import AllProducts from "@modules/home/components/all-products"
import HowItWorks from "@modules/home/components/how-it-works"
import Inspiration from "@modules/home/components/inspiration"
import TrustSignals from "@modules/home/components/trust-signals"
import FAQ from "@modules/home/components/faq"
import Newsletter from "@modules/home/components/newsletter"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Glas Specialisten - Designa dina glasrutor & se pris direkt",
  description:
    "Anpassade glasrutor för dig. Personlig köpresa. Fri frakt inom Sverige. Designa dina glasrutor i vårt designverktyg och se priset direkt.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      <Hero />
      <CategoriesShowcase />
      <AllProducts region={region} />
      <HowItWorks />
      <Inspiration />
      <TrustSignals />
      <FAQ />
      <Newsletter />
    </>
  )
}
