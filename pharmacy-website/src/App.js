 // src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item already in cart, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new item to cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to increase item quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* Homepage Route */}
            <Route
              path="/"
              element={<ProductList addToCart={addToCart} />}
            />
            {/* Cart Route */}
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
