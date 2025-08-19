export type NavLink = {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
};

export const staticNavData: NavLink[] = [
  {
    title: "Area of Operations",
    items: [
      {
        title: "Digital Transformation",
        href: "/area-of-operations/digital-transformation",
        description: "Innovative solutions for your business.",
      },
      {
        title: "Cloud Services",
        href: "/area-of-operations/cloud-services",
        description: "Scalable cloud infrastructure and services.",
      },
      {
        title: "Data Analytics",
        href: "/area-of-operations/data-analytics",
        description: "Harness the power of your data.",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        title: "Product Suite 1",
        href: "/products/product-suite-1",
        description: "Our flagship software suite.",
      },
      {
        title: "Product Suite 2",
        href: "/products/product-suite-2",
        description: "Solutions for enterprise clients.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Consulting",
        href: "/services/consulting",
        description: "Expert advice for your projects.",
      },
      {
        title: "Development",
        href: "/services/development",
        description: "Custom software development.",
      },
      {
        title: "Maintenance",
        href: "/services/maintenance",
        description: "Ongoing support and updates.",
      },
    ],
  },
  {
    title: "About RedDot",
    items: [
      {
        title: "Our Story",
        href: "/about/our-story",
        description: "Learn about our journey and mission.",
      },
      {
        title: "Our Team",
        href: "/about/our-team",
        description: "Meet the brilliant minds behind our success.",
      },
      {
        title: "Careers",
        href: "/about/careers",
        description: "Join us and grow your career.",
      },
    ],
  },
];
