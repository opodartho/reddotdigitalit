export type FeaturedProject = {
  id: number | string;
  title: string;
  description: string;
  imageSrc: string; // FULL IMAGE (bg + devices)
  href?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Human Resource Management Solution",
    description:
      "HRMS is committed to providing end-to-end HR solutions for leaders through the times of growth and transformation (and uncertainty).",
    imageSrc: "/images/projects/hrms.jpg",
    href: "/projects/hrms",
  },
    {
    id: 2,
    title: "TeleCash App",
    description:
      "Unlock secure, fast, and convenient mobile transactions. Unlock secure, fast, and convenient mobile transactions",
    imageSrc: "/images/projects/telecash.jpg",
    href: "/projects/telecash",
  },
  {
    id: 3,
    title: "Mobile Financial Service",
    description:
      "Transferring Banking Experience",
    imageSrc: "/images/projects/mfs.jpg",
    href: "/projects/mfs",
  },

  {
    id: 4,
    title: "Digital Financial Service",
    description:
      "Transforming Banking for the Digital Age",
    imageSrc: "/images/projects/dfs.jpg",
    href: "/projects/agent-locator",
  },
];
