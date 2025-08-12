import React from "react";

interface AchievementCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  value,
  description,
  icon,
  bgGradient,
}) => (
  <div
    className={`flex flex-col rounded-xl p-6 text-center shadow-md ${bgGradient}`}
  >
    <div className="mb-4 text-left text-3xl">{icon}</div>
    <h3 className="mb-2 text-left text-2xl">{title}</h3>
    <p className="mb-20 text-left text-5xl">{value}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Achievement = () => {
  return (
    <div className="mt-8 mr-10 ml-10 grid grid-cols-1 gap-6 p-4 md:grid-cols-4">
      <AchievementCard
        icon="❄️"
        title="Professionals"
        value="200+"
        description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
        bgGradient="bg-gradient-to-r from-cyan-300 to-blue-500 to-cyan-100"
      />
      <AchievementCard
        icon="⚙️"
        title="Tech Stack"
        value="80+"
        description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
        bgGradient="bg-gradient-to-r from-pink-200 to-pink-100"
      />
      <AchievementCard
        icon="📋"
        title="Projects"
        value="30+"
        description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
        bgGradient="bg-gradient-to-r from-violet-300 to-indigo-200"
      />
      <AchievementCard
        icon="⭐"
        title="Experience"
        value="7 Years"
        description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
        bgGradient="bg-gradient-to-r from-emerald-200 to-yellow-100"
      />
    </div>
  );
};

export default Achievement;
