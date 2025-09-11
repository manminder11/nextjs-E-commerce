"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('userListings');
    if (savedItems) {
      setListings(JSON.parse(savedItems));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded p-4">
          <h1 className="text-xl font-semibold text-black mb-4">
            My Listings
          </h1>
          
          {listings.length === 0 ? (
            <p className="text-black">No items yet</p>
          ) : (
            <div className="space-y-3">
              {listings.map((item, index) => (
                <div key={index} className="border rounded p-3">
                  <p className="text-black font-medium">{item.name}</p>
                  <p className="text-black">${item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
