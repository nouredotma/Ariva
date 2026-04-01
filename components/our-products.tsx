"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { categories, type Category } from "@/lib/products-data"
import { ArrowRight, Package } from "lucide-react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

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
  const [cats, setCats] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = () => {
      setIsLoading(true)
      
      // Get categories from local data
      setCats(categories)
      setIsLoading(false)
    }

    fetchCategories()
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
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-full flex flex-col bg-white border border-neutral-100/50 shadow-sm rounded-xs md:rounded-md p-2">
                  <Skeleton className="relative aspect-[3/4] w-full rounded-xs md:rounded-md rounded-b-none mb-3" />
                  <div className="flex flex-col grow gap-2 p-1 md:py-1 md:px-2">
                    <Skeleton className="w-3/4 h-4 md:h-6" />
                    <Skeleton className="w-full h-8 md:h-10 rounded-full mt-auto" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {cats.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Package className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No categories found</h3>
                  <p className="text-sm mx-auto max-w-sm font-medium text-neutral-500">
                    We couldn't find any categories.
                  </p>
                </div>
              ) : (
                cats.map((cat, index) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/collections/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="group relative transition-all duration-300 h-full flex flex-col bg-[#fbfbe5] hover:bg-[#c1d1be] rounded-xs md:rounded-md overflow-hidden"
                    >
                      {/* Image Section */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-xs md:rounded-md rounded-b-none md:rounded-b-none p-2 md:p-4 pb-0 md:pb-0 group/imgContainer">
                        <div className="relative w-full h-full">
                          <Image
                            src={cat.image || "/placeholder.svg"}
                            alt={cat.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            priority={index < 4}
                            className="object-cover rounded-xs md:rounded-md"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="py-2 px-2 md:px-4 pb-2 md:pb-4 flex flex-col grow">
                        <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1 w-full text-left font-fauna mb-1" style={{ color: 'var(--neutral-900)' }}>
                          {cat.name}
                        </h3>

                        <div className="flex flex-row justify-between items-end gap-2 mt-auto">
                          <p className="text-[10px] md:text-xs text-neutral-500 line-clamp-2 text-left mb-1 min-h-[2.5em] grow">
                            {cat.shortDescription}
                          </p>

                          <div className="flex items-center gap-2 md:gap-3 bg-primary p-1 pr-1 pl-3 md:pl-4 rounded-full group/btn hover:bg-[#9ac58e] transition-all shadow-sm shrink-0 mb-1">
                            <span className="text-[11px] md:text-[13px] font-bold font-fauna text-[#fbfbe5] tracking-widest leading-none">
                              View
                            </span>
                            <div className="bg-[#fbfbe5] w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-transform duration-300">
                              <ArrowRight size={16} className="text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
