//not using this



"use client";

import { useState } from "react";

type TabButtonsProps = {
  All: React.ReactNode;
  Telecom: React.ReactNode;
  BankFintech: React.ReactNode;
  FMCG: React.ReactNode;
  MediaAdvertising: React.ReactNode;
  Government: React.ReactNode;
  iNgo: React.ReactNode;
};

export const TabButtons = ({
  All,
  Telecom,
  BankFintech,
  FMCG,
  MediaAdvertising,
  Government,
  iNgo,
}: TabButtonsProps) => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabButtonStyle = (tabName: string) =>
    `px-10 py-2 font-semibold transition-colors ${
      activeTab === tabName
        ? "rounded-2xl border-2 border-red-500 bg-red-50 text-red-600"
        : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 "
    }`;

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl border border-gray-300 flex flex-wrap">
          <button onClick={() => setActiveTab("All")} className={tabButtonStyle("All")}>
            All
          </button>

          <button onClick={() => setActiveTab("Telecom")} className={tabButtonStyle("Telecom")}>
            Telecom
          </button>

          <button
            onClick={() => setActiveTab("Bank & Fintech")}
            className={tabButtonStyle("Bank & Fintech")}
          >
            Bank & Fintech
          </button>

          <button onClick={() => setActiveTab("FMCG")} className={tabButtonStyle("FMCG")}>
            FMCG
          </button>

          <button
            onClick={() => setActiveTab("Media & Advertising")}
            className={tabButtonStyle("Media & Advertising")}
          >
            Media & Advertising
          </button>

          <button onClick={() => setActiveTab("Government")} className={tabButtonStyle("Government")}>
            Government
          </button>

          <button onClick={() => setActiveTab("iNgo")} className={tabButtonStyle("iNgo")}>
            iNgo
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "All" && All}
        {activeTab === "Telecom" && Telecom}
        {activeTab === "Bank & Fintech" && BankFintech}
        {activeTab === "FMCG" && FMCG}
        {activeTab === "Media & Advertising" && MediaAdvertising}
        {activeTab === "Government" && Government}
        {activeTab === "iNgo" && iNgo}
      </div>
    </div>
  );
};
