import React from 'react';

const CartModal = ({ cartItems, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg z-10">
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>
                    <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl mb-4">Shopping Cart</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center border-b border-gray-200 py-4">
                        <img src={item.thumbnail} alt={item.title} className="w-12 h-12 mr-4" />
                        <div>
                            <p className="text-lg font-medium">{item.title}</p>
                            <p className="text-gray-500">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartModal;
