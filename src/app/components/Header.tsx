'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT ALIM RUGI TEKNOLOGI",
            "url": "https://alimtech.id",
            "logo": "https://alimtech.id/main-logo.webp",
            "description": "Mitra digital terpercaya yang menyediakan solusi website, aplikasi mobile, dan digitalisasi bisnis yang inovatif.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "KP. Karamat RT 003 RW 010, Desa Ciherang, Kecamatan Cianjur, Kabupaten Cianjur, Provinsi Jawa Barat.",
              "addressLocality": "Cianjur",
              "addressRegion": "Jawa Barat",
              "postalCode": "43211",
              "addressCountry": "ID"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62822-1698-75418",
              "contactType": "customer service",
              "email": "alimrugiteknologi@gmail.com",
              "availableLanguage": ["Indonesian"]
            },
            "sameAs": [
              "https://facebook.com/alimrugi",
              "https://twitter.com/alimrugi",
              "https://instagram.com/alimrugi",
              "https://linkedin.com/company/alimrugi",
              "https://youtube.com/alimrugi"
            ]
          })
        }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-6 py-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src={isScrolled ? "/main-logo.webp" : "/main-logo.webp"}
                alt="PT ALIM RUGI TEKNOLOGI"
                width={120}
                height={32}
                className={`${isScrolled ? "dark:invert" : ""} object-contain`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="#" label="Beranda" isScrolled={isScrolled} />
              <NavLink href="#about" label="Tentang Kami" isScrolled={isScrolled} />
              <NavLink href="#services" label="Layanan" isScrolled={isScrolled} />
              <NavLink href="#portfolio" label="Portofolio" isScrolled={isScrolled} />
              <NavLink href="#testimonials" label="Testimoni" isScrolled={isScrolled} />
              <NavLink href="#contact" label="Kontak" isScrolled={isScrolled} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center"
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end">
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-white"
                  } ${
                    mobileMenuOpen ? "w-6 transform rotate-45 translate-y-1" : "w-6 mb-1"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-white"
                  } ${mobileMenuOpen ? "opacity-0 w-6" : "w-4 mb-1"}`}
                ></span>
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-900 dark:bg-white" : "bg-white"
                  } ${
                    mobileMenuOpen ? "w-6 transform -rotate-45 -translate-y-1" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="#" label="Beranda" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
              <MobileNavLink href="#about" label="Tentang Kami" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
              <MobileNavLink href="#services" label="Layanan" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
              <MobileNavLink href="#portfolio" label="Portofolio" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
              <MobileNavLink href="#testimonials" label="Testimoni" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
              <MobileNavLink href="#contact" label="Kontak" onClick={() => setMobileMenuOpen(false)} isScrolled={isScrolled} />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

function NavLink({ href, label, isScrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative font-medium hover:text-blue-600 transition-colors ${
        isScrolled
          ? "text-gray-800 dark:text-white"
          : "text-white hover:text-blue-200"
      }`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, label, onClick, isScrolled }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`font-medium hover:text-blue-600 transition-colors ${
        isScrolled
          ? "text-gray-800 dark:text-white"
          : "text-white hover:text-blue-200"
      }`}
    >
      {label}
    </a>
  );
} 