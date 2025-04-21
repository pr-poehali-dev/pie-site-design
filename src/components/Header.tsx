
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMobile();
  const { toast } = useToast();

  const handleCartClick = () => {
    toast({
      title: "Корзина",
      description: "Функционал корзины находится в разработке",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-b.svg"
              alt="Вкусные Пироги"
              className="h-10 w-auto"
            />
            <span className={cn(
              "ml-2 font-bold text-xl transition-colors duration-300",
              isScrolled ? "text-[#8B4513]" : "text-[#8B4513]"
            )}>
              Вкусные Пироги
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" isScrolled={isScrolled}>
              Главная
            </NavLink>
            <NavLink to="/menu" isScrolled={isScrolled}>
              Меню
            </NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>
              О нас
            </NavLink>
            <NavLink to="/promotions" isScrolled={isScrolled}>
              Акции
            </NavLink>
            <NavLink to="/contacts" isScrolled={isScrolled}>
              Контакты
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCartClick}
              className={cn(
                "relative transition-colors",
                isScrolled ? "text-[#8B4513] hover:text-[#6B3410]" : "text-[#8B4513] hover:text-[#6B3410]"
              )}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-[#8B4513] hover:bg-[#6B3410]">
              Заказать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCartClick}
              className="relative mr-2 text-[#8B4513]"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#8B4513]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Главная
              </MobileNavLink>
              <MobileNavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)}>
                Меню
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                О нас
              </MobileNavLink>
              <MobileNavLink to="/promotions" onClick={() => setIsMobileMenuOpen(false)}>
                Акции
              </MobileNavLink>
              <MobileNavLink to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                Контакты
              </MobileNavLink>
              <Button className="bg-[#8B4513] hover:bg-[#6B3410] w-full">
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, isScrolled, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "text-base font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transition-colors",
      isScrolled
        ? "text-[#8B4513] after:bg-[#8B4513]"
        : "text-[#8B4513] after:bg-[#8B4513]"
    )}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, onClick, children }: MobileNavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-[#8B4513] text-lg font-medium px-4 py-2 hover:bg-amber-50 rounded-md transition-colors"
  >
    {children}
  </Link>
);

export default Header;
