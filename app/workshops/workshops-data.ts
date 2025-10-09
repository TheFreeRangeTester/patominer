export interface Workshop {
    id: string;
    title: string;
    description: string;
    location: string;
    starting_date: string;
    end_date: string;
    schedule: string;
    price: string;
    duration: string;
    image: string;
    buyButtonId: string;
    slug: string;
}

export const workshopsData: Workshop[] = [
    {
        id: "from-manual-to-automation",
        title: "From Manual to Automation Testing",
        description:
            "The one workshop to make the jump into the world of Test Engineering",
        location: "Asynchronous and online",
        starting_date: "March 1st, 2026",
        end_date: "March 29th, 2026",
        schedule: "Tuesday and Thursdays",
        price: "$999",
        duration: "You will need around 10 hours per week",
        image: "/images/Selenium-Workshop.png",
        buyButtonId: "buy_btn_1RDaMbGg3IBRIOi3pnOT0fsS",
        slug: "from-manual-to-automation-testing",
    },
    {
        id: "advanced-test-engineering",
        title: "Advanced Test Engineering",
        description:
            "Time to master the big guns of your test engineer skillset and level up your game",
        location: "Asynchronous and online",
        starting_date: "April 15th, 2026",
        end_date: "May 13th, 2026",
        schedule: "Tuesday and Thursdays",
        price: "$999",
        duration: "You will need around 10 hours per week",
        image: "/images/Playwright-Workshop.png",
        buyButtonId: "buy_btn_1RDaS2Gg3IBRIOi3oM10OVkM",
        slug: "advanced-test-engineering",
    },
];

// Helper function to get workshop by slug
export function getWorkshopBySlug(slug: string): Workshop | undefined {
    return workshopsData.find((workshop) => workshop.slug === slug);
}

// Helper function to get workshop by ID
export function getWorkshopById(id: string): Workshop | undefined {
    return workshopsData.find((workshop) => workshop.id === id);
}

