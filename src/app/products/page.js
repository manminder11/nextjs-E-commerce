// src/app/products/page.js
"use client";
import Item from "@/components/Item";
import ProductsGrid from "@/components/ProductsGrid";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setErr(e.message || "Error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="p-4">Loading…</div>;
  if (err) return <div className="p-4 text-red-600">{err}</div>;

  return (
    <div className="mx-auto max-w-6xl ">
      <ProductsGrid products={items} />
    </div>
  );
}
