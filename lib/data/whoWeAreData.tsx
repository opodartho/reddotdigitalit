export type AboutData = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
};

export type AchievementData = {
  icon: string;
  title: string;
  value: string;
  description: string;
  bgGradient: string;
};

export const aboutData: AboutData = {
  title: "We Are Your Partner in Innovation",
  subtitle: "Adapting to Your Needs for Collaborative Excellence.",
  description: `RedDot Digital Limited is a 100% Robi Axiata Limited owned subsidiary
  offering IT & Digital solutions. RedDot Digital Limited is currently setting up
  its own office in Government’s IT Park in Kaliakoir, Gazipur, Dhaka. We aim to
  support the Government of Bangladesh in meeting its digital goals in the country
  by offering cutting-edge, home-grown, cost-optimized IT applications, Cloud DC,
  IoT solutions among others.`,
  images: ["/images/group3.png", "/images/speaker (2).png", "/images/discussion.png"],
};

export const achievementData: AchievementData[] = [
  {
    icon: "/images/professionals.png",
    title: "Professionals",
    value: "200+",
    description:
      "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-cyan-300 to-blue-500 to-cyan-100",
  },
  {
    icon: "/images/techstack.png",
    title: "Tech Stack",
    value: "80+",
    description:
      "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-pink-200 to-pink-100",
  },
  {
    icon: "/images/project.png",
    title: "Projects",
    value: "30+",
    description:
      "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-violet-300 to-indigo-200",
  },
  {
    icon: "/images/experience.png",
    title: "Experience",
    value: "7 Years",
    description:
      "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-emerald-200 to-yellow-100",
  },
];
