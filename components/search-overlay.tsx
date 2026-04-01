"use client"

import { useMemo, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ArrowRight, Package, Tag, X, TrendingUp } from "lucide-react"
import { products, categories, type Product, type Category } from "@/lib/products-data"

interface SearchOverlayProps {
  query: string
  isOpen: boolean
  onClose: () => void
  onClear: () => void
}

export default function SearchOverlay({ query, isOpen, onClose, onClear }: SearchOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Filter products and categories based on the query
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q)
    ).slice(0, 6)
  }, [query])

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q)
    )
  }, [query])

  // Popular/trending products shown when input is focused but empty
  const trendingProducts = useMemo(() => {
    return products.filter((p) => p.isPopular).slice(0, 4)
  }, [])

  const hasResults = filteredProducts.length > 0 || filteredCategories.length > 0
  const showTrending = !query.trim() && isOpen

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        // Check if click is on the search input itself
        const searchInput = document.getElementById("desktop-search-input")
        if (searchInput && searchInput.contains(e.target as Node)) return
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-30"
            style={{ top: "64px" }}
            onClick={onClose}
          />

          {/* Overlay Panel */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0, y: -8, scaleY: 0.97 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full z-40 origin-top"
            style={{ maxHeight: "460px" }}
          >
            <div
              className="w-full border-t border-gray-100 shadow-2xl overflow-hidden"
              style={{ backgroundColor: "var(--neutral-50)" }}
            >
              <div className="max-w-full mx-auto px-4 md:px-12 py-6 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:right-12 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors duration-200 group cursor-pointer z-10"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800 transition-colors" />
                </button>
                {/* Trending / Empty State */}
                {showTrending && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                        Trending Products
                      </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {trendingProducts.map((product, idx) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={`/products/${product.id}`}
                            onClick={onClose}
                            className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-all duration-200"
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
                              <Image
                                src={product.mainImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-semibold text-neutral-800 truncate group-hover:text-primary transition-colors font-fauna">
                                {product.name}
                              </span>
                              <span className="text-xs text-neutral-500">{product.price} MAD</span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Quick Category Links */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                          Browse Categories
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${encodeURIComponent(cat.name)}`}
                            onClick={onClose}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-primary/5 text-neutral-700 hover:bg-primary hover:text-white transition-all duration-200 border border-primary/10 hover:border-primary"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {query.trim() && (
                  <div>
                    {/* Categories Section */}
                    {filteredCategories.length > 0 && (
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                            Categories
                          </span>
                          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                            {filteredCategories.length}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {filteredCategories.map((cat, idx) => (
                            <motion.div
                              key={cat.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.04 }}
                            >
                              <Link
                                href={`/products?category=${encodeURIComponent(cat.name)}`}
                                onClick={onClose}
                                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/5 hover:bg-primary text-neutral-700 hover:text-white transition-all duration-200 border border-primary/10 hover:border-primary"
                              >
                                <span className="text-sm font-medium">{cat.name}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Products Section */}
                    {filteredProducts.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Package className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                              Products
                            </span>
                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                              {filteredProducts.length}
                            </span>
                          </div>
                          {filteredProducts.length > 0 && (
                            <Link
                              href={`/products?q=${encodeURIComponent(query)}`}
                              onClick={onClose}
                              className="text-xs font-medium text-primary hover:text-primary-600 transition-colors flex items-center gap-1"
                            >
                              View all results
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {filteredProducts.map((product, idx) => (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.04 }}
                            >
                              <Link
                                href={`/products/${product.id}`}
                                onClick={onClose}
                                className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-all duration-200"
                              >
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
                                  <Image
                                    src={product.mainImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="64px"
                                  />
                                </div>
                                <div className="flex flex-col min-w-0 flex-1">
                                  <span className="text-sm font-semibold text-neutral-800 truncate group-hover:text-primary transition-colors font-fauna">
                                    <HighlightMatch text={product.name} query={query} />
                                  </span>
                                  <span className="text-xs text-neutral-500 truncate mt-0.5">
                                    {product.category}
                                  </span>
                                  <span className="text-sm font-bold text-neutral-900 mt-1">
                                    {product.price} MAD
                                  </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-200">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* No Results */}
                    {!hasResults && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-10 text-center"
                      >
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                          <Search className="w-7 h-7 text-neutral-400" />
                        </div>
                        <h4 className="text-base font-semibold text-neutral-700 mb-1">
                          No results for &ldquo;{query}&rdquo;
                        </h4>
                        <p className="text-sm text-neutral-500 max-w-sm">
                          Try a different search term or browse our categories below.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          {categories.slice(0, 4).map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products?category=${encodeURIComponent(cat.name)}`}
                              onClick={onClose}
                              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/5 text-neutral-600 hover:bg-primary hover:text-white transition-all duration-200 border border-primary/10"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/** Highlights matching parts of text */
function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="text-primary font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}
