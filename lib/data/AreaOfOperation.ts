
export type OperationSection = {
  id: string;
  title: string;
  description: string;
  images: string[];
  coverage: string[];
};
export const staticOperationsData: OperationSection[] = [
  {
    id: "fintech",
    title: "Fintech Solution",
    description:
      "We foster seamless collaboration through open communication and transparency. Our flexible partnership model adapts,",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: [
      "Team Augmentation",
      "Product Start to Finish Development",
      "MVP Services",
      "DevOps as a Service",
      "Cloud Migration",
      "Remote Development",
    ],
  },
  {
    id: "software",
    title: "Customized Software Solution",
    description:
      "Tailored software designed to meet your unique business needs effectively.",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: [
      "Custom Development",
      "Integration Services",
      "API Design",
      "Quality Assurance",
      "Maintenance & Support",
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI for automation, prediction, and actionable insights.",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Automated Workflows",
    ],
  },
  {
    id: "rpa",
    title: "RPA & Automation",
    description:
      "Automate repetitive tasks to save time and reduce errors across business processes.",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: [
      "Automation Scripts",
      "Process Optimization",
      "Monitoring Tools",
    ],
  },
  {
    id: "telco",
    title: "Telco Service",
    description:
      "High-quality telecom solutions designed to ensure seamless communication.",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: ["Network Setup", "Maintenance", "Monitoring"],
  },
  {
    id: "DevOps",
    title: "DevOps",
    description:
      "High-quality telecom solutions designed to ensure seamless communication.",
    images: ["/Rectangle 21475.png", "/Rectangle.png"],
    coverage: ["Network Setup", "Maintenance", "Monitoring"],
  },
];
