import Link from "next/link";
import Image from "next/image";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="hidden md:block md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            QA Engineering Course
          </h1>
          <p className="text-xl text-center mt-4 text-black">
            Learn Software Testing with an expert
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="md:py-16 py-4 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            {/* Full Stack Test Engineer Course */}
            <div className="flex justify-center">
              <div className="border rounded-lg p-6 shadow-lg text-center mx-auto">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                  <Image
                    src="/images/full-stack-test-engineer.png"
                    alt="Full Stack Test Engineer"
                    className="w-full h-full object-cover rounded-lg"
                    width={800}
                    height={450}
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Full Stack Test Engineer
                </h2>
                <p className="text-lg mb-4 text-black">
                  This course provides comprehensive training in both front-end
                  and back-end testing techniques.
                </p>
                <p className="text-md mb-2 text-gray-700">Duration: 50 hours</p>
                <div className="flex flex-col items-center">
                  <Link
                    href="/courses/full-stack-test-engineer"
                    className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                  >
                    View more details
                  </Link>
                </div>
              </div>
            </div>

            {/* Introduction to Software Testing Course */}
            <div className="flex justify-center">
              <div className="border rounded-lg p-6 shadow-lg text-center mx-auto">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                  <Image
                    src="/images/introduction-to-software-testing.png"
                    alt="Introduction to Software Testing"
                    className="w-full h-full object-cover rounded-lg"
                    width={800}
                    height={450}
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Introduction to Software Testing
                </h2>
                <p className="text-lg mb-4 text-black">
                  This course introduces the fundamental concepts of software
                  testing and quality assurance.
                </p>
                <p className="text-md mb-2 text-gray-700">Duration: 30 hours</p>
                <div className="flex flex-col items-center">
                  <Link
                    href="/courses/introduction-to-software-testing"
                    className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                  >
                    View more details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Ajustando el espaciado del botón Back to Home */}
          <div className="mt-8 text-center">
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
