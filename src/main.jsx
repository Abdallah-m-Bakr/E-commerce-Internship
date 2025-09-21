import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n.jsx' // translation file
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import store from './redux/stor.js'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ShopProvider } from "./context/ShopContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </StrictMode>,
);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
// )
