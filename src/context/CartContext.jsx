// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🟢 Add product
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // 🟢 Remove product
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🟢 Change quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
