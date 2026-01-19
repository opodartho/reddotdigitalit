"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ui/contactForm";

interface ScheduleCallModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ScheduleCallModal({
  open,
  onClose,
}: ScheduleCallModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/50">
      {/* Modal container - scales proportionally from 1920px base */}
      <div
        className="
          relative
          w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[65.625vw]
          max-w-[1260px]
          bg-white
          rounded-[12px]
          overflow-hidden
          grid grid-cols-1 md:grid-cols-[38.57%_1fr]
        "
      >
        {/* ================= LEFT PANEL ================= */}
        <div className="hidden md:flex bg-[#ECEAFA] border-r border-[rgba(59,59,115,0.21)] items-center justify-center self-stretch">
          <Image
            src="/images/book-call-headset.png"
            alt="Support illustration"
            width={328}
            height={331}
            priority
            className="w-[17vw] h-auto max-w-[328px]"
          />
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="relative bg-[#F9F8FB] px-5 sm:px-8 md:px-[2.08vw] xl:px-[40px] pt-6 sm:pt-8 md:pt-[1.67vw] xl:pt-[32px] pb-6 sm:pb-8 md:pb-[1.67vw] xl:pb-[32px]">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 md:right-6 md:top-6 text-gray-500 hover:text-black transition z-[5000]"
            aria-label="Close"
          >
            <X className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          </button>

          {/* Title */}
          <h2
            className="
              text-2xl sm:text-[1.67vw] xl:text-[32px]
              leading-[1.25]
              font-semibold
              text-[#121926]
              mb-4 sm:mb-6 md:mb-[1.46vw] xl:mb-[28px]
            "
            style={{ fontFamily: "Poppins" }}
          >
            Book a Call
          </h2>

          {/* Form */}
          <ContactForm
            variant="modal"
            buttonText="Submit"
            className="px-0 py-0 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
