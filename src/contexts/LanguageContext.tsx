
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'ca' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "home": "Home",
    "shop": "Shop",
    "collections": "Collections",
    "about": "About",
    "contact": "Contact",
    "language": "Language",
    "theme": "Theme",
    "light": "Light",
    "dark": "Dark",
    "search": "Search",
    "shopNow": "Shop Now",
    "newArrivals": "New Arrivals",
    "featuredProducts": "Featured Products",
    "trending": "Trending Now",
    "cart": "Cart",
    "account": "Account",
    "bankTransfer": "Bank Transfer",
    "bizum": "Bizum",
    "checkout": "Checkout",
    "viewAll": "View All",
    "addToCart": "Add to Cart",
    "productsByColor": "Shop by Color",
    "subscribe": "Subscribe",
    "neverMissOut": "Never miss out",
    "joinNewsletter": "Join our newsletter for exclusive updates and offers",
    "emailPlaceholder": "Enter your email",
    "footer.company": "Company",
    "footer.shop": "Shop",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 All rights reserved",
  },
  es: {
    "home": "Inicio",
    "shop": "Tienda",
    "collections": "Colecciones",
    "about": "Nosotros",
    "contact": "Contacto",
    "language": "Idioma",
    "theme": "Tema",
    "light": "Claro",
    "dark": "Oscuro",
    "search": "Buscar",
    "shopNow": "Comprar Ahora",
    "newArrivals": "Novedades",
    "featuredProducts": "Productos Destacados",
    "trending": "Tendencias",
    "cart": "Carrito",
    "account": "Cuenta",
    "bankTransfer": "Transferencia Bancaria",
    "bizum": "Bizum",
    "checkout": "Finalizar Compra",
    "viewAll": "Ver Todo",
    "addToCart": "Añadir al Carrito",
    "productsByColor": "Comprar por Color",
    "subscribe": "Suscribirse",
    "neverMissOut": "No te pierdas nada",
    "joinNewsletter": "Únete a nuestro boletín para actualizaciones y ofertas exclusivas",
    "emailPlaceholder": "Introduce tu email",
    "footer.company": "Empresa",
    "footer.shop": "Tienda",
    "footer.support": "Soporte",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 Todos los derechos reservados",
  },
  ca: {
    "home": "Inici",
    "shop": "Botiga",
    "collections": "Col·leccions",
    "about": "Nosaltres",
    "contact": "Contacte",
    "language": "Idioma",
    "theme": "Tema",
    "light": "Clar",
    "dark": "Fosc",
    "search": "Cercar",
    "shopNow": "Compra Ara",
    "newArrivals": "Novetats",
    "featuredProducts": "Productes Destacats",
    "trending": "Tendències",
    "cart": "Cistella",
    "account": "Compte",
    "bankTransfer": "Transferència Bancària",
    "bizum": "Bizum",
    "checkout": "Finalitzar Compra",
    "viewAll": "Veure Tot",
    "addToCart": "Afegir a la Cistella",
    "productsByColor": "Comprar per Color",
    "subscribe": "Subscriure's",
    "neverMissOut": "No et perdis res",
    "joinNewsletter": "Uneix-te al nostre butlletí per a actualitzacions i ofertes exclusives",
    "emailPlaceholder": "Introdueix el teu email",
    "footer.company": "Empresa",
    "footer.shop": "Botiga",
    "footer.support": "Suport",
    "footer.legal": "Legal",
    "footer.copyright": "© 2025 Tots els drets reservats",
  },
  fr: {
    "home": "Accueil",
    "shop": "Boutique",
    "collections": "Collections",
    "about": "À Propos",
    "contact": "Contact",
    "language": "Langue",
    "theme": "Thème",
    "light": "Clair",
    "dark": "Sombre",
    "search": "Rechercher",
    "shopNow": "Acheter Maintenant",
    "newArrivals": "Nouveautés",
    "featuredProducts": "Produits en Vedette",
    "trending": "Tendances",
    "cart": "Panier",
    "account": "Compte",
    "bankTransfer": "Virement Bancaire",
    "bizum": "Bizum",
    "checkout": "Finaliser l'Achat",
    "viewAll": "Voir Tout",
    "addToCart": "Ajouter au Panier",
    "productsByColor": "Acheter par Couleur",
    "subscribe": "S'abonner",
    "neverMissOut": "Ne manquez rien",
    "joinNewsletter": "Rejoignez notre newsletter pour des mises à jour et des offres exclusives",
    "emailPlaceholder": "Entrez votre email",
    "footer.company": "Entreprise",
    "footer.shop": "Boutique",
    "footer.support": "Support",
    "footer.legal": "Mentions Légales",
    "footer.copyright": "© 2025 Tous droits réservés",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['es', 'en', 'ca', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const langData = translations[language];
    return langData[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
