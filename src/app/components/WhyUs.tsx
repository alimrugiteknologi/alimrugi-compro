'use client';

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
        <div
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-slide-right opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
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
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: "forwards" }}
              >
                <div className="mt-1 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 