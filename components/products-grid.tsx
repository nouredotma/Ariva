"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package, Heart, ArrowRight } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductsGridProps {
  products: Product[]
  isLoading?: boolean
  variant?: "grid" | "horizontal"
}

const ProductsGrid = memo(function ProductsGrid({ products, isLoading, variant = "grid" }: ProductsGridProps) {
  if (isLoading) {
    return (
      <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-full flex flex-col bg-white border border-neutral-100/50 shadow-sm rounded-xs md:rounded-md p-2">
            <Skeleton className="relative aspect-square w-full rounded-xs md:rounded-md rounded-b-none mb-3" />
            <div className="flex flex-col grow gap-2 p-1 md:py-1 md:px-2">
              <Skeleton className="w-16 h-3 md:h-4" />
              <Skeleton className="w-3/4 h-4 md:h-6" />
              <Skeleton className="w-full h-8 md:h-10 rounded-full mt-auto" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`products-grid grid ${variant === 'horizontal' ? 'grid-cols-1 gap-0 md:grid-cols-3 md:gap-3 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-3`}>
      {products.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Package className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">No products found</h3>
          <p className="text-sm mx-auto max-w-sm font-medium text-neutral-500">
            We couldn't find any products matching your search criteria.
          </p>
        </div>
      ) : (
        products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={variant === 'horizontal' ? 'w-full flex flex-col items-center' : ''}
          >
            {variant === 'horizontal' && index > 0 && (
              <div className="w-full px-4 md:hidden py-1">
                <div className="h-[5px] w-full bg-primary rounded-full opacity-50" />
              </div>
            )}
            
            <Link
              href={`/products/${product.id}`}
              className={`group relative transition-all duration-300 h-full w-full flex ${variant === 'horizontal' ? 'flex-row md:flex-col' : 'flex-col'} bg-white hover:bg-[#c1d1be] rounded-xs md:rounded-md overflow-hidden`}
            >
              {/* Heart Button - Positioned relative to the whole card */}
              <button 
                className={`absolute ${variant === 'horizontal' ? 'top-1 right-3 md:top-6 md:right-6' : 'top-4 right-4 md:top-6 md:right-6'} p-1 rounded-full transition-all duration-300 z-20 active:scale-95 group/heart cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault();
                  // Favorite logic would go here
                }}
              >
                <Heart 
                  size={variant === 'horizontal' ? 22 : 24} 
                  className={`fill-current ${variant === 'horizontal' ? 'text-neutral-300/60' : 'text-[#fdfdf0]/40'} hover:text-[#f3bcbc] active:text-[#df2727] focus:text-[#df2727] transition-colors duration-300 md:text-[#fdfdf0]/40 md:w-7 md:h-7`} 
                />
              </button>

              {/* Image Section */}
              <div className={`relative ${variant === 'horizontal' ? 'w-[100px] md:w-full aspect-square md:aspect-square' : 'aspect-square'} overflow-hidden rounded-xs md:rounded-md rounded-b-none md:rounded-b-none p-2 md:p-4 pb-0 md:pb-0 group/imgContainer shrink-0`}>
                <div className="relative w-full h-full">
                  <Image
                    src={product.mainImage || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                    className="object-cover rounded-xs md:rounded-md"
                  />
                </div>
              </div>

                {/* Content Section */}
              <div className={`pt-2 pb-1 px-3 md:px-4 flex flex-col grow ${variant === 'horizontal' ? 'justify-between min-h-[100px]' : ''}`}>
                <div className="flex flex-col">
                  <h3 className="text-[14px] md:text-lg font-bold group-hover:text-primary transition-colors line-clamp-1 w-full font-fauna mb-0.5" style={{ color: 'var(--neutral-900)' }}>
                    {product.name}
                  </h3>
                  <span className="text-xs md:text-sm text-neutral-500 line-clamp-1">{product.city}</span>
                </div>

                <div className="flex flex-row justify-between items-end mt-auto w-full">
                  <div className="flex flex-col gap-0.5 shrink-0">
                    <span className="text-sm md:text-base font-bold text-neutral-900 whitespace-nowrap">{product.price} MAD</span>
                  </div>

                  {/* CTA Area */}
                  {variant === 'horizontal' ? (
                    <div className="shrink-0">
                      {/* Mobile View: Branded View Button */}
                      <div className="md:hidden flex items-center gap-2 bg-primary p-1.5 pr-1.5 pl-3 rounded-full group/btn hover:bg-[#9ac58e] transition-all">
                        <span className="text-xs font-bold font-fauna text-[#fbfbe5] tracking-widest leading-none">
                          View
                        </span>
                        <div className="bg-[#fbfbe5] w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300">
                          <ArrowRight size={14} className="text-primary" />
                        </div>
                      </div>

                      {/* Desktop View: Standard Arrow Icon */}
                      <div className="hidden md:flex bg-primary w-10 h-10 rounded-full items-center justify-center shadow-sm group-hover:bg-[#9ac58e] transition-colors duration-300">
                        <ArrowRight size={18} className="text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-primary w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#9ac58e] transition-colors duration-300">
                      <ArrowRight size={14} className="text-white md:hidden" />
                      <ArrowRight size={18} className="text-white hidden md:block" />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))
      )}
    </div>
  )
})

export default ProductsGrid
