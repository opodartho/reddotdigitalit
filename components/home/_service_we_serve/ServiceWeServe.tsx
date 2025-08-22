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
      className="w-full flex flex-col items-center mb-10 px-6 sm:px-6"
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
      <h2 className="mt-16 text-xl sm:text-3xl font-poppins font-regular max-w-xs sm:max-w-md text-center text-[#060414]">
        Service We Serve
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-sm sm:text-base font-normal max-w-md sm:max-w-lg leading-relaxed text-center font-poppins text-[#060414]">
        Our cutting-edge modular data center solution enabled to
        <br className="hidden sm:block" />
        protect mission-critical data.
      </p>

      {/* Tab buttons */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-10 w-full flex flex-col items-center"
      >
        <TabsList className="flex overflow-x-auto sm:overflow-visible justify-start sm:justify-center bg-white rounded-md w-full sm:w-auto max-w-full sm:max-w-[900px] h-[74px] px-3 py-4 gap-4 sm:gap-8 shadow-md">
          {staticServiceWeServeData.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.tab}
              className="whitespace-nowrap rounded-md px-4 sm:px-6 h-[54px] text-sm sm:text-base font-medium text-[#6D658B] data-[state=active]:bg-[#E52445] data-[state=active]:text-white"
            >
              {service.tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content Section */}
        <div className="mt-10 sm:mt-16 mb-14 sm:mb-20 w-full flex justify-center">
          {staticServiceWeServeData.map((service) => (
            <TabsContent
              key={service.id}
              value={service.tab}
              className="w-full max-w-6xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 w-full">
                {/* Left Image */}
                <div className="flex justify-center md:justify-start w-full">
                  <Image
                    src={service.imageUrl}
                    alt="Service"
                    width={530}
                    height={450}
                    className="rounded-[16px] sm:rounded-[21px] object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col w-full text-center md:text-left">
                  <h3 className="text-lg sm:text-3xl font-regular font-poppins text-[#060414]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed font-poppins text-[#060414]/70">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {service.features.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center md:justify-start gap-2"
                      >
                        <Image
                          src="/images/checkmark.png"
                          alt="checkmark"
                          width={18}
                          height={18}
                        />
                        <span className="text-sm sm:text-base font-medium font-poppins text-[#060414]/85">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="flex justify-center md:justify-start">
                    <Button
                      variant="outline"
                      className="mt-10 sm:mt-12 w-full sm:w-[195px] h-[48px] sm:h-[56px] rounded-[10px] px-6 py-2 font-poppins hover:bg-red-100"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
