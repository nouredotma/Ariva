"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Ourproducts from "@/components/our-products"
import WhatWeOffer from "@/components/what-we-offer"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Ourproducts />
      <WhatWeOffer />
      <Testimonials />
      <Footer />
    </main>
  )
}

