import React from "react";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
  },
  {
    id: "2",
    name: "E-commerce UI Kit",
    description: "Reusable React components for e-commerce projects.",
  },
  {
    id: "3",
    name: "Dashboard Template",
    description:
      "A beautiful admin dashboard template with charts and analytics.",
  },
];

const ProductPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">
              {product.name}
            </h2>
            <p className="mb-4">{product.description}</p>
            <Link
              href={`/product/${product.id}`}
              className="text-blue-400 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
