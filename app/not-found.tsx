import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The page you&apos;re looking for seems to have wandered off like a
            test that should have failed but passed instead 🤔
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-md mx-auto aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(245,158,11,1)] overflow-hidden">
            <Image
              src="/images/pato.png"
              alt="Pato Miner - confused tester"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-black dark:border-white border-2 bg-amber-500 dark:bg-amber-600 px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 border-black dark:border-white border-2 bg-white dark:bg-gray-800 px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] dark:hover:shadow-[4px_4px_0px_0px_rgba(96,165,250,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            View Workshops
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            Error code: 404 | Test status: FAILED ❌
          </p>
        </div>
      </div>
    </div>
  );
}
