
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const product = products.find(p => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="relative">
          <div className="aspect-[3/4] relative">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Image navigation arrows */}
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnail navigation */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-16 h-20 border-2 ${currentImage === index ? 'border-brand-coral' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p className="text-xl mt-2">${product.price.toFixed(2)}</p>
          
          {/* Color options */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 p-0.5"
                    style={{ background: color }}
                  >
                    <span className="sr-only">Color option {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="flex border border-gray-300 dark:border-gray-600 w-max">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-3 py-1 border-r border-gray-300 dark:border-gray-600"
              >
                -
              </button>
              <input 
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center py-1 border-none focus:outline-none dark:bg-gray-800"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border-l border-gray-300 dark:border-gray-600"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart button */}
          <div className="mt-6">
            <button className="w-full sm:w-auto bg-black text-white py-3 px-8 hover:bg-gray-800 transition-colors">
              {t('addToCart')}
            </button>
          </div>
          
          {/* Product description */}
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {product.description || "No description available."}
            </p>
          </div>
          
          {/* Payment methods */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded">
            <h2 className="text-lg font-medium mb-2">Payment Methods</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-coral flex items-center justify-center text-white text-xs font-bold">B</div>
                <div>
                  <p className="font-medium">{t('bizum')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fast and easy payments directly from your mobile</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-olive flex items-center justify-center text-white text-xs font-bold">T</div>
                <div>
                  <p className="font-medium">{t('bankTransfer')}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Make a transfer to our bank account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
