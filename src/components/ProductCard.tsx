
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  images: string[];
  colors?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, images, colors }) => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="block relative group">
        <div className="relative overflow-hidden">
          <img 
            src={images[currentImage]} 
            alt={name} 
            className="w-full h-[350px] object-cover"
            onMouseEnter={() => images.length > 1 && setCurrentImage(1)}
            onMouseLeave={() => setCurrentImage(0)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
            <button className="w-full text-center bg-black hover:bg-gray-800 text-white py-2 transition-colors">
              {t('addToCart')}
            </button>
          </div>
        </div>
        
        <div className="pt-4 px-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-700 dark:text-gray-200 mt-1">${price.toFixed(2)}</p>
          
          {colors && colors.length > 0 && (
            <div className="flex mt-2 space-x-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
