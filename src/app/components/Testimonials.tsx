'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Testimoni Klien
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 shadow-xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: active === index ? 1 : 0,
                  x: active === index ? 0 : 100,
                  position: active === index ? "relative" : "absolute"
                }}
                transition={{ duration: 0.5 }}
                className="h-full w-full p-10 flex flex-col justify-center"
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
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  active === index ? "bg-blue-600 w-6" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 