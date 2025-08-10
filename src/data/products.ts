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
    id: "soap-neem",
    name: "Neem Soap",
    price: 10,
    image: heroSoap,
    description: "Purifying neem bar that gently clarifies without stripping moisture.",
    ingredients: ["Neem", "Olive Oil", "Coconut Oil", "Shea Butter"],
    reviews: [
      { author: "Asha", rating: 5, comment: "Keeps my skin feeling clean and calm." },
    ],
    category: "soap",
  },
  {
    id: "soap-rose",
    name: "Rose Soap",
    price: 12,
    image: heroSoap,
    description: "Delicate rose aroma with a creamy, comforting lather.",
    ingredients: ["Rose Extract", "Cocoa Butter", "Glycerin", "Aloe"],
    reviews: [
      { author: "Nora", rating: 5, comment: "Such a gentle, lovely scent." },
    ],
    category: "soap",
  },
  {
    id: "soap-saffron",
    name: "Saffron Soap",
    price: 15,
    image: heroSoap,
    description: "Brightening saffron bar for a soft, refreshed complexion.",
    ingredients: ["Saffron", "Sweet Almond Oil", "Shea Butter", "Vitamin E"],
    reviews: [
      { author: "Ibrahim", rating: 4, comment: "Luxury feel, great morning pick-me-up." },
    ],
    category: "soap",
  },
  {
    id: "soap-black-seed",
    name: "Black Seed Soap",
    price: 13,
    image: heroSoap,
    description: "Balancing black seed oil blend ideal for daily clarity.",
    ingredients: ["Black Seed Oil", "Olive Oil", "Coconut Oil", "Aloe"],
    reviews: [
      { author: "Layla", rating: 5, comment: "Feels clean without any dryness." },
    ],
    category: "soap",
  },
  {
    id: "facewash-1",
    name: "Facewash 1",
    price: 18,
    image: heroSoap,
    description: "Gentle daily gel cleanser with soothing botanicals.",
    ingredients: ["Chamomile", "Green Tea", "Aloe", "Glycerin"],
    reviews: [
      { author: "Maya", rating: 5, comment: "So fresh and calming on sensitive skin." },
    ],
    category: "facewash",
  },
  {
    id: "facewash-2",
    name: "Facewash 2",
    price: 20,
    image: heroSoap,
    description: "Light foaming wash that leaves a dewy, comfortable finish.",
    ingredients: ["Rosewater", "Panthenol", "Aloe", "Glycerin"],
    reviews: [
      { author: "Ben", rating: 4, comment: "Great everyday cleanser." },
    ],
    category: "facewash",
  },
];

export const soaps = products.filter((p) => p.category === "soap");
export const faceWashes = products.filter((p) => p.category === "facewash");
