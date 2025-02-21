import Link from "next/link";
import Image from "next/image";

export default function SeleniumWebDriverJavaCucumber() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                E2E Automation with Selenium WebDriver and Cucumber
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base text-black">
                  <span className="font-mono font-normal text-base text-green-500">
                    Tuesday and Thursdays
                  </span>
                  <br />
                  March 1st to March 28th, 2025
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
              alt="Curso de Selenium WebDriver y Cucumber"
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
            Why do you need to learn Selenium WebDriver and Cucumber NOW?
          </h2>
          <p className="text-left text-black">
            Selenium WebDriver is a powerful tool for automating web application
            testing. Combined with Cucumber, it allows for behavior-driven
            development (BDD) testing, making your tests more readable and
            maintainable.
            <br />
            <br />
            Recent trends show a growing demand for skills in Selenium and
            Cucumber, as they are widely used in the industry for test
            automation.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Why Java for Selenium WebDriver?
          </h4>
          <p className="text-black">
            Java is one of the most popular programming languages for Selenium
            WebDriver due to its robustness and extensive community support. It
            provides a strong foundation for writing reliable and efficient
            automated tests.
            <br />
            <br />
            The combination of Java with Selenium WebDriver and Cucumber
            enhances your ability to create comprehensive test suites.
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Other key aspects of Selenium WebDriver and Cucumber...
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Boost your career opportunities and stand out in the tech
                industry!
              </h5>
              <p className="text-black">
                Mastering Selenium WebDriver with Cucumber is a must-have skill
                to secure top job opportunities in the tech industry!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(29,53,87,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Efficient Test Automation made simple!
              </h5>
              <p className="text-black">
                The combination of Selenium WebDriver and Cucumber enables
                efficient and reliable test automation—a highly sought-after
                skill in the industry!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(42,157,143,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                Industry Standard Excellence!
              </h5>
              <p className="text-black">
                Global and local trends reveal that adopting these tools is
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
              alt="Instructor de Selenium WebDriver"
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
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2 text-black">
                Workshop dynamic
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
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
              width={400}
              height={400}
              className="ml-0 md:ml-4 w-full md:w-96 h-auto max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
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
                <li>Introduction to Selenium WebDriver</li>
                <li>Setting up the development environment</li>
                <li>Java fundamentals for automated testing</li>
                <li>Using Cucumber for BDD testing</li>
                <li>Writing automated tests with Selenium</li>
                <li>Integrating Cucumber with Selenium</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 2</h3>
              <ul className="list-disc list-inside text-black">
                <li>Advanced Selenium WebDriver techniques</li>
                <li>Data-driven testing with Cucumber</li>
                <li>Handling dynamic web elements</li>
                <li>Best practices in test automation</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 3</h3>
              <ul className="list-disc list-inside text-black">
                <li>Integrating Selenium with CI/CD pipelines</li>
                <li>Debugging and troubleshooting tests</li>
                <li>Performance testing with Selenium</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 4</h3>
              <ul className="list-disc list-inside text-black">
                <li>Practical exercises and final projects</li>
                <li>Review and feedback sessions</li>
                <li>Certification and next steps</li>
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
                  href="https://your-stripe-payment-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
                >
                  Sign up Now - $299 NZD
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
