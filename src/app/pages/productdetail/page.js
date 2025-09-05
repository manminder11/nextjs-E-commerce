import React from "react";
import Link from "next/link";

const ProductDetail = () => {
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

      {/* Product Detail */}
      <main>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
          {/* Product Image */}
          <div>
            <div style={{ 
              height: "400px", 
              background: "#f5f5f5", 
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: "1.2rem"
            }}>
              Product Image
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 style={{ margin: "0 0 1rem 0", fontSize: "2rem" }}>Product Name</h2>
            <p style={{ color: "#666", marginBottom: "1rem" }}>Category: Electronics</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>$99.99</p>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>Description</h3>
              <p style={{ color: "#666", lineHeight: "1.5" }}>
                This is a high-quality product that offers great value for money. 
                Perfect for everyday use with excellent durability and performance.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>Features</h3>
              <ul style={{ color: "#666", paddingLeft: "1.5rem" }}>
                <li>High quality materials</li>
                <li>Easy to use</li>
                <li>Long lasting</li>
                <li>Great value</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Link href="/cart" style={{ 
                display: "inline-block",
                background: "#333", 
                color: "white", 
                border: "none", 
                padding: "0.75rem 1.5rem", 
                cursor: "pointer",
                fontSize: "1rem",
                textDecoration: "none",
                borderRadius: "4px"
              }}>
                Add to Cart
              </Link>
              <Link href="/checkout" style={{ 
                display: "inline-block",
                background: "white", 
                color: "#333", 
                border: "1px solid #333", 
                padding: "0.75rem 1.5rem", 
                cursor: "pointer",
                fontSize: "1rem",
                textDecoration: "none",
                borderRadius: "4px"
              }}>
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>Related Products</h3>
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
                <h4 style={{ margin: "0 0 0.5rem 0" }}>Item {item}</h4>
                <p style={{ margin: "0 0 1rem 0", color: "#666" }}>$29.99</p>
                <Link href={`/product/${item}`} style={{ 
                  display: "inline-block",
                  background: "#333", 
                  color: "white", 
                  border: "none", 
                  padding: "0.5rem 1rem", 
                  cursor: "pointer",
                  textDecoration: "none",
                  borderRadius: "4px"
                }}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
