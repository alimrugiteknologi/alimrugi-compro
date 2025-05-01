'use client';

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";

const portfolios = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Website",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    description: "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan manajemen inventori."
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "https://picsum.photos/seed/banking/600/400",
    description: "Aplikasi mobile banking dengan fitur keamanan tingkat tinggi dan antarmuka yang intuitif."
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Website",
    image: "https://picsum.photos/seed/corporate/600/400",
    description: "Website perusahaan dengan desain modern dan optimasi SEO untuk meningkatkan visibilitas online."
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "Mobile App",
    image: "https://picsum.photos/seed/food/600/400",
    description: "Aplikasi pengiriman makanan dengan fitur real-time tracking dan sistem rating pengguna."
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "Website",
    image: "https://picsum.photos/seed/lms/600/400",
    description: "Platform pembelajaran online dengan fitur video conference dan manajemen materi pembelajaran."
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile App",
    image: "https://picsum.photos/seed/fitness/600/400",
    description: "Aplikasi tracking kebugaran dengan integrasi wearable devices dan analisis data kesehatan."
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Website", "Mobile App", "Design", "AI"];
  
  const filteredProjects = filter === "All" 
    ? portfolios 
    : portfolios.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Portofolio Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Beberapa proyek terbaik yang telah kami kerjakan
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fade-in opacity-0"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 