import React from 'react';
import { useCart } from './cart-context';

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const handleProceedToCheckout = () => {
    window.location.href = '/';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg w-[500px] max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold">Shopping Cart ({totalItems} Items)</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 mr-3 object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 focus:outline-none hover:text-red-600">Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="mt-6">
            <button onClick={handleProceedToCheckout} className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
