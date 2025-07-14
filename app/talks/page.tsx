import Link from "next/link";
import Image from "next/image";

export default function Talks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1: Introducción */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4 text-black dark:text-white">
              Conferences and Talks
            </h2>
            <p className="text-xl mb-4 text-black dark:text-gray-100">
              Sharing knowledge and experiences with the testing community
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Galería de Imágenes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <Link
                href="https://nerdear.la/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/conferences/Nerdearla.png"
                  alt="Nerdearla"
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="https://nztestingconf.nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/conferences/NZTestingConf.png"
                  alt="NZ Testing Conf"
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                href="https://qualitysenseconf.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/conferences/QualitySenseConf.png"
                  alt="Quality Sense Conf"
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            <div className="col-span-2">
              <Link
                href="https://www.testingenchile.cl/testing-day-chile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/conferences/TestingDaysChile.png"
                  alt="Testing Day Chile"
                  className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            {/* Agrega más imágenes según sea necesario */}
          </div>
        </div>
      </section>

      {/* Sección 3: Invitación a Colaborar */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2 text-black dark:text-white">
              Connect with Me
            </h2>
            <ul className="list-disc list-inside mb-4 text-black">
              <li>Available for talks in English and Spanish.</li>
              <li>In-person events in New Zealand and Australia.</li>
            </ul>
            <div className="flex justify-center mt-6">
              <a
                href="https://calendly.com/workwithpato/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto border-black border-2 bg-white px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mx-auto"
              >
                Contact for Events
              </a>
            </div>
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
      </section>
    </div>
  );
}
