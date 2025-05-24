'use client';

import Image from "next/image";
import Script from "next/script";
import idLocale from '../locales/id.json';
import enLocale from '../locales/en.json';
import msLocale from '../locales/ms.json';

// Using inline SVG icons instead of react-icons to avoid dependency issues
const icons = {
  code: (className = "") => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 12 8.293 7.707a1 1 0 010-1.414z"/>
      <path d="M15.707 6.293a1 1 0 010 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"/>
    </svg>
  ),
  mobile: (className = "") => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
    </svg>
  ),
  paintBrush: (className = "") => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 7.1C20 4.73 17.85 3 15.5 3 13.15 3 11 4.73 11 7.1c0 2.36 2.15 4.1 4.5 4.1.54 0 1.07-.09 1.57-.24 0 0 .58 1.66.58 1.66 0 .31-.17.48-.49.48H8c-.32 0-.49-.17-.49-.48v-4.97c.24-.14.5-.24.76-.35.77-.26 1.59-.43 2.31-.62C12.1 6.22 13.63 5.83 14 5c.37.83 1.9 1.21 3.42 1.67l.19.06C18.32 6.92 19 7.02 19.44 7.34c.43.31.56.82.56 1.33-.01.51-.15 1.03-.57 1.35-.43.31-1.1.41-1.77.61l-.18.06c-1.53.46-3.06.85-3.43 1.67-.37-.83-1.9-1.21-3.42-1.67l-.19-.06C9 11.02 8.32 10.92 7.88 10.6c-.43-.31-.56-.82-.56-1.33.01-.51.15-1.03.57-1.35.43-.31 1.1-.41 1.77-.61l.18-.06C11.37 6.78 12.9 6.4 13.27 5.57c.36.83 1.89 1.21 3.4 1.68l.19.06c.67.2 1.35.3 1.77.61.43.31.56.82.56 1.33.01.51-.14 1.03-.56 1.35-.43.31-1.1.41-1.77.61l-.19.06c-1.52.46-3.05.85-3.42 1.67-.37-.83-1.9-1.21-3.42-1.67l-.19-.06c-.67-.2-1.35-.3-1.77-.61-.43-.31-.56-.82-.56-1.33.01-.51.15-1.03.57-1.35.43-.31 1.1-.41 1.77-.61l.19-.06c1.52-.46 3.05-.85 3.42-1.67.37.83 1.89 1.21 3.4 1.68l.19.06c.67.2 1.35.3 1.77.61.42.31.56.82.55 1.33z"/>
    </svg>
  ),
  robot: (className = "") => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 6h8v2H8V6zm9 12.24c0 .27-.22.48-.49.48h-3.19c-.25 0-.46-.18-.49-.42l-.06-.42c-.09-.65-.56-1.19-1.22-1.39l-.71-.21v-.21c.75-.33 1.28-1.07 1.28-1.93 0-1.17-.96-2.14-2.12-2.14-1.16 0-2.12.97-2.12 2.14 0 .86.53 1.6 1.28 1.93v.21l-.71.21c-.65.2-1.13.74-1.22 1.39l-.06.42c-.03.25-.24.42-.49.42H7.49c-.27 0-.49-.21-.49-.48V8h10v10.24z"/>
    </svg>
  ),
  laptopCode: (className = "") => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 4h18v12h2v2H1v-2h2V4zm2 12h14V6H5v10zm7-8h6v2h-6V8zm-1 3h7v2h-7v-2zm-2-3h-2v2h2V8zm-2 3h4v2H7v-2z"/>
    </svg>
  )
};

export default function Services({ lang = 'id' }: { lang?: string }) {
  const locale = lang === 'en' ? enLocale : lang === 'ms' ? msLocale : idLocale;
  const serviceIcons = [
    icons.code("w-10 h-10 text-blue-600"),
    icons.mobile("w-10 h-10 text-blue-600"),
    icons.paintBrush("w-10 h-10 text-blue-600"),
    icons.robot("w-10 h-10 text-blue-600"),
    icons.laptopCode("w-10 h-10 text-blue-600"),
  ];
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": locale.services.list.map((item: any, idx: number) => ({
              "@type": "Service",
              "position": idx + 1,
              "name": item.title,
              "description": item.desc,
              "provider": {
                "@type": "Organization",
                "name": "PT ALIM RUGI TEKNOLOGI"
              }
            }))
          })
        }}
      />
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div 
            className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {locale.services.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {locale.services.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locale.services.list.map((service: any, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="mb-5 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  {serviceIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 