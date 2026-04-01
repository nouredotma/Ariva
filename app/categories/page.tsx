"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import OurProducts from "@/components/our-products"

export default function CategoriesPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Hero Section - Following the About page title style */}
      <section className="relative pt-32 overflow-hidden text-center">
        {/* Abstract Blobs for visual texture like the About page */}
        <div className="absolute top-12 md:top-24 left-[10%] md:left-[20%] w-24 h-24 md:w-32 md:h-32 bg-[#EADDCA] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-80 -z-10 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-0 md:top-12 right-[10%] md:right-[20%] w-32 h-32 md:w-48 md:h-48 bg-[#D3DFB8] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] opacity-60 -z-10 animate-[spin_25s_linear_infinite_reverse]"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#202A1A] leading-[1.2] font-fauna max-w-3xl mx-auto">
            Discover our curated selection of <span className="text-primary font-signature opacity-90 font-light inline-block px-1">Nature's finest</span> gifts for your health.
          </h1>
        </div>
      </section>

      {/* All Categories - Using OurProducts with white background and full set */}
      <OurProducts 
        isWhite={true} 
        showViewAll={false} 
        showAll={true} 
        showTitle={false} 
      />

      <Footer />
    </main>
  )
}
