import React from 'react';
import { useCart } from './cart-context';

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-10 max-h-[80vh] w-[600px] overflow-y-auto">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl mb-4">Shopping Cart ({totalItems} Items)</h2>
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
            <img src={item.thumbnail} alt={item.title} className="w-32 h-32 mr-4 object-cover" />
            <div className="mb-6 flex flex-col">
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-gray-500">${item.price} x {item.quantity}</p>
              <button className="self-end bg-blue-300 p-1 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="text-lg font-medium mt-4">Total: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartModal;
