"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import SearchOverlay from "@/components/search-overlay"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ShoppingCart, User, Heart, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useCallback, useRef } from "react"

export default function Header({ isStatic = false, forceScrolled = false }: { isStatic?: boolean, forceScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { totalItems, toggleCartModal } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  const isSolid = hasScrolled || forceScrolled

  // Check if we're in the users section
  const isUsersSection = pathname?.startsWith("/users") || isStatic

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Explore" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "top-0 z-40 w-full transition-all duration-300",
          isUsersSection 
            ? "sticky top-0 border-b border-gray-200" 
            : cn(
                "fixed",
                isSolid ? "border-b border-gray-200" : "bg-transparent"
              ),
        )}
        style={isUsersSection || isSolid ? { backgroundColor: 'var(--neutral-50)' } : {}}
      >

        <Container className="max-w-full mx-auto px-2 md:px-12">
          {/* Mobile layout - logo left, menu right */}
          <div className="md:hidden flex h-16 items-center justify-between">
            {/* Left: Menu Button - fixed width to balance with right side */}
            <div className="w-16 flex items-center justify-start">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors hover:bg-black/5"
                )}
                aria-label="Toggle menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300"
                >
                  <path
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                </svg>
              </button>
            </div>

            {/* Center: Logo - absolute centering within the flex container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <Link href="/" className="flex items-center z-10 shrink-0">
                <Image src="/logo.png" alt="Ariva Logo" width={112} height={40} className="h-10 w-auto object-contain" priority sizes="(max-width: 768px) 112px, 128px" />
              </Link>
            </div>

            {/* Right: Icons - fixed width matching left side to keep logo perfectly centered */}
            <div className="w-20 flex items-center justify-end gap-3 z-20">
              <Link
                href="/account"
                className="flex items-center justify-center text-gray-800 hover:text-secondary"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => toggleCartModal()}
                className="relative flex items-center justify-center w-8 h-8 text-gray-800 hover:text-secondary"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className={cn(
                  "absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] font-normal flex items-center justify-center shadow-sm transition-colors",
                  totalItems === 0 ? "bg-gray-400" : "bg-primary"
                )}>
                  {totalItems}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop layout - logo left, nav center, actions right */}
          <div className="hidden md:block">
            <div className="flex h-16 items-center justify-between gap-6">
              {/* Left: Logo */}
              <div className="flex items-center gap-6 shrink-0">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.png" alt="Ariva Logo" width={160} height={56} className="h-12 w-auto object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                </Link>
              </div>

              {/* Center: Navigation Links */}
              <nav className="flex items-center gap-6 flex-1 justify-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                      pathname === link.href ? "text-primary" : "text-gray-800"
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>

              {/* Right: Search, Person, Cart, Heart */}
              <div className="flex items-center gap-4 shrink-0">
                {/* Search Bar */}
                <div className="relative group flex items-center">
                  <input
                    id="desktop-search-input"
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      if (!isSearchOpen) setIsSearchOpen(true)
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchQuery.trim()) {
                        setIsSearchOpen(false)
                        router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`)
                      }
                    }}
                    className={cn(
                      "h-10 pl-4 pr-12 text-sm rounded-full border-none outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-[200px] lg:w-[260px]",
                      (isSolid || isUsersSection) ? "bg-black/5 border border-gray-100" : "bg-black/5 text-gray-800 placeholder:text-gray-400"
                    )}
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => {
                        setSearchQuery("")
                        searchInputRef.current?.focus()
                      }}
                      className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-600 cursor-pointer hover:bg-neutral-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="absolute right-1 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white cursor-pointer hover:bg-primary-600 transition-colors">
                      <Search className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Person Icon */}
                <Link
                  href="/account"
                  className={cn(
                    "flex items-center justify-center transition-colors hover:text-secondary text-gray-800"
                  )}
                  aria-label="Account"
                >
                  <User className="w-5 h-5" />
                </Link>

                {/* Cart Icon */}
                <button
                  onClick={() => toggleCartModal()}
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 transition-colors cursor-pointer hover:text-secondary text-gray-800"
                  )}
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className={cn(
                    "absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] font-normal flex items-center justify-center shadow-sm transition-colors",
                    totalItems === 0 ? "bg-gray-400" : "bg-primary"
                  )}>
                    {totalItems}
                  </span>
                </button>

                {/* Heart Icon */}
                <Link
                  href="/favorites"
                  className={cn(
                    "flex items-center justify-center transition-colors hover:text-secondary text-gray-800"
                  )}
                  aria-label="Favorites"
                >
                  <Heart className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Search Results Overlay - Desktop Only */}
        <div className="hidden md:block">
          <SearchOverlay
            query={searchQuery}
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onClear={() => {
              setSearchQuery("")
              setIsSearchOpen(false)
            }}
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop overlay with blur effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-50 md:hidden overflow-hidden bg-white"
              >
                <div className="h-full flex flex-col">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between px-3 py-4" style={{ backgroundColor: '#fbfbe5' }}>
                    <Link href="/" className="inline-block" onClick={() => setIsMenuOpen(false)}>
                      <Image src="/logo.png" alt="Ariva Logo" width={128} height={40} className="h-10 w-auto object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke="var(--primary)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation links */}
                  <div className="flex-1 overflow-y-auto py-3 px-1">
                    <nav className="space-y-0.5">
                      {navLinks.map((link, idx) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide border-b border-gray-100 font-fauna",
                              pathname === link.href ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Footer with Actions */}
                  <div className="border-t border-gray-100 p-4 space-y-3 bg-white">
                    <div className="flex items-center gap-2">
                       <Button 
                        variant="outline"
                        className="flex-1 h-12 rounded-sm border-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                         <User className="w-4 h-4 mr-2" />
                         Account
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 h-12 rounded-sm border-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                         <Heart className="w-4 h-4 mr-2" />
                         Favorites
                      </Button>
                    </div>
                    <Button 
                      className="w-full h-12 rounded-sm font-bold bg-primary text-primary-foreground hover:bg-primary-600 transition-all cursor-pointer" 
                      onClick={() => {
                        setIsMenuOpen(false)
                        toggleCartModal()
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Open Cart ({totalItems})
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

