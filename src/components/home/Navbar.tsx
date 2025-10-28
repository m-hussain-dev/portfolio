"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md fixed w-full top-4left-0 z-50">
      <div className="max-w-3xl  mx-auto px-6   sm:px-8 lg:px-12">
        <div className="flex justify-center rounded-full border-b   items-center h-16  bg-black">
          {/* Logo / Name */}
          {/* <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-600 transition"
          >
            Mehdi.dev
          </Link> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8   text-white font-serif text-lg ">
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
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
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
      )} */}
      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-start space-y-6 py-10 px-6  font-medium">
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
