import Link from "next/link";
import Image from "next/image";
import WorkshopInfo from "../../../components/WorkshopInfo";
import { getWorkshopById } from "../workshops-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patominer.com"),
  title: "From Manual to Automation Testing - Pato Miner",
  description:
    "The one workshop to make the jump into the world of Test Engineering",
  openGraph: {
    title: "From Manual to Automation Testing - Pato Miner",
    description:
      "The one workshop to make the jump into the world of Test Engineering",
    images: ["/images/Selenium-Workshop.png"],
  },
};

export default function ManualToAutomation() {
  const workshop = getWorkshopById("from-manual-to-automation");

  if (!workshop) {
    return <div>Workshop not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50 dark:bg-dark-surfaceHover">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
                From Manual to Automation Testing
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
              src="/images/Selenium-Workshop.png"
              alt="Curso de Selenium WebDriver y Cucumber"
              width={500}
              height={300}
              className="mt-4 md:mt-0 w-full md:w-1/2 h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-16 bg-gray-100 dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black dark:text-white">
            Why do you need to learn Automation Testing NOW?
          </h2>
          <p className="text-left text-black dark:text-gray-100">
            The transition from manual to automated testing is crucial for any
            tester&apos;s professional development. According to current market
            trends, companies are increasingly seeking professionals who can
            combine testing analysis skills with automation capabilities. As a{" "}
            <Link
              href="https://www.seek.co.nz/career-advice/role/testing-analyst"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 underline"
            >
              Testing Analyst
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.seek.co.nz/career-advice/role/testing-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 underline"
            >
              Testing Engineer
            </Link>
            , automation enables you to design and implement more efficient
            tests, reduce execution time, and increase test coverage. Moreover,
            automation allows you to focus on more strategic tasks such as test
            design and results analysis, rather than repetitive manual execution
            tasks.
            <br />
            <br />
            Recent trends show a growing demand for skills in test automation,
            both E2E and API, as they are widely used in the industry for test
            automation. Even in entry positions, automation is starting to be a
            mandatory skill.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black dark:text-white">
            What about the skills?
          </h4>
          <p className="text-black dark:text-gray-100">
            To become proficient in test automation, you need to master three
            fundamental skills: programming, testing principles, and version
            control. A solid understanding of programming concepts and best
            practices is essential for writing maintainable and efficient
            automated tests.
            <br />
            <br />
            Strong testing fundamentals, including test design techniques and
            quality assurance principles, will help you create more effective
            test cases. Additionally, being comfortable with Git and version
            control systems is crucial for collaborating with development teams
            and managing your test automation framework effectively. Once
            you&apos;ve mastered these core skills, learning specific automation
            tools becomes much easier.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1 text-center text-black dark:text-white">
            What can you expect from this workshop?
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-dark-surface shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
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
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-dark-surface shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                💡 From Zero to Your First Tests
              </h5>
              <p className="text-black dark:text-gray-100">
                Perfect for beginners! We&apos;ll start with the mindset and
                fundamentals, then guide you through writing your first API and
                E2E tests step by step.
                <br></br>
                <br></br>
                No prior programming experience required - we&apos;ll cover
                everything you need!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white dark:bg-dark-surface shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(249,168,37,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black dark:text-white">
                🚀 Build a Working Framework
              </h5>
              <p className="text-black dark:text-gray-100">
                By the end of this workshop, you&apos;ll have built a complete
                E2E + API test flow that actually works. Take it home and use it
                as a foundation for your automation journey.
                <br></br>
                <br></br>
                Plus, get guidance on career planning and building your
                portfolio!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-16 bg-gray-100/50 dark:bg-dark-surfaceHover">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/images/pato.png"
              alt="Teacher Pato"
              width={1200}
              height={1200}
              className="mb-4 md:mb-0 md:mr-4 w-full md:w-96 h-auto max-w-lg p-4 bg-white dark:bg-dark-surface shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2 text-black dark:text-white">
                The teacher
              </h2>
              <p className="text-black dark:text-gray-100">
                With 16 years of experience as a QA Engineer and Coaching,
                I&apos;ve dedicated my career to empowering the Latin and
                Spanish-speaking community. Now, based in New Zealand, I&apos;m
                thrilled to share my expertise and passion for automated testing
                on a global stage.
                <br />
                <br />
                I&apos;ve already taught through workshops with DevAcademy to
                cohorts with people from all New Zealand with great success, and
                this time it will only get better! Half-day workshops, online
                courses and programs designed to suit everyone&apos;s needs and
                help you boost your career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <WorkshopInfo isOnline={true} title="Workshop dynamic" />

      {/* Sección 5 */}
      <section className="py-16 bg-gray-100/50 dark:bg-dark-surfaceHover">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-black dark:text-white">
            Workshop Outline (4 hours)
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline vertical */}
            <div className="relative">
              {/* Línea vertical de la timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 via-amber-400 to-purple-400 dark:from-green-500 dark:via-blue-500 dark:via-amber-500 dark:to-purple-500 hidden md:block"></div>

              {/* Block 1 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-green-500 dark:border-green-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 1 — Automation Mindset
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        •
                      </span>
                      <span>How an Automation Engineer thinks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        •
                      </span>
                      <span>What to automate and what NOT to</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        •
                      </span>
                      <span>API, UI, integration, and contract tests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        •
                      </span>
                      <span>Choosing the right test level</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Block 2 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-blue-500 dark:border-blue-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 2 — Writing Your First API Tests
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">
                        •
                      </span>
                      <span>Postman vs code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">
                        •
                      </span>
                      <span>Requests, asserts, fixtures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">
                        •
                      </span>
                      <span>Your first &quot;real&quot; API test</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Block 3 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 dark:bg-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-amber-500 dark:border-amber-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(249,168,37,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(249,168,37,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 3 — Writing Your First E2E Test
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-amber-500 dark:text-amber-400 mr-2">
                        •
                      </span>
                      <span>Page Objects for non-dev humans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 dark:text-amber-400 mr-2">
                        •
                      </span>
                      <span>Waits, selectors, flows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 dark:text-amber-400 mr-2">
                        •
                      </span>
                      <span>Best practices to avoid frustration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Break */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  ☕
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-gray-400 dark:border-gray-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    Break
                  </h3>
                  <p className="text-black dark:text-gray-100 italic">
                    Coffee? Water? Stretch your legs!
                  </p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="relative flex items-start mb-8 group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-purple-500 dark:border-purple-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 4 — Simple Framework Design
                  </h3>
                  <ul className="space-y-2 text-black dark:text-gray-100">
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Folder structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Hooks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Data management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        •
                      </span>
                      <span>Code reuse</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Block 5 */}
              <div className="relative flex items-start group cursor-pointer">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-500 dark:bg-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  5
                </div>
                <div className="ml-6 flex-1 bg-white dark:bg-dark-surface rounded-lg p-6 shadow-lg border-l-4 border-red-500 dark:border-red-600 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.8)] group-active:-translate-y-2 group-active:-translate-x-2 group-active:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.8)] transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    Block 5 — Hands-on Final
                  </h3>
                  <p className="text-black dark:text-gray-100 mb-4">
                    Build a complete E2E + API flow that works end-to-end.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">
                      Closing
                    </h4>
                    <ul className="space-y-2 text-black dark:text-gray-100">
                      <li className="flex items-start">
                        <span className="text-red-500 dark:text-red-400 mr-2">
                          •
                        </span>
                        <span>Career plan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 dark:text-red-400 mr-2">
                          •
                        </span>
                        <span>What to learn next</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 dark:text-red-400 mr-2">
                          •
                        </span>
                        <span>How to build your portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="py-16 bg-gray-100 dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/jointoday.png"
                alt="Teacher's photo"
                width={400}
                height={400}
                className="mx-auto w-full md:w-96 h-auto max-w-sm p-4 bg-white dark:bg-dark-surface shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
              <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
                Join today!
              </h2>
              <div className="space-y-3 mb-6 text-black dark:text-gray-100 max-w-2xl mx-auto">
                <div className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1">
                    •
                  </span>
                  <p className="text-left">
                    Taught by a QA Engineer and Coach with 16 years of
                    experience.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1">
                    •
                  </span>
                  <p className="text-left">
                    Focused on the Latin and Spanish-speaking community.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1">
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
                  href="https://buy.stripe.com/dRm3cv3OW3Yl9jgaRbgrS0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white dark:bg-gray-800 px-8 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
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
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-800 px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
