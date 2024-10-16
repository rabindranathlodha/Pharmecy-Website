// src/components/ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);

    // Hide the notification after 10 seconds (10000 milliseconds)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="product-item">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>

      {/* Notification Section */}
      {showNotification && (
        <div className="cart-notification">
          <p>Added to Cart</p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
