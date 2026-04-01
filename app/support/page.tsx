"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Container } from "@/components/ui/container"
import { ChevronRight, Sparkles, Truck, RefreshCcw, Ruler, ShieldCheck, FileText } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  {
    id: "shipping",
    title: "Shipping Info",
    icon: Truck,
    content: (
      <div className="space-y-6">
        <p>At Ariva, we take great care in delivering our pure natural products to your doorstep. Each item is carefully packaged to ensure it arrives in perfect condition.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <h4 className="font-bold text-primary mb-2 font-fauna tracking-wide">Domestic Shipping (Morocco)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Delivery within 2-4 business days</li>
              <li>• Free shipping on orders over 500 DH</li>
              <li>• Standard shipping fee: 40 DH</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <h4 className="font-bold text-primary mb-2 font-fauna tracking-wide">International Shipping</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Europe: 5-8 business days</li>
              <li>• Rest of the World: 7-12 business days</li>
              <li>• Tracking number provided for all orders</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Please note that during peak seasons or promotional periods, delivery times may be slightly extended. All our shipments are insured for your peace of mind.</p>
      </div>
    ),
  },
  {
    id: "returns",
    title: "Returns and Exchanges",
    icon: RefreshCcw,
    content: (
      <div className="space-y-6">
        <p>Your satisfaction is our priority. If you are not completely satisfied with your purchase, we are here to help.</p>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">Return Policy</h4>
          <p className="text-sm text-muted-foreground">Items must be returned within 14 days of receipt. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging with the cellophane seal intact.</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">Exchange Process</h4>
          <p className="text-sm text-muted-foreground">If you wish to exchange a product for a different item, please contact our support team. We recommend reviewing our detailed product descriptions before purchasing larger sizes.</p>
          
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
            <p className="text-sm font-medium text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Return shipping costs are the responsibility of the customer unless the item received was damaged or incorrect.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "size-guide",
    title: "Size Guide",
    icon: Ruler,
    content: (
      <div className="space-y-6">
        <p>Choosing the right size for your routine. Our pure oils and natural extracts are highly concentrated, meaning a little goes a long way.</p>
        <div className="overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary/5 text-primary font-fauna">
              <tr>
                <th className="px-6 py-4 font-bold">Size</th>
                <th className="px-6 py-4 font-bold">Usage</th>
                <th className="px-6 py-4 font-bold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              <tr>
                <td className="px-6 py-4 font-medium uppercase tracking-wider">2ml Sample</td>
                <td className="px-6 py-4 text-muted-foreground">~30 sprays</td>
                <td className="px-6 py-4 text-muted-foreground">Testing the scent</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium uppercase tracking-wider">10ml Travel</td>
                <td className="px-6 py-4 text-muted-foreground">~150 sprays</td>
                <td className="px-6 py-4 text-muted-foreground">On the go / Gift</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium uppercase tracking-wider">50ml Standard</td>
                <td className="px-6 py-4 text-muted-foreground">~750 sprays</td>
                <td className="px-6 py-4 text-muted-foreground">Daily signature</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium uppercase tracking-wider">100ml Large</td>
                <td className="px-6 py-4 text-muted-foreground">~1500 sprays</td>
                <td className="px-6 py-4 text-muted-foreground">Collectors / Long-term</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: ShieldCheck,
    content: (
      <div className="space-y-6">
        <p>Ariva ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed.</p>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">Information We Collect</h4>
          <p className="text-sm text-muted-foreground">When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">How We Use Your Information</h4>
          <p className="text-sm text-muted-foreground">We use the order information that we collect generally to fulfill any orders placed through the site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">Data Retention</h4>
          <p className="text-sm text-muted-foreground">When you place an order through the site, we will maintain your order information for our records unless and until you ask us to delete this information.</p>
        </div>
      </div>
    ),
  },
  {
    id: "terms",
    title: "Terms of Services",
    icon: FileText,
    content: (
      <div className="space-y-6">
        <p>Welcome to Ariva. By accessing our website, you agree to the following terms and conditions.</p>
        <div className="space-y-4">
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">1. Acceptance of Terms</h4>
          <p className="text-sm text-muted-foreground">By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">2. Product Quality</h4>
          <p className="text-sm text-muted-foreground">Ariva provides high-quality natural products. While we strive for consistency, slight variations in natural ingredients may occur between batches, which is a hallmark of authentic organic production.</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">3. Intellectual Property</h4>
          <p className="text-sm text-muted-foreground">All content on this website, including text, graphics, logos, and images, is the property of Ariva and is protected by international copyright laws.</p>
          
          <h4 className="font-bold text-neutral-900 font-fauna tracking-wide">4. Limitation of Liability</h4>
          <p className="text-sm text-muted-foreground">Ariva shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.</p>
        </div>
      </div>
    ),
  },
]

export default function SupportPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for header

      for (const section of sections) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        scrollToSection(hash)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", handleHashChange)
    
    // Run once on mount if hash exists
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      // Small delay to ensure refs are populated and layout is ready
      setTimeout(() => scrollToSection(id), 100)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id]
    if (element) {
      const headerOffset = 176
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      
      // Update URL hash without jumping
      history.pushState(null, "", `#${id}`)
    }
  }

  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Breadcrumb Section */}
      <div className="pt-44 pb-4 md:pb-6">
        <Container className="max-w-full mx-auto px-2 md:px-12">
          <nav className="flex items-center gap-1.5 text-[10px] md:text-[11px] lg:text-sm text-muted-foreground leading-none overflow-hidden">
            <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
            <span className="text-primary font-medium truncate">Support</span>
          </nav>
        </Container>
      </div>

      <section className="pb-16 md:pb-24">
        <Container className="max-w-full mx-auto px-2 md:px-12">
          {/* Header Title */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Customer Support
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 font-fauna tracking-tight">
              How can we <span className="text-primary">help you today?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Everything you need to know about our shipping, returns, and policies. If you can't find what you're looking for, feel free to <Link href="/contact" className="text-primary font-bold hover:underline">contact us</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3">
              <div className="sticky top-44 space-y-2">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6 font-fauna px-4">Support Menu</p>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 relative group overflow-hidden cursor-pointer ${
                      activeSection === section.id
                        ? "bg-primary text-white"
                        : "bg-white text-muted-foreground hover:bg-primary/5 hover:text-primary border border-neutral-100"
                    }`}
                  >
                    <section.icon className={`w-4 h-4 ${activeSection === section.id ? "text-white" : "text-primary/60 group-hover:text-primary"}`} />
                    <span className="font-fauna tracking-wide">{section.title}</span>
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute left-0 w-1 h-1/2 bg-white rounded-full ml-1"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}

                {/* Contact CTA Card */}
                <div className="mt-12 p-6 rounded-2xl bg-[#fbfbe5] text-neutral-900 border border-primary/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/20 transition-all" />
                  <h4 className="font-bold text-lg mb-2 font-fauna relative z-10">Still have questions?</h4>
                  <p className="text-xs text-neutral-600 mb-4 font-light relative z-10 leading-relaxed font-fauna">Our team in Agadir is ready to help you with anything you need.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all relative z-10"
                  >
                    Contact Support
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-20 md:space-y-32">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el
                  }}
                  className="scroll-mt-44"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-fauna tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed">
                    {section.content}
                  </div>

                  {/* Dynamic Separator */}
                  {section.id !== sections[sections.length - 1].id && (
                    <div className="mt-20 md:mt-32 w-full h-px bg-linear-to-r from-transparent via-neutral-100 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
