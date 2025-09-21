import React, { createContext, useReducer, useEffect } from "react";

const ShopContext = createContext();

const initialState = {
  products: [],
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 📌 جلب المنتجات من DummyJSON API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log("API Response:", data); // 🔍 تشوف شكل البيانات في الـ console
        dispatch({ type: "SET_PRODUCTS", payload: data.products }); // ✅ ناخد الـ array
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext