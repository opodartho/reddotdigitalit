export type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const staticNewsData: NewsItem[] = [
  {
    id: 1,
    title: "Cloud Migration",
    description:
      "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    imageUrl: "/images/news1.svg",
  },
  {
    id: 2,
    title: "DevOps",
    description:
      "We provide DevOps consultation to our clients that helps in automation and standardization.",
    imageUrl: "/images/news2.svg",
  },
  {
    id: 3,
    title: "Resources",
    description:
      "Our Resource as a Service solution's offer seamless access to top-tier IT professionals, precisely.",
    imageUrl: "/images/news3.svg",
  },
  {
    id: 4,
    title: "QA as a Service",
    description:
      "Our QA as a Service offerings provide comprehensive testing solutions.",
    imageUrl: "/images/news4.svg",
  },
];
