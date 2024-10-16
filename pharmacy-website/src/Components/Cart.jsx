// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="cart-content">
          {/* Cart Items Table */}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-product">
                      <img src={item.img} alt={item.name} className="cart-product-image" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="summary-details">
              <p>Subtotal: ₹{calculateTotal()}</p>
              <p>Taxes (5%): ₹{(calculateTotal() * 0.05).toFixed(2)}</p>
              <h3>Total: ₹{(calculateTotal() * 1.05).toFixed(2)}</h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
