import React from "react";
import Link from "next/link";

const ProductListing = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics" },
    { id: 2, name: "Smart Watch", price: 199.99, category: "Electronics" },
    { id: 3, name: "Coffee Maker", price: 89.99, category: "Home" },
    { id: 4, name: "Running Shoes", price: 129.99, category: "Sports" },
    { id: 5, name: "Laptop Stand", price: 49.99, category: "Office" },
    { id: 6, name: "Bluetooth Speaker", price: 59.99, category: "Electronics" },
    { id: 7, name: "Desk Lamp", price: 39.99, category: "Home" },
    { id: 8, name: "Gym Water Bottle", price: 19.99, category: "Sports" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "2.5rem" }}>ShopEase</h1>
        <p style={{ color: "#666", margin: 0 }}>Simple shopping made easy</p>
      </header>

      {/* Navigation */}
      <nav style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Link href="/" style={{ margin: "0 1rem", textDecoration: "none", color: "#333" }}>Home</Link>
        <Link href="/products" style={{ margin: "0 1rem", textDecoration: "none", color: "#333" }}>Products</Link>
        <Link href="/cart" style={{ margin: "0 1rem", textDecoration: "none", color: "#333" }}>Cart</Link>
      </nav>

      {/* Page Title and Filters */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: "0 0 1rem 0" }}>All Products</h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <select style={{ padding: "0.5rem", border: "1px solid #ddd", borderRadius: "4px" }}>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Home</option>
            <option>Sports</option>
            <option>Office</option>
          </select>
          <select style={{ padding: "0.5rem", border: "1px solid #ddd", borderRadius: "4px" }}>
            <option>Sort by: Price</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name A-Z</option>
            <option>Name Z-A</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            border: "1px solid #ddd", 
            padding: "1rem",
            textAlign: "center"
          }}>
            <div style={{ 
              height: "200px", 
              background: "#f5f5f5", 
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: "1.1rem"
            }}>
              {product.name}
            </div>
            <h3 style={{ margin: "0 0 0.5rem 0" }}>{product.name}</h3>
            <p style={{ margin: "0 0 0.5rem 0", color: "#666", fontSize: "0.9rem" }}>{product.category}</p>
            <p style={{ margin: "0 0 1rem 0", color: "#333", fontWeight: "bold", fontSize: "1.2rem" }}>
              ${product.price}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
              <Link href="/cart" style={{ 
                display: "inline-block",
                background: "#333", 
                color: "white", 
                border: "none", 
                padding: "0.5rem 1rem", 
                cursor: "pointer",
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "4px"
              }}>
                Add to Cart
              </Link>
              <Link href={`/product/${product.id}`} style={{ 
                display: "inline-block",
                background: "white", 
                color: "#333", 
                border: "1px solid #333", 
                padding: "0.5rem 1rem", 
                cursor: "pointer",
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "4px"
              }}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
          <button style={{ 
            padding: "0.5rem 1rem", 
            border: "1px solid #ddd", 
            background: "white", 
            cursor: "pointer"
          }}>
            Previous
          </button>
          <span style={{ padding: "0.5rem 1rem", background: "#333", color: "white" }}>1</span>
          <button style={{ 
            padding: "0.5rem 1rem", 
            border: "1px solid #ddd", 
            background: "white", 
            cursor: "pointer"
          }}>
            2
          </button>
          <button style={{ 
            padding: "0.5rem 1rem", 
            border: "1px solid #ddd", 
            background: "white", 
            cursor: "pointer"
          }}>
            3
          </button>
          <button style={{ 
            padding: "0.5rem 1rem", 
            border: "1px solid #ddd", 
            background: "white", 
            cursor: "pointer"
          }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
