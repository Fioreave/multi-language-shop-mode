
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

// Dummy cart data for demonstration
const initialCartItems = [
  {
    id: 1,
    name: "Classic Top",
    price: 45.99,
    quantity: 1,
    image: "https://source.unsplash.com/random/150x150/?fashion,top",
    color: "Black"
  },
  {
    id: 5,
    name: "Oversized Sweater",
    price: 64.99,
    quantity: 1,
    image: "https://source.unsplash.com/random/150x150/?sweater",
    color: "Beige"
  }
];

const Cart = () => {
  const { t } = useLanguage();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8 text-center">{t('cart')}</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.color}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex border border-gray-300 dark:border-gray-600">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-sm"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-x border-gray-300 dark:border-gray-600">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-sm"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-sm text-gray-600 dark:text-gray-300 hover:text-brand-coral"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-medium">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              
              <Link 
                to="/checkout"
                className="block w-full text-center bg-black text-white py-3 hover:bg-gray-800 transition-colors"
              >
                {t('checkout')}
              </Link>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-medium">We Accept</h3>
                <div className="flex gap-4">
                  <div className="p-2 border border-gray-200 dark:border-gray-700 rounded flex items-center justify-center text-sm">
                    {t('bankTransfer')}
                  </div>
                  <div className="p-2 border border-gray-200 dark:border-gray-700 rounded flex items-center justify-center text-sm">
                    {t('bizum')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl mb-6">Your cart is empty</p>
          <Link 
            to="/shop"
            className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            {t('shop')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
