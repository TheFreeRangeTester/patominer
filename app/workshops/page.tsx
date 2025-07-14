"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Workshops() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Registrar el plugin de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Pequeño retraso para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      // Animación al hacer scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
            }
          );
        }
      });

      // Animación del botón de volver
      gsap.fromTo(
        ".back-button",
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".back-button",
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }, 100);

    // Limpiar las animaciones y el timer al desmontar
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const workshops = [
    {
      title: "From Manual to Automation Testing",
      description:
        "The one workshop to make the jump into the world of Test Engineering",
      location: "Asynchronous and online",
      starting_date: "July 21st, 2025",
      price: "$999",
      duration: "You will need around 10 hours per week",
      image: "/images/Selenium-Workshop.png",
      buyButtonId: "buy_btn_1RDaMbGg3IBRIOi3pnOT0fsS",
    },
    {
      title: "Advanced Test Engineering",
      description:
        "Time to master the big guns of your test engineer skillset and level up your game",
      location: "Asynchronous and online",
      starting_date: "October 20th, 2025",
      price: "$999",
      duration: "You will need around 10 hours per week",
      image: "/images/Playwright-Workshop.png",
      buyButtonId: "buy_btn_1RDaS2Gg3IBRIOi3oM10OVkM",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Workshops Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.buyButtonId}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="workshop-card border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 rounded-lg shadow-[8px_8px_0px_0px_rgba(251,146,60,1)] mb-4 overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={450}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                {workshop.title}
              </h2>
              <p className="text-lg mb-4 text-black dark:text-gray-100">
                {workshop.description}
              </p>
              <p className="text-md mb-2 text-gray-700 dark:text-gray-300">
                <span className="font-bold">📍 Location:</span>{" "}
                {workshop.location}
              </p>
              <p className="text-md mb-2 text-gray-700 dark:text-gray-300">
                <span className="font-bold">📅 Starting Date:</span>{" "}
                {workshop.starting_date}
              </p>
              <p className="text-md mb-4 text-gray-700 dark:text-gray-300">
                <span className="font-bold">⏱️ Duration:</span>{" "}
                {workshop.duration}
              </p>
              <div className="flex flex-col items-center">
                <Link
                  href={`/workshops/${workshop.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="group mt-3 inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none mb-2"
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
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="back-button inline-flex items-center gap-2 border-black border-2 bg-white px-6 py-3 font-bold text-black dark:text-white transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(252,165,165,1)] active:translate-x-0 active:translate-y-0 active:shadow-none relative z-10"
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
