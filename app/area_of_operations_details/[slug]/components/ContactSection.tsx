"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contactForm";
import { motion, useAnimationControls } from "framer-motion";

export const ContactSection = () => {
  const title = ["Leave", "Your", "Query", "To", "Us"];
  const controls = useAnimationControls();

  // ✨ Custom loop animation logic
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Step 1: Reset visibility
        await controls.start({
          opacity: 0,
          transition: { duration: 0 },
        });

        // Step 2: Animate words one by one
        for (let i = 0; i < title.length; i++) {
          await controls.start((index) => {
            if (index <= i) {
              return {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              };
            }
            return {};
          });
        }

        // Step 3: Pause
        await new Promise((r) => setTimeout(r, 1000));

        // Step 4: Fade out entire line
        await controls.start({
          opacity: 0,
          y: -10,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // Step 5: Wait before restart
        await new Promise((r) => setTimeout(r, 300));
      }
    };

    // 🔥 KEY FIX: Run AFTER mount
    setTimeout(() => {
      sequence();
    }, 0);
  }, [controls]);

  return (
    <section className="relative w-full bg-white">
      <div className="px-[16px] sm:px-[80px] flex flex-col lg:flex-row justify-between items-start gap-12 max-w-[1440px] mx-auto">
        {/* 🧭 Left Info Section */}
        <div className="flex flex-col justify-start max-w-[291px] sm:max-w-[420px]">
          {/* ✨ Animated Looping Heading */}
          <h2 className="text-[25px] md:text-[32px] font-normal text-[#060414] leading-[40px] mb-4 md:mb-6 flex flex-wrap">
            {title.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                className="inline-block mr-[6px]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        
          {/* Description */}
          <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[32px] text-[#121926]/85 mb-8 md:mb-10">
            RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited,
            the second-largest mobile network operator in Bangladesh, offering
            IT and digital solutions. RedDot is establishing its own office in.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                Phone Number
              </h4>
              <p className="text-[14px] text-[#121926]/85 leading-[28px]">
                +880 18-86443344
              </p>
            </div>

            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                Email Address
              </h4>
              <p className="text-[14px] text-[#121926]/85 leading-[28px] break-all">
                support@reddotdigitalit.com
              </p>
            </div>
          </div>
      
        </div>

        {/* 🧩 Right Form Section */}
        <ContactForm />
      </div>
    </section>
  );
};
