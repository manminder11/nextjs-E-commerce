import React from "react";
import Link from "next/link";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1, image: "Headphones" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 1, image: "Smart Watch" },
    { id: 3, name: "Coffee Maker", price: 89.99, quantity: 2, image: "Coffee Maker" },
    { id: 4, name: "Running Shoes", price: 129.99, quantity: 1, image: "Running Shoes" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
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

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
        {/* Cart Items */}
        <div>
          <h2 style={{ margin: "0 0 2rem 0" }}>Shopping Cart ({cartItems.length} items)</h2>
          
          {cartItems.map((item) => (
            <div key={item.id} style={{ 
              display: "flex", 
              alignItems: "center", 
              padding: "1.5rem 0", 
              borderBottom: "1px solid #eee",
              gap: "1rem"
            }}>
              {/* Product Image */}
              <div style={{ 
                width: "100px", 
                height: "100px", 
                background: "#f5f5f5", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: "0.9rem",
                textAlign: "center",
                flexShrink: 0
              }}>
                {item.image}
              </div>

              {/* Product Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{item.name}</h3>
                <p style={{ margin: "0 0 1rem 0", color: "#666" }}>${item.price.toFixed(2)} each</p>
                
                {/* Quantity Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button style={{ 
                    width: "30px", 
                    height: "30px", 
                    border: "1px solid #ddd", 
                    background: "white", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    -
                  </button>
                  <span style={{ minWidth: "30px", textAlign: "center" }}>{item.quantity}</span>
                  <button style={{ 
                    width: "30px", 
                    height: "30px", 
                    border: "1px solid #ddd", 
                    background: "white", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    +
                  </button>
                </div>
              </div>

              {/* Price and Actions */}
              <div style={{ textAlign: "right", minWidth: "120px" }}>
                <p style={{ margin: "0 0 1rem 0", fontWeight: "bold", fontSize: "1.1rem" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button style={{ 
                  background: "none", 
                  border: "none", 
                  color: "#666", 
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "0.9rem"
                }}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping */}
          <div style={{ marginTop: "2rem" }}>
            <Link href="/products" style={{ 
              display: "inline-block", 
              padding: "0.75rem 1.5rem", 
              background: "white", 
              color: "#333", 
              textDecoration: "none",
              border: "1px solid #333",
              borderRadius: "4px"
            }}>
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 style={{ margin: "0 0 2rem 0" }}>Order Summary</h2>
          
          <div style={{ border: "1px solid #ddd", padding: "1.5rem", borderRadius: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <span>Shipping:</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping === 0 && (
              <p style={{ 
                color: "#28a745", 
                fontSize: "0.9rem", 
                margin: "0 0 1rem 0", 
                textAlign: "center" 
              }}>
                🎉 Free shipping on orders over $100!
              </p>
            )}
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
            
            <Link href="/checkout" style={{ 
              display: "block",
              width: "100%", 
              background: "#333", 
              color: "white", 
              border: "none", 
              padding: "1rem", 
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "4px"
            }}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;