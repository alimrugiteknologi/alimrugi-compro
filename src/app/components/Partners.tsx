import Image from "next/image";
import { useRef, useEffect } from "react";

const partners = [
  { name: "Partner 1", logo: "/partners/partner1.svg" },
  { name: "Partner 2", logo: "/partners/partner2.svg" },
  { name: "Partner 3", logo: "/partners/partner3.svg" },
  { name: "Partner 4", logo: "/partners/partner4.svg" },
  { name: "Partner 5", logo: "/partners/partner5.svg" },
  { name: "Partner 6", logo: "/partners/partner6.svg" },
];

export default function PartnersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 180, behavior: "smooth" });
        // Loop to start if at end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth - 10
        ) {
          setTimeout(() => {
            if (carouselRef.current) carouselRef.current.scrollLeft = 0;
          }, 400);
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up opacity-0" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Partner & Klien Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Kami dipercaya oleh berbagai perusahaan dan organisasi.
          </p>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-6 px-2 md:px-8 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-inner"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-md transition-transform hover:scale-105"
              style={{ scrollSnapAlign: "center" }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 