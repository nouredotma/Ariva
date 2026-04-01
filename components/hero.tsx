"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-svh flex items-center bg-white">
      <div className="max-w-full mx-auto pl-4 md:pl-12 pr-0 py-8 md:py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left order-1 lg:order-1 px-4 lg:px-0 lg:pr-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#99f899] text-primary text-sm font-medium tracking-wider">
                  The Purest Harvest
                </div>
                <h1 className="text-4xl md:text-6xl text-foreground tracking-tight font-fauna leading-[1.3] lg:leading-[1.1]">
                  <span className="block font-bold">Discover Organic</span>
                  <span className="block text-primary font-normal">Products in Morocco</span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto lg:mx-0 font-fauna"
              >
                Fresh, 100% Certified Organic goods curated directly from local cooperatives nestled in the Atlas Mountains and Souss Valley.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="h-12 md:h-14 px-10! rounded-full bg-primary hover:bg-primary-600 text-primary-foreground transition-all duration-300 text-base font-normal font-fauna group"
                asChild
              >
                <a href="/products" className="flex items-center justify-center">
                  <span className="truncate">Shop Now</span>
                  <ArrowRight className="ml-1 md:ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="h-12 md:h-14 px-4 md:px-8 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-foreground transition-all duration-300 font-light text-sm md:text-base font-fauna flex-1 md:flex-none"
                asChild
              >
                <a href="/about" className="flex items-center justify-center">
                  <span className="truncate">Our Story</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Placeholder */}
          <div className="hidden lg:flex items-center justify-end relative order-2 h-[420px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute right-[-20%] w-[120%] h-[420px] rounded-l-full z-10 flex items-center justify-center overflow-hidden shadow-sm"
              style={{ 
                border: '20px solid transparent',
                background: `linear-gradient(#FBFBE5, #FBFBE5) padding-box, 
                            linear-gradient(to left, #000000, #FBFBE5) border-box`,
              }}
            >
              {/* Internal decorative elements for the placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,121,66,0.08),transparent)]" />
              
              {/* Foregrounded branding element */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-24 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent mb-6" />
                <h2 className="text-primary/5 text-[8rem] font-bold font-fauna tracking-[0.2em] select-none pointer-events-none rotate-45">
                  ARIVA
                </h2>
                <div className="w-24 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent mt-6" />
              </div>
              
              {/* Subtle inner accent */}
              <div className="absolute inset-0 rounded-l-full border-l border-t border-primary/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

