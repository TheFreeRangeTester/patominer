import Link from "next/link";
import Image from "next/image";

export default function Tutoring() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hidden md:block md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Private Tutoring
          </h1>
        </div>
      </section>

      {/* Tutoring Section */}
      <section className="md:py-16 py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="border rounded-lg p-6 shadow-lg text-center">
            <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4 max-w-2xl mx-auto">
              <Image
                src="/images/tutoring.png"
                alt="Private Tutoring"
                className="w-full h-full object-cover rounded-lg"
                width={600}
                height={338}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">
              One-on-One Tutoring Sessions
            </h2>
            <p className="text-lg mb-4 text-black">
              Get personalized guidance and support in your QA journey.
            </p>
            <div className="space-y-4 text-black">
              <p className="text-center">
                Whether you&apos;re just starting out or looking to advance your
                career in QA, I offer tailored tutoring sessions to help you
                achieve your goals.
              </p>
              <ul className="list-disc space-y-2 inline-block text-left">
                <li>Flexible scheduling to fit your needs</li>
                <li>Customized learning path</li>
                <li>
                  Extensive knowledge of the market, with focus in New Zealand
                  and Australia.
                </li>
                <li>
                  A safe space to express your doubts about what step to take
                  next
                </li>
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="https://calendly.com/patominer/30min"
                target="_blank"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                Schedule a Session
              </Link>
            </div>
          </div>

          {/* Back to Home button */}
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
