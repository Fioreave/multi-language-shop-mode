
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, type Language } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { Search, ShoppingBag, User, Menu, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ca', name: 'Català' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <header className="relative bg-background z-10">
      {/* Top info bar */}
      <div className="bg-brand-olive text-white text-xs px-4 py-2 text-center">
        <div className="container mx-auto">
          {t('neverMissOut')}
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="font-bold font-aurora">YOUR LOGO HERE</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-brand-coral">{t('home')}</Link>
            <Link to="/shop" className="hover:text-brand-coral">{t('shop')}</Link>
            <Link to="/collections" className="hover:text-brand-coral">{t('collections')}</Link>
            <Link to="/about" className="hover:text-brand-coral">{t('about')}</Link>
            <Link to="/contact" className="hover:text-brand-coral">{t('contact')}</Link>
          </nav>

          {/* Header tools */}
          <div className="flex items-center space-x-4">
            <div className="relative language-selector">
              <button className="flex items-center text-sm">
                <span>{language.toUpperCase()}</span>
              </button>
              <div className="language-dropdown hidden absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-32 py-1 z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''} hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>

            <Link to="/account" className="p-2">
              <User className="h-5 w-5" />
            </Link>

            <Link to="/cart" className="p-2 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-coral text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 absolute w-full shadow-lg py-2 z-50 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-3 py-2">
            <Link to="/" className="py-2 border-b dark:border-gray-700" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
            <Link to="/shop" className="py-2 border-b dark:border-gray-700" onClick={() => setIsMenuOpen(false)}>{t('shop')}</Link>
            <Link to="/collections" className="py-2 border-b dark:border-gray-700" onClick={() => setIsMenuOpen(false)}>{t('collections')}</Link>
            <Link to="/about" className="py-2 border-b dark:border-gray-700" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
            <Link to="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
