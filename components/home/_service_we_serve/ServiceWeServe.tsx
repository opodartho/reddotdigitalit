"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { staticServiceWeServeData } from "@/lib/data/ServiceWeServeData";

export function ServiceWeServeTabs() {
  const [activeTab, setActiveTab] = useState(staticServiceWeServeData[0].tab);

  return (
    <section
      className="w-full flex flex-col items-center mb-10"
      style={{
        background: `
      radial-gradient(39.81% 39.81% at 92.12% 9.17%, #FFFFF0 0%, rgba(163, 17, 203, 0.01) 100%),
radial-gradient(45.32% 45.32% at 0% 0%, #F7EBFF 0%, rgba(212, 0, 240, 0.01) 100%),
radial-gradient(50% 50% at 100% 100%, rgba(227, 226, 248, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)

    `,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
      {/* Title */}
      <h2 className="mt-20 text-2xl font-normal w-[273px] leading-[40px] font-poppins text-center text-[#060414]">
        Service We Serve
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-base font-normal w-[444px] leading-[22px] text-center font-poppins text-[#060414]">
        Our cutting-edge modular data center solution enabled to
        <br />
        protect mission-critical data.
      </p>

      {/* Tab buttons */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-12 w-full flex flex-col items-center"
      >
        <TabsList className="flex justify-center bg-white rounded-md w-[714px] h-[64px] px-2 py-2 gap-6 shadow-md">
          {staticServiceWeServeData.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.tab}
              className="rounded-md px-4 py-2 font-medium text-[#6D658B] data-[state=active]:bg-[#E52445] data-[state=active]:text-white"
            >
              {service.tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content Section */}
        <div className="mt-16 mb-20 w-full flex justify-center">
          {staticServiceWeServeData.map((service) => (
            <TabsContent
              key={service.id}
              value={service.tab}
              className="w-full max-w-6xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
                {/* Left Image */}
                <div className="flex justify-start md:justify-start w-full">
                  <Image
                    src={service.imageUrl}
                    alt="Service"
                    width={530}
                    height={450}
                    className="rounded-[21px] object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col w-full">
                  <h3 className="text-2xl font-regular font-poppins text-[#060414]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-[24px] font-poppins text-[#060414]/70">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {service.features.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Image
                          src="/images/checkmark.png"
                          alt="checkmark"
                          width={20}
                          height={20}
                        />
                        <span className="text-base font-medium font-poppins text-[#060414]/85">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Button */}
                  <Button
                    variant="outline"
                    className="mt-20 w-[195px] h-[56px] rounded-[10px] px-6 py-2 font-poppins hover:bg-red-100"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
