"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { bestCategories, type Category } from "@/lib/products-data"
import { ArrowRight, Package, Heart } from "lucide-react"
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


const CategoryBridgeShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className={className} fill="currentColor">
    {/* Clean horizontal sweep connecting the rounded pill centers to a flattened 10-unit thick bottom line */}
    <path d="M 0 0 C 25 0, 25 30, 50 30 L 486 30 L 493 10 L 500 20 L 507 10 L 514 30 L 950 30 C 975 30, 975 0, 1000 0 L 1000 40 L 0 40 Z" />
  </svg>
);

export default function OurProducts({ isWhite = false }: { isWhite?: boolean }) {
  const [cats, setCats] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = () => {
      setIsLoading(true)
      
      // Get categories from local data
      setCats(bestCategories)
      setIsLoading(false)
    }

    fetchCategories()
  }, [])

  const bgColor = isWhite ? "bg-white" : "bg-[#fbfbe5]";
  const accentColor = isWhite ? "text-white" : "text-[#fbfbe5]";
  const accentBg = isWhite ? "bg-white" : "bg-[#fbfbe5]";
  const accentBorder = isWhite ? "border-white" : "border-[#fbfbe5]";

  return (
    <section className={`relative w-full ${bgColor} py-6 mt-24 md:mt-40 mb-24 md:mb-40 overflow-visible`}>
      {/* Absolute Top Shape - positioned relative to section top */}
      <OurProductsTopShape className={`absolute bottom-[99.5%] left-0 w-full h-[100px] md:h-[180px] ${accentColor}`} />
      
      {/* Absolute Bottom Shape - positioned relative to section bottom */}
      <OurProductsBottomShape className={`absolute top-[99.5%] left-0 w-full h-[100px] md:h-[180px] ${accentColor}`} />

      <div className="max-w-full mx-auto px-2 md:px-12 relative z-10">
        <div className={`w-full flex items-end justify-between mb-8 ${accentColor} gap-0`}>
          
          {/* Left Title - Full Rounded */}
          <div className="bg-primary h-10 md:h-14 rounded-full px-5 md:px-8 flex items-center justify-center shrink-0 relative z-10">
            <h2 className="text-sm md:text-xl font-bold font-fauna tracking-tight whitespace-nowrap pt-1">
              Shop by Category
            </h2>
          </div>
          
          {/* Center Bridge - Perfectly tucked behind the semi-circles to merge beautifully at the tangency point */}
          <div className="flex-1 h-10 md:h-14 relative z-0 -mx-5 md:-mx-7 flex items-end">
            <CategoryBridgeShape className="w-full h-full text-primary" />
          </div>

          {/* Right Link - Full Rounded with reduced padding */}
          <Link href="/products" className="bg-primary h-10 md:h-14 rounded-full px-4 md:px-6 flex items-center justify-center gap-2 group shrink-0 relative z-10">
            <span className={`text-xs md:text-base font-medium border-b ${accentBorder} pb-0.5 font-fauna whitespace-nowrap`}>View all</span>
            <div className={`${accentBg} rounded-full p-0.5 md:p-1 text-primary`}>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 stroke-3" />
            </div>
          </Link>
        </div>

        <div className="w-full">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-full flex flex-col bg-white border border-neutral-100/50 shadow-sm rounded-xs md:rounded-md p-2">
                  <Skeleton className="relative aspect-3/4 w-full rounded-xs md:rounded-md rounded-b-none mb-3" />
                  <div className="flex flex-col grow gap-2 p-1 md:py-1 md:px-2">
                    <Skeleton className="w-3/4 h-4 md:h-6" />
                    <Skeleton className="w-full h-8 md:h-10 rounded-full mt-auto" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-3">
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
                      className={`group relative transition-all duration-300 h-full flex flex-col ${accentBg} hover:bg-[#c1d1be] rounded-xs md:rounded-md overflow-hidden`}
                    >
                      {/* Image Section */}
                      <div className="relative aspect-3/4 overflow-hidden rounded-xs md:rounded-md rounded-b-none md:rounded-b-none p-2 md:p-4 pb-0 md:pb-0 group/imgContainer">
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

                        {/* Heart Button */}
                        <button 
                          className="absolute top-3 right-3 md:top-6 md:right-6 p-1 rounded-full transition-all duration-300 z-10 active:scale-95 group/heart cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Favorite logic would go here
                          }}
                        >
                          <Heart size={28} className="fill-current text-[#fdfdf0]/50 hover:text-[#f3bcbc] active:text-[#df2727] focus:text-[#df2727] transition-colors duration-300" />
                        </button>
                      </div>

                      {/* Content Section */}
                      <div className="py-2 px-2 md:px-4 pb-2 md:pb-4 flex flex-col grow">
                        <h3 className="text-sm md:text-lg font-bold group-hover:text-primary transition-colors line-clamp-1 w-full text-left font-fauna mb-4" style={{ color: 'var(--neutral-900)' }}>
                          {cat.name}
                        </h3>

                        <div className="flex flex-row justify-between items-end gap-2 mt-auto">
                          <p className="text-xs md:text-base text-neutral-700 line-clamp-2 text-left mb-1 min-h-[2.5em] grow">
                            {cat.shortDescription}
                          </p>

                          <div className="flex items-center gap-2 md:gap-3 bg-primary p-1 pr-1 pl-3 md:pl-4 rounded-full group/btn hover:bg-[#9ac58e] transition-all shadow-sm shrink-0 mb-1">
                            <span className={`text-[11px] md:text-[13px] font-bold font-fauna ${accentColor} tracking-widest leading-none`}>
                              View
                            </span>
                            <div className={`${accentBg} w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-transform duration-300`}>
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
