import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            About Me
          </h1>
          <p className="text-xl text-center mt-4 text-gray-800">
            QA Engineering Consultant &amp; Trainer
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">My Journey</h2>
            <p className="text-lg mb-6 text-black">
              Hello! I&apos;m Patricio Miner, a QA Engineering consultant and
              trainer based in New Zealand. Originally from Argentina, I made
              the exciting decision to relocate to New Zealand eight years ago,
              embarking on a journey that would transform both my personal and
              professional life.
            </p>
            <p className="text-lg mb-6 text-black">
              With a passion for quality assurance and software testing,
              I&apos;ve dedicated my career to helping organisations build
              better, more reliable software. My experience spans across various
              industries, working with teams of all sizes to implement robust
              testing strategies and cultivate a quality-first mindset.
            </p>
            <p className="text-lg mb-6 text-black">
              As a trainer, I take great pride in sharing my knowledge and
              experience with the next generation of QA engineers. Through
              workshops, courses, and personalised training sessions, I help
              professionals develop the skills they need to excel in the
              ever-evolving field of software testing.
            </p>
            <h2 className="text-3xl font-bold my-8 text-black">What I Offer</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
              <li>QA Engineering consultancy services</li>
              <li>Specialised training and workshops</li>
              <li>Test automation expertise</li>
              <li>Quality assurance strategy development</li>
              <li>Individual and group mentoring</li>
            </ul>
          </div>
          <div className="mt-8">
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
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
