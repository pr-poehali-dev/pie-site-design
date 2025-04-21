
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:py-24 lg:py-32">
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Текстовый контент */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-700 delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bakery-dark mb-6">
              Свежие домашние пироги с доставкой
            </h1>
            <p className="text-lg md:text-xl text-bakery-dark/80 mb-8 max-w-xl">
              Мы готовим настоящие домашние пироги с любовью и заботой, используя только натуральные ингредиенты и семейные рецепты
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="text-lg py-6 px-8 bg-bakery-primary hover:bg-bakery-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all group"
              >
                <Link to="/menu">
                  Заказать сейчас
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="text-lg py-6 px-8 border-2 border-bakery-primary text-bakery-primary hover:bg-bakery-primary hover:text-white rounded-lg transition-all"
              >
                <Link to="/about">
                  Узнать больше
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Изображение */}
          <div 
            className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-bakery-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bakery-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
              
              <img 
                src="/placeholder.svg" 
                alt="Ассортимент свежих пирогов" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className={`p-6 bg-white/90 backdrop-blur rounded-lg shadow-md transition-all duration-500 delay-${
                index * 200 + 500
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-3xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-display font-semibold text-bakery-primary mb-2">{advantage.title}</h3>
              <p className="text-bakery-dark/70">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const advantages = [
  {
    icon: "🌿",
    title: "Натуральные ингредиенты",
    description: "Мы используем только свежие и высококачественные продукты от проверенных поставщиков"
  },
  {
    icon: "👨‍🍳",
    title: "Ручная работа",
    description: "Каждый пирог готовится вручную с соблюдением всех тонкостей домашней выпечки"
  },
  {
    icon: "🚚",
    title: "Быстрая доставка",
    description: "Доставляем горячие пироги в течение 60 минут или бесплатно"
  }
];

export default HeroSection;
