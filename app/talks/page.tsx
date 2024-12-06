import Link from "next/link";
import Image from "next/image";

export default function Talks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Conferences and Talks
          </h1>
          <p className="text-xl text-center mt-4 text-black">
            Sharing knowledge and experiences with the testing community
          </p>
        </div>
      </section>

      {/* Past Conferences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Past Conferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                TestingConf 2023
              </h3>
              <p className="text-black mb-4 text-black">
                &quot;Modern Test Automation with Playwright&quot;
              </p>
              <p className="text-black">Wellington, New Zealand</p>
              <div className="mt-4">
                <Image
                  src="/images/testingconf2023.png"
                  alt="TestingConf 2023"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                QA Summit 2023
              </h3>
              <p className="text-black mb-4">
                &quot;Best Practices in API Testing&quot;
              </p>
              <p className="text-black">Sydney, Australia</p>
              <div className="mt-4">
                <Image
                  src="/images/qasummit2023.png"
                  alt="QA Summit 2023"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Nerdearla 2023
              </h3>
              <p className="text-black mb-4">
                &quot;Innovations in Testing&quot;
              </p>
              <p className="text-black">Buenos Aires, Argentina</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="Nerdearla 2023"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Nerdearla 2024
              </h3>
              <p className="text-black mb-4">
                &quot;Future Trends in Testing&quot;
              </p>
              <p className="text-black">Buenos Aires, Argentina</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="Nerdearla 2024"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                NZTesting Conference
              </h3>
              <p className="text-black mb-4">
                &quot;Testing in the Digital Age&quot;
              </p>
              <p className="text-black">Auckland, New Zealand</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="NZTesting Conference"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">VLCTesting</h3>
              <p className="text-black mb-4">
                &quot;Effective Testing Strategies&quot;
              </p>
              <p className="text-black">Valparaíso, Chile</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="VLCTesting"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                TestingDays Chile
              </h3>
              <p className="text-black mb-4">
                &quot;Automation and Quality&quot;
              </p>
              <p className="text-black">Santiago, Chile</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="TestingDays Chile"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                QualitySense Conf
              </h3>
              <p className="text-black mb-4">
                &quot;Improving Software Quality&quot;
              </p>
              <p className="text-black">Lima, Peru</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="QualitySense Conf"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                TestingMinds Auckland
              </h3>
              <p className="text-black mb-4">
                &quot;Innovations in Test Automation&quot;
              </p>
              <p className="text-black">Auckland, New Zealand</p>
              <div className="mt-4">
                <Image
                  src="/url_de_la_imagen"
                  alt="TestingMinds Auckland"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invite Me to Speak */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black text-center">
            Invite Me to Your Conference
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-black mb-6">
              I am available to participate in conferences and events:
            </p>
            <ul className="list-disc pl-5 mb-6 text-black">
              <li>Online conferences worldwide</li>
              <li>In-person events in New Zealand and Australia</li>
              <li>Technical talks and keynotes on testing and automation</li>
              <li>Workshops and interactive sessions</li>
            </ul>
            <div className="space-y-4">
              <p className="text-black">
                To invite me to speak at your event, please contact me at:
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-black"
              >
                Contact for Events
              </a>
            </div>
          </div>
        </div>
        {/* Button to return to home */}
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
