export type ServiceWeServeItem = {
  id: number;
  tab: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
};

export const staticServiceWeServeData: ServiceWeServeItem[] = [
  {
    id: 1,
    tab: "Cloud Migration",
    title: "Secure & Scalable Cloud Migration",
    description:
      "Move your infrastructure to the cloud with confidence. Our secure and scalable migration services ensure zero downtime, minimal disruption, and a seamless transition—so your business stays agile, efficient, and future-ready.",
    imageUrl: "/images/ServiceWeServe.png",
    features: [
      "Bold & Impactful",
      "Benefit-Driven",
      "Tech-Savvy",
      "Trust & Control",
      "Enterprise-Grade Security",
      "Seamless Integration",
    ],
  },
  {
    id: 2,
    tab: "DevOps",
    title: "DevOps Excellence",
    description:
      "Streamline your software delivery pipeline with our DevOps services—boosting collaboration, automation, and faster time-to-market.",
    imageUrl: "/images/ServiceWeServe.png",
    features: [
      "Automated CI/CD",
      "Scalable Infrastructure",
      "Agile Delivery",
      "Enhanced Collaboration",
      "Monitoring & Security",
      "Continuous Improvement",
    ],
  },
  {
    id: 3,
    tab: "Resources",
    title: "Resource Optimization",
    description:
      "Optimize IT resources for cost-efficiency and performance. Our solutions ensure maximum utilization and reduced operational overhead.",
    imageUrl: "/images/ServiceWeServe.png",
    features: [
      "Cost Efficiency",
      "Improved Performance",
      "Scalable Architecture",
      "Data-Driven Insights",
      "Reliable Infrastructure",
      "Sustainable Growth",
    ],
  },
  {
    id: 4,
    tab: "QA as a Service",
    title: "QA as a Service",
    description:
      "Ensure product quality with our comprehensive QA services—covering automation, manual testing, and end-to-end validation.",
    imageUrl: "/images/ServiceWeServe.png",
    features: [
      "End-to-End Testing",
      "Automation Ready",
      "Bug-Free Delivery",
      "Cross-Platform Support",
      "Continuous QA",
      "Reliable Standards",
    ],
  },
];
