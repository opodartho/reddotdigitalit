export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  imageSrc: string;
  logoSrc: string;
};

export const staticTestimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Kalyanmoy Debnath",
    title: "Vice President, Digital Service, IoT & VAS, IT",
    company: "Robi Axiata Limited",
    quote:
      "“This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited Digital Customer Management Solution (dCRM). Enterprise Customer Management Solution (eCRM). The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions.”",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Chief Technology Officer",
    company: "Innovate Inc.",
    quote:
      "“This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited Digital Customer Management Solution (dCRM). Enterprise Customer Management Solution (eCRM). The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions.”",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-2.png",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Head of Operations",
    company: "Logistics Pro",
    quote:
      "“This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited Digital Customer Management Solution (dCRM). Enterprise Customer Management Solution (eCRM). The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions.”",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-3.png",
  },
  {
    id: 4,
    name: "Emily Wang",
    title: "Founder & CEO",
    company: "Creative Solutions",
    quote:
      "“This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited Digital Customer Management Solution (dCRM). Enterprise Customer Management Solution (eCRM). The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions.”",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-4.png",
  },
];