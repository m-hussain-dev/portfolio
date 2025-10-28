"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-12 ">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center items-start text-start">
        {/* Animated Intro Text */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Hello, I’m <span className="text-blue-600">Mehdi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-white max-w-xl"
        >
          A passionate Frontend Developer skilled in React, Next.js, and modern
          web design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex space-x-4"
        >
          <Link
            href="/Mehdi_Hussain_CV.pdf"
            target="_blank"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Download CV
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex justify-center md:justify-end"
      >
        <Image
          src="/profile.jpg" // 👈 place your image in public/profile.png
          alt="Mehdi Profile"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}
