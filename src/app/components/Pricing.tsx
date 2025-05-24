'use client';

import { useState } from "react";
import idLocale from '../locales/id.json';
import enLocale from '../locales/en.json';
import msLocale from '../locales/ms.json';

// Inline SVG icon instead of react-icons
const CheckIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export default function Pricing({ lang = 'id' }: { lang?: string }) {
  const locale = lang === 'en' ? enLocale : lang === 'ms' ? msLocale : idLocale;
  const pricingPlans = locale.pricing.plans;
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            {locale.pricing.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            {locale.pricing.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fade-in opacity-0 ${
                index === 1 ? 'border-2 border-blue-600 dark:border-blue-500 scale-105 z-10' : 'border border-gray-200 dark:border-gray-700'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center text-sm py-1 font-medium">
                  {locale.pricing.most_popular}
                </div>
              )}
              
              <div className="p-8 bg-white dark:bg-gray-900 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {plan.desc}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {locale.pricing.per_project}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-all ${
                    index === 1
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {locale.pricing.choose}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 