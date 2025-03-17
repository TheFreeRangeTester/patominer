import Link from "next/link";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hidden md:block md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Welcome to the Community!
          </h1>
          <p className="text-xl text-center mt-4 text-gray-800">
            Thank you for joining our mailing list
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="md:py-16 py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <div className="flex flex-col items-center mb-6">
              <div className="w-full max-w-2xl mb-4">
                <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]">
                  <Image
                    src="/images/PumasAllBlacks.jpeg"
                    alt="Celebration"
                    className="w-full h-full object-cover rounded-lg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-black">
                Your subscription has been confirmed!
              </h2>
              <p className="text-lg text-black text-center">
                I&apos;m thrilled to have you join our testing community.
                You&apos;ll soon receive exclusive content about QA Engineering,
                automation, and the latest trends in software testing.
              </p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <p className="text-lg text-black text-center">
                Meanwhile, I invite you to follow me on social media to stay up
                to date with the latest news and resources about software
                testing.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold mb-2 text-black">
              Connect with Me
            </h2>
            <div className="flex justify-center space-x-4 mt-6">
              <Link
                href="https://www.linkedin.com/in/patricio-m-690b3729/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                💼 LinkedIn
              </Link>
              <Link
                href="https://github.com/TheFreeRangeTester"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                👨‍💻 GitHub
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
