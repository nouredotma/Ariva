import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
  </svg>
);

const FooterTopShape = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1440 160" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
  >
    <path d="M0 20 C 300 20, 500 350, 720 0 C 940 350, 1140 20, 1440 20 L 1440 161 L 0 161 Z" />
  </svg>
);

const LogoShapeBackground = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 330 156" 
    fill="currentColor" 
    className={className}
    preserveAspectRatio="none"
  >
    <path d="M 100 35 C 130 35, 145 55, 165 30 C 185 55, 200 35, 230 35 C 285 35, 285 121, 230 121 C 200 121, 185 101, 165 126 C 145 101, 130 121, 100 121 C 45 121, 45 35, 100 35 Z" />
  </svg>
);

export default function Footer() {
  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/careers", label: "Careers" },
  ];

  const supportLinks = [
    { href: "/support#shipping", label: "Shipping Info" },
    { href: "/support#returns", label: "Returns and Exchanges" },
    { href: "/support#size-guide", label: "Size Guide" },
    { href: "/support#privacy", label: "Privacy Policy" },
    { href: "/support#terms", label: "Terms of Services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: XIcon, href: "https://twitter.com", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="w-full bg-primary pt-0 pb-16 relative overflow-x-clip mt-20 md:mt-32">
      {/* Absolute Top Shape acting as a wave divider */}
      <FooterTopShape className="absolute bottom-full left-0 w-full h-[40px] md:h-[80px] text-primary" />
      
      <div className="max-w-full mx-auto px-2 md:px-12 relative">
        {/* Top Row: Logo */}
        <div className="relative flex justify-center items-center pt-0 md:pt-8 pb-0 md:pb-8 border-b-4 border-[#fbfbe5] mb-12">
          {/* Edge Half Circles */}
          <div className="absolute left-[-16px] md:left-[-48px] top-[40%] -translate-y-1/2 w-15 h-30 lg:w-30 lg:h-60 bg-[#fbfbe5] rounded-r-full" />
          <div className="absolute right-[-16px] md:right-[-48px] top-[40%] -translate-y-1/2 w-15 h-30 lg:w-30 lg:h-60 bg-[#fbfbe5] rounded-l-full" />

          {/* Custom Shape Logo Container */}
          <div className="relative w-[310px] h-[146px] md:w-[380px] md:h-[180px] flex items-center justify-center z-10">
            <LogoShapeBackground className="absolute inset-0 w-full h-full text-[#fbfbe5]" />
            <Link href="/" className="relative z-10 inline-flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Ariva Logo"
                className="w-[100px] md:w-[130px] h-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Second Row: Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 min-h-[220px]">
          {/* Newsletter Column - Ordered first on mobile */}
          <div className="col-span-2 lg:col-span-2 lg:order-4 order-1 lg:pl-12 flex flex-col justify-between h-full">
            <div className="pt-2">
              <form className="relative flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-[#fbfbe5] text-primary placeholder:text-primary/60 rounded-full pl-6 pr-[120px] py-4 outline-none focus:ring-2 focus:ring-[#fbfbe5]/50 transition-all text-sm shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary text-[#fbfbe5] font-medium px-6 rounded-full hover:brightness-110 transition-all text-sm font-fauna flex items-center justify-center cursor-pointer"
                >
                  Get Started
                </button>
              </form>
            </div>
            {/* Desktop Copyright notice */}
            <div className="hidden lg:block mt-auto text-xs font-light text-[#fbfbe5]/70 text-right pt-8">
              © 2026 Ariva. All rights reserved.
            </div>
          </div>
          
          {/* Company Column */}
          <div className="col-span-1 lg:order-1 order-2">
            <h4 className="text-xl font-bold mb-6 font-fauna tracking-wide text-[#fbfbe5]">Company</h4>
            <nav className="space-y-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-light text-[#fbfbe5] hover:opacity-80 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Column */}
          <div className="col-span-1 lg:order-2 order-3">
            <h4 className="text-xl font-bold mb-6 font-fauna tracking-wide text-[#fbfbe5]">Support</h4>
            <nav className="space-y-4">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-light text-[#fbfbe5] hover:opacity-80 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Follow Us Column */}
          <div className="col-span-2 sm:col-span-1 lg:order-3 order-4">
            <h4 className="text-xl font-bold mb-6 font-fauna tracking-wide text-[#fbfbe5]">Follow Us</h4>
            <nav className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light text-[#fbfbe5] hover:opacity-80 transition-opacity duration-200 group"
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Footer Bottom Row: Centered Copyright */}
        <div className="mt-8 pt-6 border-t border-[#fbfbe5]/20 flex flex-col items-center lg:hidden">
          <div className="text-xs font-light text-[#fbfbe5]/70">
            © 2026 Ariva. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

