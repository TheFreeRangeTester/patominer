import Link from "next/link";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Introduction to Test Automation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Introduction to Test Automation
              </h3>
              <p className="text-black mb-4">
                Perfect introductory course for manual QAs looking to start
                their journey into automation. Learn fundamental concepts and
                best practices.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Programming fundamentals</li>
                <li>Automation principles</li>
                <li>Testing frameworks</li>
                <li>Best practices</li>
              </ul>
            </div>

            {/* Playwright Course */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Playwright</h3>
              <p className="text-black mb-4">
                Master Playwright, Microsoft&apos;s modern framework for
                end-to-end test automation. Ideal for those seeking a robust and
                modern solution.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Environment setup</li>
                <li>Selectors and actions</li>
                <li>Assertions and validations</li>
                <li>Report generation</li>
              </ul>
            </div>

            {/* Selenium WebDriver Course */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Selenium WebDriver
              </h3>
              <p className="text-black mb-4">
                Learn the industry&apos;s most widely used web automation
                framework. Complete course covering basics through to advanced
                techniques.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>WebDriver fundamentals</li>
                <li>Locators and web elements</li>
                <li>Waits and synchronisation</li>
                <li>Page Object Model</li>
              </ul>
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
