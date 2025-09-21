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
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
}
// .then((res) => console.log(res.json())
export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

    // fetch("https://fakestoreapi.com/products")


  // 📌 جلب المنتجات من Fake Store API
useEffect(() => {
  fetch("http://localhost:5000/products") // بدل الفيك ستور
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "SET_PRODUCTS", payload: data });
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}
export default ShopContext;