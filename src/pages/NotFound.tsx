
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors inline-block"
        >
          {t("home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
