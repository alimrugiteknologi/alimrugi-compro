'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Website",
    image: "/portfolio-1.jpg",
    description: "Platform e-commerce modern dengan integrasi payment gateway dan dashboard admin komprehensif."
  },
  {
    id: 2,
    title: "Aplikasi Manajemen Inventory",
    category: "Mobile App",
    image: "/portfolio-2.jpg",
    description: "Aplikasi mobile untuk manajemen inventory dengan fitur barcode scanning dan real-time analytics."
  },
  {
    id: 3,
    title: "Company Branding",
    category: "Design",
    image: "/portfolio-3.jpg",
    description: "Redesign brand identity lengkap termasuk logo, guideline, dan marketing materials."
  },
  {
    id: 4,
    title: "AI-Based Recommendation System",
    category: "AI",
    image: "/portfolio-4.jpg",
    description: "Sistem rekomendasi berbasis AI untuk platform content yang meningkatkan engagement pengguna."
  },
  {
    id: 5,
    title: "Digital Learning Platform",
    category: "Website",
    image: "/portfolio-5.jpg",
    description: "Platform pembelajaran online dengan fitur video streaming, quiz, dan sertifikasi."
  },
  {
    id: 6,
    title: "Restaurant Booking App",
    category: "Mobile App",
    image: "/portfolio-6.jpg",
    description: "Aplikasi booking restoran dengan fitur reservasi real-time dan menu digital."
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Website", "Mobile App", "Design", "AI"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Portofolio Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Beberapa proyek terbaik yang telah kami kerjakan
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 