
import { Product } from "@/types/product";

export const products: Product[] = [
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
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getPopularProducts = () => {
  return products.filter(product => product.isPopular);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getDiscountedProducts = () => {
  return products.filter(product => product.discount);
};
