"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import dynamic from "next/dynamic";
import PartnersCarousel from "../components/Partners";

const Portfolio = dynamic(() => import("../components/Portfolio"), { loading: () => <div>Loading Portofolio...</div> });
const Testimonials = dynamic(() => import("../components/Testimonials"), { loading: () => <div>Loading Testimoni...</div> });
const Pricing = dynamic(() => import("../components/Pricing"), { loading: () => <div>Loading Pricing...</div> });
const Contact = dynamic(() => import("../components/Contact"), { loading: () => <div>Loading Kontak...</div> });
const Footer = dynamic(() => import("../components/Footer"), { loading: () => <div>Loading Footer...</div> });

export default function Home({ params }: { params: { lang?: string } }) {
  const lang = params.lang || 'id';
  // Dark mode logic can remain as before, or be moved to layout if preferred
  // ... (dark mode logic here if needed)
  return (
    <div className="min-h-screen">
      <Header lang={lang} darkMode={false} setDarkMode={() => {}} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <WhyUs lang={lang} />
      {/* <Portfolio lang={lang} /> */}
      {/* <PartnersCarousel lang={lang} /> */}
      <Testimonials lang={lang} />
      <Pricing lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
