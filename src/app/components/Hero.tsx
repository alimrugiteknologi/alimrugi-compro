'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <Image 
          src="/pattern-bg.svg" 
          alt="Background Pattern" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-6 py-24 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image 
              src="/main-logo.webp" 
              alt="PT ALIM RUGI TEKNOLOGI" 
              width={180} 
              height={50} 
              className="dark:invert object-contain"
              priority
            />
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6 leading-tight"
          >
            Transformasi Bisnis Anda ke Dunia Digital Bersama Alba!
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10"
          >
            Solusi Website, Aplikasi, dan Digitalisasi yang Inovatif, Cepat, dan Terjangkau.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
} 