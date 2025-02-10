import Link from "next/link";

export default function Tutoring() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            1:1 Tutoring Sessions
          </h1>
          <p className="text-xl text-center mt-4 text-gray-600">
            Personalised guidance for your QA career journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How Can I Help You?</h2>

            <div className="prose max-w-none mb-12">
              <p className="text-lg mb-6">
                Whether you&apos;re just starting your QA career or looking to
                take the next step, I offer personalised 1:1 tutoring sessions
                to help guide you on your journey. With my experience in both
                the New Zealand market and international testing landscape, I
                can provide valuable insights and practical advice.
              </p>

              <h3 className="text-2xl font-bold mb-4">
                Session Topics Include:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Career guidance and progression in QA</li>
                <li>New Zealand job market insights and opportunities</li>
                <li>CV review and interview preparation</li>
                <li>Technical skill development planning</li>
                <li>Testing strategy and best practices</li>
                <li>Automation framework selection and implementation</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Session Format</h3>
              <ul className="list-disc pl-6 mb-8">
                <li>45-minute video call via Zoom</li>
                <li>Personalised action plan following the session</li>
                <li>Follow-up email support</li>
              </ul>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Take the Next Step?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a tutoring session and let&apos;s discuss your QA career
                goals
              </p>
              <Link
                href="https://calendly.com/workwithpato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Your Session
              </Link>
            </div>
          </div>
        </div>
        {/* Botón para volver al inicio */}
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
      </section>
    </div>
  );
}
