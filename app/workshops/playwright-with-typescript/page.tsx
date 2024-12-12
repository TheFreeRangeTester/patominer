import Link from "next/link";
import Image from "next/image";

export default function PlaywrightTypeScript() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sección 1 */}
      <section className="py-20 bg-white text-black shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">
                E2E Automation with Playwright and TypeScript
              </h2>
              <ul className="list-disc list-inside mb-4">
                <li>4 week online, part-time course for software engineers.</li>
                <li>6-10 hours per week, designed to fit around your job</li>
                <span className="font-mono font-bold text-base">
                  <span className="font-mono font-normal text-base text-green-500">
                    Tuesday and Thursdays
                  </span>
                  <br />
                  February 24th to March 21st, 2025
                </span>
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                href=""
              >
                Apply now
              </a>
            </div>
            <Image
              src="/path/to/image.jpg"
              alt="Curso de Playwright y TypeScript"
              width={500}
              height={300}
              className="mb-4 rounded-lg shadow-lg max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="py-20 bg-gray-200 text-black">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-semibold mb-2">
            ¿Por qué aprender Playwright con TypeScript?
          </h4>
          <h4 className="text-2xl font-semibold mb-2">¿Qué es Playwright?</h4>
          <p>
            Playwright es una herramienta de automatización de pruebas de
            extremo a extremo para aplicaciones web modernas. Es compatible con
            todos los navegadores principales y proporciona una API de alto
            nivel para interactuar con ellos.
            <br />
            <br />
          </p>
          <h4 className="text-2xl font-semibold mb-1">
            ¿Por qué TypeScript con Playwright?
          </h4>
          <p>
            TypeScript es un superconjunto tipado de JavaScript que se compila a
            JavaScript simple. Proporciona una forma más segura de escribir
            código y es compatible con Playwright para una mejor experiencia de
            desarrollo.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Aumenta tus oportunidades laborales
              </h5>
              <p>
                Aprender Playwright con TypeScript es una habilidad esencial
                para asegurar un empleo en Australia y Nueva Zelanda.
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(29,53,87,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Automatización de pruebas eficiente
              </h5>
              <p>
                La combinación de Playwright y TypeScript permite una
                automatización de pruebas eficiente y confiable, una habilidad
                muy buscada en la industria.
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(42,157,143,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
              <h5 className="text-lg font-semibold mb-2">
                Estándar de la industria
              </h5>
              <p>
                Las tendencias internacionales y locales muestran que la
                adopción de esta herramienta se está convirtiendo en el estándar
                de la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Image
              src="/path_to_your_image.jpg"
              alt="Instructor de Playwright"
              width={256}
              height={256}
              className="mr-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-2">The teacher:</h2>
              <ul className="list-disc list-inside mb-4">
                <p>
                  Con 16 años de experiencia como Ingeniero QA y Coach, he
                  dedicado mi carrera a enseñar a la comunidad latina y
                  española. Ahora, viviendo en Nueva Zelanda, estoy emocionado
                  de compartir mi conocimiento y experiencia en el campo de las
                  pruebas automatizadas.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <div>
                <h2 className="text-3xl font-semibold mb-2">
                  Workshop dynamic
                </h2>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Dictado por un Ingeniero QA y Coach con 16 años de
                    experiencia.
                  </li>
                  <li>Enfocado en la comunidad latina y española.</li>
                  <li>
                    Impartido desde Nueva Zelanda, compartiendo conocimiento en
                    pruebas automatizadas.
                  </li>
                </ul>
              </div>
              <Image
                src="/path_to_your_image.jpg"
                alt="Teacher's photo"
                width={256}
                height={256}
                className="ml-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Image
              src="/path_to_your_image.jpg"
              alt="Instructor de Playwright"
              width={256}
              height={256}
              className="mr-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                What will we cover?
              </h2>
              <ul className="list-disc list-inside mb-4">
                <p>
                  Con 16 años de experiencia como Ingeniero QA y Coach, he
                  dedicado mi carrera a enseñar a la comunidad latina y
                  española. Ahora, viviendo en Nueva Zelanda, estoy emocionado
                  de compartir mi conocimiento y experiencia en el campo de las
                  pruebas automatizadas.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Join today!</h2>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    Dictado por un Ingeniero QA y Coach con 16 años de
                    experiencia.
                  </li>
                  <li>Enfocado en la comunidad latina y española.</li>
                  <li>
                    Impartido desde Nueva Zelanda, compartiendo conocimiento en
                    pruebas automatizadas.
                  </li>
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="https://tu-enlace-de-pago-stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300 text-lg font-semibold"
                  >
                    Inscríbete Ahora - $299 USD
                  </a>
                </div>
              </div>
              <Image
                src="/path_to_your_image.jpg"
                alt="Teacher's photo"
                width={256}
                height={256}
                className="ml-4 w-64 h-64 max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/workshops"
            className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Back to Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
