"use client";

import Image from "next/image";
import React from "react";

export default function CaseStudyTechnology() {
  const techs = [
    { name: "Java", src: "/images/java.png" },
    { name: "Spring Boot", src: "/images/springboot.png" },
    { name: "Oracle", src: "/images/oracle.png" },
    { name: "Redis", src: "/images/redis.png" },
    { name: "MongoDB", src: "/images/mongodb.png" },
    { name: "PostgreSQL", src: "/images/postgresql.png" },
    { name: "PostgreSQL", src: "/images/postgresql.png" },
    { name: "JDBC", src: "/images/jdbc.png" },
    { name: "JDBC", src: "/images/jdbc.png" },
  ];

  return (
    <section className="w-full flex flex-col items-center bg-[#FFFFFF] mt-[80px]  px-[18px] lg:px-20 ">
      {/* ✅ Container width = 1280px centered */}
      <div className="w-full ">
        {/* 🔹 Title */}
        <h3 className="text-[32px] font-[700] text-[#000000] mb-[16px] font-poppins">
          Technology Used
        </h3>

        {/* 🔹 Description */}
        <p className="font-poppins font-[700] text-[16px] leading-[30px] text-[#000000] mb-[40px] max-w-[1280px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited,
          the second-largest mobile network operator in Bangladesh, offering IT
          and digital solutions. Network operator in Bangladesh, offering IT and
          digital solutions.
        </p>

        {/* 🔹 Grid Section */}
        <div
          className="
            grid grid-cols-5 gap-[24px]
            max-lg:grid-cols-4
            max-md:grid-cols-3
            max-sm:grid-cols-2
            max-[480px]:grid-cols-1
          "
        >
          {techs.map((tech, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center 
                bg-[#FFFFFF]
                border border-[#E9E9E9]
                rounded-[8px]
                h-[60px] w-full 
                hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                transition-all
              "
            >
              <Image 
                src={tech.src}
                alt={tech.name}
                width={80}
                height={40}
                className="object-contain  max-h-[40px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
