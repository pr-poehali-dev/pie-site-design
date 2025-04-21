
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

// Типы данных для пирогов
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
  discount?: number;
}

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Мясной пирог с картофелем",
      description: "Сочное мясо с картофелем и специями в хрустящем тесте",
      price: 350,
      image: "/placeholder.svg",
      category: "meat",
      isPopular: true
    },
    {
      id: 2,
      name: "Пирог с капустой",
      description: "Свежая капуста с яйцом и зеленью в нежном дрожжевом тесте",
      price: 280,
      image: "/placeholder.svg",
      category: "vegetable"
    },
    {
      id: 3,
      name: "Яблочный пирог",
      description: "Свежие яблоки с корицей и медом в песочном тесте",
      price: 320,
      image: "/placeholder.svg",
      category: "sweet",
      isNew: true
    },
    {
      id: 4,
      name: "Черничный пирог",
      description: "Сочная черника со сливочным кремом в хрустящем тесте",
      price: 340,
      image: "/placeholder.svg",
      category: "sweet",
      discount: 15
    },
    {
      id: 5,
      name: "Пирог с грибами и луком",
      description: "Ароматные грибы с луком в слоеном тесте",
      price: 290,
      image: "/placeholder.svg",
      category: "vegetable",
      isPopular: true
    },
    {
      id: 6,
      name: "Рыбный пирог",
      description: "Нежная рыба с рисом и зеленью в тонком тесте",
      price: 380,
      image: "/placeholder.svg",
      category: "fish"
    },
    {
      id: 7,
      name: "Пирог с творогом",
      description: "Сладкий творог с изюмом и ванилью в песочном тесте",
      price: 310,
      image: "/placeholder.svg",
      category: "sweet"
    },
    {
      id: 8,
      name: "Курник",
      description: "Традиционный пирог с курицей, картофелем и грибами",
      price: 360,
      image: "/placeholder.svg",
      category: "meat",
      isPopular: true
    },
    {
      id: 9,
      name: "Вишневый пирог",
      description: "Сочная вишня в нежном песочном тесте с ванильным соусом",
      price: 330,
      image: "/placeholder.svg",
      category: "sweet"
    }
  ]);

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

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meat" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "meat").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vegetable" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "vegetable").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sweet" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "sweet").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fish" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "fish").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
          )}
          {product.isPopular && (
            <Badge className="bg-amber-500 hover:bg-amber-600">Популярное</Badge>
          )}
          {product.discount && (
            <Badge className="bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-[#8B4513]">{product.name}</CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-bold text-lg">
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-xl text-[#8B4513]">
                  {Math.round(product.price * (1 - product.discount / 100))} ₽
                </span>
                <span className="text-sm text-gray-500 line-through">{product.price} ₽</span>
              </div>
            ) : (
              <span className="text-xl text-[#8B4513]">{product.price} ₽</span>
            )}
          </div>
          
          <div className="flex items-center border rounded-md">
            <button 
              onClick={handleDecrement}
              className="px-3 py-1 border-r text-gray-600 hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="px-3 py-1 border-l text-gray-600 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex gap-2">
        <Button className="w-full bg-[#8B4513] hover:bg-[#6B3410]">
          <ShoppingCart className="mr-2 h-4 w-4" /> 
          В корзину
        </Button>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuPage;
