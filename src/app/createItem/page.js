"use client";

import  { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CreateItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a description");
      return;
    }

    if (price <= 0 || price === "") {
      alert("Please enter a valid price 0 or higher");
      return;
    }



    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Nice! Your item is now live");
      setName("");
      setDescription("");
      setPrice("");
      setIsSubmitting(false);
    }, 1000);
  };



  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-semibold text-black mb-6">
            List Your Item
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black text-lg"
                placeholder="name"
              />
            </div>

            <div>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black text-lg"
                placeholder="description"
              />
            </div>

            <div>
              <input
                type="number"
                value={price}
                min="0"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black text-lg"
                placeholder="price"
              />
            </div>


            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded text-lg font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 focus:outline-none'
                }`}
              >
                {isSubmitting ? 'Posting' : 'Post Item'}
              </button>
            </div>
          </form>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-black text-center">
              💡 Add more fields as needed
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
