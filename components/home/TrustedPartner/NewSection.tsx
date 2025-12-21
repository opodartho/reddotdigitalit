"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type TabData = {
  title: string;
  images: string[];
};

const tabData: TabData[] = [
  {
    title: "All",
    images: [
      "/images/robi.svg",
      "/images/scb.svg",
      "/images/tap.svg",
      "/images/bat.svg",
      "/images/ada.svg",
      "/images/bida.svg",
      "/images/unicef.svg",
      "/images/smart.svg",
      "/images/jamuna.svg",
      "/images/fsib.svg",
      "/images/lpgas.svg",
      "/images/rVentures.svg",
      "/images/idcol.svg",
      "/images/undp.svg",
      "/images/citizens.svg",
      "/images/ucb.svg",
      "/images/telecash.svg",
      "/images/bashundhara.svg",
      "/images/akash.svg",
      "/images/egcb.svg",
      "/images/wateraid.svg",
      "/images/sebl.svg",
      "/images/pbl.svg",
      "/images/mbl.svg",
    ],
  },

  {
    title: "Bank & Fintech",
    images: [
      "/images/scb.svg",
      "/images/tap.svg",
      "/images/fsib.svg",
      "/images/ucb.svg",
      "/images/telecash.svg",
      "/images/sebl.svg",
      "/images/pbl.svg",
      "/images/mbl.svg",
      "/images/jamuna.svg",
      "/images/citizens.svg",
    ],
  },
  {
    title: "Telecom",
    images: ["/images/robi.svg", "/images/smart.svg"],
  },
  {
    title: "FMCG",
    images: [
      "/images/bat.svg",
      "/images/lpgas.svg",
      "/images/akash.svg",
      "/images/wateraid.svg",
    ],
  },
  {
    title: "Government",
    images: ["/images/bida.svg", "/images/idcol.svg", "/images/egcb.svg"],
  },
  {
    title: "Media & Advertising",
    images: ["/images/bashundhara.svg"],
  },
  {
    title: "iNgo",
    images: ["/images/ada.svg", "/images/unicef.svg", "/images/undp.svg"],
  },
];

export default function TrustedPartners() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const currentTab = tabData.find((tab) => tab.title === activeTab);
  const imagesToShow =
    activeTab === "All"
      ? Array.from(new Set(tabData.flatMap((tab) => tab.images))) // remove duplicates
      : currentTab?.images || [];

  // Limit images on mobile unless "showAll"
  const visibleImages =
    isMobile && !showAll ? imagesToShow.slice(0, 6) : imagesToShow;

  return (
    <section className="pb-[80px] pt-[80px]  mt-[32px] sm:mt-[56px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[80px]">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Trusted by Partners
          </h2>

        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 ">
          <div className="flex flex-wrap gap-2 ">
            {tabData.map((tab) => (
              <button
                key={tab.title}
                onClick={() => {
                  setActiveTab(tab.title);
                  setShowAll(false);
                }}
                className={`px-6 py-2 font-semibold rounded-xl border transition-colors ${
                  activeTab === tab.title
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-300 bg-white text-gray-500  hover:text-red-600  hover:bg-gray-50   "
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div
          className="
            flex flex-wrap justify-center
            gap-x-[24px] gap-y-[24px]
          "
        >
          {visibleImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="
                relative
                flex items-center justify-center
                bg-white border border-gray-200 hover:shadow-md
                h-[72px] w-[147px]
                rounded-md overflow-hidden
              "
            >
              <Image
                src={imgSrc}
                alt={`Partner ${idx + 1}`}
                fill
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>

        {/* See More / See Less */}
        {isMobile && imagesToShow.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-red-600 font-semibold py-3 px-7 border border-red-400 rounded-lg"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}