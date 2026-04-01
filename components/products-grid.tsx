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
}

const ProductsGrid = memo(function ProductsGrid({ products, isLoading }: ProductsGridProps) {
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
    <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
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
          >
            <Link
              href={`/products/${product.id}`}
              className="group relative transition-all duration-300 h-full flex flex-col bg-[#fbfbe5] hover:bg-[#c1d1be] rounded-xs md:rounded-md overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden rounded-xs md:rounded-md rounded-b-none md:rounded-b-none p-2 md:p-4 pb-0 md:pb-0 group/imgContainer">
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
                
                {/* Heart Button */}
                <button 
                  className="absolute top-6 right-6 p-1 rounded-full transition-all duration-300 z-10 active:scale-95 group/heart cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    // Favorite logic would go here
                  }}
                >
                  <Heart size={28} className="fill-current  text-[#fdfdf0]/50 hover:text-[#f3bcbc] active:text-[#df2727] focus:text-[#df2727] transition-colors duration-300" />
                </button>
              </div>

                {/* Content Section */}
              <div className="py-1 px-2 md:px-4 pb-2 md:pb-4  flex flex-col grow">
                <div className="flex">
                  <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1 w-full font-fauna" style={{ color: 'var(--neutral-900)' }}>
                    {product.name}
                  </h3>
                </div>

                <p className="text-[10px] md:text-xs text-neutral-500 line-clamp-2 mb-2 min-h-[2.5em]">
                  {product.shortDescription}
                </p>

                <div className="flex items-center justify-between mt-auto mb-3 px-1">
                  <span className="text-xs text-neutral-500 line-clamp-1">{product.city}</span>
                  <span className="text-sm md:text-base font-bold text-neutral-900 whitespace-nowrap">{product.price} MAD</span>
                </div>

                <div className="self-end flex items-center gap-3 bg-primary p-1 pr-1 pl-4 rounded-full group/btn hover:bg-[#9ac58e] transition-all shadow-sm">
                  <span className="text-[11px] md:text-[13px] font-bold font-fauna text-[#fbfbe5] tracking-widest leading-none">
                    View
                  </span>
                  <div className="bg-[#fbfbe5] w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-transform duration-300">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
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
