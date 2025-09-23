// import { createContext, useState, useEffect } from "react";

// export const HomeContext = createContext();   // ✅ exported here

// export function HomeProvider({ children }) {
//   const [homeProducts, setHomeProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setHomeProducts(data.products))
//       .catch((err) => console.error("Error fetching home products:", err));
//   }, []);

//   return (
//     <HomeContext.Provider value={{ homeProducts }}>
//       {children}
//     </HomeContext.Provider>
//   );
// }
