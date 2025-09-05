import React from "react";
import Link from "next/link";

const Checkout = () => {
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 1 },
    { id: 3, name: "Coffee Maker", price: 89.99, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        {/* Checkout Form */}
        <div>
          <h2 style={{ margin: "0 0 2rem 0" }}>Checkout</h2>
          
          {/* Shipping Information */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: "0 0 1rem 0" }}>Shipping Information</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <input 
                type="text" 
                placeholder="First Name" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px", marginBottom: "1rem" }}
            />
            <input 
              type="text" 
              placeholder="Address" 
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px", marginBottom: "1rem" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              <input 
                type="text" 
                placeholder="City" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
              <input 
                type="text" 
                placeholder="State" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
              <input 
                type="text" 
                placeholder="ZIP Code" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
            </div>
          </div>

          {/* Payment Information */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: "0 0 1rem 0" }}>Payment Information</h3>
            <input 
              type="text" 
              placeholder="Card Number" 
              style={{ width: "100%", padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px", marginBottom: "1rem" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <input 
                type="text" 
                placeholder="Expiry Date" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
              <input 
                type="text" 
                placeholder="CVV" 
                style={{ padding: "0.75rem", border: "1px solid #ddd", borderRadius: "4px" }}
              />
            </div>
          </div>

          {/* Place Order Button */}
          <Link href="/" style={{ 
            display: "block",
            width: "100%", 
            background: "#333", 
            color: "white", 
            border: "none", 
            padding: "1rem", 
            cursor: "pointer",
            fontSize: "1.1rem",
            fontWeight: "bold",
            textDecoration: "none",
            textAlign: "center",
            borderRadius: "4px"
          }}>
            Place Order
          </Link>
        </div>

        {/* Order Summary */}
        <div>
          <h2 style={{ margin: "0 0 2rem 0" }}>Order Summary</h2>
          
          {/* Cart Items */}
          <div style={{ marginBottom: "2rem" }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                padding: "1rem 0", 
                borderBottom: "1px solid #eee" 
              }}>
                <div>
                  <p style={{ margin: "0 0 0.25rem 0", fontWeight: "bold" }}>{item.name}</p>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Qty: {item.quantity}</p>
                </div>
                <p style={{ margin: 0, fontWeight: "bold" }}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Order Totals */}
          <div style={{ borderTop: "1px solid #ddd", paddingTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              paddingTop: "1rem", 
              borderTop: "1px solid #ddd",
              fontSize: "1.2rem",
              fontWeight: "bold"
            }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
