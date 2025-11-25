import Image from "next/image";
export type ProductSolutionItem = {
  title: string;
  description: string;
  image: string;
};

export const productSolutions: ProductSolutionItem[] = [
  {
    title: "MFS",
    description:
      "Empowering financial institutions with secure, scalable, and fully regulated solutions.",
    image: "/images/productsolution/mfs.jpg",
  },
  {
    title: "DFS",
    description:
      "Transforming digital payments with seamless, flexible, and future-ready financial systems.",
    image: "/images/productsolution/dfs.jpg",
  },
  {
    title: "Human Resources",
    description:
      "Simplifying workforce management through intelligent automation and digital workflows.",
    image: "/images/productsolution/hr.jpg",
  },
  {
    title: "ERP & eCommerce",
    description:
      "Driving business growth with customizable, user-centric digital commerce solutions.",
    image: "/images/productsolution/erp.jpg",
  },
  {
    title: "IOT Backend",
    description:
      "Connecting devices and data with robust backend infrastructure for seamless operations.",
    image: "/images/productsolution/iot.jpg",
  },
  {
    title: "Streaming Solution App",
    description:
      "Delivering uninterrupted, high-quality digital entertainment experiences across devices.",
    image: "/images/productsolution/stream.jpg",
  },
  {
    title: "Customer Experience",
    description:
      "Enhancing engagement through personalized, omnichannel digital experiences.",
    image: "/images/productsolution/cust.jpg",
  },
  {
    title: "Sales & Distribution",
    description:
      "Optimizing field operations with data-powered tools for smarter sales and distribution.",
    image: "/images/productsolution/sale.jpg",
  },
];
