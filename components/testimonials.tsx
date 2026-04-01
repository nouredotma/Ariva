import { Star, ArrowRight, Quote } from "lucide-react"
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
    text: "The team is very welcoming and gives excellent advice based on your taste. Their oud and oriental products are simply divine. The longevity and projection are impressive — you'll want to buy more than one. Visit the store if you can!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1755795692499-1b150497daac?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const TestimonialsTopShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1440 320" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
  >
    {/* Standardized smooth wave - matches bottom profile */}
    <path d="M0 60 C 400 380, 1000 -120, 1440 200 L 1440 321 L 0 321 Z" />
  </svg>
);

const TestimonialsBottomShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1440 320" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
  >
    {/* Extra deep organic wave */}
    <path d="M0 60 C 400 380, 1000 -120, 1440 200 L 1440 0 L 0 0 Z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-primary relative overflow-visible mt-24 md:mt-40 mb-24 md:mb-40">
      {/* Absolute Top Shape - positioned relative to section top */}
      <TestimonialsTopShape className="absolute bottom-[99%] left-0 w-full h-[100px] md:h-[180px] text-primary" />
      
      {/* Absolute Bottom Shape - positioned relative to section bottom */}
      <TestimonialsBottomShape className="absolute top-[99%] left-0 w-full h-[100px] md:h-[180px] text-primary" />
      
      {/* Section Header with padding */}
      <div className="max-w-full mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl md:text-5xl font-bold font-fauna text-[#fbfbe5] tracking-tight">
              Explorez les avis
            </h2>
            <p className="text-base md:text-xl font-light text-[#fbfbe5]/80 max-w-2xl font-fauna">
              Explorez les expériences partagées par nos clients
            </p>
          </div>
          
          <a href="/reviews" className="group flex items-center gap-4 text-[#fbfbe5] transition-all whitespace-nowrap">
            <span className="text-lg font-medium border-b border-[#fbfbe5] pb-0.5 group-hover:opacity-70 font-fauna">View All</span>
            <div className="w-10 h-10 rounded-full bg-[#fbfbe5] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>

      {/* Carousel - full width */}
      <div className="relative w-full z-10">
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
          <SliderContainer>
            {testimonials.map((testimonial, i) => (
              <Slider key={i} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="py-2 h-full px-4 md:px-5 group cursor-pointer">
                  {/* The 'Double'/Solid Shadow Layer */}
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-[#fbfbe5]/50 rounded-3xl transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                    
                    {/* Main Card */}
                    <div 
                      className="relative rounded-3xl transition-all duration-500 p-8 h-full flex flex-col border border-primary/5 bg-[#fbfbe5] group-hover:-translate-x-1 group-hover:-translate-y-1" 
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-4">
                          <Quote className="w-8 h-8 text-primary/20 rotate-180" />
                          <div className="grow">
                            <p className="text-sm md:text-[15px] leading-relaxed font-normal text-primary line-clamp-4 font-fauna">
                              "{testimonial.text}"
                            </p>
                          </div>
                        </div>
                        
                        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[#fbfbe5] shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="mt-auto pt-8 flex items-center gap-4">
                        <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-primary/10">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-bold text-primary text-base leading-tight font-fauna">{testimonial.name}</h3>
                          <p className="text-xs mt-1 text-primary/60 font-medium font-fauna uppercase tracking-wider">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}
