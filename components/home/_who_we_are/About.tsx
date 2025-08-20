import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AboutData } from "@/lib/data/whoWeAreData";

type AboutProps = {
  data: AboutData;
};

const About = ({ data }: AboutProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[84px] gap-y-8 px-10">
      <div className="flex flex-col justify-start space-y-4">
        <h2 className="--font-poppins font-normal text-[25px] leading-[40px] tracking-[0.03px]">
          {data.title}
        </h2>
        <h3 className="--font-poppins font-normal text-[32px] leading-[40px] tracking-[0.03px] mt-[27px]">
          {data.subtitle}
        </h3>
        <p className="--font-poppins font-normal text-[16px] leading-[30px] tracking-[0] mt-[36px]">
          {data.description}
        </p>
        <Button className="--font-poppins font-medium text-[16px] leading-[100%] tracking-[0] w-[207px] h-[56px] mt-[49px]">
          Read More →
        </Button>
      </div>
      <div className="grid gap-4">
        <div className="relative">
          <Image
            src={data.images[0]}
            alt="Group"
            width={539}
            height={230}
            className="w-full h-[230px] rounded-[18px] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={data.images[1]}
            alt="Speaker"
            width={263}
            height={232}
            className="w-full h-[232px] rounded-[18px] object-cover"
          />
          <Image
            src={data.images[2]}
            alt="Event"
            width={263}
            height={232}
            className="w-full h-[232px] rounded-[18px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
