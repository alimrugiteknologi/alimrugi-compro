"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import idLocale from '../locales/id.json';
import enLocale from '../locales/en.json';
import msLocale from '../locales/ms.json';

// Inline SVG icons instead of react-icons
const icons = {
  mapMarker: (className = "") => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  phone: (className = "") => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
    </svg>
  ),
  envelope: (className = "") => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  whatsapp: (className = "") => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88z M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
    </svg>
  ),
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

export default function Contact({ lang = 'id' }: { lang?: string }) {
  const locale = lang === 'en' ? enLocale : lang === 'ms' ? msLocale : idLocale;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*Pesan Baru dari Website*
    
*Nama:* ${formData.name}
*Email:* ${formData.email}
*Telepon:* ${formData.phone}
*Subject:* ${formData.subject}

*Pesan:*
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/6282216987541?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    setSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontak PT ALIM RUGI TEKNOLOGI",
            description:
              "Hubungi kami untuk konsultasi dan informasi lebih lanjut tentang layanan digital kami",
            mainEntity: {
              "@type": "Organization",
              name: "PT ALIM RUGI TEKNOLOGI",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Gedung Mitra Digital, Jl. Teknologi Baru No. 123",
                addressLocality: "Jakarta Selatan",
                addressRegion: "DKI Jakarta",
                postalCode: "12930",
                addressCountry: "ID",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+62-21-1234-5678",
                  contactType: "customer service",
                  email: "alimrugiteknologi@gmail.com",
                  availableLanguage: ["Indonesian", "English"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+62-812-3456-7890",
                  contactType: "WhatsApp",
                  availableLanguage: ["Indonesian", "English"],
                },
              ],
            },
          }),
        }}
      />
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {locale.contact.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {locale.contact.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {locale.contact.title}
              </h3>

              {submitted ? (
                <div className="bg-green-100 dark:bg-green-800 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded relative mb-6">
                  <p>
                    {locale.contact.desc}
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {locale.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={locale.contact.name}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {locale.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={locale.contact.email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {locale.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={locale.contact.phone}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {locale.contact.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={locale.contact.subject}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {locale.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    placeholder={locale.contact.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  {isSubmitting ? locale.contact.sending : locale.contact.send}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {locale.contact.address}
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  {icons.mapMarker("text-blue-600 text-xl mr-4 mt-1")}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {locale.contact.address}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      KP. Karamat RT 003 RW 010, Desa Ciherang, Kecamatan
                      Cianjur, Kabupaten Cianjur, Provinsi Jawa Barat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  {icons.phone("text-blue-600 text-xl mr-4 mt-1")}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {locale.contact.phone_label}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      +62 822-1698-7541
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  {icons.envelope("text-blue-600 text-xl mr-4 mt-1")}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {locale.contact.email_label}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      alimrugiteknologi@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  {icons.whatsapp("text-blue-600 text-xl mr-4 mt-1")}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {locale.contact.whatsapp}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      +62 822-1698-7541
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {locale.contact.operational_hours}
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>{locale.contact.monday_friday}:</span>
                    <span>09:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{locale.contact.saturday}:</span>
                    <span>09:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{locale.contact.sunday}:</span>
                    <span>{locale.contact.closed}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
