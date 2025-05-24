'use client';

import idLocale from '../locales/id.json';
import enLocale from '../locales/en.json';
import msLocale from '../locales/ms.json';

export default function About({ lang = 'id' }: { lang?: string }) {
  const locale = lang === 'en' ? enLocale : lang === 'ms' ? msLocale : idLocale;
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div 
          className="max-w-4xl mx-auto text-center mb-16 animate-slide-up opacity-0"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            {locale.about.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="rounded-lg overflow-hidden shadow-xl animate-slide-right opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-indigo-600 p-8 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">PT ALIM RUGI TEKNOLOGI</h3>
                <p className="text-lg opacity-90">{locale.about.desc1}</p>
                <p className="text-lg opacity-90">{locale.about.desc2}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {locale.about.headline}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              PT ALIM RUGI TEKNOLOGI adalah mitra digital terpercaya yang telah membantu banyak bisnis dalam melakukan transformasi digital. Dengan pengalaman dan keahlian tim kami, kami menyediakan solusi digital yang tepat untuk kebutuhan spesifik bisnis Anda.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Kami hadir untuk membantu bisnis Anda tumbuh melalui teknologi digital yang inovatif, efisien, dan terjangkau. Tim kami terdiri dari profesional berpengalaman yang berkomitmen untuk memberikan solusi terbaik.
            </p>
            <div className="pt-4">
              <a 
                href="#services" 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {locale.about.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 