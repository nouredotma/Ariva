"use client"

import { Send } from "lucide-react"
import { Container } from "@/components/ui/container"

const SubscriptionCutout = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
  >
    {/* Desktop: Deep wavy edge */}
    <path className="hidden md:block" d="M 20 0 C -10 100, 100 10, 100 100 L 100 100 L 100 0 Z" />
    {/* Mobile: Shallower wave to reduce deepness and give text more room */}
    <path className="block md:hidden" d="M 35 0 C 5 20, 100 2, 100 100 L 100 100 L 100 0 Z" />
  </svg>
)

export default function Subscription() {
  return (
    <section className="relative w-full py-12 overflow-hidden">
      <Container className="max-w-full mx-auto px-4 md:px-12 relative z-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden bg-primary rounded-xl md:rounded-4xl">
            {/* Wavy Corner Cutout (Top Right) */}
            <div className="absolute top-0 right-0 w-[80%] h-[50%] md:h-[70%] xl:h-full max-h-[250px] z-0 pointer-events-none text-white">
              <SubscriptionCutout className="w-full h-full" />
            </div>

            <div className="relative px-5 py-10 md:px-16 md:py-20 lg:px-20">
              <div className="flex flex-col items-start gap-8">
                {/* Text Content */}
                <div className="w-2/3 space-y-2 text-left md:max-w-xl">
                  <div className="space-y-1">
                    <h2 className="text-xl md:text-5xl font-bold font-fauna text-white leading-tight tracking-tight max-w-2xl">
                      Join the organic movement
                    </h2>
                  </div>
                  <p className="text-white/80 text-xs md:text-lg font-light leading-relaxed max-w-xl font-fauna">
                    Subscribe to receive seasonal harvest updates, exclusive recipes from Moroccan chefs, and first access to limited edition organic yields.
                  </p>
                </div>

                {/* Form Content */}
                <div className="w-full max-w-2xl">
                  <div className="relative group">
                    <form 
                      onSubmit={(e) => e.preventDefault()}
                      className="flex flex-row items-center gap-2 bg-white/10 backdrop-blur-xl p-1 md:p-2 rounded-full transition-all duration-500 hover:bg-white/15"
                    >
                      <input
                        type="email"
                        placeholder="Email address"
                        className="flex-1 bg-transparent border-none focus:ring-0 px-4 md:px-6 py-2.5 md:py-3 text-white placeholder-white/50 text-xs md:text-base rounded-full outline-hidden min-w-0"
                        required
                      />
                      <button
                        type="submit"
                        className="whitespace-nowrap bg-white text-primary px-4 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-xs md:text-base hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 md:gap-2 group cursor-pointer"
                      >
                        Join Us
                        <div className="hidden xs:flex w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/10 items-center justify-center transition-colors group-hover:bg-primary/20">
                          <Send className="w-2.5 h-2.5 md:w-3 md:h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </button>
                    </form>
                    <p className="mt-4 text-[11px] md:text-sm text-white/50 text-left px-2 font-light">
                      We value your privacy. Join over <span className="text-white/80 font-medium">10,000+</span> organic enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
