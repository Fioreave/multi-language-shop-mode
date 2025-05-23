
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import ProductCard from "./ProductCard";

const FeaturedSection: React.FC<{
  title: string;
  products: any[];
  viewAllLink: string;
}> = ({ title, products, viewAllLink }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">{t(title)}</h2>
          <Link
            to={viewAllLink}
            className="text-sm underline underline-offset-4 hover:text-brand-coral"
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
