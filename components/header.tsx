"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header({ isStatic = false, forceScrolled = false }: { isStatic?: boolean, forceScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()
  const { totalItems, toggleCartModal } = useCart()
  
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



  const productLinks = [
    { href: "/products?condition=men", label: "Men" },
    { href: "/products?condition=women", label: "Women" },
    { href: "/products?condition=unisex", label: "Unisex" },
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
            {/* Left: Logo */}
            <Link href="/" className="flex items-center z-10">
              <Image src="/logo.webp" alt="Alhor Parfum Logo" width={128} height={56} className="h-14 w-auto object-contain" priority sizes="(max-width: 768px) 112px, 128px" />
            </Link>

            {/* Right: Menu Button */}
            <div className="flex items-center gap-2 z-20">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors",
                  isSolid || isUsersSection ? "hover:bg-black/5" : "hover:bg-white/10"
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
                    stroke={isSolid || isUsersSection ? "#000000" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop layout - logo left, nav center, actions right */}
          <div className="hidden md:block">
            <div className="flex h-16 items-center justify-between gap-6">
              {/* Left: Logo */}
              <div className="flex items-center gap-6 shrink-0">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.webp" alt="Alhor Parfum Logo" width={160} height={56} className="h-14 w-auto object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                </Link>
              </div>

              {/* Center: Navigation Links */}
              <nav className="flex items-center gap-6 flex-1 justify-center">
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                    pathname === "/" ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                  )}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                      (pathname === "/products" && typeof window !== 'undefined' && window.location.search.includes(`condition=${link.href.split('=')[1]}`)) ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}



                <Link
                  href="/contact"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                    pathname === "/contact" ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                  )}
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>

              {/* Right: Contact, Cart */}
              <div className="flex items-center gap-3 shrink-0">
                {/* Cart Icon */}
                <button
                  onClick={() => toggleCartModal()}
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-colors cursor-pointer",
                    (isSolid || isUsersSection)
                      ? "text-primary"
                      : "text-white"
                  )}
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                  <span className={cn(
                    "absolute top-0 right-0 w-4 h-4 rounded-full text-white text-[9px] font-light flex items-center justify-center shadow-sm transition-colors",
                    totalItems === 0 ? "bg-yellow-500" : "bg-green-500"
                  )}>
                    {totalItems}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Container>

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
                  <div className="flex items-center justify-between px-3 py-4" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                    <Link href="/" className="inline-block" onClick={() => setIsMenuOpen(false)}>
                      <Image src="/logo.webp" alt="Alhor Parfum Logo" width={128} height={40} className="h-10 w-auto object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
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
                          stroke="#ffffff"
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
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        <Link
                          href="/"
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide border-b border-gray-100 font-fauna",
                            pathname === "/" ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                          )}
                        >
                          Home
                        </Link>
                      </motion.div>

                      {productLinks.map((link, idx) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (idx * 0.05) }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide border-b border-gray-100 font-fauna",
                              (pathname === "/products" && typeof window !== 'undefined' && window.location.search.includes(`condition=${link.href.split('=')[1]}`)) ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}



                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href="/contact"
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide font-fauna",
                            pathname === "/contact" ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                          )}
                        >
                          Contact
                        </Link>
                      </motion.div>
                    </nav>
                  </div>

                  {/* Footer with Cart Actions */}
                  <div className="border-t border-gray-100 p-4 space-y-3 bg-white">
                    <Button 
                      className="w-full h-12 rounded-sm font-bold bg-primary text-primary-foreground hover:bg-primary-600 transition-all cursor-pointer" 
                      onClick={() => {
                        setIsMenuOpen(false)
                        toggleCartModal()
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Open Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Floating Cart Button - Bottom Left */}
    <button
        onClick={() => toggleCartModal()}
        className="fixed bottom-2 left-2 z-40 md:hidden w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary-600 transition-all active:scale-95 cursor-pointer"
        aria-label="Cart"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className={cn(
          "absolute top-0 right-0 w-5 h-5 rounded-full text-white text-[9px] font-light flex items-center justify-center shadow-sm transition-colors border-2 border-primary",
          totalItems === 0 ? "bg-yellow-500" : "bg-green-500"
        )}>
          {totalItems}
        </span>
      </button>
    </>
  )
}

