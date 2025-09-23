import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n.jsx';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

// 🟢 استدعاء الكونتكست
import { ProductProvider } from './context/ProductContext.jsx';
import { CartProvider } from './context/CartContext.jsx'; // ✅ ضيف ده

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>   {/* ✅ لف CartProvider حوالين App */}
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
);
