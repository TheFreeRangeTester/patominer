import Link from "next/link";
import Image from "next/image";
import Map from "../../../components/Map";

export default function ManualToAutomation() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Upskilling from Manual to Automation Testing in a month
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base text-black">
                  <span className="font-mono font-normal text-base text-green-500">
                    Tuesday and Thursdays
                  </span>
                  <br />
                  May 15th to August 15th, 2025
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black">
            Why do you need to learn Automation Testing NOW?
          </h2>
          <p className="text-left text-black">
            The transition from manual to automated testing is crucial for any
            tester&apos;s professional development. According to current market
            trends, companies are increasingly seeking professionals who can
            combine testing analysis skills with automation capabilities. As a{" "}
            <Link
              href="https://www.seek.co.nz/career-advice/role/testing-analyst"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Testing Analyst
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.seek.co.nz/career-advice/role/testing-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
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
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            What about the skills?
          </h4>
          <p className="text-black">
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
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            What can you expect from this workshop?
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                🧑🏻‍💻 A packed week!
              </h5>
              <p className="text-black">
                Online lectures and debates, exercises and resources to have an
                holistic learning experience.
                <br></br>
                <br></br>
                Can&apos;t make it to an online lecture? Don&apos;t worry, these
                are recorded and uploaded for you to watch later!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                💡 A place for everyone to learn at their own pace
              </h5>
              <p className="text-black">
                I understand that you have a busy life, so this workshop is
                designed to give you the directions to complete the tasks at
                your own pace.
                <br></br>
                <br></br>
                If you have extra time, you might want to check the extra
                challenges we prepared for each week!
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(249,168,37,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                🚀 Tangible results ready to be shown
              </h5>
              <p className="text-black">
                By the end of this workshop you will have a robust, well made
                automation framework following the best practices and running on
                CI/CD pipelines ready to show off to any recruiter or company.
                <br></br>
                <br></br>
                The best way to add value to your CV and profile in the market!
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
              src="/images/pato.png"
              alt="Teacher Pato"
              width={1200}
              height={1200}
              className="mb-4 md:mb-0 md:mr-4 w-full md:w-96 h-auto max-w-lg p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-2 text-black">
                The teacher
              </h2>
              <p className="text-black">
                With 16 years of experience as a QA Engineer and Coaching,
                I&apos;ve dedicated my career to empowering the Latin and
                Spanish-speaking community. Now, based in New Zealand, I&apos;m
                thrilled to share my expertise and passion for automated testing
                on a global stage.
                <br />
                <br />
                I&apos;ve already taught through asynchronous workshops with
                DevAcademy to cohorts with people from all New Zealand with
                great success, and this time it will only get better! 1 day
                Workshops, online courses and asynchronous programmes to suit
                the needs of everyone and help you boost your career
                opportunities.
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
            What you will learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 1</h3>
              <ul className="list-disc list-inside text-black">
                <li>Introduction to Object Oriented Programming</li>
                <li>
                  SOLID principles and clean code applied to test automation
                </li>
                <li>The basics of programming</li>
                <li>The most demanded languages and their differences</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 2</h3>
              <ul className="list-disc list-inside text-black">
                <li>Basics of Git</li>
                <li>Branching and Pull Requests</li>
                <li>Working and collaborating with Git</li>
                <li>Conflict resolution and best practices</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(249,168,37,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 3</h3>
              <ul className="list-disc list-inside text-black">
                <li>Basics of Automation Testing</li>
                <li>
                  The most demanded tools in the market and their differences
                </li>
                <li>Creating automation tests from scratch</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(156,163,175,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 4</h3>
              <ul className="list-disc list-inside text-black">
                <li>CICD: What is it?</li>
                <li>Integrating our tests with CICD pipelines</li>
                <li>Final Project, feedback and certificate</li>
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
                src="/images/jointoday.png"
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
                  href="https://buy.stripe.com/7sI16LfQg9NQ0SIbIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
                >
                  Sign up Now - $999 NZD
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
