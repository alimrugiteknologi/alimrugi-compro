'use client';

import Image from "next/image";
import Script from "next/script";

export default function Hero() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "PT ALIM RUGI TEKNOLOGI - Solusi Digital Terpercaya",
            "description": "Transformasi digital bisnis Anda dengan solusi website, aplikasi mobile, dan digitalisasi yang inovatif.",
            "url": "https://alimrugi.id",
            "mainEntity": {
              "@type": "Organization",
              "name": "PT ALIM RUGI TEKNOLOGI",
              "description": "Mitra digital terpercaya yang menyediakan solusi website, aplikasi mobile, dan digitalisasi bisnis yang inovatif.",
              "offers": {
                "@type": "AggregateOffer",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Website Development",
                    "description": "Pembuatan website profesional untuk bisnis Anda"
                  },
                  {
                    "@type": "Offer",
                    "name": "Mobile App Development",
                    "description": "Pengembangan aplikasi mobile untuk iOS dan Android"
                  },
                  {
                    "@type": "Offer",
                    "name": "Digitalisasi Bisnis",
                    "description": "Solusi digitalisasi untuk transformasi bisnis Anda"
                  }
                ]
              }
            }
          })
        }}
      />
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
          <Image 
            src="/pattern-bg.svg" 
            alt="Background Pattern" 
            fill 
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
        </div>
        
        <div className="container mx-auto px-6 py-24 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
              <Image 
                src="/main-logo.webp" 
                alt="PT ALIM RUGI TEKNOLOGI" 
                width={180} 
                height={50} 
                className="dark:invert object-contain"
                priority
                sizes="(max-width: 768px) 120px, 180px"
              />
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6 leading-tight animate-slide-up opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Transformasi Bisnis Anda ke Dunia Digital!
            </h1>
            
            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 animate-slide-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Solusi Digitalisasi bisnis yang Inovatif, Cepat, dan Terjangkau.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Konsultasi Gratis
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-300 font-medium rounded-full border border-blue-600 dark:border-blue-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 