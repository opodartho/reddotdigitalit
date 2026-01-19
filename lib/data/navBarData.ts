export type NavLink = {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export const staticNavData: NavLink[] = [
{
  title: "Area of Operations",
  items: [
    {
      title: "Sales & Distribution",
      href: "/area_of_operations_details/sales-distribution",
      
    },
    {
      title: "CRM",
      href: "/area_of_operations_details/crm",
      
    },
    {
      title: "AI & Machine Learning",
      href: "/area_of_operations_details/ai-machine-learning",
      
    },
    {
      title: "Resource Augmentation",
      href: "/area_of_operations_details/resource-augmentation",
      
    },
    {
      title: "Fintech Solutions",
      href: "/area_of_operations_details/fintech-solutions",
    
    },
    {
      title: "Customized Solutions",
      href: "/area_of_operations_details/customized-software-solutions",
     
    },
    {
      title: "DevOps",
      href: "/area_of_operations_details/devops",
     
    },
    {
      title: "Cloud Migration",
      href: "/area_of_operations_details/cloud-migration",
      
    },
  ],
},

  {
    title: "Products",
    items: [
      {
        title: "MFS",
        href: "/customize-product/1",
      },
      {
        title: "DFS",
        href: "/customize-product/2",
      },
      {
        title: "HRMS",
        href: "/customize-product/3",
      },
      {
        title: "E-Commerce",
        href: "/customize-product/4",
      },
      {
        title: "IOT Backend",
        href: "/customize-product/5",
      },
      {
        title: "Streaming Solution App",
        href: "/customize-product/6",
      },
      {
        title: "Customer Experience Solution",
        href: "/customize-product/7",
      },
      {
        title: "Sales & Distribution",
        href: "/customize-product/8",
      },


    ],
  },
  {
    title: "About RedDot",
    items: [
      {
        title: "About Us",
        href: "/about-us",
      
      },
      {
        title: "Board of Directors",
        href: "/board-of-directors",
 
      },
      {
        title: "Management Council",
        href: "/management-council",
       
      },
      {
        title: "ABAC Policy",
        href: "/abac-policy",
        
      },
      {
        title: "Life at RedDot",
        href: "/Life_At_RedDot",
       
      },
      {
        title: "Whistleblowing",
        href: "/speak-up",
        
      },
      {
        title: "Career",
        href: "/career",
       
      },
    ],
  },
];
