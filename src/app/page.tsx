'use client';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("./components/Portfolio"), { loading: () => <div>Loading Portofolio...</div> });
const Testimonials = dynamic(() => import("./components/Testimonials"), { loading: () => <div>Loading Testimoni...</div> });
const Pricing = dynamic(() => import("./components/Pricing"), { loading: () => <div>Loading Pricing...</div> });
const Contact = dynamic(() => import("./components/Contact"), { loading: () => <div>Loading Kontak...</div> });
const Footer = dynamic(() => import("./components/Footer"), { loading: () => <div>Loading Footer...</div> });

export default function Home() {
  const [lang, setLang] = useState('id');
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for darkMode
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored) setDarkMode(stored === 'true');
  }, []);

  // Sync darkMode to <html> class and persist
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <WhyUs lang={lang} />
      <Portfolio lang={lang} />
      <Testimonials lang={lang} />
      <Pricing lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
