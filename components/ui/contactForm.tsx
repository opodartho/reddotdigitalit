"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  buttonText?: string;
  className?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  description: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  buttonText = "Submit",
  className = "",
}) => {
  //  Real-time validation as user types
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  // 🧠 Submit handler
  const onSubmit = (data: FormData) => {
    // Ask for confirmation before clearing or sending
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit this form?"
    );

    if (confirmSubmit) {
      console.log("✅ Form Submitted:", data);
      alert("✅ Your message has been sent successfully!");

      // Clear all inputs after successful submission
      reset();
    } else {
      console.log("❌ Submission cancelled");
    }
  };

  return (
    <div
      className={`bg-[#F9F8FB] rounded-[16px] px-[16px] md:px-[35px] py-[62px] md:py-[57px] flex flex-col justify-start w-full max-w-[774px] ${className}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-9 mb-[15px] md:mb-[20px]"
        noValidate
      >
        {/* Full Name */}
        <div>
          <label className="block text-[16px] leading-[30px] font-medium text-text-[#060414] mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Carter"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
            })}
            className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${
              errors.fullName
                ? "border-[#E52445] focus:ring-[#E52445]"
                : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-[#E52445] text-[13px] mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Email */}
          <div className="flex-1">
            <label className="block text-[16px] leading-[30px] font-medium text-text-[#060414] mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="wellgit.rt@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${
                errors.email
                  ? "border-[#E52445] focus:ring-[#E52445]"
                  : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-[#E52445] text-[13px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex-1">
            <label className="block text-[16px] leading-[30px] font-medium text-[#060414] mb-2">
              Phone
            </label>
            <input
              type="text"
              placeholder="e.g. +880 02548777"
              {...register("phone", {
                required: "Phone number is required",
              minLength: {
                value: 11,
                message: "Phone number must be 11 characters",
              },
                
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: "Invalid phone number",
                },
              })}
              className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${
                errors.phone
                  ? "border-[#E52445] focus:ring-[#E52445]"
                  : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
              }`}
            />
            {errors.phone && (
              <p className="text-[#E52445] text-[13px] mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-[16px] leading-[30px] font-medium text-[#060414] mb-2">
            Description
          </label>
          <textarea
            placeholder="Write your message here..."
            rows={3}
            {...register("description", {
              required: "Description is required",

            })}
            className={`w-full border rounded-[6px] px-4 py-2 text-[14px] leading-[30px] text-[#121926] resize-none focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${
              errors.description
                ? "border-[#E52445] focus:ring-[#E52445]"
                : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
            }`}
          />
          {errors.description && (
            <p className="text-[#E52445] text-[13px] mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="lg:flex justify-center">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]"
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};
