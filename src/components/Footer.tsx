
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-bakery-dark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* О компании */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Вкусные Пироги</h3>
            <p className="text-white/80 mb-6">
              Мы печем настоящие домашние пироги с любовью и заботой, 
              используя только натуральные ингредиенты и семейные рецепты.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Навигация</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">Главная</Link>
              <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Меню</Link>
              <Link to="/promo" className="text-white/70 hover:text-white transition-colors">Акции</Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">О нас</Link>
              <Link to="/contacts" className="text-white/70 hover:text-white transition-colors">Контакты</Link>
            </nav>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-bakery-accent" />
                <span className="text-white/80">+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-bakery-accent" />
                <span className="text-white/80">info@vkusniepirogyi.ru</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-bakery-accent mt-1" />
                <span className="text-white/80">
                  г. Москва, ул. Пирожковая, 123
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-bakery-accent" />
                <span className="text-white/80">
                  Пн-Вс: с 9:00 до 21:00
                </span>
              </div>
            </div>
          </div>
          
          {/* Рассылка */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Подпишитесь на новости</h3>
            <p className="text-white/80 mb-4">
              Узнавайте первыми о новинках и специальных предложениях
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-bakery-dark/80 border-bakery-primary/50 focus-visible:ring-bakery-accent"
              />
              <Button className="bg-bakery-accent hover:bg-bakery-accent/80 text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Вкусные Пироги. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
