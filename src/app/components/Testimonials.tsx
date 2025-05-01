'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Hidayat",
    position: "CEO, PT Maju Bersama",
    image: "/testimonial-1.jpg",
    quote: "PT ALIM RUGI TEKNOLOGI membantu kami membangun website e-commerce yang luar biasa. Pelayanan mereka profesional dan hasilnya melampaui ekspektasi kami."
  },
  {
    id: 2,
    name: "Siti Rahayu",
    position: "Marketing Director, Startup XYZ",
    image: "/testimonial-2.jpg",
    quote: "Berkat aplikasi mobile yang dikembangkan oleh Tim PT ALIM RUGI TEKNOLOGI, perusahaan kami melihat peningkatan engagement pelanggan sebesar 40% dalam waktu 3 bulan."
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "Founder, Digital Solutions",
    image: "/testimonial-3.jpg",
    quote: "Professionalisme dan kreativitas tim PT ALIM RUGI TEKNOLOGI membuat proyek redesign brand kami berjalan dengan lancar. Hasil akhirnya sangat memuaskan!"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        id="testimonials-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Review",
                "position": 1,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Budi Santoso"
                },
                "reviewBody": "Tim Alim Rugi sangat profesional dan membantu kami dalam transformasi digital bisnis kami.",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "PT ALIM RUGI TEKNOLOGI"
                }
              },
              {
                "@type": "Review",
                "position": 2,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Siti Rahayu"
                },
                "reviewBody": "Website yang dibuat sangat responsif dan sesuai dengan kebutuhan bisnis kami.",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "PT ALIM RUGI TEKNOLOGI"
                }
              },
              {
                "@type": "Review",
                "position": 3,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Ahmad Hidayat"
                },
                "reviewBody": "Pelayanan yang sangat memuaskan dan hasil yang sesuai dengan ekspektasi.",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "PT ALIM RUGI TEKNOLOGI"
                }
              }
            ]
          })
        }}
      />
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div 
            className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Testimoni Klien
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 shadow-xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`h-full w-full p-10 flex flex-col justify-center transition-all duration-500 absolute inset-0
                    ${active === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <blockquote className="text-center mb-6">
                    <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="text-gray-900 dark:text-white font-medium">
                      {testimonial.name}
                      <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {testimonial.position}
                      </span>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-8 w-8 flex items-center justify-center p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    active === index 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Lihat testimoni ${index + 1}`}
                >
                  <span className="text-xs font-medium">{index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 