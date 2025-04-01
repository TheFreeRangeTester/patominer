import Image from "next/image";
import Map from "./Map";

interface WorkshopInfoProps {
  readonly isOnline: boolean;
  readonly title: string;
  readonly location?: {
    readonly address?: string;
    readonly city?: string;
    readonly country?: string;
  };
}

export default function WorkshopInfo({
  isOnline,
  title,
  location,
}: WorkshopInfoProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center md:text-left md:mr-8">
            <h2 className="text-3xl font-semibold mb-2 text-black">{title}</h2>
            <ul className="list-disc list-inside mb-4 text-black">
              <li>
                Taught by a seasoned QA Engineer and Coach with 16 years of
                experience.
              </li>
              {isOnline ? (
                <>
                  <li>
                    Online workshop accessible desde cualquier parte del mundo
                  </li>
                  <li>Recorded sessions and online lectures available 24/7</li>
                </>
              ) : (
                <>
                  <li>Focused on the Kiwi and Australian community</li>
                  <li>
                    Delivered from New Zealand, sharing expertise in automated
                    testing
                  </li>
                  {location && (
                    <li>
                      Location: {location.address}, {location.city},{" "}
                      {location.country}
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
          <div className="w-full md:max-w-sm p-4 bg-white shadow rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(139,92,246,0.8)] active:translate-x-0 active:translate-y-0 active:shadow-none">
            {isOnline ? (
              <Image
                src="/images/course.png"
                alt="Online Learning"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            ) : (
              <Map />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
