// --- TYPE DEFINITIONS ---

type FooterLink = {
  text: string;
  href: string;
};

type SocialLink = {
  href: string;
  iconUrl: string;
  alt: string;
};

// Represents one of the four main columns in the footer
export type FooterColumn = {
  title: string;
  // A column can have either a list of links or simple text content
  links?: FooterLink[];
  content?: string;
  // The contact column is special, with an address and social links
  address?: string;
  socials?: SocialLink[];
};

type BrochureInfo = {
  href: string;
  iconUrl: string;
  text: string;
  details: string;
};

// This is the main type for all footer data
export type FooterData = {
  logoUrl: string;
  columns: FooterColumn[];
  brochure: BrochureInfo;
  legalLinks: FooterLink[];
  copyright: string;
};

// --- STATIC DATA ---

export const staticFooterData: FooterData = {
  logoUrl: "/redDot-logo.png",
  columns: [
    {
      title: "Who we are",
      content:
        "RedDot Digital Limited is a 100% subsidiary company of Robi Axiata Limited, the second largest mobile network operator in Bangladesh offering IT & Digital solutions.",
    },
    {
      title: "About Us",
      links: [
        { text: "About Company", href: "#" },
        { text: "News", href: "#" },
        { text: "Blog", href: "#" },
      ],
    },
    {
      title: "Area of operations",
      links: [
        { text: "Services", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Privacy Notice", href: "#" },
      ],
    },
    {
      title: "Contact",
      address: "57 & 57/A, Uday Tower (15th Floor),\nGulshan 1, Gulshan Avenue, Dhaka 1212,\nBangladesh",
      socials: [
        { href: "https://facebook.com", iconUrl: "/footer-icons/facebook.png", alt: "Facebook Icon" },
        { href: "https://linkedin.com", iconUrl: "/footer-icons/linkedIn.png", alt: "LinkedIn Icon" },
      ],
    },
  ],
  brochure: {
    href: "/path-to-your/brochure.pdf",
    iconUrl: "/footer-icons/download-arrow.png",
    text: "Download Company Brochure",
    details: "PDF, 10mb",
  },
  legalLinks: [
    { text: "Term & Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ],
  copyright: "© 2024 All rights reserved | RedDot Digital Limited",
};