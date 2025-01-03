import Link from "next/link";
import Image from "next/image";

export default function PlaywrightTypeScript() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">
                E2E Automation with Playwright and TypeScript
              </h2>
              <ul className="list-disc list-inside mb-4">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base">
                  <span className="font-mono font-normal text-base text-green-500">
                    Tuesday and Thursdays
                  </span>
                  <br />
                  February 24th to March 21st, 2025
                </span>
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                href=""
              >
                Apply now
              </a>
            </div>
            <Image
              src="/path/to/image.jpg"
              alt="Curso de Playwright y TypeScript"
              width={500}
              height={300}
              className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center">
            Why do you need to learn Playwright for E2E Testing NOW?
          </h2>
          <p className="text-left">
            Playwright is an end-to-end testing automation tool for modern web
            applications. It is compatible with all major browsers and provides
            a high-level API for interacting with them.
            <br />
            It also provides, out of the box, all the tools you will need as a
            Test Engineer to start automating test cases for your systems. From
            API, to mocking features, from reporting to robust locator handling!
            <br />
            <br />
            Recent trends and polls have situated Playwright as the go-to tool
            to use when starting an automation project. No only that, lots of
            projects have been migrated from other frameworks such as Selenium
            WebDriver, to Playwright.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center">
            Why TypeScript and not just plain JavaScript?
          </h4>
          <p>
            TypeScript is a powerful, typed superset of JavaScript that compiles
            into clean, readable JavaScript. It’s the smart way to write safer,
            more reliable code. Combined with Playwright, it transforms your
            development experience, making test automation smoother and more
            efficient than ever!
            <br />
            <br />
            Maybe I have too much love for types and I like my variables to have
            a purpose from the very beginning, who knows! But the truth is that
            the extra layer of types makes for better code.
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center">
            Other key aspects of Playwright that you should consider...
          </h4>
          <div className="flex justify-center gap-4 mt-8">
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Boost your career opportunities and stand out in the tech
                industry!
              </h5>
              <p>
                Mastering Playwright with TypeScript is a must-have skill to
                secure top job opportunities in Australia and New Zealand!
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(29,53,87,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Efficient Test Automation made simple!
              </h5>
              <p>
                The combination of Playwright and TypeScript enables efficient
                and reliable test automation—a highly sought-after skill in the
                industry!
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(42,157,143,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Industry Standard Excellence!
              </h5>
              <p>
                Global and local trends reveal that adopting this tool is
                quickly becoming the industry standard!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Image
              src="/path_to_your_image.jpg"
              alt="Instructor de Playwright"
              width={256}
              height={256}
              className="mr-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-2">The teacher</h2>
              <ul className="list-disc list-inside mb-4">
                <p>
                  With 16 years of experience as a QA Engineer and Coach, I’ve
                  dedicated my career to empowering the Latin and
                  Spanish-speaking community. Now, based in New Zealand, I’m
                  thrilled to share my expertise and passion for automated
                  testing on a global stage.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <div>
                <h2 className="text-3xl font-semibold mb-2">
                  Workshop dynamic
                </h2>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Taught by a seasoned QA Engineer and Coach with 16 years of
                    experience.
                  </li>
                  <li>Focused on the Kiwi and Australian community.</li>
                  <li>
                    Delivered from New Zealand, sharing expertise in automated
                    testing.
                  </li>
                </ul>
              </div>
              <Image
                src="/path_to_your_image.jpg"
                alt="Teacher's photo"
                width={256}
                height={256}
                className="ml-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            The journey for this workshop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2">Week 1</h3>
              <ul className="list-disc list-inside">
                <li>Introduction to Playwright</li>
                <li>Environment setup</li>
                <li>First steps with Playwright</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2">Week 2</h3>
              <ul className="list-disc list-inside">
                <li>Elements and Selectors</li>
                <li>Page interactions</li>
                <li>Form handling</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2">Week 3</h3>
              <ul className="list-disc list-inside">
                <li>Window and tab management</li>
                <li>Frames and iframes</li>
                <li>File downloads</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2">Week 4</h3>
              <ul className="list-disc list-inside">
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Join today!</h2>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Taught by a QA Engineer and Coach with 16 years of
                    experience.
                  </li>
                  <li>Focused on the Latin and Spanish-speaking community.</li>
                  <li>
                    Delivered from New Zealand, sharing knowledge in automated
                    testing.
                  </li>
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="https://your-stripe-payment-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 text-lg font-semibold"
                  >
                    Sign up Now - $299 NZD
                  </a>
                </div>
              </div>
              <Image
                src="/path_to_your_image.jpg"
                alt="Teacher's photo"
                width={256}
                height={256}
                className="ml-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/workshops"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
