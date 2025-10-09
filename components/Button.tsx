import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "success";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  external = false,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-white dark:bg-gray-800 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]",
    secondary:
      "bg-white dark:bg-gray-700 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(96,165,250,0.8)]",
    accent:
      "bg-amber-500 dark:bg-amber-600 hover:shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,1)]",
    success:
      "bg-green-500 dark:bg-green-600 hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(22,163,74,0.8)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    border-black dark:border-white border-2 
    font-bold text-black dark:text-white 
    transition-all duration-300 
    hover:-translate-y-2 hover:-translate-x-2 
    active:translate-x-0 active:translate-y-0 active:shadow-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  `
    .trim()
    .replace(/\s+/g, " ");

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
        {external && (
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
