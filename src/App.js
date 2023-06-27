import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (item) => {
    setCartCounter(cartCounter + 1);
    const newCartItems = cartItems.concat(item);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <Navigation cartCounter={cartCounter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop setCartCounter={handleCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
