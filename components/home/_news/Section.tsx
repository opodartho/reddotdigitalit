import React from 'react'
import { NewsCard } from "@/components/home/_news/NewsCard";

const newsData = [
    {
        id: 1,
        title: "Cloud Migration",
        description:
            "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
        imageUrl: "/images/latestNews-cloudMigration-image.jpg",
    },
    {
        id: 2,
        title: "DevOps",
        description:
            "We provide DevOps consultation to our clients that helps in automation and standardization.",
        imageUrl: "/images/latestNews-devops.jpg",
    },
    {
        id: 3,
        title: "Resources",
        description:
            "Our Resource as a Service solution's offer seamless access to top-tier IT professionals, precisely.",

        imageUrl: "/images/latestNews-resources.jpg",

    },
    {
        id: 4,
        title: "QA as a Service",
        description:
            "Our QA as a Service offerings provide comprehensive testing solutions.",
        imageUrl: "/images/latestNews-QA.jpg",

    },
];

const News = () => {
    return (
        <section className=" px-8 py-16">
            <section className="mx-auto max-w-7xl">
                <h2 className="mb-12 pb-6 text-center text-3xl font-bold">
                    Latest News
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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