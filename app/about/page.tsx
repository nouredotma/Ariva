"use client"

import type React from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Search, Leaf, ArrowRight, ArrowUpRight } from "lucide-react"

const SectionTopShape = ({ className }: { className?: string }) => (
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

const SectionBottomShape = ({ className }: { className?: string }) => (
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

export default function AboutPage() {
  return (
    <main className="w-full bg-white min-h-screen font-sans selection:bg-primary/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden text-center">
        {/* Abstract Blobs */}
        <div className="absolute top-12 md:top-24 left-[10%] md:left-[20%] w-24 h-24 md:w-32 md:h-32 bg-[#EADDCA] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-80 -z-10 animate-[spin_10s_linear_infinite]" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-0 md:top-12 right-[10%] md:right-[20%] w-32 h-32 md:w-48 md:h-48 bg-[#D3DFB8] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] opacity-60 -z-10 animate-[spin_10s_linear_infinite_reverse]" style={{ animationDuration: '25s' }}></div>
        
        <div className="max-w-3xl mx-auto px-2 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#202A1A] leading-[1.1] mb-10 font-fauna max-w-3xl mx-auto">
            Ethical herbalism starts with transparency, <span className="text-[#84B059] font-signature opacity-90 font-light inline-block px-1">Partners On Regeneration</span>, and succeeds when we all take part.
          </h1>
        </div>
      </section>

      {/* Independently Owned Section */}
      <section className="py-10 relative overflow-hidden">
        {/* Large right edge beige blob */}
        <div className="absolute top-1/2 right-[-100px] w-64 h-64 bg-[#EADDCA] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-70 -z-10"></div>
        
        <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="relative z-10 max-w-xl">
              <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#EADDCA] rounded-full -z-10 opacity-70"></div>
              <div className="absolute -top-[5.5rem] -left-[5.5rem] w-14 h-14 bg-[#D3DFB8] rounded-full -z-20 opacity-90"></div>
              <h2 className="text-2xl lg:text-[2.5rem] font-bold text-[#1A2615] mb-6 font-fauna tracking-tight">Independently Owned</h2>
              <div className="text-[#596652] leading-loose space-y-4 text-sm md:text-base">
                <p>
                  We are proudly independently owned and run by a diverse group of passionate people who care deeply about making a difference. Our business model prioritizes sustainable sourcing, ethical partnerships with local growers, and uncompromising quality.
                </p>
                <p>
                  As an independent entity, we are not beholden to corporate pressures or shortcuts. This freedom allows us to invest the time, resources, and care necessary to craft botanical products that are truly regenerative for both the earth and our community. Every decision we make is guided by our core values, rather than bottom-line driven compromises.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-[1.1] group w-full max-w-[600px] lg:ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Ethical harvesting" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              {/* Overlay Tag */}
              <div className="absolute bottom-6 right-6 bg-[#FAFAEE] rounded-full px-5 py-3 flex items-center gap-3 cursor-default group/tag">
                <div className="w-8 h-8 bg-[#84B059]/20 rounded-full flex items-center justify-center group-hover/tag:bg-[#84B059]/30 transition-colors">
                  <Leaf className="w-4 h-4 text-[#436430]" fill="currentColor" strokeWidth={1} />
                </div>
                <span className="text-sm font-bold text-[#2C411E] tracking-wide">100% Organic</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Quality and Purity Section */}
      <section className="bg-[#fbfbe5] relative mt-16 md:mt-24 mb-16 md:mb-24 overflow-visible z-10 w-full">
        <SectionTopShape className="absolute bottom-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5] pointer-events-none" />
        <SectionBottomShape className="absolute top-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5] pointer-events-none" />
        
        <div className="max-w-[85rem] mx-auto px-2 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Image Grid */}
            <div className="relative h-[400px] md:h-[600px] flex gap-4 md:gap-6 justify-center items-center w-full max-w-[600px]">
              {/* Image 1 (Lower) */}
              <div className="w-[48%] h-[70%] rounded-[2rem] overflow-hidden transform translate-y-8 md:translate-y-12 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Organic farming field" 
                />
              </div>
              {/* Image 2 (Higher) */}
              <div className="w-[48%] h-[70%] rounded-[2rem] overflow-hidden transform -translate-y-4 md:-translate-y-8 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Harvesting fresh ingredients" 
                />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative max-w-xl">
              <h2 className="text-2xl lg:text-[2.5rem] font-bold text-[#1A2615] mb-6 font-fauna tracking-tight">Quality and Purity</h2>
              <div className="text-[#596652] leading-loose space-y-4 mb-8 text-sm md:text-base">
                <p>
                  Nature yields its best when we respect its balance. We meticulously test every batch of our ingredients to ensure they meet our rigorous standards for purity and potency. Our commitment to organic farming means zero synthetic pesticides, herbicides, or artificial fertilizers touch our botanicals.
                </p>
                <p>
                  We are obsessed with maintaining the delicate chemical profile of our raw materials, using gentle extraction processes that preserve the active compounds. This unwavering dedication guarantees that the product you receive is safe, highly effective, and deeply nourishing.
                </p>
              </div>
              
              <Link href="/policy" className="group inline-flex items-center gap-4 bg-primary text-white h-14 pr-8 pl-2 rounded-full font-bold hover:bg-[#2C411E] transition-all duration-300 w-auto cursor-pointer">
                <div className="bg-[#fbfbe5] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[15px] tracking-wider font-semibold">Explore our policy</span>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Call to Action Container Section */}
      <section className="py-12 md:py-16 px-2 sm:px-6 max-w-[80rem] mx-auto relative z-20">
        <div className="bg-[#5B7B47] p-3 lg:p-6 rounded-[3rem] relative border border-[#486337]">
          {/* Inner white container */}
          <div className="bg-[#FFFFFF] rounded-[2.5rem] px-2 py-6 md:py-20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
            
            {/* Decorative Dark Green Blobs */}
            <div className="absolute top-10 left-[10%] md:left-[20%] w-32 h-32 md:w-48 md:h-48 bg-[#496B36] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] z-0 flex items-center justify-center opacity-[0.95]"></div>
            <div className="absolute bottom-10 right-[15%] md:right-[25%] w-24 h-24 md:w-32 md:h-32 bg-[#496B36] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] z-0 opacity-[0.95]"></div>
            
            <div className="relative z-10 w-full">
              <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-bold text-[#1A2615] mb-6 font-fauna mix-blend-exclusion">
                Choose Healthy,<br />Live Better
              </h2>
              <p className="text-lg md:text-2xl text-[#1A2615]/80 mb-12 font-light font-fauna tracking-wide mix-blend-exclusion">
                Start Your Organic Journey<br />Today
              </p>
              
              <div className="flex flex-row gap-2 sm:gap-6 justify-center items-center mt-8 w-full overflow-x-auto pb-2 scrollbar-hide">
                {/* Shop Now Button */}
                <Link href="/products" className="group flex items-center gap-3 md:gap-4 bg-[#3E5C2D] text-white h-12 md:h-16 pr-4 md:pr-8 pl-2 rounded-full font-bold hover:bg-[#2C411E] transition-all duration-300 shrink-0 cursor-pointer">
                  <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#3E5C2D]" />
                  </div>
                  <span className="text-[13px] md:text-[15px] tracking-wider capitalize whitespace-nowrap">Shop Now</span>
                </Link>
                
                {/* Explore Now Button */}
                <Link href="/products" className="group flex items-center gap-3 md:gap-4 bg-[#E5ECE0] text-[#3E5C2D] h-12 md:h-16 pr-4 md:pr-8 pl-2 rounded-full font-bold hover:bg-[#D5E1CD] transition-all duration-300 shrink-0 border border-[#3E5C2D]/10 hover:border-[#3E5C2D]/30 cursor-pointer">
                  <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#3E5C2D]" />
                  </div>
                  <span className="text-[13px] md:text-[15px] tracking-wider capitalize whitespace-nowrap">Explore Now</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fbfbe5] relative mt-16 md:mt-24 mb-16 md:mb-24 overflow-visible z-10 w-full">
        <SectionTopShape className="absolute bottom-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5] pointer-events-none" />
        <SectionBottomShape className="absolute top-[99.5%] left-0 w-full h-[100px] md:h-[180px] text-[#fbfbe5] pointer-events-none" />
        
        <div className="absolute left-0 bottom-0 md:bottom-10 w-32 h-32 md:w-56 md:h-56 bg-black/[0.04] rounded-r-full pointer-events-none z-0"></div>
        
        <div className="max-w-[80rem] mx-auto px-2 md:px-8 relative z-10">
          {/* Main Stat Header */}
          <div className="flex justify-center mb-20 w-full px-4 md:px-0">
            <div className="relative inline-block text-center z-10 mt-10 md:mt-20">
              {/* Left shapes */}
              <div className="absolute top-1/2 -left-12 md:-left-32 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 flex items-end justify-start pointer-events-none">
                <div className="w-full h-full bg-[#93AF7A] rounded-full opacity-80 absolute inset-0"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full absolute -left-1 md:-left-2 top-[70%] z-10"></div>
              </div>
              
              {/* Right shapes */}
              <div className="absolute bottom-4 md:bottom-10 -right-8 md:-right-20 w-12 h-12 md:w-16 md:h-16 pointer-events-none">
                <div className="w-full h-full bg-[#93AF7A] rounded-full opacity-80 absolute inset-0"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full absolute -right-1 md:-right-2 bottom-0 z-10"></div>
              </div>
              
              <h2 className="text-4xl md:text-[5.5rem] lg:text-[6rem] font-bold font-fauna text-[#1A2615] leading-[1.15] tracking-tight">
                8560+ buyers across<br />the world
              </h2>
            </div>
          </div>
          
          {/* Mini Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center py-8">
            <div className="px-2 md:px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2615] mb-2">3700+</h3>
              <p className="text-[#596652] text-[13px] md:text-[14px] font-bold tracking-widest mt-3 capitalize">Customers</p>
            </div>
            <div className="px-2 md:px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2615] mb-2">2500+</h3>
              <p className="text-[#596652] text-[13px] md:text-[14px] font-bold tracking-widest mt-3 capitalize">Product Exclusive<br/>Variety</p>
            </div>
            <div className="px-2 md:px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2615] mb-2">98<span className="text-2xl md:text-3xl">%</span></h3>
              <p className="text-[#596652] text-[13px] md:text-[14px] font-bold tracking-widest mt-3 capitalize">Order Completion<br/>Rate</p>
            </div>
            <div className="px-2 md:px-6 border-none">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A2615] mb-2">10+</h3>
              <p className="text-[#596652] text-[13px] md:text-[14px] font-bold tracking-widest mt-3 capitalize">Best Selling<br/>Collections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12 relative mt-8">
        <div className="max-w-[85rem] mx-auto px-2 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-20">
            {/* Team Card 1 */}
            <div className="bg-primary p-8 md:p-10 rounded-[3rem] flex flex-col items-center relative border border-white/10 group overflow-hidden">
               <button className="absolute right-6 top-6 bg-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300 z-10">
                 <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300 relative left-[1px] bottom-[1px]" strokeWidth={2.5} />
               </button>
               <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-4 border-transparent transition-all duration-500 relative z-10 bg-white">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Andrew Junghen" className="w-full h-full object-cover" />
               </div>
               <div className="w-full flex flex-col items-center gap-3 relative z-10">
                 <div className="bg-white rounded-full py-3.5 px-4 text-center w-[65%] min-w-[130px] max-w-[180px]">
                    <span className="font-bold text-[14px] text-[#1A2615] tracking-wide line-clamp-1">Andrew Junghen</span>
                 </div>
                 <div className="bg-white rounded-full py-3.5 px-6 text-center w-[90%] min-w-[160px] max-w-[240px]">
                    <span className="font-bold text-[13px] text-primary">Products owner</span>
                 </div>
               </div>
            </div>
            
            {/* Team Card 2 */}
            <div className="bg-primary p-8 md:p-10 rounded-[3rem] flex flex-col items-center relative border border-white/10 group overflow-hidden">
               <button className="absolute right-6 top-6 bg-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300 z-10">
                 <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300 relative left-[1px] bottom-[1px]" strokeWidth={2.5} />
               </button>
               <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-4 border-transparent transition-all duration-500 relative z-10 bg-white">
                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ahmed Ben Mona (CEO)" className="w-full h-full object-cover" />
               </div>
               <div className="w-full flex flex-col items-center gap-3 relative z-10">
                 <div className="bg-white rounded-full py-3.5 px-4 text-center w-[65%] min-w-[130px] max-w-[180px]">
                    <span className="font-bold text-[14px] text-[#1A2615] tracking-wide line-clamp-1">Ahmed Ben Mona</span>
                 </div>
                 <div className="bg-white rounded-full py-3.5 px-6 text-center w-[90%] min-w-[160px] max-w-[240px]">
                    <span className="font-bold text-[13px] text-primary">CEO & Founder</span>
                 </div>
               </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-primary p-8 md:p-10 rounded-[3rem] flex flex-col items-center relative border border-white/10 group overflow-hidden">
               <button className="absolute right-6 top-6 bg-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300 z-10">
                 <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300 relative left-[1px] bottom-[1px]" strokeWidth={2.5} />
               </button>
               <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-4 border-transparent transition-all duration-500 relative z-10 bg-white">
                 <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ahmed Ben Mona (Marketing)" className="w-full h-full object-cover" />
               </div>
               <div className="w-full flex flex-col items-center gap-3 relative z-10">
                 <div className="bg-white rounded-full py-3.5 px-4 text-center w-[65%] min-w-[130px] max-w-[180px]">
                    <span className="font-bold text-[14px] text-[#1A2615] tracking-wide line-clamp-1">Ahmed Ben Mona</span>
                 </div>
                 <div className="bg-white rounded-full py-3.5 px-6 text-center w-[90%] min-w-[160px] max-w-[240px]">
                    <span className="font-bold text-[13px] text-primary">CEO & Marketing</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Since the global footer has a negative top margin (mt-20) in the mockup it sits nicely over the dark green team background. 
          The <Footer /> component handles its own dark green background and top shapes. */}
      <Footer />
    </main>
  )
}
