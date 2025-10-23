import React from "react";
import { notFound } from "next/navigation";

type Portfolio = {
  title: string;
  summary: string;
  details: string[];
};

const portfolioData: Record<string, Portfolio> = {
  "1": {
    title: "Personal Portfolio",
    summary: "A modern portfolio website to showcase my work and skills.",
    details: [
      "Built with Next.js and Tailwind CSS",
      "Responsive and accessible design",
      "Animated sections with Framer Motion",
      "SEO optimized",
    ],
  },
  "2": {
    title: "E-commerce Store",
    summary: "A full-featured e-commerce web app with cart and checkout.",
    details: [
      "Product listing and filtering",
      "Shopping cart and checkout flow",
      "User authentication",
      "Order management dashboard",
    ],
  },
  "3": {
    title: "Admin Dashboard",
    summary: "A dashboard for managing users, analytics, and content.",
    details: [
      "User management CRUD",
      "Analytics charts",
      "Content moderation tools",
      "Dark/light mode toggle",
    ],
  },
};

interface PortfolioDetailProps {
  params: { id: string };
}

// ✅ Keep this synchronous (no async needed)
const PortfolioDetailPage = ({ params }: PortfolioDetailProps) => {
  const item = portfolioData[params.id];

  if (!item) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">{item.title}</h1>
      <p className="mb-6 text-lg">{item.summary}</p>
      <h2 className="text-2xl font-semibold mb-3">Project Details</h2>
      <ul className="list-disc list-inside mb-8 space-y-1">
        {item.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </main>
  );
};

export default PortfolioDetailPage;
