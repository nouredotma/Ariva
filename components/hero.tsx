"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-svh flex items-center" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-full mx-auto px-4 md:px-12 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left order-1 lg:order-1 px-4 lg:px-0">
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
                className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Fresh, 100% Certified Organic goods curated directly from local cooperatives nestled in the Atlas Mountains and Souss Valley.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="h-12 md:h-14 px-10! rounded-full bg-primary hover:bg-primary-600 text-primary-foreground transition-all duration-300 text-base font-normal font-fauna group"
                asChild
              >
                <a href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="h-12 md:h-14 px-8 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-foreground transition-all duration-300 font-light text-base font-fauna"
                asChild
              >
                <a href="/about">
                  Our Story
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="relative aspect-square w-full max-w-sm md:max-w-md lg:max-w-[550px] xl:max-w-[650px] mx-auto order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop"
              alt="Alhor Parfum Luxury Bottle"
              className="w-full h-full object-cover rounded-3xl md:rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

