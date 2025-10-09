"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error subscribing to newsletter");
      }

      setMessage("¡Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Error subscribing to newsletter"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-surface p-4 md:p-6 rounded-lg border border-gray-200 dark:border-dark-border">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-dark-text">
        Subscribe to our newsletter!
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-3 md:px-4 py-2 rounded bg-white dark:bg-dark-surfaceHover text-black dark:text-dark-text placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-sm md:text-base border border-gray-300 dark:border-dark-border"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto mt-3 inline-flex items-center justify-center gap-2 border-black dark:border-white border-2 bg-blue-600 dark:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 font-bold transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        {message && (
          <p className="mt-3 text-sm text-gray-700 dark:text-dark-textSecondary">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
