import React from 'react';

interface AchievementCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, value, description, icon, bgGradient }) => (
  <div className={`flex flex-col p-6 rounded-xl shadow-md text-center ${bgGradient}`}>
    <div className="mb-4 text-3xl text-left">{icon}</div>
    <h3 className="text-2xl mb-2 text-left">{title}</h3>
    <p className="text-5xl text-left mb-20">{value}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface AchievementProps {
  activeTab: 'about' | 'achievement';
}

const Achievement: React.FC<AchievementProps> = ({ activeTab }) => {
  if (activeTab !== 'achievement') return null; // Don't render unless active

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 p-4 ml-10 mr-10">
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
