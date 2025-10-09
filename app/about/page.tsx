import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Pato Miner",
  description:
    "Learn more about Patricio Miner, a QA Engineering consultant and trainer based in Wellington, New Zealand, with 16 years of experience in software testing.",
  openGraph: {
    title: "About Pato Miner",
    description:
      "QA Engineering consultant and trainer with 16 years of experience",
    images: ["/images/aboutPage.png"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Bio Section */}
      <section className="md:py-16 py-4 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
                A little bit about myself
              </h2>
              <p className="text-lg text-black dark:text-gray-100 text-center">
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
              <p className="text-lg text-black dark:text-gray-100 text-center">
                With a passion for quality assurance and software testing,
                I&apos;ve dedicated my career to helping organisations{" "}
                <strong>build better, more reliable software</strong>. My
                experience spans across various industries, working with teams
                of all sizes to implement robust testing strategies and
                cultivate a quality-first mindset. In the last years I&apos;ve
                been working in several{" "}
                <strong>high profile AI Projects</strong> for government
                agencies and banks, while still building great solutions with
                code and a tester mindset, to keep things scalable, giving
                meaningful feedback and with Quality as number one priority.
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
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="w-full max-w-2xl mb-4">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                <Image
                  src="/images/ArgentinaNewZealand.png"
                  alt="Descripción de la imagen"
                  className="w-full h-full object-cover rounded-lg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold mb-2 text-black dark:text-white">
              Connect with me
            </h2>
            <div className="flex justify-center space-x-4 mt-6">
              <Link
                href="https://peach-freckle-a65.notion.site/Patricio-Miner-1b8aa7cafd638046942de69e65695a24?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                📄 CV Online
              </Link>
              <Link
                href="https://www.linkedin.com/in/patricio-m-690b3729/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                💼 LinkedIn
              </Link>
              <Link
                href="https://github.com/TheFreeRangeTester"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                👨‍💻 GitHub
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
