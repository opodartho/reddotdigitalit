import React from 'react'
import { NewsCard } from "@/components/home/_news/NewsCard";

const newsData = [
    {
        id: 1,
        title: "Cloud Migration",
        description:
            "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
        imageUrl:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
    },
    {
        id: 2,
        title: "DevOps",
        description:
            "We provide DevOps consultation to our clients that helps in automation and standardization.",
        imageUrl: "https://placehold.co/400x300/E2E8F0/4A5568?text=News+2",
    },
    {
        id: 3,
        title: "Resources",
        description:
            "Our Resource as a Service solution's offer seamless access to top-tier IT professionals, precisely.",
        imageUrl: "https://placehold.co/400x300/E2E8F0/4A5568?text=News+3",
    },
    {
        id: 4,
        title: "QA as a Service",
        description:
            "Our QA as a Service offerings provide comprehensive testing solutions.",
        imageUrl: "https://placehold.co/400x300/E2E8F0/4A5568?text=News+4",
    },
];

const News = () => {
    return (
        <section className=" px-8 py-16">
            <section className="mx-auto max-w-7xl">
                <h2 className="mb-12 pb-6 text-center text-3xl font-bold">
                    Latest News
                </h2>

                <div className="grid grid-cols-1 gap-6 bg-gray-50 sm:grid-cols-2 lg:grid-cols-4">
                    {newsData.map((item) => (
                        <NewsCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </section>
    )
}

export default News