
import { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-bakery-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-subtitle">
            Мы объединяем многолетние традиции и современные технологии, чтобы радовать вас вкусом домашних пирогов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Изображение */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-bakery-accent/30 rounded-full mix-blend-multiply filter blur-md"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bakery-primary/30 rounded-full mix-blend-multiply filter blur-md"></div>
              
              <img
                src="/placeholder.svg"
                alt="Процесс приготовления пирогов"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>

          {/* Преимущества */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-display font-bold text-bakery-dark mb-8">
              Особенности нашей пекарни
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transition-all duration-500 delay-${index * 150}`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-bakery-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-bakery-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-bakery-dark/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Традиционные рецепты",
    description: "Наши пироги готовятся по старинным семейным рецептам, передающимся из поколения в поколение"
  },
  {
    title: "Лучшие ингредиенты",
    description: "Мы тщательно отбираем каждый ингредиент, чтобы гарантировать идеальный вкус каждого пирога"
  },
  {
    title: "Свежесть и качество",
    description: "Выпекаем пироги каждый день, чтобы вы всегда получали свежую и ароматную выпечку"
  }
];

export default FeaturesSection;
