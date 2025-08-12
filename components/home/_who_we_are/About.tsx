import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="mt-15 grid grid-cols-1 items-start gap-8 px-10 md:grid-cols-2">
      {/* Left text section */}
      <div className="text-left">
        <h2 className="mb-6 text-2xl">We Are Your Partner in Innovation</h2>
        <h3 className="mb-7 text-3xl font-semibold">
          Adapting to Your Needs for Collaborative Excellence.
        </h3>
        <p className="mb-6 leading-relaxed">
          RedDot Digital Limited is a 100% Robi Axiata Limited owned subsidiary
          offering IT & Digital solutions. RedDot Digital Limited is currently
          setting up its own office in Government’s IT Park in Kaliakoir,
          Gazipur, Dhaka. We aim to support the Government of Bangladesh in
          meeting its digital goals in the country by offering cutting-edge,
          home-grown, cost-optimized IT applications, Cloud DC, IoT solutions
          among others.
        </p>
        <Button className="px-8 py-2 font-semibold">Read More →</Button>
      </div>

      {/* Right images section */}
      <div className="grid grid-rows-[auto_auto] gap-4 pt-2">
        {/* Large image on top */}
        <div className="row-span-1">
          <Image
            src="/group2.jpg"
            alt="Group"
            width={200}
            height={250}
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>

        {/* Two smaller images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/speaker.jpg"
            alt="Speaker"
            width={200}
            height={250}
            className="h-40 w-full rounded-lg object-cover"
          />
          <Image
            src="/discussion.jpg"
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
