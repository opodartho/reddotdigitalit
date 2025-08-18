import React from "react";
import { TransformCard } from "./TransformCard";
import { TransformItem } from "@/lib/data/transformData";

type TransformSectionProps = {
  transformData: TransformItem[];
};

const ReadyToTransform = ({ transformData }: TransformSectionProps) => {
  return (
    <>
      {transformData.map((item) => (
        <TransformCard
          key={item.id}
          heading={item.heading}
          description={item.description}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
          imageUrl={item.imageUrl}
        />
      ))}
    </>
  );
};

export default ReadyToTransform;
