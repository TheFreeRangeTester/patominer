"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeScript } from "./theme-script";

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

function Navigation({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  return (
    <nav className="bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 dark:text-dark-text flex items-center gap-2"
            >
              <img
                src="/images/logo.png"
                alt="Pato Miner Logo"
                className="h-16 w-auto"
              />
              <span>Pato Miner</span>
            </Link>
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-slate-900 dark:text-dark-text"
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4 md:items-center w-full md:w-auto justify-end">
            <NavLink
              href="https://discord.gg/Gz6ARafD"
              text="Community"
              external
              className="text-slate-800 dark:text-dark-text"
            />
            <NavLink
              href="/about"
              text="About me"
              className="text-slate-800 dark:text-dark-text"
            />
            <NavLink
              href="/workshops"
              text="Workshops"
              className="text-slate-800 dark:text-dark-text"
            />
            <NavLink
              href="/courses"
              text="Course"
              className="text-slate-800 dark:text-dark-text"
            />
            <div className="ml-4">
              <ThemeToggle />
            </div>
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
                href="https://discord.gg/Gz6ARafD"
                text="Community"
                external
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 dark:text-dark-text hover:bg-warning"
              />
              <MobileNavLink
                href="/about"
                text="About me"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 dark:text-dark-text hover:bg-warning"
              />
              <MobileNavLink
                href="/workshops"
                text="Workshops"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 dark:text-dark-text hover:bg-warning"
              />
              <MobileNavLink
                href="/courses"
                text="Course"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 dark:text-dark-text hover:bg-warning"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppContent({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider>
          <AppContent>{children}</AppContent>
        </ThemeProvider>
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
      <span className="relative z-10 font-medium text-lg transition-colors duration-300 ease-in-out group-hover:text-white text-slate-800 dark:text-dark-text">
        {text}
      </span>
      <span className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-orange-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-lg"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left bg-red-200/30 dark:bg-cyan-400/5 dark:blur-sm group-hover:blur-lg rounded-lg z-0"></span>
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
      className={`block px-4 py-3 text-slate-800 dark:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-surfaceHover rounded-lg transition-all duration-300 text-right ${
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
