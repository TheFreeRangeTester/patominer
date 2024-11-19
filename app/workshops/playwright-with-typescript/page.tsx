import Link from "next/link";

export default function PlaywrightTypeScript() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">
            Playwright with TypeScript Workshop
          </h1>
          <p className="mb-2">
            Join our comprehensive workshop on Playwright with TypeScript, the
            powerful automation library for browser testing.
          </p>
          <h2 className="text-xl font-semibold mb-2">What You Will Learn:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Introduction to Playwright and its features</li>
            <li>Setting up a TypeScript environment for Playwright</li>
            <li>Writing and running tests using TypeScript</li>
            <li>Debugging and troubleshooting Playwright tests</li>
            <li>Best practices for test automation with Playwright</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Details:</h2>
          <p className="mb-2">Date: March 15, 2023</p>
          <p className="mb-2">Time: 10:00 AM - 4:00 PM</p>
          <p className="mb-2">Location: Online (Zoom link will be provided)</p>
          <h2 className="text-xl font-semibold mb-2">Register Now!</h2>
          <p>
            To secure your spot in the Playwright with TypeScript workshop,
            please fill out the registration form.
          </p>
          <a href="/register" className="text-blue-500 underline">
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
