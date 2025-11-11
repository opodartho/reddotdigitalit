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
      title: "Sales & Distribution",
      href: "/area_of_operations_details/sales-distribution",
      description: "Optimize your sales and field operations.",
    },
    {
      title: "CRM",
      href: "/area_of_operations_details/crm",
      description: "Build lasting customer relationships.",
    },
    {
      title: "AI & Machine Learning",
      href: "/area_of_operations_details/ai-machine-learning",
      description: "Turn data into smarter insights.",
    },
    {
      title: "Resource Augmentation",
      href: "/area_of_operations_details/resource-augmentation",
      description: "Scale your team with expert talent.",
    },
    {
      title: "Fintech Solutions",
      href: "/area_of_operations_details/fintech-solutions",
      description: "Transform financial services securely.",
    },
    {
      title: "Customized Software Solutions",
      href: "/area_of_operations_details/customized-software-solutions",
      description: "Software built around your needs.",
    },
    {
      title: "DevOps",
      href: "/area_of_operations_details/devops",
      description: "Accelerate delivery through automation.",
    },
    {
      title: "Cloud Migration",
      href: "/area_of_operations_details/cloud-migration",
      description: "Modernize your systems on the cloud.",
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
