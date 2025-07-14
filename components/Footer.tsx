import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-dark-surface text-black dark:text-dark-text py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Sección de Sitemap */}
          <div className="text-center sm:text-left col-span-1">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4">
              Sitemap
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/consultations"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Consultations
                </Link>
              </li>
              <li>
                <Link
                  href="/tutoring"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Tutoring
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Conferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="text-center sm:text-left col-span-1">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4">
              Follow me
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link
                  href="https://x.com/RangeTester"
                  target="_blank"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/FreeRangeTesters"
                  target="_blank"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/patricio-m-690b3729/"
                  target="_blank"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Newsletter */}
          <div className="text-center sm:text-left col-span-2 md:col-span-2">
            <h2 className="text-base md:text-xl font-bold mb-3 md:mb-4">
              Be on the loop!
            </h2>
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-300 dark:border-purple-600 text-center text-sm md:text-base">
          <p>
            © {new Date().getFullYear()} Patricio Miner. Made with ❤️ in 🇳🇿 by
            an imported 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
