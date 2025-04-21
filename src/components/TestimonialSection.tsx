
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-bakery-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Отзывы наших клиентов</h2>
          <p className="section-subtitle">
            Вот что говорят о нас люди, попробовавшие наши пироги
          </p>
        </div>

        <div 
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 relative">
                      <div className="absolute -top-5 -left-5 text-bakery-primary opacity-20">
                        <Quote size={80} />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              fill={i < testimonial.rating ? "currentColor" : "none"} 
                              className={i < testimonial.rating ? "text-amber-500" : "text-amber-300"}
                            />
                          ))}
                        </div>
                        
                        <p className="text-lg md:text-xl text-bakery-dark/80 mb-8 italic">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-display font-semibold text-bakery-dark">
                              {testimonial.name}
                            </h4>
                            <p className="text-bakery-dark/60">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-3 h-3 rounded-full p-0 ${
                  activeIndex === index 
                    ? "bg-bakery-primary" 
                    : "bg-bakery-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    text: "Никогда не пробовала таких вкусных пирогов! Заказывала на семейный праздник и все гости были в восторге. Особенно понравился пирог с яблоками, буду заказывать еще!",
    name: "Елена Петрова",
    location: "Москва",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    text: "Очень быстрая доставка и внимательный персонал. Пирог был еще теплым, когда его привезли. Вкус просто потрясающий, как будто из детства!",
    name: "Алексей Смирнов",
    location: "Санкт-Петербург",
    avatar: "/placeholder.svg",
    rating: 4
  },
  {
    text: "Регулярно заказываю пироги в офис для коллег. Всегда свежие, вкусные и красиво упакованные. Всем рекомендую, особенно пирог с мясом!",
    name: "Ирина Волкова",
    location: "Нижний Новгород",
    avatar: "/placeholder.svg",
    rating: 5
  }
];

export default TestimonialSection;
