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
      "This is to certify that RedDot Digital has successfully completed projects for our Digital Customer Management and Enterprise Customer Management Solutions. The work was completed in September 2020 and they continue to maintain the platforms.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Chief Technology Officer",
    company: "Innovate Inc.",
    quote:
      "Working with the team has been a transformative experience. Their expertise and dedication are unmatched, delivering results that exceeded all our expectations. We look forward to our continued partnership and future innovations together.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-2.png",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Head of Operations",
    company: "Logistics Pro",
    quote:
      "The modular data center solution they provided was a game-changer for our logistics network. It was deployed faster than we thought possible and has given us the reliability we need for our mission-critical operations. Highly recommended.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-3.png",
  },
  {
    id: 4,
    name: "Emily Wang",
    title: "Founder & CEO",
    company: "Creative Solutions",
    quote:
      "As a startup, we needed a partner who was both flexible and powerful. Their platform scaled with us from day one. The support has been phenomenal, and their insights have been invaluable to our growth and success.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-4.png",
  },
];