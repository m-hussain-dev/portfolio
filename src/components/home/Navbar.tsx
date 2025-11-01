"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black md:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white font-serif hover:text-blue-600 transition"
          >
            Mehdi.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-white font-serif text-md">
            <Link
              href="/"
              className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 hover:scale-110 transition-transform duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Overlay (click outside sidebar to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900/90 to-black/80 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="flex flex-col items-start space-y-6 py-8 px-6 font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
