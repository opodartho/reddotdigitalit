"use client";

import { useState } from "react";

type TabButtonsProps = {
  english: React.ReactNode;
  bangla: React.ReactNode;
};

export const TabButtons = ({ english, bangla }: TabButtonsProps) => {
  const [activeTab, setActiveTab] = useState<"english" | "bangla">("english");

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl border flex">
          {/* English Tab */}
          <button
            onClick={() => setActiveTab("english")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "english"
                ? "rounded-2xl border-2 border-red-500 bg-red-50 text-red-600"
                : "text-gray-500 bg-white"
            }`}
          >
            English
          </button>

          {/* Bangla Tab */}
          <button
            onClick={() => setActiveTab("bangla")}
            className={`px-10 py-2 font-semibold ${
              activeTab === "bangla"
                ? "rounded-2xl border-2 border-red-500 bg-red-50 text-red-600"
                : "text-gray-500 bg-white"
            }`}
          >
            বাংলা
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "english" && english}
      {activeTab === "bangla" && bangla}
    </div>
  );
};
