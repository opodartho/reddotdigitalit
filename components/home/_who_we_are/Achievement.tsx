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
      className={`w-[303px] h-[345px] flex flex-col mx-auto rounded-xl p-6  text-left shadow-md ${bgGradient} transition-all duration-300 ease-in-out hover:scale-[1.25] hover:shadow-lg`}
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
    <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[80px] mt-[48px]  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="transition-all duration-300 ease-in-out hover:h-2xl">
          <AchievementCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default Achievement;