import React from "react";
import Link from "next/link";

const portfolios = [
  {
    id: "1",
    title: "Personal Portfolio",
    summary: "A modern portfolio website to showcase my work and skills.",
  },
  {
    id: "2",
    title: "E-commerce Store",
    summary: "A full-featured e-commerce web app with cart and checkout.",
  },
  {
    id: "3",
    title: "Admin Dashboard",
    summary: "A dashboard for managing users, analytics, and content.",
  },
];

const PortfolioPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {portfolios.map((item) => (
          <div key={item.id} className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">
              {item.title}
            </h2>
            <p className="mb-4">{item.summary}</p>
            <Link
              href={`/portfolio/${item.id}`}
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

export default PortfolioPage;
