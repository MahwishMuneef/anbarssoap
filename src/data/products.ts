export type Review = {
  author: string;
  rating: number; // 1-5
  comment: string;
};

export type ProductData = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  reviews: Review[];
  category: "soap" | "facewash";
};

import heroSoap from "@/assets/hero-skincare.jpg";

export const products: ProductData[] = [
  {
    id: "soap-calm-shea",
    name: "Calm Shea Bar",
    price: 12,
    image: heroSoap,
    description: "A soothing handcrafted soap with shea butter for daily nourishment.",
    ingredients: ["Shea Butter", "Olive Oil", "Coconut Oil", "Aloe", "Vitamin E"],
    reviews: [
      { author: "Lena", rating: 5, comment: "Leaves my skin soft and calm." },
      { author: "James", rating: 4, comment: "Lovely scent and gentle lather." },
    ],
    category: "soap",
  },
  {
    id: "soap-cedar-mint",
    name: "Cedar Mint Bar",
    price: 14,
    image: heroSoap,
    description: "Refreshing mint with subtle cedar notes for a clean, crisp feel.",
    ingredients: ["Cocoa Butter", "Coconut Oil", "Cedarwood", "Peppermint"],
    reviews: [
      { author: "Priya", rating: 5, comment: "Smells like a spa!" },
    ],
    category: "soap",
  },
  {
    id: "wash-gentle-botanical",
    name: "Gentle Botanical Wash",
    price: 18,
    image: heroSoap,
    description: "A mild face cleanser with botanical extracts to balance and refresh.",
    ingredients: ["Chamomile", "Green Tea", "Aloe", "Glycerin"],
    reviews: [
      { author: "Maya", rating: 5, comment: "So gentle, no tightness after washing." },
      { author: "Ben", rating: 4, comment: "Great everyday cleanser." },
    ],
    category: "facewash",
  },
  {
    id: "wash-rosewater",
    name: "Rosewater Gel Cleanser",
    price: 20,
    image: heroSoap,
    description: "Light gel cleanser infused with rosewater for a fresh, dewy finish.",
    ingredients: ["Rosewater", "Glycerin", "Aloe", "Panthenol"],
    reviews: [
      { author: "Ada", rating: 5, comment: "Smells divine and feels luxurious." },
    ],
    category: "facewash",
  },
];

export const soaps = products.filter((p) => p.category === "soap");
export const faceWashes = products.filter((p) => p.category === "facewash");
