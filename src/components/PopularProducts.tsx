
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PopularProducts = () => {
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
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Популярные пироги</h2>
          <p className="section-subtitle">
            Самые любимые и популярные пироги нашей пекарни, которые выбирают наши покупатели
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`card-product transition-all duration-700 delay-${
                index * 150
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-bakery-accent text-white font-medium">
                    {product.badge}
                  </Badge>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full w-10 h-10 hover:bg-bakery-primary hover:text-white transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full w-10 h-10 hover:bg-bakery-primary hover:text-white transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-semibold text-bakery-dark">
                    {product.name}
                  </h3>
                  <div className="text-lg font-bold text-bakery-primary">
                    {product.price} ₽
                  </div>
                </div>
                
                <p className="text-sm text-bakery-dark/70 mb-5">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                    <span className="text-xs text-bakery-dark/60 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <Button className="bg-bakery-primary hover:bg-bakery-dark text-white transition-colors group">
                    <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline" 
            className="text-lg py-6 px-8 border-2 border-bakery-primary text-bakery-primary hover:bg-bakery-primary hover:text-white rounded-lg transition-all"
          >
            <Link to="/menu">
              Посмотреть все пироги
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    name: "Пирог с яблоком и корицей",
    price: "450",
    description: "Нежное тесто с начинкой из свежих яблок и ароматной корицы",
    image: "/placeholder.svg",
    rating: 5,
    reviews: 42,
    badge: "Хит продаж"
  },
  {
    name: "Пирог с картофелем и грибами",
    price: "480",
    description: "Сытный пирог с начинкой из картофеля и лесных грибов",
    image: "/placeholder.svg",
    rating: 4,
    reviews: 28,
    badge: null
  },
  {
    name: "Пирог с мясом",
    price: "520",
    description: "Традиционный пирог с сочной мясной начинкой и специями",
    image: "/placeholder.svg",
    rating: 5,
    reviews: 36,
    badge: "Новинка"
  }
];

export default PopularProducts;
