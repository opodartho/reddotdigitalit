import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AboutData } from "@/lib/data/whoWeAreData";

type AboutProps = {
  data: AboutData;
};

const About = ({ data }: AboutProps) => {
  return (
    <div className="mt-15 grid grid-cols-1 items-start gap-8 px-10 md:grid-cols-2">
      <div className="text-left">
        <h2 className="mb-6 text-2xl">{data.title}</h2>
        <h3 className="mb-7 text-3xl font-semibold">{data.subtitle}</h3>
        <p className="mb-6 leading-relaxed">{data.description}</p>
        <Button className="px-8 py-2 font-semibold">Read More →</Button>
      </div>
      <div className="grid grid-rows-[auto_auto] gap-4 pt-2">
        <div className="row-span-1">
          <Image
            src={data.images[0]}
            alt="Group"
            width={200}
            height={250}
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={data.images[1]}
            alt="Speaker"
            width={200}
            height={250}
            className="h-40 w-full rounded-lg object-cover"
          />
          <Image
            src={data.images[2]}
            alt="Event"
            width={200}
            height={250}
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
