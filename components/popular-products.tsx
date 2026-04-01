"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProductsGrid from "./products-grid"
import { bestSellers, type Product } from "@/lib/products-data"
import { ArrowRight } from "lucide-react"

export default function PopularProducts() {
  const [bestProducts, setBestProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBestProducts = () => {
      setIsLoading(true)
      
      // Get best products from local data
      const localProducts = bestSellers
      
      setBestProducts(localProducts)
      setIsLoading(false)
    }

    fetchBestProducts()
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 bg-white">
      <div className="max-w-full mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <h2 className="text-2xl md:text-4xl font-bold font-fauna text-primary tracking-tight">
            Popular Products
          </h2>
          
          <Link href="/products" className="group flex items-center gap-4 text-primary transition-all whitespace-nowrap pt-4 md:pt-0">
            <span className="text-lg font-medium border-b border-primary pb-0.5 group-hover:opacity-70 font-fauna">View All</span>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#fbfbe5] group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          <ProductsGrid products={bestProducts} isLoading={isLoading} />
        </div>
      </div>
    </section>
  )
}
