import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Features Section */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-3 text-blue-500">
              Modern UI/UX
            </h3>
            <p>
              Beautiful, responsive, and accessible interfaces using the latest
              web technologies.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-3 text-blue-500">
              Performance
            </h3>
            <p>
              Optimized for speed and SEO, ensuring fast load times and great
              user experience.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-3 text-blue-500">
              Next.js & React
            </h3>
            <p>
              Built with industry-standard frameworks for scalability and
              maintainability.
            </p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your next project?
        </h2>
        <p className="mb-8 text-lg">Let’s build something amazing together.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-blue-100 transition"
        >
          Contact Me
        </a>
      </section>
    </>
  );
};

export default Homepage;
