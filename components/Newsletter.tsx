export default function Newsletter() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter!</h3>
      <form
        action="https://app.convertkit.com/forms/7383840/subscriptions"
        method="POST"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded bg-white text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input type="hidden" name="first_name" placeholder="First name" />
        <button
          type="submit"
          className="mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          Subscribe
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
      </form>
    </div>
  );
}
