
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  const { t } = useLanguage();

  return (
    <section 
      className="hero-section flex items-center justify-center text-center text-white relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{subtitle}</p>
          <Link to={buttonLink} className="shop-now-btn">
            {t(buttonText)}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
