// src/app/products/page.tsx
"use client";

import ProductCard from "../../components/ProductCard";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-24"> {/* A margem superior pt-24 garante que o conteúdo fique abaixo do header fixo */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
