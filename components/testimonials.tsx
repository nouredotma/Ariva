"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  Slider,
  SliderContainer,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const testimonials = [
  {
    name: "Amina Berrada",
    location: "Marrakech, Morocco",
    text: "Alhor Oud has become my favorite destination for oud and oriental products. The scents are authentic, incredibly long-lasting, and project beautifully all day long. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610899708179-34d193e952e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Realistic Moroccan woman (download & save as amina.jpg)
  },
  {
    name: "Youssef Chafik",
    location: "Casablanca, Morocco",
    text: "The oud at Alhor is genuine and extremely luxurious. I tried Cruise by Riiffs and it was outstanding. Exceptional quality at a great price. I strongly recommend them to anyone looking for powerful oriental fragrances.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1598404331409-d8d1d3b50c6d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Realistic Moroccan man in casual style (download & save as youssef.jpg)
  },
  {
    name: "Soukaina Alaoui",
    location: "Rabat, Morocco",
    text: "A truly unique olfactory experience. Their oriental products and luxury dupes (like Nusuk and Riiffs) are fantastic. Every bottle feels premium and tells a story of elegance. Perfect for prestigious gifts.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1638018034139-51d5a30d939c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Professional Moroccan woman (download & save as soukaina.jpg)
  },
  {
    name: "Rachid Hammoudi",
    location: "Tanger, Morocco",
    text: "Fast service and luxurious packaging. Delivery to all cities is reliable. Alhor Oud is without doubt the best choice for oriental products and high-quality oud in Morocco. Thank you!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1714859665868-8a3b9c02b1c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Casual Moroccan man (download & save as rachid.jpg)
  },
  {
    name: "Nadia Kabbaj",
    location: "FÃ¨s, Morocco",
    text: "Clear professionalism and passion in every fragrance. I tried Mahab by Nusuk (a great Guidance dupe) and it was amazing. The scents start with pure luxury and the fragrance stays strong. An essential address.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1594048387363-c8108f018eb5?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Moroccan woman with hijab style (download & save as nadia.jpg)
  },
  {
    name: "Omar Tazi",
    location: "Agadir, Morocco",
    text: "The team is very welcoming and gives excellent advice based on your taste. Their oud and oriental products are simply divine. The longevity and projection are impressive â€” you'll want to buy more than one. Visit the store if you can!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1755795692499-1b150497daac?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Young Moroccan man (download & save as omar.jpg)
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="pb-16 pt-8 bg-neutral-50">
      <div className="max-w-full mx-auto px-4 md:px-12">
        <h2 className="text-lg md:text-3xl font-bold font-fauna mb-4 md:mb-8 text-center md:text-left text-neutral-900">
          What Our Clients Say
        </h2>

        <div 
          className="relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)',
          }}
        >
          <Carousel
            options={{ loop: true }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 100,
              }),
            ]}
            className="w-full"
          >
            <SliderContainer className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, i) => (
                <Slider key={i} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="py-1 h-full">
                    <div 
                      className="rounded-xl transition-all duration-300 p-6 h-full flex flex-col border border-neutral-300/50 shadow-sm md:min-h-[250px]" 
                      style={{ backgroundColor: 'var(--neutral-100)' }}
                    >
                      {/* Header: Profile Top Left, Google Info Top Right */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden bg-neutral-200 relative border border-neutral-300">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-neutral-900 text-sm leading-tight">{testimonial.name}</h3>
                            <p className="text-[11px] mt-0.5 text-neutral-500">{testimonial.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-500">Google</span>
                          </div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, idx) => (
                              <Star key={idx} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="grow flex items-center">
                        <p className="text-sm leading-relaxed italic text-neutral-700">"{testimonial.text}"</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              ))}
            </SliderContainer>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

