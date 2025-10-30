"use client";
import React from "react";

export default function CaseStudyProblemChallengeSolution() {
   const challenges = [
    "Low conversion due to outdated UX",
    "Legacy backend systems causing latency",
    "Complex transaction tracking for users",
  ];

  const solutions = [
    "Implemented modern React + API-driven wallet app",
    "Built clear transaction history filters",
    "Improved onboarding and eKYC flow",
    "Used Figma for UI/UX and React for front-end logic",
  ];

  return (
    <section className=" w-full max-w-[1280px] mx-auto mt-[60px] ">
      {/* Problems */}
      <div className="mb-[60px]">
        <h3 className="text-[32px] font-[700] mb-[16px]">Problems</h3>
        <p className="text-[16px] leading-[30px] text-black">
        RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions. RedDot is establishing its own office in the Government's IT Park at Bangabandhu Hi-Tech City in Kaliakoir, Gazipur. We aim to support Bangladesh’s digital goals by offering innovative solutions like IT applications, Cloud DC, and IoT, to name a few.
        </p>
      </div>

      {/* 🔹 Challenges */}
      <div className="mb-[60px]">
        <h3 className="text-[32px] font-[700] mb-[16px]">Challenges</h3>
        <p className="text-[16px] leading-[30px] text-black min-h-[59px] mb-[25px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
          second-largest mobile network operator in Bangladesh, offering IT and
          digital solutions.
        </p>

        <ul className="flex flex-col  text-[16px] leading-[30px] text-black">
          {challenges.map((item, i) => (
            <li key={i} className="flex items-center gap-[8px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#424280" />
                <path
                  d="M8 12.5L11 15.5L16 9.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Solutions */}
      <div>
        <h3 className="text-[32px] font-[700] mb-[16px]">Our Solutions</h3>
        <p className="text-[16px] leading-[30px] text-black min-h-[59px] mb-[25px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
          second-largest mobile network operator in Bangladesh, offering IT and
          digital solutions.
        </p>

        <ul className="flex flex-col gap-[8px] text-[16px] leading-[30px] text-black">
          {solutions.map((item, i) => (
            <li key={i} className="flex items-center gap-[8px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#424280" />
                <path
                  d="M8 12.5L11 15.5L16 9.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}