'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import idLocale from '../locales/id.json';
import enLocale from '../locales/en.json';
import msLocale from '../locales/ms.json';

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

interface HeaderProps {
  lang: string;
  setLang: (lang: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const LANGUAGES = [
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ms', label: 'Bahasa Malaysia', flag: '🇲🇾' },
];

export default function Header({ lang, setLang, darkMode, setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = lang === 'en' ? enLocale : lang === 'ms' ? msLocale : idLocale;

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

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Dark mode toggle handler
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 shadow-md py-2"
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
              <NavLink href="#" label={locale.header.home} isScrolled={isScrolled} />
              <NavLink href="#about" label={locale.header.about} isScrolled={isScrolled} />
              <NavLink href="#services" label={locale.header.services} isScrolled={isScrolled} />
              <NavLink href="#portfolio" label={locale.header.portfolio} isScrolled={isScrolled} />
              <NavLink href="#testimonials" label={locale.header.testimonials} isScrolled={isScrolled} />
              <NavLink href="#contact" label={locale.header.contact} isScrolled={isScrolled} />
            </nav>

            {/* Right side controls: desktop only */}
            <div className="flex items-center">
              {/* Language Dropdown (desktop only) */}
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all min-w-[140px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                  aria-label="Pilih Bahasa"
                  type="button"
                >
                  <span className="text-xl mr-2">{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                  <span className="font-medium text-gray-800 dark:text-gray-100 mr-2">{LANGUAGES.find(l => l.code === lang)?.label}</span>
                  <svg className={`w-4 h-4 ml-auto transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 z-50 py-2" role="listbox">
                    {LANGUAGES.map(option => (
                      <li key={option.code}>
                        <button
                          onClick={() => { setLang(option.code); setDropdownOpen(false); }}
                          className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${lang === option.code ? 'bg-blue-100 dark:bg-blue-900 font-semibold text-blue-900 dark:text-blue-100' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100'}`}
                          role="option"
                          aria-selected={lang === option.code}
                          tabIndex={0}
                          type="button"
                        >
                          <span className="text-xl mr-3">{option.flag}</span>
                          <span>{option.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Dark Mode Toggle (desktop only) */}
              <button
                onClick={handleDarkModeToggle}
                className="ml-2 p-2 rounded-full border border-gray-300 dark:bg-gray-800 dark:text-white hidden md:inline-flex"
                aria-label={darkMode ? locale.header.light_mode : locale.header.dark_mode}
                type="button"
              >
                {darkMode ? (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"/></svg>
                )}
              </button>
              {/* Burger Menu: always at far right on mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center ml-2 z-50"
                aria-label="Toggle Menu"
              >
                <div className="w-6 flex flex-col items-end">
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      darkMode
                        ? "bg-white"
                        : mobileMenuOpen
                          ? "bg-blue-600"
                          : isScrolled
                            ? "bg-gray-900"
                            : "bg-gray-900"
                    } ${
                      mobileMenuOpen ? "w-6 transform rotate-45 translate-y-1" : "w-6 mb-1"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      darkMode
                        ? "bg-white"
                        : mobileMenuOpen
                          ? "bg-blue-600"
                          : isScrolled
                            ? "bg-gray-900"
                            : "bg-gray-900"
                    } ${mobileMenuOpen ? "opacity-0 w-6" : "w-4 mb-1"}`}
                  ></span>
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      darkMode
                        ? "bg-white"
                        : mobileMenuOpen
                          ? "bg-blue-600"
                          : isScrolled
                            ? "bg-gray-900"
                            : "bg-gray-900"
                    } ${
                      mobileMenuOpen ? "w-6 transform -rotate-45 -translate-y-1" : "w-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-100 py-5 pointer-events-auto" : "opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 shadow-xl transition-all duration-300 z-0"></div>
            <nav className="relative flex flex-col divide-y divide-gray-200 dark:divide-gray-700 mb-2 z-10 px-2 pt-20 text-gray-900 dark:text-gray-100">
              {[
                { href: '#', label: locale.header.home },
                { href: '#about', label: locale.header.about },
                { href: '#services', label: locale.header.services },
                { href: '#portfolio', label: locale.header.portfolio },
                { href: '#testimonials', label: locale.header.testimonials },
                { href: '#contact', label: locale.header.contact },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center w-full px-2 py-3 transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {/* Mobile Language Selector & Dark Mode Toggle */}
            <div className="block md:hidden mt-2 px-2 text-gray-900 dark:text-gray-100 z-20">
              <div className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">{locale.header.language}</div>
              <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                {LANGUAGES.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => { setLang(option.code); setMobileMenuOpen(false); }}
                    className={`flex items-center w-full px-2 py-3 transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 relative ${lang === option.code ? 'text-blue-600 font-bold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    aria-selected={lang === option.code}
                    type="button"
                  >
                    <span className="text-xl mr-3">{option.flag}</span>
                    <span className="flex-1">{option.label}</span>
                    {lang === option.code && (
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    )}
                  </button>
                ))}
                {/* Mobile Dark Mode Toggle (inside language selector for visibility) */}
                <button
                  onClick={handleDarkModeToggle}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3 z-20"
                  aria-label={darkMode ? locale.header.light_mode : locale.header.dark_mode}
                  type="button"
                >
                  {darkMode ? (
                    <svg width="20" height="20" fill="currentColor" className="text-yellow-400" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                  ) : (
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"/></svg>
                  )}
                  <span className="font-medium">{darkMode ? locale.header.light_mode : locale.header.dark_mode}</span>
                </button>
              </div>
            </div>
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