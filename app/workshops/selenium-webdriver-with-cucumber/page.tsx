import Link from "next/link";

export default function SeleniumWebDriverJavaCucumber() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Curso de Selenium WebDriver con Java y Cucumber
          </h1>
          <p className="text-xl text-center mt-4 text-black">
            Aprende a automatizar pruebas de aplicaciones web utilizando
            Selenium WebDriver, Java y Cucumber.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Contenido del Curso
          </h2>
          <ul className="list-disc list-inside mb-8">
            <li>Introducción a Selenium WebDriver</li>
            <li>Configuración del entorno de desarrollo</li>
            <li>Fundamentos de Java para pruebas automatizadas</li>
            <li>
              Uso de Cucumber para pruebas basadas en comportamiento (BDD)
            </li>
            <li>Escritura de pruebas automatizadas con Selenium</li>
            <li>Integración de Cucumber con Selenium</li>
            <li>Mejores prácticas en automatización de pruebas</li>
            <li>Ejercicios prácticos y proyectos finales</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-black">
            Requisitos Previos
          </h2>
          <p className="text-lg mb-4 text-black">
            Conocimientos básicos de programación en Java y conceptos de pruebas
            de software.
          </p>

          <div className="text-center">
            <Link
              href="/workshops"
              className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Back to Workshops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
