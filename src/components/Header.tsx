import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-bakery-primary">Вкусные Пироги</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="text-foreground hover:text-bakery-primary transition-colors font-medium">
                    Главная
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/menu" className="text-foreground hover:text-bakery-primary transition-colors font-medium">
                    Меню
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/promo" className="text-foreground hover:text-bakery-primary transition-colors font-medium">
                    Акции
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="text-foreground hover:text-bakery-primary transition-colors font-medium">
                    О нас
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contacts" className="text-foreground hover:text-bakery-primary transition-colors font-medium">
                    Контакты
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 hover:bg-muted rounded-full transition-colors">
            <ShoppingCart className="h-6 w-6 text-bakery-primary" />
            <span className="absolute -top-1 -right-1 bg-bakery-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
              0
            </span>
          </Link>
          
          <button 
            className="block md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-bakery-primary" />
            ) : (
              <Menu className="h-6 w-6 text-bakery-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-6 flex flex-col gap-4">
          <Link to="/" className="py-2 text-foreground hover:text-bakery-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Главная
          </Link>
          <Link to="/menu" className="py-2 text-foreground hover:text-bakery-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Меню
          </Link>
          <Link to="/promo" className="py-2 text-foreground hover:text-bakery-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Акции
          </Link>
          <Link to="/about" className="py-2 text-foreground hover:text-bakery-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            О нас
          </Link>
          <Link to="/contacts" className="py-2 text-foreground hover:text-bakery-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
            Контакты
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
