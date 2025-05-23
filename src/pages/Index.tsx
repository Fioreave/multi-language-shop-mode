
import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import ColorSection from "../components/ColorSection";
import { getFeaturedProducts, getNewArrivals, getTrendingProducts } from "../data/products";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="THE STYLE THAT DEFINES YOU"
        subtitle="Discover our new collection"
        backgroundImage="https://source.unsplash.com/random/1920x1080/?fashion,model"
        buttonText="shopNow"
        buttonLink="/shop"
      />
      
      <FeaturedSection 
        title="newArrivals" 
        products={getNewArrivals()} 
        viewAllLink="/shop?category=new"
      />
      
      <div className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[500px] flex items-center justify-center group overflow-hidden">
            <img
              src="https://source.unsplash.com/random/800x900/?fashion,woman" 
              alt="Women's Collection"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-medium mb-4">Women's Collection</h3>
              <a href="/shop?category=women" className="shop-now-btn">
                {t('shopNow')}
              </a>
            </div>
          </div>
          <div className="relative h-[500px] flex items-center justify-center group overflow-hidden">
            <img
              src="https://source.unsplash.com/random/800x900/?fashion,activewear" 
              alt="Activewear Collection"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-medium mb-4">Activewear Collection</h3>
              <a href="/shop?category=activewear" className="shop-now-btn">
                {t('shopNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ColorSection />
      
      <FeaturedSection 
        title="trending" 
        products={getTrendingProducts()} 
        viewAllLink="/shop?category=trending"
      />
      
      <section className="py-12 bg-brand-pink dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6">
            #TRENDING NOW
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/random/300x300/?fashion,instagram${i}`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
