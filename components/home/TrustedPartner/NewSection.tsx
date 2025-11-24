"use client";

import { useState } from "react";
import Image from "next/image";

type TabData = {
  title: string;
  images: string[];
};

const tabData: TabData[] = [
  {
    title: "All", images: [
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
    ]
  },

  {
    title: "Bank & Fintech", images: [
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
    ]
  },
  {
    title: "Telecom", images: [
      "/images/robi.svg",
      "/images/smart.svg",
    ]
  },
  {
    title: "FMCG", images: [

      "/images/bat.svg",
      "/images/lpgas.svg",
      "/images/akash.svg",
      "/images/wateraid.svg",
    ]
  },

  {
    title: "Government", images: [


      "/images/bida.svg",
      "/images/idcol.svg",
      "/images/egcb.svg",
    ]
  },

  {
    title: "Media & Advertising", images: [


      "/images/bashundhara.svg",
    ]
  },

  {
    title: "iNgo", images: [


      "/images/ada.svg",
      "/images/unicef.svg",
      "/images/undp.svg",

    ]
  },


];

export default function TrustedPartners() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const currentTab = tabData.find(tab => tab.title === activeTab);
  const imagesToShow = activeTab === "All"
    ? Array.from(new Set(tabData.flatMap(tab => tab.images))) // remove duplicates
    : currentTab?.images || [];

  return (
    <section className="container pt-[100px] pb-auto bg-white">
      <div className=" mx-auto px-2 sm:px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-900">
            Trusted by Partners
          </h2>
          <p className="mt-4 text-base md:text-md text-gray-600 container 2xl mx-auto px-4">
            Our cutting-edge Modular Data Center solutions enable to <br />
            protect mission-critical data.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {tabData.map(tab => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`px-6 py-2 font-semibold rounded-xl border transition-colors ${activeTab === tab.title
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div
          className="lg:grid lg:grid-cols-7 grid grid-cols-2  gap-0"
          style={{
            gridTemplateRows: `repeat(${Math.ceil(imagesToShow.length / 7)}, minmax(0, 1fr))`,
          }}
        >
          {imagesToShow.map((imgSrc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center hover:shadow-xl border border-gray-200"
              style={{ aspectRatio: "0.5/ 0.5" }}
            >
              <Image
                src={imgSrc}
                alt={`Partner ${idx + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}