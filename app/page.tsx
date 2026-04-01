"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Ourproducts from "@/components/our-products"
import PopularProducts from "@/components/popular-products"
import WhatWeOffer from "@/components/what-we-offer"
import Testimonials from "@/components/testimonials"
import Subscription from "@/components/subscription"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Ourproducts />
      <PopularProducts />
      <Testimonials />
      <Subscription />
      <WhatWeOffer />
      <Footer />
    </main>
  )
}

