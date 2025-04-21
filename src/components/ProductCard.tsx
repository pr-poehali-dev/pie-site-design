
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const finalPrice = product.discount 
    ? Math.round(product.price * (1 - product.discount / 100)) 
    : product.price;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover-scale">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        <ProductBadges product={product} />
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-[#8B4513]">{product.name}</CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <PriceDisplay 
            originalPrice={product.price} 
            finalPrice={finalPrice} 
            discount={product.discount}
          />
          
          <QuantitySelector 
            quantity={quantity} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
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

interface ProductBadgesProps {
  product: Product;
}

const ProductBadges = ({ product }: ProductBadgesProps) => {
  if (!product.isNew && !product.isPopular && !product.discount) {
    return null;
  }

  return (
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
  );
};

interface PriceDisplayProps {
  originalPrice: number;
  finalPrice: number;
  discount?: number;
}

const PriceDisplay = ({ originalPrice, finalPrice, discount }: PriceDisplayProps) => {
  return (
    <div className="font-bold text-lg">
      {discount ? (
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#8B4513]">{finalPrice} ₽</span>
          <span className="text-sm text-gray-500 line-through">{originalPrice} ₽</span>
        </div>
      ) : (
        <span className="text-xl text-[#8B4513]">{finalPrice} ₽</span>
      )}
    </div>
  );
};

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantitySelector = ({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center border rounded-md">
      <button 
        onClick={onDecrement}
        className="px-3 py-1 border-r text-gray-600 hover:bg-gray-100 transition"
        aria-label="Уменьшить количество"
      >
        -
      </button>
      <span className="px-3 py-1">{quantity}</span>
      <button 
        onClick={onIncrement}
        className="px-3 py-1 border-l text-gray-600 hover:bg-gray-100 transition"
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  );
};

export default ProductCard;
