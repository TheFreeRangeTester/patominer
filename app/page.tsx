"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Registrar los plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const additionalTextRef = useRef<HTMLParagraphElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Limpiar todas las animaciones existentes
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");

    // Configurar el estado inicial de todos los elementos, incluyendo la barra de navegación
    const elements = [
      navRef.current,
      ".hero-title",
      ".hero-description",
      ".hero-image",
      ".about-image",
      ...sectionsRef.current,
    ].filter(Boolean);

    // Configurar el estado inicial sin animación
    gsap.set(elements, {
      opacity: 1,
      y: 0,
      clearProps: "all",
    });

    // Asegurarnos de que las fuentes estén cargadas antes de aplicar las animaciones
    document.fonts.ready.then(() => {
      // Split text animations
      if (titleRef.current) {
        const splitTitle = SplitText.create(titleRef.current, {
          type: "words",
          aria: "hidden",
        });
        gsap.from(splitTitle.words, {
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.1,
        });
      }

      if (descriptionRef.current) {
        const splitDescription = SplitText.create(descriptionRef.current, {
          type: "words",
          aria: "hidden",
        });
        gsap.from(splitDescription.words, {
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.1,
        });
      }

      if (additionalTextRef.current) {
        const splitAdditionalText = SplitText.create(
          additionalTextRef.current,
          { type: "words", aria: "hidden" }
        );
        gsap.from(splitAdditionalText.words, {
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.1,
        });
      }
    });

    // Animación del Hero con efectos más sutiles
    const heroTl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    heroTl.from(".hero-image", {
      scale: 0.98,
      opacity: 0,
      duration: 0.8,
    });

    // Animación de About con efecto de entrada más sutil
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Animación de las secciones con efectos más sutiles
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
        });
      }
    });

    // Animación de los botones
    gsap.from("a[href]", {
      y: 10,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
    });

    // Efecto hover para los botones
    const buttons = document.querySelectorAll("a[href]");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
        });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    // Asegurarnos de que los elementos del footer sean visibles
    gsap.set("footer a, footer p", {
      opacity: 1,
      y: 0,
      clearProps: "all",
    });

    // Asegurarnos de que los botones en el cuerpo de la página sean visibles
    gsap.set("section a[href]", {
      opacity: 1,
      y: 0,
      clearProps: "all",
    });

    return () => {
      // Limpiar las animaciones al desmontar
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
      // Limpiar los event listeners
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Asegurarnos de que los elementos sean visibles inicialmente
  useEffect(() => {
    // Pequeño retraso para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      gsap.set(
        [
          "nav",
          ".hero-title",
          ".hero-description",
          ".hero-image",
          ".about-image",
          ...sectionsRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          clearProps: "all",
        }
      );
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text">
      <nav ref={navRef}>{/* Contenido de la barra de navegación */}</nav>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1
                ref={titleRef}
                className="hero-title text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6"
              >
                Elevate your Software Testing to the next level
              </h1>
              <p
                ref={descriptionRef}
                className="hero-description text-lg md:text-xl"
              >
                Equipping quality assurance professionals with the skills and
                knowledge that are relevant in the market.
              </p>
              <div className="mb-4" />
              <p
                ref={additionalTextRef}
                className="hero-description text-lg md:text-xl"
              >
                From the very beginnings (even if you never have done testing in
                your life) to the more advanced steps in the QA Engineering
                career, we cover it all!
              </p>
            </div>
            <div className="flex-1 w-full max-w-[500px] mx-auto md:mx-0">
              <div className="hero-image aspect-square bg-teal-700 rounded-lg border-2 border-teal-600 shadow-[8px_8px_0px_0px_rgba(134,239,172,1)] dark:shadow-[8px_8px_0px_0px_rgba(20,184,166,1)]">
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
      <section
        id="about"
        className="py-12 md:py-20 bg-white dark:bg-dark-surface"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="w-full max-w-[600px] mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 dark:bg-dark-surfaceHover rounded-lg shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] dark:shadow-[8px_8px_0px_0px_rgba(239,68,68,1)]"></div>
              <Image
                src="/images/aboutmeMain.png"
                alt="About me"
                className="about-image relative w-full h-auto object-cover rounded-lg"
                width={800}
                height={600}
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
          <p className="text-gray-600 dark:text-dark-textSecondary mb-6">
            Hi 👋🏻, I&apos;m Pato Miner, a Test Engineering Consultant and
            Trainer that made all the way from Argentina to the beautiful city
            of Wellington, New Zealand. But...there is more to know about me,
            specially if you want to work with or be trained by me!
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 border-black dark:border-white border-2 bg-amber-500 dark:bg-amber-600 px-4 md:px-6 py-2 md:py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
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
        <Section
          key={section.id}
          {...section}
          reverse={index % 2 === 0}
          sectionRef={(el) => (sectionsRef.current[index] = el)}
        />
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
  sectionRef,
}: Readonly<{
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc?: string;
  reverse: boolean;
  sectionRef: (el: HTMLDivElement | null) => void;
}>) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-12 md:py-16 ${
        reverse
          ? "bg-gray-100 dark:bg-dark-surface"
          : "bg-gray-100/50 dark:bg-dark-surfaceHover"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-12`}
        >
          <div className="flex-1 w-full max-w-[500px]">
            <div
              className={`aspect-video bg-gray-200 dark:bg-dark-surfaceHover rounded-lg ${
                reverse
                  ? "shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(245,101,101,1)]"
                  : "shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] dark:shadow-[8px_8px_0px_0px_rgba(239,68,68,1)]"
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
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-dark-textSecondary">
                  {title} Image
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 dark:text-dark-textSecondary mb-6">
              {description}
            </p>
            <Link
              href={linkHref}
              className="group inline-flex items-center gap-2 border-black dark:border-white border-2 bg-amber-500 dark:bg-amber-600 px-4 md:px-6 py-2 md:py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(252,165,165,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
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
