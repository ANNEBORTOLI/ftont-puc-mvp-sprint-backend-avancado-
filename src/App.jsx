import { Routes, Route } from "react-router-dom";
import { ShoppingListProvider } from "./contexts/ShoppingListContext";

import { Home } from "./pages/Home/Home";
import { Admin } from "./pages/Admin";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";

import "./global.css";

export function App() {
  return (
    <ShoppingListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingListProvider>
  );
}
