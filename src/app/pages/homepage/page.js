import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
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

      {/* Main Content */}
      <main>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Welcome to our store</h2>
          <p style={{ color: "#666", marginBottom: "2rem" }}>Find everything you need in one place</p>
                  <Link href="/products" style={{ 
          display: "inline-block", 
          padding: "0.75rem 1.5rem", 
          background: "#333", 
          color: "white", 
          textDecoration: "none",
          borderRadius: "4px"
        }}>
          Browse Products
        </Link>
        </div>

        {/* Products */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{ 
              border: "1px solid #ddd", 
              padding: "1rem",
              textAlign: "center"
            }}>
              <div style={{ 
                height: "150px", 
                background: "#f5f5f5", 
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999"
              }}>
                Product {item}
              </div>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>Item {item}</h3>
              <p style={{ margin: "0 0 1rem 0", color: "#666" }}>$29.99</p>
              <Link href="/cart" style={{ 
                display: "inline-block",
                background: "#333", 
                color: "white", 
                border: "none", 
                padding: "0.5rem 1rem", 
                cursor: "pointer",
                textDecoration: "none",
                borderRadius: "4px"
              }}>
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
