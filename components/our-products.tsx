"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProductsGrid from "./products-grid"
import { bestSellers, type Product } from "@/lib/products-data"
import { Loader2 } from "lucide-react"

export default function OurProducts() {
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
    <section className="w-full pb-16 pt-8" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-full mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg md:text-3xl font-bold font-fauna" style={{ color: 'var(--neutral-900)' }}>Best Sellers</h2>
          <Link href="/products" className="bg-primary hover:bg-primary-600 text-primary-foreground transition-all px-4 py-2.5 rounded-full text-xs md:text-sm font-medium font-fauna">
            View All Products
          </Link>
        </div>

        <div className="w-full">
          <ProductsGrid products={bestProducts} isLoading={isLoading} />
        </div>
      </div>
    </section>
  )
}
