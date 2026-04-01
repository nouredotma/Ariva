"use client"

import { useState } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Container } from "@/components/ui/container"
import { ChevronRight, Sparkles, Plus, Minus, HelpCircle } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    category: "Ordering",
    questions: [
      {
        id: "order-placement",
        question: "How do I place an order?",
        answer: "To place an order, browse our collection and add your desired items to the cart. Once you're ready, click on the cart icon and follow the checkout process by providing your shipping and payment information."
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Cash on Delivery for orders within Morocco."
      },
      {
        id: "order-change",
        question: "Can I change or cancel my order?",
        answer: "Orders can be changed or cancelled within 2 hours of placement. Please contact our support team immediately with your order number if you need to make adjustments."
      }
    ]
  },
  {
    category: "Shipping",
    questions: [
      {
        id: "shipping-time",
        question: "How long does delivery take?",
        answer: "Domestic orders in Morocco take 2-4 business days. International shipping typically takes 5-12 business days depending on the destination."
      },
      {
        id: "international-shipping",
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout."
      },
      {
        id: "track-order",
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a confirmation email with a tracking number and a link to track your package's progress."
      }
    ]
  },
  {
    category: "Returns",
    questions: [
      {
        id: "return-policy",
        question: "What is your return policy?",
        answer: "We offer a 14-day return policy for unused products in their original packaging with the cellophane seal intact. Due to the nature of fragrances, we cannot accept returns for opened bottles."
      },
      {
        id: "initiate-return",
        question: "How do I initiate a return?",
        answer: "To start a return, please visit our Support page or contact our customer service team. We will guide you through the return process and provide shipping instructions."
      }
    ]
  },
  {
    category: "Products",
    questions: [
      {
        id: "authenticity",
        question: "Are your products authentic?",
        answer: "Absolutely. All Ariva products are original natural creations, sourced and bottled in our facility in Agadir, Morocco, using the finest organic ingredients."
      },
      {
        id: "extraits",
        question: "What is pure Argan Oil?",
        answer: "Pure Argan Oil is a natural oil extracted from the kernels of the argan tree. It is extremely rich in Vitamin E and essential fatty acids, making it a powerful natural treatment for skin, hair, and overall wellness."
      }
    ]
  }
]

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
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
            <span className="text-primary font-medium truncate">FAQ</span>
          </nav>
        </Container>
      </div>

      <section className="pb-16 md:pb-24">
        <Container className="max-w-full mx-auto px-2 md:px-12">
          {/* Header Title */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 font-fauna tracking-tight">
              Common <span className="text-primary">Inquiries</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Find answers to the most common questions about our organic oils, ordering process, and shipping policies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {faqs.map((category, catIdx) => (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 font-fauna tracking-tight">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.questions.map((q) => (
                    <div 
                      key={q.id} 
                      className={`group rounded-2xl border transition-all duration-300 ${
                        expandedId === q.id 
                          ? "border-primary bg-primary/5 shadow-sm" 
                          : "border-neutral-100 bg-white hover:border-primary/30"
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className={`font-medium text-sm md:text-base font-fauna transition-colors ${
                          expandedId === q.id ? "text-primary" : "text-neutral-800"
                        }`}>
                          {q.question}
                        </span>
                        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          expandedId === q.id ? "bg-primary text-white rotate-0" : "bg-primary/10 text-primary"
                        }`}>
                          {expandedId === q.id ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedId === q.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-sm md:text-base text-neutral-600 leading-relaxed font-light">
                              {q.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions? */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-[#fbfbe5] text-neutral-900 relative overflow-hidden text-center border border-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-fauna tracking-tight">Can't find your answer?</h3>
              <p className="text-neutral-600 mb-8 font-light max-w-lg mx-auto">
                Our support team is always ready to help you with any specific questions you might have about our collections or services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-600 transition-all"
                >
                  Contact Support
                </Link>
                <Link
                  href="/support"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-full font-bold transition-all border border-primary/10 hover:bg-primary/5"
                >
                  Visit Support Page
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
