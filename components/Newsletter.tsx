"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/convertkit-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error subscribing");

      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Error subscribing");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
          <svg
            className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
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
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
