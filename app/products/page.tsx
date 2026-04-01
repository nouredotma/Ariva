"use client"

import { useState, useEffect, useMemo, Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Container } from "@/components/ui/container"
import ProductsGrid from "@/components/products-grid"
import SearchFilter, { type Filters } from "@/components/search-filter"
import { products, type Product } from "@/lib/products-data"
import { Loader2, ChevronRight } from "lucide-react"
import Link from "next/link"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

function ProductsContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('q')
  const categoryParam = searchParams.get('category')
  const minParam = searchParams.get('min')
  const maxParam = searchParams.get('max')
  
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<Filters>({
    search: searchParam ?? "",
    category: categoryParam ?? "all",
    minPrice: minParam ? Number(minParam) : null,
    maxPrice: maxParam ? Number(maxParam) : null,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true)
      // Products are local now
      const localProducts = products
      setAllProducts(localProducts)
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Price filtering
      if (filters.minPrice != null && p.price < filters.minPrice) return false
      if (filters.maxPrice != null && p.price > filters.maxPrice) return false

      // Category filtering
      if (filters.category && filters.category !== "all") {
        if (p.category !== filters.category) return false
      }

      // Search filtering
      if (filters.search) {
        const searchStr = filters.search.toLowerCase()
        const hay = (p.name).toLowerCase()
        if (!hay.includes(searchStr)) return false
      }

      return true
    })
  }, [allProducts, filters])

  useEffect(() => {
    setFilters(prev => ({ 
      ...prev, 
      search: searchParam ?? "", 
      category: categoryParam ?? "all" ,
      minPrice: minParam ? Number(minParam) : null,
      maxPrice: maxParam ? Number(maxParam) : null,
    }))
  }, [searchParam, categoryParam, minParam, maxParam])

  const handleFilterChange = (newFilters: Filters) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (newFilters.search) params.set('q', newFilters.search)
    else params.delete('q')

    if (newFilters.category && newFilters.category !== "all") params.set('category', newFilters.category)
    else params.delete('category')

    if (newFilters.minPrice != null) params.set('min', newFilters.minPrice.toString())
    else params.delete('min')

    if (newFilters.maxPrice != null) params.set('max', newFilters.maxPrice.toString())
    else params.delete('max')
    
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.replace(newUrl, { scroll: false })

    setFilters(newFilters)
  }

  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Breadcrumb Section */}
      <div className="pt-44 pb-6 md:pb-8">
        <Container className="max-w-full mx-auto px-4 md:px-12">
            <nav className="flex items-center gap-1.5 text-[10px] md:text-sm text-muted-foreground leading-none">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 -mt-px" />
                <span className="text-primary font-medium">Products</span>
            </nav>
        </Container>
      </div>

      <section className="pb-12 md:pb-20">
        <Container className="max-w-full mx-auto px-4 md:px-12">
          
          <div className="flex flex-col gap-8">
            {/* Filters at the top */}
            <div className="w-full">
              <SearchFilter 
                onChange={handleFilterChange} 
                initial={{ 
                  search: searchParam ?? "",
                  category: categoryParam ?? "all",
                  minPrice: minParam ? Number(minParam) : null,
                  maxPrice: maxParam ? Number(maxParam) : null
                }} 
              />
            </div>

            {/* Products Grid Main Area */}
            <div className="w-full">
              <ProductsGrid products={filteredProducts} isLoading={isLoading} />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
      <ProductsContent />
    </Suspense>
  )
}
