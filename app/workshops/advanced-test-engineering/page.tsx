import Link from "next/link";
import Image from "next/image";
import WorkshopInfo from "../../../components/WorkshopInfo";
import { getWorkshopById } from "../workshops-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patominer.com"),
  title: "Advanced Test Engineering - Pato Miner",
  description:
    "Time to master the big guns of your test engineer skillset and level up your game",
  openGraph: {
    title: "Advanced Test Engineering - Pato Miner",
    description:
      "Time to master the big guns of your test engineer skillset and level up your game",
    images: ["/images/Playwright-Workshop.png"],
  },
};

export default function AdvancedTestEngineering() {
  const workshop = getWorkshopById("advanced-test-engineering");

  if (!workshop) {
    return <div>Workshop not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
                {workshop.title}
              </h1>
              <ul className="list-disc list-inside mb-4 text-black dark:text-gray-100">
                <li>Online workshop through Zoom</li>
                <li>Duration: {workshop.duration}</li>
                <span className="font-mono font-bold text-base text-black dark:text-gray-100">
                  <span className="font-mono font-normal text-base text-green-500">
                    {workshop.location}
                  </span>
                  <br />
                  Starting Date: {workshop.starting_date}
                </span>
              </ul>
            </div>
            <Image
              src="/images/Playwright-Workshop.png"
              alt="Curso de Playwright y TypeScript"
              width={500}
              height={300}
              className="mt-4 md:mt-0 w-full md:w-1/2 h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black dark:text-white">
            Wondering what your next step should be as an automation tester?
          </h2>
          <p className="text-left text-black dark:text-gray-100">
            Advanced Test Engineering is a comprehensive program designed to
            elevate your testing expertise across multiple domains. From API
            testing to cloud-based testing, this course covers the essential
            skills needed in modern software testing.
            <br />
            Each week focuses on a different aspect of testing, providing you
            with hands-on experience and theoretical knowledge. You&apos;ll
            learn about industry-standard tools, best practices, and real-world
            applications that will make you a more valuable testing
            professional.
            <br />
            <br />
            The course is structured to give you a deep understanding of four
            key areas: API Testing, Performance Testing, Security Testing, and
            AWS Testing. These are the most in-demand skills in today&apos;s
            testing landscape.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black dark:text-white">
            Why Advanced Test Engineering?
          </h4>
          <p className="text-black dark:text-gray-100">
            With the trends we are currently seeing and the market in the state
            it is, testers need to be versatile and knowledgeable across
            multiple testing domains. This course is designed to give you that
            edge, combining practical skills with theoretical knowledge.
            <br />
            <br />
            Whether you&apos;re looking to specialize in a particular area or
            want to become a well-rounded testing professional, this course
            provides the perfect foundation for your career growth in software
            testing.
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black dark:text-white">
            What can you expect from this workshop?
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                🎯 Hands-on Learning
              </h5>
              <p className="text-black dark:text-gray-100">
                A focused half-day workshop packed with practical exercises and
                real-world examples. Learn by doing, not just watching.
                <br></br>
                <br></br>
                The session will be recorded so you can review it later if
                needed!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                🚀 Advanced Skills for Professionals
              </h5>
              <p className="text-black dark:text-gray-100">
                Master professional-grade testing techniques: modern test
                architecture, advanced Playwright patterns, AWS testing, and
                CI/CD integration.
                <br></br>
                <br></br>
                Each block builds on the previous one to give you a complete
                advanced testing toolkit.
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                💡 Real-World Applications
              </h5>
              <p className="text-black dark:text-gray-100">
                Learn patterns and practices used in production environments.
                From AWS Lambda testing to professional CI/CD pipelines,
                you&apos;ll gain skills that directly apply to your work.
                <br></br>
                <br></br>
                Take home working examples you can use immediately!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-16 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/images/pato.png"
              alt="Instructor de Playwright"
              width={1200}
              height={1200}
              className="mb-4 md:mb-0 md:mr-4 w-full md:w-96 h-auto max-w-lg p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2 text-black dark:text-white">
                The teacher
              </h2>
              <p className="text-black dark:text-gray-100">
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
      <WorkshopInfo isOnline={true} title="Workshop dynamic" />

      {/* Sección 5 */}
      <section className="py-16 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-black dark:text-white">
            Workshop Outline (4 hours)
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline vertical */}
            <div className="relative">
              {/* Línea vertical de la timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-cyan-400 via-orange-400 to-purple-400 dark:from-indigo-500 dark:via-cyan-500 dark:via-orange-500 dark:to-purple-500 hidden md:block"></div>

              {/* Block 1 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-indigo-500 dark:border-indigo-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(99,102,241,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(99,102,241,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 1 — Modern Test Architecture
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        •
                      </span>
                      <span>Modern pyramid, Quadrants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        •
                      </span>
                      <span>Hexagonal testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        •
                      </span>
                      <span>Event-driven testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 dark:text-indigo-400 mr-2">
                        •
                      </span>
                      <span>Shift left + observability</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Block 2 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cyan-500 dark:bg-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-cyan-500 dark:border-cyan-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 2 — Playwright API + E2E Advanced
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">
                        •
                      </span>
                      <span>Powerful fixtures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">
                        •
                      </span>
                      <span>Network mocks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">
                        •
                      </span>
                      <span>Data isolation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">
                        •
                      </span>
                      <span>Scalable Page Objects</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Block 3 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 dark:bg-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-orange-500 dark:border-orange-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(249,115,22,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(249,115,22,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 3 — AWS Testing with SDKs
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">
                        •
                      </span>
                      <span>Testing Lambdas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">
                        •
                      </span>
                      <span>Testing real APIs (API Gateway)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">
                        •
                      </span>
                      <span>Validating events + S3 + Dynamo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">
                        •
                      </span>
                      <span>Secrets and roles</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Break */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  ☕
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-gray-400 dark:border-gray-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    Break
                  </h3>
                  <p className="text-black dark:text-gray-100 italic">
                    Coffee? Water? Stretch your legs!
                  </p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="relative flex items-start group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-purple-500 dark:border-purple-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 4 — CI/CD Professional-grade
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Parallel pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Test matrix</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Reports in S3 (+ links for Slack)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>GitHub Actions / GitLab CI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/jointoday.png"
                alt="Join Today!"
                width={400}
                height={400}
                className="mx-auto w-full md:w-96 h-auto max-w-sm p-4 bg-white dark:bg-gray-700 shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
              <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
                Join today!
              </h2>
              <div className="space-y-3 mb-6 text-black dark:text-gray-100 max-w-2xl mx-auto">
                <div className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">
                    •
                  </span>
                  <p className="text-left">
                    Taught by a QA Engineer and Coach with 16 years of
                    experience.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">
                    •
                  </span>
                  <p className="text-left">
                    Focused on the Kiwi and Aussie community.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">
                    •
                  </span>
                  <p className="text-left">
                    Delivered from New Zealand, sharing knowledge in automated
                    testing.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <a
                  href="https://buy.stripe.com/bJe9AT4T01Qdbro7EZgrS09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white dark:bg-gray-700 px-8 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
                >
                  Sign up Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/workshops"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-700 px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
