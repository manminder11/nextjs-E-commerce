import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPage from "@/app/product/[id]/page";
import ProductsPage from "@/app/products/page";
import SideBar from "@/components/SideBar";

export default function Homepage() {
  return (
    <div className="p-2 bg-white w-full h-full">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-5 gap-4 my-4">
        <div className="md:col-span-1">
          <SideBar />
        </div>
        <section className="md:col-span-4">
          <ProductsPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}
