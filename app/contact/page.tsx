"use client"

import type React from "react"

import Footer from "@/components/footer"
import Header from "@/components/header"

import { Container } from "@/components/ui/container"
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, ChevronRight, CheckCircle2, Calendar, Send, Sparkles } from "lucide-react"
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
      value: "+212 666 166 945",
      action: "tel:+212666166945",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@ariva.com",
      action: "mailto:hello@ariva.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Avenue Hassan II",
      subValue: "Agadir, Morocco 80000",
    },
    {
      icon: Calendar,
      title: "Working Hours",
      value: "Monday - Saturday",
      subValue: "09:00 AM - 06:00 PM",
    },
  ]

  const subjects = [
    { value: "Product Inquiry", label: "Product Inquiry" },
    { value: "Order Status", label: "Order Status" },
    { value: "Wholesale/B2B", label: "Wholesale/B2B" },
    { value: "Shipping/Delivery", label: "Shipping/Delivery" },
    { value: "General Feedback", label: "General Feedback" },
    { value: "Other", label: "Other" },
  ]

  const whyChooseUsItems = [
    "100% Pure Argan",
    "Organic Certified",
    "Traditional Extraction",
    "Sustainable Sourcing",
  ]

  return (
    <main className="w-full">
      <Header />

      {/* Breadcrumb Section */}
      <div className="pt-44 pb-4 md:pb-6">
        <Container className="max-w-full mx-auto px-4 md:px-12">
            <nav className="flex items-center gap-1.5 text-[10px] md:text-[11px] lg:text-sm text-muted-foreground leading-none overflow-hidden">
                <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                <span className="text-primary font-medium truncate">Contact</span>
            </nav>
        </Container>
      </div>

      <section className="bg-white min-h-screen pb-16 md:pb-24">
        <Container className="max-w-full mx-auto px-4 md:px-12">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action || "#"}
                className="group relative bg-white rounded-xl p-4 md:p-6 border border-neutral-200 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center text-center gap-3 w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white" />
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
                  <Sparkles className="w-3.5 h-3.5" />
                  Let's Talk
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-fauna tracking-tight">
                  Ready to experience <span className="text-primary">Moroccan Liquid Gold?</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                  Have questions about our pure organic argan oils or need help choosing the right cosmetic products for your routine? Our team in Agadir is here to guide you.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h3 className="font-bold text-neutral-900 mb-4 text-base font-fauna tracking-wide">Why Ariva</h3>
                <ul className="space-y-4">
                  {whyChooseUsItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-600 font-medium tracking-wide">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm text-neutral-900 font-medium font-fauna tracking-wide">
                  Average response time: <span className="text-primary font-bold">under 2 hours</span>
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <div className="bg-primary rounded-lg px-3 md:px-10 py-6 md:py-10 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#fbfbe5] uppercase tracking-widest mb-2 font-fauna">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-none bg-[#fbfbe5] text-primary text-sm placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#fbfbe5] uppercase tracking-widest mb-2 font-fauna">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-none bg-[#fbfbe5] text-primary text-sm placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-inner"
                        placeholder="+212 666 166 945"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#fbfbe5] uppercase tracking-widest mb-2 font-fauna">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-none bg-[#fbfbe5] text-primary text-sm placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-inner"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-[#fbfbe5] uppercase tracking-widest mb-2 font-fauna">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-none bg-[#fbfbe5] text-primary text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all appearance-none cursor-pointer shadow-inner"
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
                    <label htmlFor="message" className="block text-xs font-bold text-[#fbfbe5] uppercase tracking-widest mb-2 font-fauna">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border-none bg-[#fbfbe5] text-primary text-sm placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-inner resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 md:h-14 rounded-full text-xs md:text-sm font-bold cursor-pointer bg-[#fbfbe5] hover:bg-white text-primary transition-all flex items-center justify-between px-2 pl-6 md:pl-8 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="font-fauna tracking-widest text-[11px] md:text-[14px]">
                      {isLoading ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    <div className="bg-primary rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform group-active:scale-95">
                      {isLoading ? (
                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </div>
                  </button>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-[#fbfbe5] font-medium flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#fbfbe5] flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        Message sent successfully! Our team will contact you soon.
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
                href="https://maps.google.com/?q=Agadir,Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 h-72 md:h-96 relative group">
              <div className="absolute inset-x-0 top-0 h-2 bg-primary/20 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109841.05388708892!2d-9.66442656360481!3d30.419967664326284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9eaa124cb%3A0x6854199f1fa0ec0!2sAgadir!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
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
