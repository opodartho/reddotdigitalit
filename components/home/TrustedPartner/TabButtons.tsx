"use client";

type TabButtonsProps = {
  about: React.ReactNode;
  achievement: React.ReactNode;
};

import { useState } from "react";

export const TabButtons = ({ about, achievement }: TabButtonsProps) => {
  const [activeTab, setActiveTab] = useState<String>("about");

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl border">
          {/* About Us Tab */}
          <button
            onClick={() => setActiveTab("All")}
            className={` px-10 py-2 font-semibold ${
              activeTab === "about"
                ? "rounded-2xl border-t-2 border-b-2 border-l-2 border-r-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            All
          </button>

          {/* Achievement Tab */}
          <button
            onClick={() => setActiveTab("Telecom")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "Telecom"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            Telecom
          </button>

          <button
            onClick={() => setActiveTab("Bank & Fintech")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "Bank & Fintech"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            Bank & Fintech
          </button>

          <button
            onClick={() => setActiveTab("FMCG")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "FMCG"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            FMCG
          </button>

          <button
            onClick={() => setActiveTab("Media & Advertising")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "Media & Advertising"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            Media & Advertising
          </button>

          <button
            onClick={() => setActiveTab("Government")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "Government"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            Government
          </button>

          <button
            onClick={() => setActiveTab("iNgo")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "iNgo"
                ? "rounded-2xl border-t-2 border-r-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600"
                : " border-gray-300 bg-white text-gray-500"
            }`}
          >
            iNgo
          </button>
        </div>
      </div>
      {activeTab === "about" && about}
      {/* Achievement Tab Content */}
      {activeTab === "achievement" && achievement}
    </div>
  );
};