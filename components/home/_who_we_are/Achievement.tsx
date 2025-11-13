import React from "react";
import Image from "next/image";
import { AchievementData } from "@/lib/data/whoWeAreData";

interface AchievementCardProps extends AchievementData {}

const AchievementCard = ({
  title,
  value,
  description,
  icon,
  bgGradient,
}: AchievementCardProps) => {
  return (
    <div
      className={`flex flex-col items-left rounded-xl p-6 text-left shadow-md ${bgGradient} transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg`}
    >
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={26}
          height={26}
          className=""
        />
      </div>

      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-4 text-3xl font-bold">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Achievement = ({ data }: { data: AchievementData[] }) => {
  return (
    <div className="mt-8 mx-10 grid grid-cols-1 gap-6 p-4 md:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="transition-all duration-300 ease-in-out hover:h-2xl">
          <AchievementCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default Achievement;