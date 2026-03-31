"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package } from "lucide-react"
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
              <div className="flex items-center justify-between mt-auto pt-2">
                <Skeleton className="w-12 h-3 md:h-4" />
                <Skeleton className="w-16 h-4 md:h-5" />
              </div>
              <Skeleton className="w-full h-8 md:h-10 rounded-full mt-2" />
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
              className="group relative transition-all duration-300 h-full flex flex-col"
              style={{ backgroundColor: 'var(--neutral-50)' }}
            >
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden bg-slate-50 rounded-xs md:rounded-md rounded-b-none md:rounded-b-none">
                <Image
                  src={product.mainImage || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-0.5 md:py-1 rounded-none  rounded-bl-md  text-[10px] md:text-xs font-bold z-10 shadow-sm">
                  Stock: {product.stock}
                </div>
              </div>

              {/* Content Section */}
              <div className="py-2 md:py-3 flex flex-col grow">
                {/* Brand Before Name */}
                <p className="text-[10px] md:text-sm font-bold mb-0.5" style={{ color: 'var(--neutral-500)' }}>
                  {product.brand}
                </p>
                <div className="flex mb-1">
                  <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1 w-full font-fauna" style={{ color: 'var(--neutral-900)' }}>
                    {product.name}
                  </h3>
                </div>

                {/* Short description removed as per user request */}

                {/* Prices Row: Old on left, New on right */}
                <div className="mt-0 flex items-center justify-between mb-2">
                  <div className="flex items-baseline gap-2">
                    {product.oldPrice && (
                      <span className="text-[10px] md:text-sm text-neutral-400 line-through font-light leading-none">
                        {product.oldPrice} MAD
                      </span>
                    )}
                  </div>
                  <span className="text-sm md:text-lg font-bold leading-none font-fauna" style={{ color: 'var(--neutral-900)' }}>
                    {product.price} MAD
                  </span>
                </div>

                {/* Content-width Rounded Button Under Prices */}
                
                <div className="w-fit bg-primary text-primary-foreground group-hover:bg-primary-600 transition-all px-3 md:px-4 py-2 md:py-2.5 rounded-full text-[11px] md:text-sm font-fauna">
                  View Details
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
