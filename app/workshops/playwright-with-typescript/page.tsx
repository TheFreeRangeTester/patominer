import Link from "next/link";

export default function PlaywrightTypeScript() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-20 bg-white text-black shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                <h1 className="text-5xl font-bold mb-4">
                  Testing Automation Essentials
                </h1>
              </h1>
              <ul className="list-disc list-inside mb-4">
                <li>4 week online, part-time course for software engineers</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <li>
                  24 February to 21 March 2025
                  <br />
                  Partial scholarships available
                </li>
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
            <img
              src="/path/to/image.jpg"
              alt="Workshop Image"
              className="mb-4 rounded-lg shadow-lg"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-20 bg-gray-200 text-black">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-semibold mb-2">Overview</h4>
          <h6 className="text-lg">
            This dynamic, online part-time course led by international testing
            expert Patricio Miner is specifically designed for software
            engineers aiming to elevate their expertise in the rapidly evolving
            field of Test Engineering and Automation Testing.
          </h6>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">What You Will Learn:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Introduction to Playwright and its features</li>
            <li>Setting up a TypeScript environment for Playwright</li>
            <li>Writing and running tests using TypeScript</li>
          </ul>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Details:</h2>
          <p className="mb-2">Date: March 15, 2023</p>
          <p className="mb-2">Time: 10:00 AM - 4:00 PM</p>
          <p className="mb-2">Location: Online (Zoom link will be provided)</p>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Best Practices:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Debugging and troubleshooting Playwright tests</li>
            <li>Best practices for test automation with Playwright</li>
          </ul>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="py-20 bg-gray-200 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2">Register Now!</h2>
          <p>
            To secure your spot in the Playwright with TypeScript workshop,
            please fill out the registration form.
          </p>
          <a href="/register" className="text-blue-600 underline">
            Register Here
          </a>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/workshops"
          className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          Back to Workshops
        </Link>
      </div>
    </div>
  );
}
