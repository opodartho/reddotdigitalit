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
    image: "/images/product_icons/mfs.png",
  },
  {
    title: "DFS",
    description:
      "Transforming digital payments with seamless, flexible, and future-ready financial systems.",
    image: "/images/product_icons/dfs.png",
  },
  {
    title: "Human Resources",
    description:
      "Simplifying workforce management through intelligent automation and digital workflows.",
    image: "/images/product_icons/hmrs.png",
  },
  {
    title: "ERP & eCommerce",
    description:
      "Driving business growth with customizable, user-centric digital commerce solutions.",
    image: "/images/product_icons/ecom.png",
  },
  {
    title: "IOT Backend",
    description:
      "Connecting devices and data with robust backend infrastructure for seamless operations.",
    image: "/images/product_icons/iot.png",
  },
  {
    title: "Streaming Solution App",
    description:
      "Delivering uninterrupted, high-quality digital entertainment experiences across devices.",
    image: "/images/product_icons/stream.png",
  },
  {
    title: "Customer Experience",
    description:
      "Enhancing engagement through personalized, omnichannel digital experiences.",
    image: "/images/product_icons/cust.png",
  },
  {
    title: "Sales & Distribution",
    description:
      "Optimizing field operations with data-powered tools for smarter sales and distribution.",
    image: "/images/product_icons/sales.png",
  },
];
