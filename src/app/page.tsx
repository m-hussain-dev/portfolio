"use client";
import React from "react";
import Hero from "@/components/home/Hero";
// import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const Page = () => {
  return (
    <>
      <div className="bg-gradient-to-b py-4 from-black to-blue-950">
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Page;
