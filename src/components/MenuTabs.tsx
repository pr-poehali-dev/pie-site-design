
import { Product } from "@/types/product";
import { TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

interface TabContentProps {
  value: string;
  products: Product[];
  filter?: (product: Product) => boolean;
}

const MenuTabContent = ({ value, products, filter }: TabContentProps) => {
  const displayProducts = filter ? products.filter(filter) : products;

  return (
    <TabsContent value={value} className="mt-0">
      {displayProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">В этой категории пока нет пирогов</p>
        </div>
      )}
    </TabsContent>
  );
};

export default MenuTabContent;
