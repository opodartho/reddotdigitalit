import React from "react";
import Image from "next/image";
import { getFooterData } from "@/lib/api/fetchFooterData";
import FooterColumn from "./FooterColumn";

const Footer = async () => {
  // The component now fetches its own data, making it self-contained.
  const footerData = await getFooterData();
  const { logoUrl, columns, brochure, legalLinks, copyright } = footerData;

  return (
    <footer className="bg-gradient-to-b from-slate-100 via-violet-100 to-violet-100 font-poppins mt-20 px-[16px] sm:px-[80px]">
      {/* Top Section of Footer */}
      <div className="max-w-[1440px] mx-auto py-12">
        <div className="flex justify-center mb-12">
          <Image
            src={logoUrl}
            alt="RedDot Digital - Your Digital Transformation Partner"
            width={136.25}
            height={37.72}
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-22 gap-y-16">
          {columns.map((column) => {
            const extraPadding =
              column.title === "About Us"
                ? "lg:pl-22"
                : column.title === "Quick Links"
                  ? "lg:pl-6"
                  : "";

            return (
              <div key={column.title} className={extraPadding}>
                <FooterColumn column={column} />
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Bar of Footer */}
      <div className="py-6 border-t border-slate-800/10">
        <div className="max-w-[1440px] mx-auto  flex flex-col md:flex-row justify-between ">
          <div className="mb-4 md:mb-0">
            <a href={brochure.href} className="flex items-center gap-2 sm:gap-3 group">
              <Image
                src={brochure.iconUrl}
                alt="Download Brochure Icon"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110"
              />
              <div>
                <span className="font-semibold block text-gray-800 underline underline-offset-2 group-hover:text-red-600 transition-colors">
                  {brochure.text}
                </span>
                <span className="text-sm text-title/65">
                  {brochure.details}
                </span>
              </div>
            </a>
          </div>

          <div className="flex gap-4 text-title/65 underline decoration-title/65 underline-offset-4 underline-offset-4 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-red-600 transition-colors "
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="text-sm text-title/65">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
