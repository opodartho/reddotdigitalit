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
        title: "MFS",
        href: "/customize-product/1",
        description: "Unlock secure, fast, and convenient mobile transactions",
      },
      {
        title: "DFS",
        href: "/customize-product/2",
        description: `Empowering individuals and businesses with accessible, innovative financial tools.`,
      },
      {
        title: "HRMS",
        href: "/customize-product/3",
        description: `HRMS encompasses candidate application, selection process, recruiting and onboarding, employee life cycle management, payroll management`,
      },
      {
        title: "E-Commerce",
        href: "/customize-product/4",
        description: `An online video streaming OTT platform that offers Live TV and VOD. `,
      },
      {
        title: "IOT Backend",
        href: "/customize-product/5",
        description: `a device that detects the presence of gases in an area, often as part of a safety system. `,
      },
      {
        title: "Streaming Solution App",
        href: "/customize-product/6",
        description: `An online video streaming OTT platform that offers Live TV and VOD. `,
      },
      {
        title: "Customer Experience Solution",
        href: "/customize-product/7",
        description: `encompasses a strategic blend of technology, processes, and people designed to optimize every interaction a customer has `,
      },
      {
        title: "Sales & Distribution",
        href: "/customize-product/8",
        description: `encompasses a strategic blend of technology, processes, and people designed to optimize every interaction a customer has `,
      },


    ],
  },
  {
    title: "About RedDot",
    items: [
      {
        title: "About Us",
        href: "/about-us",
        description: "Learn about our journey and vision",
      },
      {
        title: "Board of Directors",
        href: "/board-of-directors",
        description: "Learn about our Board of Directors",
      },
      {
        title: "Management Council",
        href: "/management-council",
        description: "Learn about our Management Council",
      },
      {
        title: "Our Policy",
        href: "/abac-policy",
        description: "Learn about our policy",
      },
      {
        title: "Life at RedDot",
        href: "/Life_At_RedDot",
        description: "Learn about our life here at RedDot",
      },
      {
        title: "Whistleblowing",
        href: "/whistle-blow",
        description: "Learn about our Whistleblowing Policy",
      },
      {
        title: "Careers",
        href: "/about/careers",
        description: "Join us and grow your career.",
      },
    ],
  },
];
