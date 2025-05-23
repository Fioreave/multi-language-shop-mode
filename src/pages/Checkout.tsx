
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "sonner";

const Checkout = () => {
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'bizum'>('bank');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! Check your email for details.");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-8 text-center">{t('checkout')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Contact Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                />
              </div>
              
              <h2 className="text-lg font-medium mt-8 mb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm mb-1">Address</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Zip Code</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm mb-1">Phone</label>
                <input 
                  type="tel" 
                  required
                  className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2"
                />
              </div>
              
              <h2 className="text-lg font-medium mt-8 mb-4">Payment Method</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-brand-coral hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setPaymentMethod('bank')}
                >
                  <input 
                    type="radio" 
                    name="payment" 
                    id="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <label htmlFor="bank" className="cursor-pointer flex-grow">
                    <span className="font-medium">{t('bankTransfer')}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Pay by bank transfer to our account</p>
                  </label>
                </div>
                <div className="flex items-center gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-brand-coral hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setPaymentMethod('bizum')}
                >
                  <input 
                    type="radio" 
                    name="payment" 
                    id="bizum"
                    checked={paymentMethod === 'bizum'}
                    onChange={() => setPaymentMethod('bizum')}
                  />
                  <label htmlFor="bizum" className="cursor-pointer flex-grow">
                    <span className="font-medium">{t('bizum')}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Fast payment directly from your mobile</p>
                  </label>
                </div>
              </div>
              
              {paymentMethod === 'bank' && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="text-sm mb-2">Please make a transfer to the following account:</p>
                  <p className="text-sm font-medium">Bank: Example Bank</p>
                  <p className="text-sm font-medium">IBAN: ES91 2100 0418 4502 0005 1332</p>
                  <p className="text-sm font-medium">Recipient: Your Brand Name</p>
                  <p className="text-sm mt-2">Please include your order number in the transfer description.</p>
                </div>
              )}
              
              {paymentMethod === 'bizum' && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="text-sm mb-2">Phone number for Bizum payment:</p>
                  <p className="text-sm font-medium">+34 600 000 000</p>
                  <p className="text-sm mt-2">You'll receive Bizum payment instructions after placing your order.</p>
                </div>
              )}
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-3 mt-8 hover:bg-gray-800 transition-colors"
              >
                {t('checkout')}
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img 
                    src="https://source.unsplash.com/random/150x150/?fashion,top" 
                    alt="Classic Top" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Classic Top</h3>
                    <p>$45.99</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Black · Qty: 1</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img 
                    src="https://source.unsplash.com/random/150x150/?sweater" 
                    alt="Oversized Sweater" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Oversized Sweater</h3>
                    <p>$64.99</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Beige · Qty: 1</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$110.98</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>$4.99</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-medium">
                <p>Total</p>
                <p>$115.97</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
