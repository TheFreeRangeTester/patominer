import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section - Texto izquierda, imagen derecha */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Teaching Testers Achieve Their Dreams
              </h1>
              <p className="text-xl">
                Empowering quality assurance professionals with the skills and
                knowledge they need to excel in their careers.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-square bg-teal-700 rounded-lg border-2 border-teal-600 shadow-[8px_8px_0px_0px_rgba(134,239,172,1)]">
                <img
                  src="/images/home-principal.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Imagen izquierda, texto derecha */}
      <section id="about" className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  About Image
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">About me</h2>
              <p className="text-gray-600 mb-6">
                Learn more about my journey in software testing and how I help
                others succeed in their QA careers.
              </p>
              <Link
                href="/about"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section - Texto izquierda, imagen derecha */}
      <section id="workshops" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Workshops</h2>
              <p className="text-gray-600 mb-6">
                Interactive sessions designed to enhance your testing skills
                through practical exercises.
              </p>
              <Link
                href="/workshops"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(252,165,165,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Workshops Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Imagen izquierda, texto derecha */}
      <section id="courses" className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Courses Image
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Courses</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive online courses to master software testing
                fundamentals and advanced techniques.
              </p>
              <Link
                href="/courses"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Section - Texto izquierda, imagen derecha */}
      <section id="tutoring" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Tutoring</h2>
              <p className="text-gray-600 mb-6">
                Personalized mentoring sessions to guide you through your
                testing career path and help you achieve your professional
                goals.
              </p>
              <Link
                href="/tutoring"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(252,165,165,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Tutoring Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultations Section - Imagen izquierda, texto derecha */}
      <section id="consultations" className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Consultations Image
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Consultations</h2>
              <p className="text-gray-600 mb-6">
                Expert advice and solutions for your specific testing challenges
                through one-on-one consultation sessions.
              </p>
              <Link
                href="/consultations"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Talks Section - Texto izquierda, imagen derecha */}
      <section id="talks" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Conference Talks</h2>
              <p className="text-gray-600 mb-6">
                Engaging presentations and keynotes at testing conferences
                worldwide, sharing insights and best practices with the
                community.
              </p>
              <Link
                href="/talks"
                className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>View more</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(252,165,165,1)]">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Conference Talks Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
