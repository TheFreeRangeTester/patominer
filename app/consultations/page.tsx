import Link from "next/link";
import Image from "next/image";

export default function Consultations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1: Introducción */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4 text-black">
              QA Engineering Consultancy
            </h2>
            <p className="text-xl mb-4 text-black">
              Specialised services to optimise your testing processes
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: CV y Servicios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/home-principal.png"
              alt="Descripción de la imagen"
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
          </div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black">About Me</h3>
            <p className="text-lg text-gray-800 mt-4">
              I&apos;m an experienced QA Engineer with a proven track record in
              improving testing processes and implementing best practices.
              I&apos;ve worked with the top government agencies and banks in New
              Zealand, Australia, Argentina and the US with excellent results.
              <br />
              <br />I love challenging the QA Engineering processes and
              conceptions to follow up with ideas and implementation while
              teaching the reasoning behind them. Test Engineering is a great
              tool when you put it in the right hands and my clients can proudly
              confirm this🤖!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-bold mb-4 text-black">
                Services Offered
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Testing Strategy Development</li>
                <li>Test Automation Implementation</li>
                <li>Quality Management</li>
                <li>CI/CD and Test integration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h3 className="text-xl font-bold mb-4 text-black">
                Professional Experience
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>16+ years in QA Engineering</li>
                <li>Worked with top tech companies</li>
                <li>Expert in Agile methodologies</li>
                <li>ISTQB FL and DevOps certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Enlaces y Contacto */}
      <section className="py-16 bg-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2 text-black">
              Connect with Me
            </h2>
            <div className="flex justify-center space-x-4 mt-6">
              <Link
                href="https://peach-freckle-a65.notion.site/Patricio-Miner-1b8aa7cafd638046942de69e65695a24?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none rounded-full"
              >
                📄 CV Online
              </Link>
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
