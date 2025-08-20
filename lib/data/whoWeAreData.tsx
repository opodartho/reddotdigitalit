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
  images: [
    "/group2.jpg",
    "/speaker.jpg",
    "/discussion.jpg"
  ]
};

export const achievementData: AchievementData[] = [
  {
    icon: "❄️",
    title: "Professionals",
    value: "200+",
    description: "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-cyan-300 to-blue-500 to-cyan-100"
  },
  {
    icon: "⚙️",
    title: "Tech Stack",
    value: "80+",
    description: "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-pink-200 to-pink-100"
  },
  {
    icon: "📋",
    title: "Projects",
    value: "30+",
    description: "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-violet-300 to-indigo-200"
  },
  {
    icon: "⭐",
    title: "Experience",
    value: "7 Years",
    description: "Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.",
    bgGradient: "bg-gradient-to-r from-emerald-200 to-yellow-100"
  }
];
