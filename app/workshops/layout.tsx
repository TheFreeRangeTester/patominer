import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops - Pato Miner",
  description:
    "Hands-on, practical workshops to get you working with Test Engineering tools such as Selenium WebDriver, Cypress, Playwright and Jenkins!",
  openGraph: {
    title: "Workshops - Pato Miner",
    description:
      "Hands-on, practical workshops to get you working with Test Engineering tools",
    images: ["/images/workshops.png"],
  },
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
