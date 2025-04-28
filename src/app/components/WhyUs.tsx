'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Berpengalaman",
    description: "Tim ahli kami memiliki pengalaman luas dalam pengembangan solusi digital untuk berbagai industri."
  },
  {
    title: "Inovatif",
    description: "Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terdepan bagi klien kami."
  },
  {
    title: "Harga Kompetitif",
    description: "Kami menawarkan layanan berkualitas tinggi dengan harga yang terjangkau dan transparan."
  },
  {
    title: "Layanan Lengkap",
    description: "Dari konsultasi awal hingga maintenance, kami menyediakan solusi end-to-end untuk kebutuhan digital Anda."
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="/why-us.jpg" 
              alt="Team working together" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Partner Terpercaya Anda</h3>
                <p className="text-white/90">Membangun solusi digital yang membantu bisnis Anda berkembang</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="mt-1 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 