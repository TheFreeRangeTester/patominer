import Link from "next/link";
import Image from "next/image";
import WorkshopInfo from "../../../components/WorkshopInfo";

export default function AdvancedTestEngineering() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Advanced Test Engineering
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base text-black">
                  <span className="font-mono font-normal text-base text-green-500">
                    Tuesday and Thursdays
                  </span>
                  <br />
                  October 20th to November 14th, 2024
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-2 text-center text-black">
            Wondering what your next step should be as an automation tester?
          </h2>
          <p className="text-left text-black">
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
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            Why Advanced Test Engineering?
          </h4>
          <p className="text-black">
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
          <h4 className="text-2xl font-semibold mb-1 text-center text-black">
            What can you expect from this workshop?
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                🛠️ A hands-on workshop experience
              </h5>
              <p className="text-black">
                Learn by doing with practical exercises and real-world cases.
                Each session is designed so you can immediately apply what you
                learn to your work.
                <br></br>
                <br></br>
                Recordings are available for you to review and practice at any
                time.
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                🎯 Enhance your most relevant technical skills
              </h5>
              <p className="text-black">
                Focused on the most in-demand skills in today&apos;s market: API
                Testing, Performance Testing, Security Testing, and AWS Testing.
                <br></br>
                <br></br>
                Each module is designed to help you excel in technical
                interviews and your daily work.
              </p>
            </div>
            <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2 text-black">
                🐢 Learn at your own pace
              </h5>
              <p className="text-black">
                I understand you have a busy life, which is why the workshop is
                designed to let you progress according to your availability.
                <br></br>
                <br></br>
                Materials and resources available 24/7, personalised mentoring,
                and a safe space to ask questions and learn.
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
              alt="Instructor de Playwright"
              width={1200}
              height={1200}
              className="mb-4 md:mb-0 md:mr-4 w-full md:w-96 h-auto max-w-lg p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
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
      <WorkshopInfo isOnline={true} title="Workshop dynamic" />

      {/* Sección 5 */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-black">
            The journey for this workshop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 1</h3>
              <ul className="list-disc list-inside text-black">
                <li>Introduction to API Testing</li>
                <li>How to design tests for API?</li>
                <li>Rest Clients and tools</li>
                <li>API Automation and the best practices</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 2</h3>
              <ul className="list-disc list-inside text-black">
                <li>Basics of Performance Testing</li>
                <li>Performance Testing tools</li>
                <li>Performance Test creation</li>
                <li>How to plan and report Performance Testing?</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 3</h3>
              <ul className="list-disc list-inside text-black">
                <li>Introduction to Security Testing: OWASP</li>
                <li>Techniques for Penetration Testing</li>
                <li>Security Testing: Automation tools</li>
                <li>DevTools</li>
              </ul>
            </div>
            <div className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-semibold mb-2 text-black">Week 4</h3>
              <ul className="list-disc list-inside text-black">
                <li>Introduction to AWS Testing</li>
                <li>How is it different from E2E, API testing?</li>
                <li>Lambdas, Dynamo, SQS and Cloudwatch</li>
                <li>Automating AWS Tests</li>
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
                alt="Join Today!"
                width={400}
                height={400}
                className="mx-auto w-full md:w-96 h-auto max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
              <h2 className="text-3xl font-semibold mb-2 text-black">
                Join today!
              </h2>
              <ul className="list-disc list-inside mb-4 text-black">
                <li>
                  Taught by a QA Engineer and Coach with 16 years of experience.
                </li>
                <li>Focused on the Kiwi and Aussie community.</li>
                <li>
                  Delivered from New Zealand, sharing knowledge in automated
                  testing.
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <a
                  href="https://buy.stripe.com/7sIdTx1Zqe46dFu5kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
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
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
