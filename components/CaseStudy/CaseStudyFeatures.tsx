"use client";

export default function CaseStudyFeatures() {
  const features = [
    "Multi-wallet account",
    "EKYC flow",
    "QR Payment",
    "Add/Send Money",
    "Transaction history with filters",
  ];

  return (
    <section className="w-full  mt-[60px]  px-[18px] lg:px-20 ">
      {/* 🔹 Section Heading */}
      <h3 className="text-[32px] font-[700] mb-[16px] font-poppins">
        Key Features Delivered
      </h3>

      
        {/* 🔹 Description */}
        <p className="font-poppins font-[700] text-[16px] leading-[30px] text-[#000000] mb-[40px] max-w-[1280px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited,
          the second-largest mobile network operator in Bangladesh, offering IT
          and digital solutions. Network operator in Bangladesh, offering IT and
          digital solutions.
        </p>


      {/* 🔹 Feature List */}
      <ul className="flex flex-col ">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-[8px]">
            {/* ✅ Purple Circle with White Checkmark */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Purple Circle */}
              <circle cx="12" cy="12" r="10" fill="#424280" />
              {/* White Checkmark */}
              <path
                d="M8 12.5L11 15.5L16 9.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Feature Text */}
            <span className="font-poppins font-[700] text-[14px] leading-[37px] text-[#000000]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
