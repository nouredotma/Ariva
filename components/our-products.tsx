"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProductsGrid from "./products-grid"
import { bestSellers, type Product } from "@/lib/products-data"
import { Loader2, ArrowRight } from "lucide-react"

const OurProductsTopShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1440 320" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
    style={{ maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }}
  >
    <path d="M0 60 C 400 380, 1000 -120, 1440 200 L 1440 321 L 0 321 Z" />
  </svg>
);

const OurProductsBottomShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1440 320" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
    style={{ maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)" }}
  >
    <path d="M0 60 C 400 380, 1000 -120, 1440 200 L 1440 0 L 0 0 Z" />
  </svg>
);

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
    <section className="relative w-full bg-[#fbfbe5] py-6 mt-24 md:mt-40 mb-24 md:mb-40 overflow-visible">
      {/* Absolute Top Shape - positioned relative to section top */}
      <OurProductsTopShape className="absolute bottom-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5]" />
      
      {/* Absolute Bottom Shape - positioned relative to section bottom */}
      <OurProductsBottomShape className="absolute top-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5]" />

      <div className="max-w-full mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <h2 className="text-2xl md:text-4xl font-bold font-fauna text-primary tracking-tight">
            Shop by Category
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
