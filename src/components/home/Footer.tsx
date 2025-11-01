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
              Turning ideas into interactive, beautiful web experiences with
              code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1">
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
            <div className="flex flex-col space-y-1">
              <Link
                href="https://github.com/m-hussain-dev"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <i className="fab fa-github text-xl"> GitHub</i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mehdi-hussain-04b537221/"
                target="_blank"
                className="hover:text-blue-400 transition "
              >
                <i className="fab fa-linkedin text-xl">LinkedIn</i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <footer className="mt-10 border-t border-gray-700 pt-6 text-gray-400 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 px-4">
            {/* Left */}
            <p>© {new Date().getFullYear()} Mehdi.dev</p>

            {/* Center */}
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white">
                Available for a full-time position
              </span>
            </div>

            {/* Right */}
            <p>
              Made by{" "}
              <span className="text-white font-medium">Mehdi Hussain</span>
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
}
