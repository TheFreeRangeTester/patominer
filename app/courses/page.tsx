import Link from "next/link";
import Image from "next/image";

export default function FullStackTestEngineer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Full Stack Test Engineer Course
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>
                  Learn to automate testing in web and mobile applications.
                </li>
                <li>Comprehensive online course available on Udemy.</li>
                <span className="font-mono font-bold text-base text-black">
                  <span className="font-mono font-normal text-base text-green-500">
                    Start anytime, self-paced
                  </span>
                </span>
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                href="https://www.udemy.com"
              >
                Enroll now
              </a>
            </div>
            <Image
              src="/images/courses/TestEngineer.png"
              alt="Curso de Full Stack Test Engineer"
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
            Course Content
          </h2>
          <ul className="list-disc list-inside mb-8 text-black">
            <li>Introduction to automated testing</li>
            <li>Setting up the development environment</li>
            <li>Fundamentals of programming in JavaScript and Python</li>
            <li>Using testing tools like Selenium and Cypress</li>
            <li>Integrating testing into the development lifecycle</li>
            <li>Best practices in test automation</li>
            <li>Practical exercises and final projects</li>
          </ul>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Prerequisites
          </h4>
          <p className="text-lg mb-4 text-black text-center">
            Basic knowledge of programming and software testing concepts.
          </p>

          <div className="text-center mt-8">
            <h2 className="text-3xl font-semibold mb-2 text-black">
              Join today!
            </h2>
            <ul className="list-disc list-inside mb-4 text-black">
              <li>Comprehensive online course available on Udemy.</li>
              <li>Self-paced learning to fit your schedule.</li>
            </ul>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación */}
      <section className="py-8 bg-gray-100/50">
        <div className="text-center">
          <Link
            href="/"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
