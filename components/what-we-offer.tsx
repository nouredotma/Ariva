import { Box, CreditCard, Undo2, Headphones, ArrowUpRight } from "lucide-react"

export default function WhatWeOffer() {
  const offers = [
    {
      icon: <Box className="h-7 w-7 text-neutral-900" />,
      title: "Worldwide Delivery",
      description: "We ensure your comfort reaches you quickly and reliably, anywhere in the world.",
      linkText: "shipping details",
      linkHref: "/shipping"
    },
    {
      icon: <CreditCard className="h-7 w-7 text-neutral-900" />,
      title: "Secure Checkout",
      description: "Your payment is fully protected by industry-leading encryption.",
      linkText: "how we protect your data",
      linkHref: "/privacy"
    },
    {
      icon: <Undo2 className="h-7 w-7 text-neutral-900" />,
      title: "30-Day Free Returns",
      description: "Not the perfect fit? Send it back on us. Hassle-free returns and exchanges for your peace of mind.",
      linkText: "Returns Policy",
      linkHref: "/returns"
    },
    {
      icon: <Headphones className="h-7 w-7 text-neutral-900" />,
      title: "24/7 Customer Care",
      description: "Our dedicated team is always here to help with any questions regarding your order.",
      linkText: "24/7 customer support",
      linkHref: "/contact"
    },
  ]

  return (
    <section className="max-w-full mx-auto pb-24 pt-16 bg-white relative overflow-hidden">
      {/* Background Shape Clumps (#e7cb98) - Matched to Image */}
      
      {/* Clump 1: Top Left of Title */}
      <div className="absolute top-4 left-[30%] pointer-events-none z-0">
        <div className="w-28 h-28 bg-[#e7cb98] rounded-full opacity-60" />
        <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#e7cb98] rounded-full opacity-80" />
      </div>

      {/* Clump 2: After 'Premium Service !' */}
      <div className="absolute top-[160px] left-[65%] pointer-events-none z-0">
        <div className="w-14 h-14 bg-[#e7cb98] rounded-full opacity-60" />
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#e7cb98] rounded-full opacity-60" />
      </div>

      {/* Clump 3: Mid-Left Edge */}
      <div className="absolute top-[35%] -left-6 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-32 h-32 bg-[#e7cb98] rounded-full opacity-80" />
        <div className="absolute -bottom-6 left-0 w-16 h-16 bg-[#e7cb98] rounded-full opacity-100" />
      </div>

      {/* Clump 4: Bottom Right Edge */}
      <div className="absolute bottom-10 right-0 pointer-events-none z-0">
        <div className="w-40 h-40 bg-[#e7cb98] rounded-full opacity-80" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#e7cb98] rounded-full opacity-100" />
      </div>

      <div className="max-w-full mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-2 relative">
          <h2 className="text-4xl md:text-6xl font-bold font-fauna text-neutral-900 tracking-tight">
            Our Promise
          </h2>
          <p className="text-3xl md:text-5xl font-bold font-fauna text-primary tracking-tight">
            Premium Service!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start transition-all"
            >
              <div className="mb-6">
                {offer.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-fauna mb-4 text-neutral-900 leading-tight">
                {offer.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-6 font-light">
                {offer.description}
              </p>
              
              <div className="mt-auto group cursor-pointer inline-flex flex-col">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:opacity-70 transition-opacity">
                  {offer.linkText}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="h-0.5 w-full bg-neutral-900 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
