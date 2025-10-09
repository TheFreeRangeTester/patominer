import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patominer.com"),
  title: "Full Stack Test Engineer Course - Pato Miner",
  description:
    "Complete course exclusively available on Udemy. Learn everything needed to work in modern testing with content updated annually based on market trends.",
  openGraph: {
    title: "Full Stack Test Engineer Course - Pato Miner",
    description:
      "Learn everything needed to work in modern testing - updated annually",
    images: ["/images/course.png"],
  },
};

export default function FullStackTestEngineer() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Section 1 */}
      <section className="py-16 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
                Full Stack Test Engineer Course
              </h2>
              <ul className="list-disc list-inside mb-4 text-black dark:text-gray-100">
                <li>Complete course exclusively available on Udemy</li>
                <li>Learn everything needed to work in modern testing</li>
                <li>Content updated annually based on market trends</li>
                <span className="font-mono font-bold text-base text-black dark:text-gray-100">
                  <span className="font-mono font-normal text-base text-green-500">
                    100% self-paced, no fixed schedules
                  </span>
                </span>
              </ul>
            </div>
            <Image
              src="/images/courses/TestEngineer.png"
              alt="Full Stack Test Engineer Course"
              width={500}
              height={300}
              className="mt-4 md:mt-0 w-full md:w-1/2 h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black dark:text-white">
            A Course Designed for the Real World
          </h2>
          <p className="text-left text-black dark:text-gray-100 mb-8">
            This unique Udemy course is designed to turn you into a Full Stack
            Test Engineer, with no need for live classes or fixed schedules. All
            content is pre-recorded and available 24/7, allowing you to learn at
            your own pace.
            <br />
            <br />
            The material is updated annually to keep up with the latest market
            trends and tools, ensuring that what you learn today remains
            relevant tomorrow.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                🧑🏻‍💻 Updated Content
              </h5>
              <ul className="list-disc list-inside text-black dark:text-gray-100">
                <li>Solid testing fundamentals</li>
                <li>Modern market tools</li>
                <li>JavaScript and Python for automation</li>
                <li>Popular frameworks like Selenium and Cypress</li>
              </ul>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                💡 Flexible Learning
              </h5>
              <ul className="list-disc list-inside text-black dark:text-gray-100">
                <li>Unlimited content access</li>
                <li>No fixed schedules or live classes</li>
                <li>Learn at your own pace</li>
                <li>Practice exercises whenever you want</li>
              </ul>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                🚀 Guaranteed Results
              </h5>
              <ul className="list-disc list-inside text-black dark:text-gray-100">
                <li>Preparation for today&apos;s market</li>
                <li>Real projects for your portfolio</li>
                <li>Completion certificate</li>
                <li>Always updated content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Prerequisites */}
      <section className="py-16 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">
            What You Need to Know
          </h2>
          <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
            <h4 className="text-2xl font-semibold mb-4 text-black dark:text-white">
              Before Starting:
            </h4>
            <ul className="list-disc list-inside mb-6 text-black dark:text-gray-100">
              <li>Basic programming knowledge</li>
              <li>Fundamental software testing concepts</li>
              <li>Computer with internet access</li>
              <li>Udemy account to access the course</li>
            </ul>
            <p className="text-black dark:text-gray-100 mt-4">
              Once enrolled, you&apos;ll have lifetime access to the content and
              all future updates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Call to Action */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
              Start Your Testing Career!
            </h2>
            <p className="text-lg mb-6 text-black dark:text-gray-100">
              Access all content and learn at your own pace with our Udemy
              course
            </p>
            <div className="flex justify-center mt-6">
              <a className="inline-block w-full md:w-auto border-black border-2 bg-white dark:bg-gray-700 px-8 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto cursor-not-allowed opacity-75">
                Coming soon...
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="text-center">
          <Link
            href="/"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-700 px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
