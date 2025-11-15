export type OperationSection = {
  id: string;
  area_name:string
  title: string;
  description: string;
  images: string[];
  coverage: string[];
};

export const staticOperationsData: OperationSection[] = [
  {
    id: "sales-distribution",
    area_name: "Sales Distribution",
    title: "Revolutionizing Sales and Distribution Efficiency",
    description:
      "Digitally connected ecosystems for smarter growth",
    images: ["/images/sales1.png", "/images/sales2.png"],
    coverage: [
      "Sales automation and route optimization",
      "Real-time order and inventory tracking",
      "Performance dashboards and reporting",
      "Distributor and retailer management",
      "Mobile-based field force operations",
      "Remote Development",
    ],
  },
  {
    id: "crm",
    area_name:"CRM",
    title: "Empowering Customer-Centric Relationships",
    description:
      "Turning data into meaningful connections",
    images: ["/images/crm1.png", "/images/crm2.png"],
    coverage: [
      "Lead and opportunity management",
      "Omnichannel customer engagement",
      "Performance analytics",
      "Campaign tracking and automation",
      "Feedback and support management",
    ],
  },
  {
    id: "ai-machine-learning",
    area_name: "Ai & Mechine Learning",
    title: "Data That Drives Decisions",
    description:
      "Intelligence engineered for measurable outcomes",
    images: ["/images/ai1.png", "/images/ai2.png"],
    coverage: [
      "Predictive analytics and forecasting",
      "Machine learning model development",
      "Real-time performance tracking",
      "Business intelligence dashboards",
      "Sentiment and behavioral analysis",
    ],
  },
  {
    id: "resource-augmentation",
    area_name:"Resource Augmentation",
    title: "Empowering Teams with the Right Talent",
    description:
      "Flexible workforce solutions that scale with your business",
    images: ["/images/resource1.png", "/images/resource2.png"],
    coverage: [
      "IT and project-based staffing",
      "Domain-specific skilled professionals",
      "Contract-based and long-term engagement options",
      "Onsite and offshore support models",
      "End-to-end talent management",
    ],
  },
  {
    id: "fintech-solutions",
    area_name:"Fintech Solutions",
    title: "Shaping the Future of Financial Services",
    description:
      "Digital platforms for a connected financial ecosystem",
    images: ["/images/fintech1.png", "/images/fintech2.png"],
    coverage: [
      "Digital banking and wallet platforms",
      "Payment gateway integration",
      "Data-driven financial analytics",
      "Agent and merchant management systems",
      "Compliance and transaction monitoring",
    ],
  },
  {
    id: "devops",
    area_name:"Devops",
    title: "Accelerating Development, Simplifying Deployment",
    description:
      "Agile, automated, and secure delivery pipelines",
    images: ["/images/devops1.png", "/images/devops2.png"],
    coverage: [
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Automated testing and monitoring",
      "Infrastructure as code (IaC)",
      "Containerization and orchestration",
      "Cloud-native DevOps solutions",
    ],
  },
  {
    id: "customized-software-solutions",
    area_name:  "Customized Software Solutions",
    title: "Solutions Tailored to Your Business Needs",
    description:
      "Where technology meets your unique goals",
    images: ["/images/custom1.png", "/images/custom2.png"],
    coverage: [
      "End-to-end solution design and development",
      "Web and mobile applications",
      "UI/UX-driven approach",
      "System integration and automation",
      "Legacy modernization",
    ],
  },
  {
    id: "cloud-migration",
    area_name: "Cloud Migration",
    title: "Seamless Journey to the Cloud",
    description:
      "Optimizing performance with secure cloud transformation",
    images: ["/images/cloud1.png", "/images/cloud2.png"],
    coverage: [
      "Cloud readiness assessment",
      "Data and application migration",
      "Ongoing maintenance and support",
      "Hybrid and multi-cloud deployment",
      "Cloud security and governance",
    ],
  },
];
