import Link from "next/link";

export default function IntroductionToSoftwareTesting() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black">
            Introduction to Software Testing Course
          </h1>
          <p className="text-xl mt-4 text-black">
            Learn the fundamentals of software testing and quality assurance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Course Content</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Overview of software testing</li>
            <li>Types of testing: manual and automated</li>
            <li>Testing methodologies and strategies</li>
            <li>Writing effective test cases</li>
            <li>Bug reporting and tracking</li>
            <li>Introduction to testing tools</li>
            <li>Hands-on projects and case studies</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-black">Prerequisites</h2>
          <p className="text-lg mb-4 text-black">
            Basic understanding of software development concepts.
          </p>

          <div className="text-center">
            <Link
              href="/courses"
              className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
