'use client';

import { useState } from "react";

// Inline SVG icon instead of react-icons
const CheckIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: {
      monthly: "5.900K",
      yearly: "59.900K",
    },
    description: "Solusi dasar untuk bisnis kecil yang baru memulai",
    features: [
      "1 Website Profesional",
      "Desain Responsif",
      "Domain (.com/.id) Gratis",
      "Hosting 1 Tahun",
      "5 Email Bisnis",
      "Support 3 Bulan",
    ],
    highlight: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: {
      monthly: "9.900K",
      yearly: "99.900K",
    },
    description: "Pilihan terbaik untuk bisnis yang ingin berkembang",
    features: [
      "Website Profesional + CMS",
      "Desain Premium & Responsif",
      "Domain (.com/.id) Gratis",
      "Hosting 1 Tahun (Unlimited)",
      "10 Email Bisnis",
      "Support 6 Bulan",
      "SEO Optimization Basic",
      "Integrasi Sosial Media"
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: {
      monthly: "19.900K",
      yearly: "199.900K",
    },
    description: "Paket lengkap untuk perusahaan dengan kebutuhan kompleks",
    features: [
      "Website Profesional + CMS Custom",
      "Desain Premium & Responsif",
      "Domain (.com/.id) Gratis",
      "Hosting 1 Tahun (Unlimited)",
      "Email Bisnis Unlimited",
      "Support 12 Bulan",
      "SEO Optimization Advanced",
      "Integrasi Sosial Media",
      "Integrasi Payment Gateway",
      "Marketing Digital Consultation"
    ],
    highlight: false,
  }
];

export default function Pricing() {
  const [yearlyBilling, setYearlyBilling] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Paket Harga
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          
          <div className="flex items-center justify-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <span className={`mr-3 ${yearlyBilling ? 'text-gray-500' : 'text-gray-900 dark:text-white font-medium'}`}>
              Bulanan
            </span>
            <button 
              onClick={() => setYearlyBilling(!yearlyBilling)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={yearlyBilling}
            >
              <span 
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  yearlyBilling ? 'translate-x-5' : 'translate-x-0'
                }`} 
              />
            </button>
            <span className={`ml-3 ${yearlyBilling ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
              Tahunan <span className="text-green-600 text-xs font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fade-in opacity-0 ${
                plan.highlight 
                  ? 'border-2 border-blue-600 dark:border-blue-500 scale-105 z-10' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center text-sm py-1 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 bg-white dark:bg-gray-900 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    Rp {yearlyBilling ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /{yearlyBilling ? 'tahun' : 'bulan'}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 