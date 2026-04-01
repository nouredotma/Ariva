"use client"

import { useState, useEffect } from "react"
import ProductsGrid from "./products-grid"
import { bestSellers, type Product } from "@/lib/products-data"

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
    <section className="relative w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-fauna text-primary tracking-tight mb-2">
            Nos Produits Populaires
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl font-medium">
            Découvrez notre sélection des produits naturels les plus appréciés
          </p>
        </div>

        <div className="w-full">
          <ProductsGrid products={bestProducts} isLoading={isLoading} variant="horizontal" />
        </div>
      </div>
    </section>
  )
}
