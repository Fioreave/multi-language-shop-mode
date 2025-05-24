export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  colors?: string[];
  category: string;
  featured?: boolean;
  newArrival?: boolean;
  trending?: boolean;
  description?: string;
}

// Sample product data
export const products: Product[] = [
  {
    id: 1,
    name: "Classic Top",
    price: 45.99,
    images: [
      "/lovable-uploads/d01f6d18-d15b-4305-8799-38e670884c69.png", // Updated image
      "https://source.unsplash.com/random/500x600/?fashion,model"
    ],
    colors: ["#000000", "#eddada", "#e9e2d4"],
    category: "tops",
    featured: true,
    newArrival: true,
    trending: true,
    description: "Our signature classic top offers unmatched comfort and style. Perfect for any occasion."
  },
  {
    id: 2,
    name: "Yoga Leggings",
    price: 59.99,
    images: [
      "/lovable-uploads/bb565b07-1335-4711-a7eb-77e48eb7d1c8.png", // Updated image
      "https://source.unsplash.com/random/500x600/?yoga,pants"
    ],
    colors: ["#000000", "#69705e", "#cb8587"],
    category: "bottoms",
    featured: true,
    newArrival: true,
    description: "High-performance leggings designed for yoga and everyday comfort."
  },
  {
    id: 3,
    name: "Sports Bra",
    price: 34.99,
    images: [
      "/lovable-uploads/20a1f742-0026-4a02-bfa3-bc56ab2874e2.png", // Updated image
      "https://source.unsplash.com/random/500x600/?activewear"
    ],
    colors: ["#000000", "#cb8587", "#ffffff"],
    category: "tops",
    featured: true,
    trending: true,
    description: "Supportive sports bra for all your workout needs."
  },
  {
    id: 4,
    name: "Workout Shorts",
    price: 39.99,
    images: [
      "https://source.unsplash.com/random/500x600/?shorts",
      "https://source.unsplash.com/random/500x600/?workout,shorts"
    ],
    colors: ["#000000", "#e9e2d4"],
    category: "bottoms",
    newArrival: true,
    description: "Comfortable shorts perfect for any workout routine."
  },
  {
    id: 5,
    name: "Oversized Sweater",
    price: 64.99,
    images: [
      "https://source.unsplash.com/random/500x600/?sweater",
      "https://source.unsplash.com/random/500x600/?knit,fashion"
    ],
    colors: ["#e9e2d4", "#eddada", "#69705e"],
    category: "tops",
    featured: true,
    trending: true,
    description: "Cozy oversized sweater for those chilly days."
  },
  {
    id: 6,
    name: "Tank Top",
    price: 29.99,
    images: [
      "https://source.unsplash.com/random/500x600/?tank,top",
      "https://source.unsplash.com/random/500x600/?sleeveless"
    ],
    colors: ["#ffffff", "#000000", "#cb8587"],
    category: "tops",
    newArrival: true,
    description: "Lightweight tank top perfect for layering or wearing alone."
  },
  {
    id: 7,
    name: "Fitted Joggers",
    price: 54.99,
    images: [
      "https://source.unsplash.com/random/500x600/?joggers",
      "https://source.unsplash.com/random/500x600/?sweatpants"
    ],
    colors: ["#000000", "#69705e", "#e9e2d4"],
    category: "bottoms",
    trending: true,
    description: "Comfortable joggers designed for an active lifestyle."
  },
  {
    id: 8,
    name: "Crop Hoodie",
    price: 49.99,
    images: [
      "https://source.unsplash.com/random/500x600/?hoodie",
      "https://source.unsplash.com/random/500x600/?sweatshirt"
    ],
    colors: ["#eddada", "#e9e2d4", "#000000"],
    category: "tops",
    featured: true,
    newArrival: true,
    description: "Trendy crop hoodie, both comfortable and stylish."
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getNewArrivals = () => products.filter(p => p.newArrival);
export const getTrendingProducts = () => products.filter(p => p.trending);
