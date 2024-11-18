import Link from "next/link";

export default function Workshops() {
  const workshops = [
    {
      title: "Selenium WebDriver con Cucumber",
      description: "Capacitación especializada en Nueva Zelanda.",
      buyButtonId: "buy_btn_1QJ8DeGg3IBRIOi3Id5AAtmv",
    },
    {
      title: "Taller de Automatización de Pruebas",
      description: "Aprende a automatizar pruebas de software.",
      buyButtonId: "buy_btn_1QJ8DeGg3IBRIOi3Id5AAtmw",
    },
    {
      title: "Taller de Pruebas de Rendimiento",
      description: "Optimiza el rendimiento de tus aplicaciones.",
      buyButtonId: "buy_btn_1QJ8DeGg3IBRIOi3Id5AAtmx",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Talleres Disponibles
          </h1>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-black">
                {workshop.title}
              </h2>
              <p className="text-lg mb-4 text-black">{workshop.description}</p>
              <div className="text-center">
                <Link
                  href={`/workshops/${index}`}
                  className="inline-block mb-2 text-black"
                >
                  Ver más detalles
                </Link>
                <script
                  async
                  src="https://js.stripe.com/v3/buy-button.js"
                ></script>
                <stripe-buy-button
                  buy-button-id={workshop.buyButtonId}
                  publishable-key="pk_live_51NW6X0Gg3IBRIOi3EFcyicMON7GoIEYxMRMGDKk1WN52TVtZtjVzr1Bs2Zy8O7aVpQiTJe9YqjWE8yRcAsVhMlwB00QfOaI71V"
                ></stripe-buy-button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón para volver al inicio */}
      <div className="text-center">
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
