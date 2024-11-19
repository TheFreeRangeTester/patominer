import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mi Sitio Web",
  description: "Descripción de mi sitio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-100`}
      >
        <div className="min-h-screen flex flex-col">
          <nav className="bg-white/70 backdrop-blur-sm border-b border-green-100">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-black">
                  Pato Miner
                </Link>
                <div className="space-x-4">
                  <Link
                    href="https://discord.gg/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 group"
                  >
                    <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black">
                      Community
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-red-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"></span>
                  </Link>

                  <Link href="/about" className="relative px-4 py-2 group">
                    <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black">
                      About me
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-red-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"></span>
                  </Link>

                  <Link href="/workshops" className="relative px-4 py-2 group">
                    <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black">
                      Workshops
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-red-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"></span>
                  </Link>

                  <Link href="/courses" className="relative px-4 py-2 group">
                    <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black">
                      Courses
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-red-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"></span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
