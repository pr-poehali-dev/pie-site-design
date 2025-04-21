
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuTabContent from "@/components/MenuTabs";
import { products } from "@/data/products";

const MenuPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define category filters
  const categoryFilters = {
    meat: (p: typeof products[0]) => p.category === "meat",
    vegetable: (p: typeof products[0]) => p.category === "vegetable",
    sweet: (p: typeof products[0]) => p.category === "sweet",
    fish: (p: typeof products[0]) => p.category === "fish"
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F0]">
      <Header />
      <main className="flex-grow pt-16 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-[#8B4513]">Наше меню</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Все наши пироги готовятся с любовью из натуральных ингредиентов по старинным рецептам
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-amber-50 p-1">
              <TabsTrigger value="all" className="px-5 py-2">
                Все пироги
              </TabsTrigger>
              <TabsTrigger value="meat" className="px-5 py-2">
                Мясные
              </TabsTrigger>
              <TabsTrigger value="vegetable" className="px-5 py-2">
                Овощные
              </TabsTrigger>
              <TabsTrigger value="sweet" className="px-5 py-2">
                Сладкие
              </TabsTrigger>
              <TabsTrigger value="fish" className="px-5 py-2">
                Рыбные
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content for All Products */}
          <MenuTabContent value="all" products={products} />
          
          {/* Tab Content for Filtered Categories */}
          {Object.entries(categoryFilters).map(([category, filter]) => (
            <MenuTabContent 
              key={category}
              value={category} 
              products={products} 
              filter={filter}
            />
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
