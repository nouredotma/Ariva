"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ArrowLeft, Home, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFoundPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Header forceScrolled />

      {/* 404 Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <Container className="max-w-full mx-auto px-4 md:px-12">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            {/* Large 404 Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <span className="text-[120px] md:text-[180px] font-black text-primary/5 leading-none select-none font-fauna">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Ariva"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-40"
                  />
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-3 font-fauna tracking-tight">
                Page not found
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-600 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary/5 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200 border border-primary/10 w-full sm:w-auto justify-center"
              >
                <Search className="w-4 h-4" />
                Browse Products
              </Link>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 w-full"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8" />
              <p className="text-xs text-muted-foreground">
                Need help? {" "}
                <Link href="/contact" className="text-primary font-semibold hover:underline">
                  Contact our support team
                </Link>
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
