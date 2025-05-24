"use client";

import Image from "next/image";
import idLocale from "../locales/id.json";
import enLocale from "../locales/en.json";
import msLocale from "../locales/ms.json";

export default function WhyUs({ lang = "id" }: { lang?: string }) {
  const locale = lang === "en" ? enLocale : lang === "ms" ? msLocale : idLocale;
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            {locale.whyus.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:col-span-2">
            {locale.whyus.reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all animate-slide-up opacity-0"
                style={{
                  animationDelay: `${idx * 100 + 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="mt-1 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
