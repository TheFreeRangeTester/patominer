import Link from "next/link";

export default function Consultations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Consultoría en QA Engineering
          </h1>
          <p className="text-xl text-center mt-4 text-gray-800">
            Servicios especializados para optimizar sus procesos de testing
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Servicios de Consultoría
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Estrategia de Testing
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Evaluación de procesos actuales</li>
                <li>Desarrollo de estrategias de QA</li>
                <li>Implementación de mejores prácticas</li>
                <li>Optimización de flujos de trabajo</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Automatización de Pruebas
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Diseño de frameworks de automatización</li>
                <li>Implementación de CI/CD</li>
                <li>Selección de herramientas</li>
                <li>Capacitación de equipos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Gestión de Calidad
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Auditorías de calidad</li>
                <li>Métricas y reportes</li>
                <li>Gestión de defectos</li>
                <li>Procesos de QA ágil</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                Performance y Seguridad
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Pruebas de rendimiento</li>
                <li>Pruebas de seguridad básicas</li>
                <li>Optimización de aplicaciones</li>
                <li>Monitoreo y análisis</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              ¿Interesado en mis servicios?
            </h3>
            <p className="text-gray-800 mb-6">
              Agenda una llamada de consulta gratuita para discutir cómo puedo
              ayudar a tu empresa
            </p>
            <Link
              href="https://calendly.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Agendar Llamada
            </Link>
          </div>

          {/* Botón para volver al inicio */}
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
