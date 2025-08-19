import React from "react";
import { AchievementData } from "@/lib/data/whoWeAreData";

interface AchievementCardProps extends AchievementData {}

const AchievementCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  bgGradient 
}: AchievementCardProps) => {
  return (
    <div className={`flex flex-col rounded-xl p-6 text-center shadow-md ${bgGradient}`}>
      <div className="mb-4 text-left text-3xl">{icon}</div>
      <h3 className="mb-2 text-left text-2xl">{title}</h3>
      <p className="mb-20 text-left text-5xl">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Achievement = ({ data }: { data: AchievementData[] }) => {
  return (
    <div className="mt-8 mr-10 ml-10 grid grid-cols-1 gap-6 p-4 md:grid-cols-4">
      {data.map((item, index) => (
        <AchievementCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Achievement;
