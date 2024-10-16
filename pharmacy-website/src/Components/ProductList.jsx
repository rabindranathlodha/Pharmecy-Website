// src/components/ProductList.js
import React, { useState } from 'react';
import ProductItem from './ProductItem';

const initialProducts = [
  { id: 1, name: 'Paracetamol', price: 50, img: "C:\Users\shubh\Downloads\paracetamol (1) (2) (1).jpg"},
  { id: 2, name: 'Ibuprofen', price: 40, img: "C:\Users\shubh\Downloads\ibuprofen.jpg" },
  { id: 3, name: 'Aspirin', price: 35, img: "C:\Users\shubh\Downloads\Aspirin.jpg"},
  { id: 4, name: 'Amoxicillin', price: 20, img: "C:\Users\shubh\Downloads\amoxilin.jpeg" },
];

function ProductList({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MedBrowser</h1>
          <p>Your trusted source for affordable and branded medicines.</p>
          <input
            type="text"
            placeholder="Search for a medicine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="search-results">
          <h2>Search Results</h2>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      {!searchQuery && (
        <section className="featured-products">
          <h2>Featured Medicines</h2>
          <div className="product-list">
            {initialProducts.slice(0, 4).map((product) => (
              <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductList;
