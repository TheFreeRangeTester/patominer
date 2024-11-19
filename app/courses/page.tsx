import Link from "next/link";
import Image from "next/image";

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            QA Engineering Courses
          </h1>
          <p className="text-xl text-center mt-4 text-black">
            Learn test automation with an expert
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* Introduction to Test Automation */}
            <div className="border rounded-lg p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                <Image
                  src="/images/course1.png"
                  alt="Introduction to Test Automation"
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">
                Introduction to Test Automation
              </h2>
              <p className="text-lg mb-4 text-black">
                Perfect introductory course for manual QAs looking to start
                their journey into automation. Learn fundamental concepts and
                best practices.
              </p>
              <p className="text-md mb-2 text-gray-700">Duration: 40 hours</p>
              <div className="flex flex-col items-center">
                <Link
                  href="/courses/introduction-to-test-automation"
                  className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                >
                  View more details
                </Link>
              </div>
            </div>
            {/* Playwright Course */}
            <div className="border rounded-lg p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                <Image
                  src="/images/course2.png"
                  alt="Playwright"
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">Playwright</h2>
              <p className="text-lg mb-4 text-black">
                Master Playwright, Microsoft&apos;s modern framework for
                end-to-end test automation. Ideal for those seeking a robust and
                modern solution.
              </p>
              <p className="text-md mb-2 text-gray-700">Duration: 30 hours</p>
              <div className="flex flex-col items-center">
                <Link
                  href="/courses/playwright"
                  className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                >
                  View more details
                </Link>
              </div>
            </div>
            {/* Selenium WebDriver Course */}
            <div className="border rounded-lg p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                <Image
                  src="/images/course3.png"
                  alt="Selenium WebDriver"
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">
                Selenium WebDriver
              </h2>
              <p className="text-lg mb-4 text-black">
                Learn the industry&apos;s most widely used web automation
                framework. Complete course covering basics through to advanced
                techniques.
              </p>
              <p className="text-md mb-2 text-gray-700">Duration: 50 hours</p>
              <div className="flex flex-col items-center">
                <Link
                  href="/courses/selenium-webdriver"
                  className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                >
                  View more details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
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
                  d="M11 7l-5 5m0 0l5 5m-5-5h12"
                />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
