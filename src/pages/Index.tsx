import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2A2F] to-[#2A3A40]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;