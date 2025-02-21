import Link from "next/link";
import Image from "next/image";

export default function IntroductionToSoftwareTesting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Introduction to Software Testing Course
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>
                  Learn the fundamentals of software testing and quality
                  assurance.
                </li>
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
              src="/path/to/image.jpg"
              alt="Introduction to Software Testing"
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
            <li>Overview of software testing</li>
            <li>Types of testing: manual and automated</li>
            <li>Testing methodologies and strategies</li>
            <li>Writing effective test cases</li>
            <li>Bug reporting and tracking</li>
            <li>Introduction to testing tools</li>
            <li>Hands-on projects and case studies</li>
          </ul>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Prerequisites
          </h4>
          <p className="text-lg mb-4 text-black text-center">
            Basic understanding of software development concepts.
          </p>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
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
        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
