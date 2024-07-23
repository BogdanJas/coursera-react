import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems((prevItems) => [...prevItems, plant]);
  };

  const incrementItem = (plantId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (plantId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === plantId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (plantId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== plantId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementItem, decrementItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
