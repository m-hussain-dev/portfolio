"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Mehdi.dev</h2>
            <p className="mt-3 text-gray-400">
              Building modern, fast, and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://github.com/m-hussain-dev"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <i className="fab fa-github text-2xl"> GitHub</i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mehdi-hussain-04b537221/"
                target="_blank"
                className="hover:text-blue-400 transition "
              >
                <i className="fab fa-linkedin text-2xl">LinkedIn</i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mehdi.dev | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
