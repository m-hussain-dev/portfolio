import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
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
            <div className="flex space-x-5">
              <Link
                href="https://github.com/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <i className="fab fa-github text-2xl"></i>
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <i className="fab fa-twitter text-2xl"></i>
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
