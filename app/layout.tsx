"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <div className="min-h-screen flex flex-col">
          <nav className="bg-white/70 backdrop-blur-sm border-b border-blue-100">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                  <Link href="/" className="text-xl font-bold text-foreground">
                    Pato Miner
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isMenuOpen
                            ? "M6 18L18 6M6 6l12 12"
                            : "M4 6h16M4 12h16m-7 6h7"
                        }
                      />
                    </svg>
                  </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:space-x-4">
                  <NavLink
                    href="https://discord.gg/placeholder"
                    text="Community"
                    external
                    className="text-primary"
                  />
                  <NavLink
                    href="/about"
                    text="About me"
                    className="text-primary"
                  />
                  <NavLink
                    href="/workshops"
                    text="Workshops"
                    className="text-primary"
                  />
                  <NavLink
                    href="/courses"
                    text="Course"
                    className="text-primary"
                  />
                </div>

                {/* Mobile Navigation */}
                <div
                  className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="space-y-2">
                    <MobileNavLink
                      href="https://discord.gg/placeholder"
                      text="Community"
                      external
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:bg-warning"
                    />
                    <MobileNavLink
                      href="/about"
                      text="About me"
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:bg-warning"
                    />
                    <MobileNavLink
                      href="/workshops"
                      text="Workshops"
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:bg-warning"
                    />
                    <MobileNavLink
                      href="/courses"
                      text="Courses"
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:bg-warning"
                    />
                  </div>
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

// Componente para links de navegación desktop
function NavLink({
  href,
  text,
  external = false,
  className,
}: {
  href: string;
  text: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`relative px-4 py-2 group ${className || ""}`}
    >
      <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-black">
        {text}
      </span>
      <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-orange-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 blur-lg group-hover:blur-xl rounded-lg"></span>
    </Link>
  );
}

// Componente para links de navegación mobile
function MobileNavLink({
  href,
  text,
  external = false,
  onClick,
  className,
}: {
  href: string;
  text: string;
  external?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`block px-4 py-3 text-black hover:bg-red-300 rounded-lg transition-all duration-300 text-right ${
        className || ""
      }`}
      onClick={onClick}
    >
      <span className="font-geist-sans text-2xl font-semibold tracking-tight hover:tracking-wide transition-all duration-300">
        {text}
      </span>
    </Link>
  );
}
