import Link from "next/link";

export default function Consultations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            QA Engineering Consultancy
          </h1>
          <p className="text-xl text-center mt-4 text-gray-800">
            Specialised services to optimise your testing processes
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            <div className="text-center">Consultancy services</div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Testing Strategy
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Evaluation of current processes</li>
                <li>Development of QA strategies</li>
                <li>Implementation of best practices</li>
                <li>Optimisation of workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Test Automation
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Design of automation frameworks</li>
                <li>Implementation of CI/CD</li>
                <li>Selection of tools</li>
                <li>Team training</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Quality Management
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Quality audits</li>
                <li>Metrics and reporting</li>
                <li>Defect management</li>
                <li>Agile QA processes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Performance and Security
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Performance testing</li>
                <li>Basic security testing</li>
                <li>Application optimisation</li>
                <li>Monitoring and analysis</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Interested in my services?
            </h3>
            <p className="text-gray-800 mb-6">
              Schedule a free consultation call to discuss how I can help your
              company
            </p>
            <Link
              href="https://calendly.com/workwithpato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Call
            </Link>
          </div>

          {/* Button to go back to home */}
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
