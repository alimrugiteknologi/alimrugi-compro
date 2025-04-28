'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Tentang Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">PT ALIM RUGI TEKNOLOGI</h3>
                <p className="text-lg opacity-90">Kami bukan sekadar pembuat website.</p>
                <p className="text-lg opacity-90">Kami adalah mitra digital Anda!</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Cerita Kami
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Dengan pengalaman dan kreativitas, PT ALIM RUGI TEKNOLOGI hadir membantu bisnis Anda berkembang pesat di era digital. Kami memahami bahwa setiap bisnis memiliki kebutuhan unik, itulah mengapa kami selalu mendengarkan dan memberikan solusi yang sesuai dengan visi Anda.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">Visi</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Menjadi mitra teknologi terpercaya yang membantu bisnis di Indonesia bertransformasi dan berkembang di era digital.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">Misi</h4>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Menyediakan solusi digital berkualitas tinggi yang sesuai dengan kebutuhan klien</li>
                  <li>Memberikan layanan konsultasi teknologi yang komprehensif dan terjangkau</li>
                  <li>Terus berinovasi dengan mengadopsi teknologi terbaru untuk membantu bisnis Anda</li>
                  <li>Membangun hubungan jangka panjang dengan klien melalui layanan after-sales yang prima</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 