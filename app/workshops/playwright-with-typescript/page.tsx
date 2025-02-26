import Link from "next/link";
import Image from "next/image";
import Map from "../../../components/Map";

export default function PlaywrightTypeScript() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                E2E Automation with Playwright and TypeScript
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base text-black">
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
              src="/images/Playwright-Workshop.png"
              alt="Curso de Playwright y TypeScript"
              width={500}
              height={300}
              className="mt-4 md:mt-0 w-full md:w-1/2 h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black">
            Why do you need to learn Playwright for E2E Testing NOW?
          </h2>
          <p className="text-left text-black">
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
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Why TypeScript and not just plain JavaScript?
          </h4>
          <p className="text-black">
            TypeScript is a powerful, typed superset of JavaScript that compiles
            into clean, readable JavaScript. It&apos;s the smart way to write
            safer, more reliable code. Combined with Playwright, it transforms
            your development experience, making test automation smoother and
            more efficient than ever!
            <br />
            <br />
            Maybe I have too much love for types and I like my variables to have
            a purpose from the very beginning, who knows! But the truth is that
            the extra layer of types makes for better code.
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Other key aspects of Playwright that you should consider...
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Boost your career opportunities and stand out in the tech
                industry!
              </h5>
              <p className="text-black">
                Mastering Playwright with TypeScript is a must-have skill to
                secure top job opportunities in Australia and New Zealand!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(29,53,87,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Efficient Test Automation made simple!
              </h5>
              <p className="text-black">
                The combination of Playwright and TypeScript enables efficient
                and reliable test automation—a highly sought-after skill in the
                industry!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(42,157,143,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Industry Standard Excellence!
              </h5>
              <p className="text-black">
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
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/path_to_your_image.jpg"
              alt="Instructor de Playwright"
              width={256}
              height={256}
              className="mb-4 md:mb-0 md:mr-4 w-full md:w-64 h-auto max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2 text-black">
                The teacher
              </h2>
              <p className="text-black">
                With 16 years of experience as a QA Engineer and Coach,
                I&apos;ve dedicated my career to empowering the Latin and
                Spanish-speaking community. Now, based in New Zealand, I&apos;m
                thrilled to share my expertise and passion for automated testing
                on a global stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-center md:text-left md:mr-8">
              <h2 className="text-3xl font-semibold mb-2 text-black">
                Workshop dynamic
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>
                  Taught by a seasoned QA Engineer and Coach with 16 años de
                  experiencia.
                </li>
                <li>Focused on the Kiwi and Australian community.</li>
                <li>
                  Delivered from New Zealand, sharing expertise in automated
                  testing.
                </li>
              </ul>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">
            The journey for this workshop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 1</h3>
              <ul className="list-disc list-inside text-black">
                <li>Introduction to Playwright</li>
                <li>Environment setup</li>
                <li>First steps with Playwright</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 2</h3>
              <ul className="list-disc list-inside text-black">
                <li>Elements and Selectors</li>
                <li>Page interactions</li>
                <li>Form handling</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 3</h3>
              <ul className="list-disc list-inside text-black">
                <li>Window and tab management</li>
                <li>Frames and iframes</li>
                <li>File downloads</li>
                <li>Error and exception handling</li>
                <li>Performance testing</li>
                <li>CI/CD integration</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 4</h3>
              <ul className="list-disc list-inside text-black">
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
            <div className="text-center">
              <Image
                src="/path_to_your_image.jpg"
                alt="Teacher's photo"
                width={400}
                height={400}
                className="mx-auto w-full md:w-96 h-auto max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
              <h2 className="text-3xl font-semibold mb-2 text-black">
                Join today!
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>
                  Taught by a QA Engineer and Coach with 16 years of experience.
                </li>
                <li>Focused on the Latin and Spanish-speaking community.</li>
                <li>
                  Delivered from New Zealand, sharing knowledge in automated
                  testing.
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <a
                  href="https://buy.stripe.com/dR64iXbA09NQ44U9AB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
                >
                  Sign up Now - $550 NZD
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
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
