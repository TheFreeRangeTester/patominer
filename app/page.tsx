import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                Elevate your Software Testing to the next level
              </h1>
              <p className="text-lg md:text-xl">
                Equipping quality assurance professionals with the skills and
                knowledge that are relevant in the market.
              </p>
              <div className="mb-4" />
              <p className="text-lg md:text-xl">
                From the very beginnings (even if you never have done testing in
                your life) to the more advanced steps in the QA Engineering
                career, we cover it all!
              </p>
            </div>
            <div className="flex-1 w-full max-w-[500px] mx-auto md:mx-0">
              <div className="aspect-square bg-teal-700 rounded-lg border-2 border-teal-600 shadow-[8px_8px_0px_0px_rgba(134,239,172,1)]">
                <Image
                  src="/images/home-principal.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-full max-w-[600px] mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(252,165,165,1)]"></div>
              <Image
                src="/images/aboutmeMain.png"
                alt="About me"
                className="relative w-full h-auto object-cover rounded-lg"
                width={800}
                height={600}
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
          <p className="text-gray-600 mb-6">
            Hi 👋🏻, I&apos;m Pato Miner, a Test Engineering Consultant and
            Trainer that made all the way from Argentina to the beautiful city
            of Wellington, New Zealand. But...there is more to know about me,
            specially if you want to work with or be trained by me!
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-4 md:px-6 py-2 md:py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <span>Know more about me</span>
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Secciones comunes - usando un componente reutilizable */}
      {sections.map((section, index) => (
        <Section key={section.id} {...section} reverse={index % 2 === 0} />
      ))}
    </div>
  );
}

// Componente Section reutilizable
function Section({
  id,
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  reverse,
}: Readonly<{
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc?: string;
  reverse: boolean;
}>) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${reverse ? "bg-gray-100" : "bg-gray-100/50"}`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-12`}
        >
          <div className="flex-1 w-full max-w-[500px]">
            <div
              className={`aspect-video bg-gray-200 rounded-lg ${
                reverse
                  ? "shadow-[8px_8px_0px_0px_rgba(251,146,60,1)]"
                  : "shadow-[8px_8px_0px_0px_rgba(252,165,165,1)]"
              }`}
            >
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={450}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {title} Image
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link
              href={linkHref}
              className="group inline-flex items-center gap-2 border-black border-2 bg-amber-500 px-4 md:px-6 py-2 md:py-3 font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <span>{linkText}</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Datos de las secciones
const sections = [
  {
    id: "workshops",
    title: "Workshops",
    description:
      "Hands-on 🧑🏻‍💻, practical workshops to get you working with Test Engineering tools such as Selenium WebDriver, Cypress, Playwright and Jenkins! The best part? We focus on the skills and tools most demanded in the market!",
    linkText: "Check our workshops",
    linkHref: "/workshops",
    imageSrc: "/images/workshops.png",
  },
  {
    id: "course",
    title: "Course",
    description:
      "One course to rule them all. This course is designed to give you all the tools to get yourself in the market, future proof and with the best practices taught by an experienced teacher. It will be updating yearly adding the hottest trends in the QA Space so you don't have to worry about which course to take next.",
    linkText: "See The Course 😱",
    linkHref: "/courses",
    imageSrc: "/images/course.png",
  },
  {
    id: "consultations",
    title: "Consultations",
    description:
      "Do you need an experienced Senior QA Engineer to make your SDLC shine? I can help you with that. Let's have a chat about your quality goals",
    linkText: "Let's talk work!",
    linkHref: "/consultations",
    imageSrc: "/images/consultations.png",
  },
  {
    id: "tutoring",
    title: "Coffee catchup",
    description:
      "A long career in the international and local market gave me a lot of insight and advice. Let's have a catchup and talk about your objectives and how can you achieve them.",
    linkText: "Let's talk about your future",
    linkHref: "/tutoring",
    imageSrc: "/images/mentoring.png",
  },
  {
    id: "conferences",
    title: "Conferences & Talks",
    description:
      "I love speaking at conferences and other events and exchange knowledge while we all learn. Do you have something upcoming you would like me to participate in? Hit that button below!",
    linkText: "Let's connect",
    linkHref: "/talks",
    imageSrc: "/images/conferences.png",
  },
  // ... Agrega el resto de las secciones aquí
];
