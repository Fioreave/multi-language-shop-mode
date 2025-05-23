
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter */}
        <div className="mb-12 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl mb-2 font-medium">{t('subscribe')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('joinNewsletter')}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
              />
              <button className="bg-brand-olive hover:bg-opacity-90 text-white px-6 py-2 rounded-md">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-medium text-lg mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">{t('about')}</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Careers</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Sustainability</Link></li>
              <li><Link to="/press" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">{t('footer.shop')}</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">{t('shop')}</Link></li>
              <li><Link to="/collections" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">{t('collections')}</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">{t('newArrivals')}</Link></li>
              <li><Link to="/sale" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">{t('contact')}</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Privacy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Cookies</Link></li>
              <li><Link to="/accessibility" className="text-gray-600 dark:text-gray-300 hover:text-brand-coral dark:hover:text-brand-coral">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('footer.copyright')}</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-coral dark:hover:text-brand-coral">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-coral dark:hover:text-brand-coral">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-coral dark:hover:text-brand-coral">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
