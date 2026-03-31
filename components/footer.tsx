"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms & Conditions" },
  ];

  const productLinks = [
    { href: "/products?condition=men", label: "Men's Products" },
    { href: "/products?condition=women", label: "Women's Products" },
    { href: "/products?condition=unisex", label: "Unisex Products" },
  ];

  return (
    <footer className="w-full text-white rounded-t-2xl md:rounded-t-4xl" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <a href="/" className="inline-block">
              <img
                src="/logo.webp"
                alt="Alhor Parfum"
                className="h-14 w-auto object-contain footer-logo"
              />
            </a>
            <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: 'var(--neutral-300)' }}>
              Alhor Parfum — Your destination for the finest oriental products, oud, and luxury scents in Casablanca, Morocco.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/Mohamedaminefakih/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-200"
                style={{ color: 'var(--neutral-300)' }}
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/alhor_oud_parfums_orientales/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-200"
                style={{ color: 'var(--neutral-300)' }}
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@matjar.elhor/"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-200"
                style={{ color: 'var(--neutral-300)' }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          

          {/* products and Quick Links Wrapper */}
          <div className="contents lg:block lg:space-y-10">
            {/* products List */}
            <div>
              <h4 className="text-md font-semibold mb-2 font-fauna" style={{ color: 'var(--primary-400)' }}>
                Products
              </h4>
              <nav className="space-y-2.5">
                {productLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-xs sm:text-sm font-light hover:text-white transition-colors duration-200"
                    style={{ color: 'var(--neutral-300)' }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-md font-semibold mb-2 font-fauna" style={{ color: 'var(--primary-400)' }}>
                Quick Links
              </h4>
              <nav className="space-y-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-xs sm:text-sm font-light hover:text-white transition-colors duration-200"
                    style={{ color: 'var(--neutral-300)' }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-md font-semibold mb-2 font-fauna" style={{ color: 'var(--primary-400)' }}>
              Contact Us
            </h4>
            <div className="space-y-2 sm:space-y-4">
              <a 
                href="tel:0669034206"
                className="block p-2 sm:p-3 rounded-md hover:brightness-125 transition-all group"
                style={{ backgroundColor: 'var(--color-bg-dark-raised)' }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
                  <span className="text-xs sm:text-sm font-medium text-white">Phone</span>
                </div>
                <span className="text-xs sm:text-sm font-light pl-6 group-hover:text-white transition-colors" style={{ color: 'var(--neutral-300)' }}>06 69 03 42 06</span>
              </a>

              <a 
                href="mailto:alhorparfum@gmail.com"
                className="block p-2 sm:p-3 rounded-md hover:brightness-125 transition-all group"
                style={{ backgroundColor: 'var(--color-bg-dark-raised)' }}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
                  <span className="text-xs sm:text-sm font-medium text-white">Email</span>
                </div>
                <span className="text-xs sm:text-sm font-light pl-6 group-hover:text-white transition-colors break-all" style={{ color: 'var(--neutral-300)' }}>alhorparfum@gmail.com</span>
              </a>

              <div 
                className="p-2 sm:p-3 rounded-md hover:brightness-125 transition-all group"
                style={{ backgroundColor: 'var(--color-bg-dark-raised)' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: 'var(--primary-400)' }} />
                  <span className="text-xs sm:text-sm font-medium text-white">Address</span>
                </div>
                <p className="text-xs sm:text-sm font-light pl-6 group-hover:text-white transition-colors" style={{ color: 'var(--neutral-300)' }}>
                  22 Rue 8, Casablanca, Morocco, 20220
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--dark-700)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 text-[10px] sm:text-sm font-light text-center sm:text-left" style={{ color: 'var(--neutral-500)' }}>
            <p>© 2026 Alhor Parfum. All rights reserved.</p>
            <p>
              Developed & Designed by{" "}
              <a 
                href="https://wa.me/212613774895" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:brightness-125 transition-colors font-medium"
                style={{ color: 'var(--primary-400)' }}
              >
                nexusdweb
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

