import React from "react";
import { notFound } from "next/navigation";

type Product = {
  name: string;
  description: string;
  features: string[];
};

const productData: { [key: string]: Product } = {
  "1": {
    name: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast performance",
      "Easy customization",
    ],
  },
  "2": {
    name: "E-commerce UI Kit",
    description: "Reusable React components for e-commerce projects.",
    features: [
      "Product cards",
      "Shopping cart",
      "Checkout flow",
      "Order history",
    ],
  },
  "3": {
    name: "Dashboard Template",
    description:
      "A beautiful admin dashboard template with charts and analytics.",
    features: [
      "Analytics charts",
      "User management",
      "Dark mode",
      "Custom widgets",
    ],
  },
};

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailProps) => {
  const product = productData[params.id];
  if (!product) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">{product.name}</h1>
      <p className="mb-6 text-lg">{product.description}</p>
      <h2 className="text-2xl font-semibold mb-3">Features</h2>
      <ul className="list-disc list-inside mb-8">
        {product.features.map((feature: string, idx: number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </main>
  );
};

export default ProductDetailPage;
