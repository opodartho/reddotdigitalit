"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import WhiteButton from "../buttons/WhiteHoverButton";

interface ContactFormProps {
  buttonText?: string;
  className?: string;
  variant?: "simple" | "extended"; // NEW
}

interface FormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  description: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  buttonText = "Submit",
  className = "",
  variant = "simple",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit this form?"
    );

    if (confirmSubmit) {
    
      alert("✅ Your message has been sent successfully!");
      reset();
    } else {
      console.log("❌ Submission cancelled");
    }
  };

  return (
    <div
      className={`bg-[#F9F8FB] rounded-[16px] px-[16px] md:px-[35px] py-[62px] md:py-[57px] flex flex-col justify-start w-full container [774px] ${className}`}
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
            className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926]
              placeholder-gray-500
               focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.fullName
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

        {/* EXTENDED: Company + Email  |  SIMPLE: Email + Phone */}
        {variant === "extended" ? (
          <>
            {/* Company Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Name */}
              <div className="flex-1">
                <label className="block text-[16px] leading-[30px] font-medium text-text-[#060414] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Wellgit"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926]
                    placeholder-gray-500
                     focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.companyName
                      ? "border-[#E52445] focus:ring-[#E52445]"
                      : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
                    }`}
                />
                {errors.companyName && (
                  <p className="text-[#E52445] text-[13px] mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

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
                  className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] 
                    placeholder-gray-500
                    focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.email
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
            </div>

            {/* Service + Budget */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Select Your Service */}
              <div className="flex-1">
                <label className="block text-[16px] leading-[30px] font-medium text-text-[#060414] mb-2">
                  Select Your Service
                </label>
                <select
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] 
                    placeholder-gray-500
                    focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.service
                      ? "border-[#E52445] focus:ring-[#E52445]"
                      : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
                    }`}
                >

                  <option value="MFS">MFS</option>
                  <option value="Cloud">Cloud</option>
                  <option value="ERP">ERP</option>
                  <option value="Consulting">Consulting</option>
                </select>
                {errors.service && (
                  <p className="text-[#E52445] text-[13px] mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Project Budget */}
              <div className="flex-1">
                <label className="block text-[16px] leading-[30px] font-medium text-text-[#060414] mb-2">
                  Project Budget
                </label>
                <input
                  type="text"
                  placeholder="4500"
                  {...register("budget", {
                    required: "Project budget is required",
                  })}
                  className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926] 
                    placeholder-gray-500
                    focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.budget
                      ? "border-[#E52445] focus:ring-[#E52445]"
                      : "border-[rgba(59,59,115,0.21)] focus:ring-blue-500"
                    }`}
                />
                {errors.budget && (
                  <p className="text-[#E52445] text-[13px] mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          // SIMPLE VARIANT: Email + Phone (your original layout)
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
                className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926]
                  placeholder-gray-500
                   focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.email
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
                className={`w-full h-[48px] border rounded-[6px] px-4 text-[14px] leading-[30px] text-[#121926]
                  placeholder-gray-500
                   focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.phone
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
        )}

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
            className={`w-full border rounded-[6px] px-4 py-2 text-[14px] leading-[30px] text-[#121926]
              placeholder-gray-500
              resize-none focus:outline-none focus:ring-1 bg-white transition-all duration-200 ${errors.description
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
          {/*<Button
            type="submit"
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-[6px] hover:shadow-[0_12px_20px_rgba(229,36,69,0.35)]
              active:translate-y-[2px]"
          >
            {buttonText}
          </Button>

          */
          }
          <WhiteButton
            className="w-[195px] h-[56px] text-[16px] leading-[24px]"
          >
            {buttonText}
          </WhiteButton>

        </div>
      </form>
    </div>
  );
};
