
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface ColorItem {
  name: string;
  color: string;
  link: string;
}

const ColorSection: React.FC = () => {
  const { t } = useLanguage();
  
  const colors: ColorItem[] = [
    { name: "White", color: "#ffffff", link: "/shop?color=white" },
    { name: "Pink", color: "#eddada", link: "/shop?color=pink" },
    { name: "Red", color: "#cb8587", link: "/shop?color=red" },
    { name: "Beige", color: "#e9e2d4", link: "/shop?color=beige" },
    { name: "Black", color: "#000000", link: "/shop?color=black" },
    { name: "Olive", color: "#69705e", link: "/shop?color=olive" },
    { name: "Blue", color: "#a6c0d9", link: "/shop?color=blue" },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium mb-8 text-center">{t("productsByColor")}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {colors.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-center transition-transform hover:scale-105"
            >
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2"
                style={{ 
                  backgroundColor: item.color,
                  border: item.color === "#ffffff" ? "1px solid #e5e5e5" : "none" 
                }}
              />
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
