
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PopularProducts from "@/components/PopularProducts";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Прокрутка наверх при загрузке страницы
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bakery-light">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <PopularProducts />
        <FeaturesSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
