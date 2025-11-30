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
      `“This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited. 
      
      Digital Customer Management Solution (dCRM)Enterprise Customer Management Solution (eCRM).The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions.”`,
    imageSrc: "/images/anon.svg",
    logoSrc: "/images/robi.svg",
  },
  {
    id: 2,
    name: "Syed Iftekhar Amin",
    title: "Head of Deep Analytics",
    company: "r ventures PLC",
    quote:
      `“Hello RedDot Team,
      
      Very good job done. This project has been a lot of work over a long time, and the outcome is both effective and innovative even in challenging circumstances.
      
      Looking forward to what you bring next.”`,
    imageSrc: "/images/anon.svg",
    logoSrc: "/images/rVentures.png",
  },
  {
    id: 3,
    name: "Md. Habibur Rahman Molla",
    title: "First Assistant Vice President, ICT Division",
    company: "First Security Islami Bank PLC",
    quote:
      `“This is to certify that the First Security Islami Bank PLC has implemented a Digital Financial Solutions (DFS) named “dCloud”. 
      
      RedDot Digital Limited worked for design, Development, Supply, Implementation, Configuration, Support & Training of DFS for First Security Islami Bank PLC.
      
      The Phase -1 implementation has been completed on 24th December 2023 and the software is fully operational. “dCloud” provider RedDot Digital Limited has reached a level of support service which we may consider as acceptable.”`,
    imageSrc: "/images/anon.svg",
    logoSrc: "/images/fsib.svg",
  },
  {
    id: 4,
    name: "Dewan Nazmul Hasan",
    title: "Chief Executive Office",
    company: "Trust and Pay Limited",
    quote:
      `“This is to certify that RedDot Digital has successfully completed the MFS solutions for Trust Axiata Digital Limited. Their team demonstrated exceptional expertise and professionalism throughout the project, delivering a high-quality, reliable solution tailored to our needs.
      
      We are thoroughly impressed with their commitment to excellence and the seamless integration of the MFS solutions. We highly recommend RedDot Digital for any digital transformation initiatives”`,
    imageSrc: "/images/anon.svg",
    logoSrc: "/images/tap.svg",
  },
  {
    id: 5,
    name: "Minhaz Alam Chowdhury",
    title: "Head of Department, Business Development Management",
    company: "Agami Limited",
    quote:
      `“Throughout our collaboration, RedDot Digital Limited has consistently demonstrated an exemplary level of professionalism and technical acumen. Their team has adeptly tailored multiple maintenance solutions to precisely meet the requirements of our Shopoth system resulting in substantial improvements in its operational efficiency and performance. 
      
      The comprehensive suite of services offered by RedDot Digital Limited has played a pivotal role in addressing our intricate IT and digital challenges. Their innovative approaches and proactive strategies have been fundamental in optimizing our processes and aligning them with our strategic objectives.”`,
    imageSrc: "/images/anon.svg",
    logoSrc: "/images/agami.png",
  },
  
];