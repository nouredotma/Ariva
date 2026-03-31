"use client"

import type React from "react"

import Footer from "@/components/footer"
import Header from "@/components/header"

import { Container } from "@/components/ui/container"
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "06 69 03 42 06",
      action: "tel:0669034206",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "alhorparfum@gmail.com",
      action: "mailto:alhorparfum@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "22 Rue 8, Casablanca",
      subValue: "Casablanca, Morocco 20220",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday - Saturday",
      subValue: "10:00 AM - 8:00 PM",
    },
  ]

  const subjects = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Tour Booking", label: "Tour Booking" },
    { value: "Custom Package", label: "Custom Package" },
    { value: "Group Travel", label: "Group Travel" },
    { value: "Transportation", label: "Transportation" },
    { value: "Other", label: "Other" },
  ]

  const whyChooseUsItems = [
    "Local expertise",
    "Personalized experiences",
    "24/7 support",
    "Best prices",
  ]

  return (
    <main className="w-full">
      <Header forceScrolled />

      {/* Breadcrumb Section */}
      <div className="pt-44 pb-6 md:pb-8">
        <Container className="max-w-full mx-auto px-4 md:px-12">
            <nav className="flex items-center gap-1.5 text-[10px] md:text-sm text-muted-foreground leading-none">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 -mt-px" />
                <span className="text-primary font-medium">Contact</span>
            </nav>
        </Container>
      </div>

      <section className="pb-16 md:pb-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <Container className="max-w-full mx-auto px-4 md:px-12">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action || "#"}
                className="group relative bg-card rounded-xl p-4 md:p-5 border border-border/50 hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center gap-3 w-full">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="w-full overflow-hidden">
                    <p className="text-xs text-muted-foreground mb-1">{info.title}</p>
                    <p className="text-[10px] md:text-sm font-medium text-foreground leading-tight break-all">{info.value}</p>
                    {info.subValue && (
                      <p className="text-xs text-muted-foreground mt-0.5">{info.subValue}</p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Side - Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Let's Talk
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-fauna">
                  Ready to plan your <span className="text-primary">adventure?</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have questions about our products or need help choosing? Our team is here to assist you.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-linear-to-br from-primary/5 via-primary/3 to-transparent rounded-xl p-5 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-3 text-sm font-fauna">Why Choose Us</h3>
                <ul className="space-y-2.5">
                  {whyChooseUsItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  Average response time: <span className="font-semibold">under 2 hours</span>
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-none">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                        placeholder="+212 600 000 000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a topic</option>
                        {subjects.map((subject) => (
                          <option key={subject.value} value={subject.value}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 group font-fauna"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <div className="p-3.5 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                        Message sent successfully!
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground font-fauna">Our Location</h2>
              <a
                href="https://www.google.com/maps/place/%D9%85%D8%AA%D8%AC%D8%B1+%D8%A7%D9%84%D8%AD%D8%B1+%D9%84%D9%84%D8%B9%D8%B7%D9%88%D8%B1+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xaaeedce220e7fe48?sa=X&ved=1t:2428&ictx=111&cshid=1774377594152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm h-72 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.566210187685!2d-7.672775100000001!3d33.564645299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d329ad6984c7%3A0xaaeedce220e7fe48!2z2YXYqtis2LEg2KfZhNit2LEg2YTZhNi52LfZiNixINin2YTYtNix2YLZitip!5e0!3m2!1sfr!2sma!4v1774377811975!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
