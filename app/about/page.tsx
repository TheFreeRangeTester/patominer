import Link from "next/link";
import Image from "next/image";

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
            <div className="flex flex-col items-center mb-6">
              <div className="w-full max-w-2xl mb-4">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                  <Image
                    src="/images/PumasAllBlacks.jpeg"
                    alt="About Me"
                    className="w-full h-full object-cover rounded-lg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                Who the heck am I?
              </h2>
              <p className="text-lg text-black text-center">
                Hello! I&apos;m <strong>Patricio Miner</strong>, but you can
                call me <strong>Pato</strong>. I&apos;m a QA Engineering
                consultant and trainer based in{" "}
                <strong>Wellington, New Zealand</strong>. Originally from
                Argentina 🇦🇷, I made the decision to relocate to New Zealand
                eight years ago (being a Tolkien fan might had something to do
                with this...), embarking on a journey that would transform both
                my personal and professional life. Leaving behind the frenetic
                pace of Buenos Aires, I found solace in an office with a harbour
                view, where I could enjoy lunch while watching stingrays, whales
                and penguins - a truly welcome change.
              </p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <p className="text-lg text-black text-center">
                With a passion for quality assurance and software testing,
                I&apos;ve dedicated my career to helping organisations{" "}
                <strong>build better, more reliable software</strong>. My
                experience spans across various industries, working with teams
                of all sizes to implement robust testing strategies and
                cultivate a quality-first mindset. In the last years I&apos;ve
                been working in several{" "}
                <strong>high profile AI Projects</strong> for goverment agencies
                and banks, while still building great solutions with code and a
                tester mindset, to keep things scalable, giving meaningful
                feedback and with Quality as number one priority.
              </p>
            </div>
            <p className="text-lg mb-6 text-black text-center">
              As a trainer, I take great pride in sharing my knowledge and
              experience to the new generations of testers. I&apos;ve done this
              for several years, being the number one place to learn about
              testing and automation in Spanish with{" "}
              <a
                href="https://www.freerangetesters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <strong>www.freerangetesters.com</strong>
              </a>
              . Something I&apos;ve observed working as Test Lead and Manager is
              the lack of career paths and learning resources for people in New
              Zealand. This is when I started to shape the project of sharing my
              knowledge and teaching the ways of Test Engineering to anyone who
              wants to join this beautiful discipline in Software!
            </p>
            <h2 className="text-3xl font-bold my-8 text-black text-center">
              What I Offer
            </h2>
            <ul className="list-none mb-6 space-y-2 text-black text-center">
              <li className="flex justify-center items-center">
                <span className="mr-2">•</span> QA Engineering consultancy
                services
              </li>
              <li className="flex justify-center items-center">
                <span className="mr-2">•</span> Specialised training and
                workshops
              </li>
              <li className="flex justify-center items-center">
                <span className="mr-2">•</span> Test automation expertise
              </li>
              <li className="flex justify-center items-center">
                <span className="mr-2">•</span> Quality assurance strategy
                development
              </li>
              <li className="flex justify-center items-center">
                <span className="mr-2">•</span> Individual and group mentoring
              </li>
            </ul>
          </div>
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
