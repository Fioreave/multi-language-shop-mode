
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products, Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const Shop = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    sort: "newest"
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category") || "";
    const colorParam = searchParams.get("color") || "";
    
    setFilters(prev => ({
      ...prev,
      category: categoryParam,
      color: colorParam
    }));
  }, [location.search]);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (filters.category) {
      if (filters.category === "new") {
        filtered = filtered.filter(p => p.newArrival);
      } else if (filters.category === "trending") {
        filtered = filtered.filter(p => p.trending);
      } else {
        filtered = filtered.filter(p => p.category === filters.category);
      }
    }
    
    // Apply color filter (simple implementation)
    if (filters.color) {
      filtered = filtered.filter(p => 
        p.colors?.some(c => {
          const colorName = filters.color.toLowerCase();
          if (colorName === "white") return c === "#ffffff";
          if (colorName === "black") return c === "#000000";
          if (colorName === "pink") return c === "#eddada";
          if (colorName === "red") return c === "#cb8587";
          if (colorName === "beige") return c === "#e9e2d4";
          if (colorName === "olive") return c === "#69705e";
          if (colorName === "blue") return c === "#a6c0d9";
          return false;
        })
      );
    }
    
    // Apply sorting
    if (filters.sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }
    // "newest" is default, using original order
    
    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium mb-6 text-center">{t('shop')}</h1>
      
      {/* Filter and Sort Controls */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm"
          >
            Filters
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div className="flex items-center gap-2">
            <label className="text-sm">Sort by:</label>
            <select 
              name="sort" 
              value={filters.sort}
              onChange={handleFilterChange}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded p-1 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Expanded filters */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded mb-4">
            <div>
              <label className="block text-sm mb-1">Category</label>
              <select 
                name="category" 
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded p-2"
              >
                <option value="">All Categories</option>
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
                <option value="new">New Arrivals</option>
                <option value="trending">Trending</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Color</label>
              <select 
                name="color" 
                value={filters.color}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded p-2"
              >
                <option value="">All Colors</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="red">Red</option>
                <option value="beige">Beige</option>
                <option value="olive">Olive</option>
                <option value="blue">Blue</option>
              </select>
            </div>
          </div>
        )}
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No products match your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
