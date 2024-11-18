import Link from "next/link";

export default function Talks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Conferencias y Charlas
          </h1>
          <p className="text-xl text-center mt-4 text-black">
            Compartiendo conocimientos y experiencias con la comunidad de
            testing
          </p>
        </div>
      </section>

      {/* Conferencias Pasadas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Conferencias Pasadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                TestingConf 2023
              </h3>
              <p className="text-black mb-4 text-black">
                &quot;Automatización de Pruebas Modernas con Playwright&quot;
              </p>
              <p className="text-black">Wellington, Nueva Zelanda</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">
                QA Summit 2023
              </h3>
              <p className="text-black mb-4">
                &quot;Mejores Prácticas en Testing de APIs&quot;
              </p>
              <p className="text-black">Sydney, Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invítame a Hablar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Invítame a Tu Conferencia
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-black mb-6">
              Estoy disponible para participar en conferencias y eventos:
            </p>
            <ul className="list-disc pl-5 mb-6 text-black">
              <li>Conferencias online a nivel mundial</li>
              <li>Eventos presenciales en Nueva Zelanda y Australia</li>
              <li>
                Charlas técnicas y keynotes sobre testing y automatización
              </li>
              <li>Workshops y sesiones interactivas</li>
            </ul>
            <div className="space-y-4">
              <p className="text-black">
                Para invitarme a hablar en tu evento, contáctame a través de:
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-black"
              >
                Contactar para Eventos
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
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
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
}
