import React from "react";
import Image from "next/image";
import { getFooterData } from "@/lib/api/fetchFooterData";
import FooterColumn from "./FooterColumn";

const Footer = async () => {
  // The component now fetches its own data, making it self-contained.
  const footerData = await getFooterData();
  const { logoUrl, columns, brochure, legalLinks, copyright } = footerData;

  return (
    <footer className="bg-gradient-to-b from-slate-100 via-violet-100 to-violet-100 font-poppins mt-20 pl-10">
      {/* Top Section of Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center mb-12">
          <Image
            src={logoUrl}
            alt="RedDot Digital - Your Digital Transformation Partner"
            width={136.25}
            height={37.72}
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {columns.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>
      </div>

      {/* Bottom Bar of Footer */}
      <div className="py-6 border-t border-slate-800/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <a href={brochure.href} className="flex items-center gap-3 group">
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
                <span className="text-sm text-gray-600">
                  {brochure.details}
                </span>
              </div>
            </a>
          </div>

          <div className="flex gap-6 text-gray-600 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:text-red-600 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-600 mr-10">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
