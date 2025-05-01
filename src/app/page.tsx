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
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
