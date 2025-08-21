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
      className={`flex flex-col items-center rounded-xl p-6 text-center shadow-md ${bgGradient}`}
    >
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="mx-auto"
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
        <AchievementCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Achievement;
