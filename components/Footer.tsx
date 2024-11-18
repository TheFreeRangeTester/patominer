import Link from "next/link";
import Newsletter from "./Newsletter"; // Importa el componente Newsletter

export default function Footer() {
  return (
    <footer className="bg-green-200 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección de Sitemap */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/workshops">Workshops</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/consultations">Consultations</Link>
              </li>
              <li>
                <Link href="/tutoring">Tutoring</Link>
              </li>
              <li>
                <Link href="/talks">Conferences</Link>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://facebook.com" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="mb-2">Email: contacto@ejemplo.com</p>
            <p>Teléfono: +123 456 7890</p>
          </div>

          {/* Sección de Newsletter en el Footer */}
          <div>
            <h2 className="text-xl font-bold mb-4">Mantente en contacto</h2>
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-300 text-center text-green-800">
          <p>
            © {new Date().getFullYear()} Patricio Miner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
