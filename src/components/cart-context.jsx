import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity) => {
    const totalPrice = product.price * quantity;
    setTotalPrice(prevTotal => prevTotal + totalPrice);
    setCartItems([...cartItems, { ...product, quantity, totalPrice }]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


