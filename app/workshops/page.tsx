import Link from "next/link";
import Image from "next/image";

export default function Workshops() {
  const workshops = [
    {
      title: "Selenium WebDriver with Cucumber",
      description:
        "The one workshop to dominate the most demanded tool in the market.",
      location: "Online",
      price: "$100",
      duration: "50 hours",
      image: "/images/Selenium-Workshop.png",
      buyButtonId: "buy_btn_1QJ8DeGg3IBRIOi3Id5AAtmv",
    },
    {
      title: "Playwright with TypeScript",
      description:
        "Keen to learn the tool with the best projection for the upcoming years? This is the workshop for you!",
      location: "In-person at Tech Center",
      price: "$150",
      duration: "8 hours",
      image: "/images/Playwright-Workshop.png",
      buyButtonId: "buy_btn_1QvlKCGg3IBRIOi3GxebDPeB",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hidden md:block md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black">
            Available and upcoming Workshops
          </h1>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="md:py-16 py-4 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {workshops.map((workshop) => (
            <div
              key={workshop.buyButtonId}
              className="border rounded-lg p-6 shadow-lg"
            >
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black">
                {workshop.title}
              </h2>
              <p className="text-lg mb-4 text-black">{workshop.description}</p>
              <p className="text-md mb-2 text-gray-700">
                Location: {workshop.location}
              </p>
              <p className="text-md mb-2 text-gray-700">
                Price: {workshop.price}
              </p>
              <p className="text-md mb-4 text-gray-700">
                Duration: {workshop.duration}
              </p>
              <div className="flex flex-col items-center">
                <Link
                  href={`/workshops/${workshop.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
                >
                  View more details
                </Link>
                <script
                  async
                  src="https://js.stripe.com/v3/buy-button.js"
                ></script>
                <div className="mt-2">
                  <stripe-buy-button
                    buy-button-id={workshop.buyButtonId}
                    publishable-key="pk_live_51NW6X0Gg3IBRIOi3EFcyicMON7GoIEYxMRMGDKk1WN52TVtZtjVzr1Bs2Zy8O7aVpQiTJe9YqjWE8yRcAsVhMlwB00QfOaI71V"
                  ></stripe-buy-button>
                </div>
              </div>
            </div>
          ))}
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
      </section>
    </div>
  );
}
