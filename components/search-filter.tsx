"use client"

import { cn } from "@/lib/utils"
import { Search, Check } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { categories } from "@/lib/products-data"

export interface Filters {
  minPrice?: number | null
  maxPrice?: number | null
  search?: string
  category?: string | null
}

interface Props {
  onChange: (filters: Filters) => void
  initial?: Filters
}

export default function SearchFilter({ onChange, initial }: Props) {
  const [minPrice, setMinPrice] = useState<number | "">(initial?.minPrice ?? "")
  const [maxPrice, setMaxPrice] = useState<number | "">(initial?.maxPrice ?? "")
  const [search, setSearch] = useState<string>(initial?.search ?? "")
  const [category, setCategory] = useState<string>(initial?.category ?? "all")

  // Whenever the URL changes outside, update the local state if needed
  useEffect(() => {
    setSearch(initial?.search ?? "")
    setMinPrice(initial?.minPrice ?? "")
    setMaxPrice(initial?.maxPrice ?? "")
    setCategory(initial?.category ?? "all")
  }, [initial?.search, initial?.minPrice, initial?.maxPrice, initial?.category])

  // Build filter options from actual category data
  const CONDITIONS = categories.map((cat) => ({
    name: cat.name.length > 15 ? cat.name.split(" ")[0] : cat.name,
    value: cat.name,
    image: cat.image,
  }))

  const emit = () => {
    onChange({
      minPrice: minPrice === "" ? null : Number(minPrice),
      maxPrice: maxPrice === "" ? null : Number(maxPrice),
      search: search || "",
      category: category === "all" ? null : category,
    })
  }

  const toggleCategory = (val: string) => {
    const newCategory = category === val ? "all" : val
    setCategory(newCategory)
    onChange({
      minPrice: minPrice === "" ? null : Number(minPrice),
      maxPrice: maxPrice === "" ? null : Number(maxPrice),
      search: search || "",
      category: newCategory === "all" ? null : newCategory,
    })
  }

  return (
    <div className="w-full flex flex-col items-center gap-4 lg:gap-8">
      {/* Category Selection - Modern Cards */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-8">
        {CONDITIONS.map((opt) => {
          const isActive = category === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleCategory(opt.value)}
              className="relative group flex flex-col items-center gap-3 p-1 cursor-pointer outline-none w-24 md:w-36"
            >
              {/* Image Frame - Squared Rounded Box */}
              <div
                className={cn(
                  "relative w-full aspect-square rounded-full flex items-center justify-center transition-all duration-300",
                  "bg-neutral-100 border-2 overflow-hidden",
                  // Always show a border (neutral-200), but highlight it when active
                  isActive 
                    ? "border-success bg-white scale-105" 
                    : "border-neutral-200 hover:border-neutral-300 hover:bg-white"
                )}
              >
                {/* Product Image - Scale logic */}
                <div 
                  className={cn(
                    "relative w-full h-full transition-transform duration-500",
                    isActive ? "scale-110" : "group-hover:scale-110"
                  )}
                >
                  <Image
                    src={opt.image}
                    alt={opt.name}
                    fill
                    sizes="(max-width: 768px) 96px, 144px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Selection Indicator Overlay - Minimal and Centered */}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-success text-white rounded-full p-1 transform scale-100 animate-in zoom-in-50 duration-200">
                      <Check className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Label */}
              <span className={cn(
                "text-xs md:text-sm font-bold tracking-tight transition-colors duration-200",
                isActive ? "text-success" : "text-neutral-500 group-hover:text-neutral-900"
              )}>
                {opt.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Search Bar - Full Width with Button */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && emit()}
            className="w-full h-12 md:h-14 pl-12 pr-6 bg-white border border-neutral-200 rounded-full text-sm md:text-base text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/40 transition-all placeholder:text-neutral-400"
            placeholder="Search products..."
          />
        </div>
        <button
          type="button"
          onClick={emit}
          className="h-12 md:h-14 px-8 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary-600 transition-all active:scale-95 text-sm md:text-base cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  )
}

