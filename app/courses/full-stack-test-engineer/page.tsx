import Link from "next/link";

export default function FullStackTestEngineer() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black">
            Full Stack Test Engineer Course
          </h1>
          <p className="text-xl mt-4 text-black">
            Learn to automate testing in web and mobile applications as a full
            stack test engineer.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Course Content</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Introduction to automated testing</li>
            <li>Setting up the development environment</li>
            <li>Fundamentals of programming in JavaScript and Python</li>
            <li>Using testing tools like Selenium and Cypress</li>
            <li>Integrating testing into the development lifecycle</li>
            <li>Best practices in test automation</li>
            <li>Practical exercises and final projects</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-black">Prerequisites</h2>
          <p className="text-lg mb-4 text-black">
            Basic knowledge of programming and software testing concepts.
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
