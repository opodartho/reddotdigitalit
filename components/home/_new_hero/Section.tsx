"use client";

import Image from "next/image";
import Link from "next/link";
import WhiteButton from "@/components/buttons/WhiteHoverButton";
const services = [
  { title: "Sales & Distribution", slug: "sales-distribution", icon: "/icons/sales.png" },
  { title: "CRM", slug: "crm", icon: "/icons/crm.png" },
  { title: "AI & Machine Learning", slug: "ai-machine-learning", icon: "/icons/ai.png" },
  { title: "Resource Augmentation", slug: "resource-augmentation", icon: "/icons/resource.png" },
  { title: "Fintech Solutions", slug: "fintech-solutions", icon: "/icons/fintech.png" },
  { title: "DevOps", slug: "devops", icon: "/icons/devops.png" },
  { title: "Customized Solutions", slug: "customized-software-solutions", icon: "/icons/custom.png" },
  { title: "Cloud Migration", slug: "cloud-migration", icon: "/icons/cloud.png" },
];


export default function NewHero() {
  return (
    <section className="relative w-full lg:h-[668px] overflow-hidden ">
      {/* Background image */}

      <Image
        src="/images/hero-bg-updated.png"
        alt="Hero Background"
        fill
        className="object-cover"
      />




      {/* Content */}
      <div className="container mx-auto px-4">

        <div className="relative h-full flex flex-col items-center justify-start pt-[144px] pb-[100px]">

          <div className="  md:text-center md:px-[80px] px-[32px] 
       max-w-[1020px]
       min-h-[124px] 
       ">
            {/* Title */}
            <h1
              className="
            text-center font-poppins font-bold 
            text-[42px] md:text-[48px] leading-[130%]
            tracking-[0.002em]
            bg-gradient-to-r from-white via-[#C7C7C7] to-white
            bg-clip-text text-transparent

          "
            >
              Crafting Innovation, Delivering
              Excellence
            </h1>
          </div>

          {/* Service Cards */}
          <div className="mt-[54px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center justify-items-center">
            {services.map((srv, index) => (
              <Link
                key={index}
                href={`/area_of_operations_details/${srv.slug}`}
                className="
    w-[130px] h-[140px] rounded-[10px]
    bg-white/15 backdrop-blur-md
    flex flex-col items-center justify-center
    text-center py-[22px] px-[12px]
    transition-all duration-200 hover:bg-white/25 hover:scale-105
  "
              >
                <Image
                  src={srv.icon}
                  alt={srv.title}
                  width={40}
                  height={40}
                  className="mb-4 w-10 h-10 object-contain"
                />

                <span className="text-[#E1E0EB] text-[14px] leading-[21px] font-medium text-center">
                  {srv.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Button */}
          <WhiteButton

            className="mt-[52px] w-[233px] h-[56px] text-[16px] font-medium leading-[24px] "
          >
            Explore All Services
          </WhiteButton>
        </div>
      </div>
    </section>
  );
}
