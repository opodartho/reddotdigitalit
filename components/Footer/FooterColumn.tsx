import React from "react";
import Image from "next/image";
import type { FooterColumn as FooterColumnType } from "@/lib/data/footerData";

type FooterColumnProps = {
  column: FooterColumnType;
};

const FooterColumn = ({ column }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-medium text-[18px] leading-[28px] tracking-[0px] mb-4 text-title">
        {column.title}
      </h3>



      {/* Render a list of links */}
      {column.links && (
        <ul className="space-y-3 text-subtitle font-normal text-[14px] leading-[16px] tracking-[0px]">
          {column.links.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="hover:text-red-600 transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Render address and social icons for the contact column */}
      {column.address && (
        <address className="not-italic text-subtitle leading-relaxed">
          {column.address.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
              {line}
              {index < array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </address>
      )}

      {/* Render simple text content */}
      {column.content && (
        <p className="text-gray-950 font-normal text-[14px] leading-[22px] tracking-[0px] text-subtitle">
          {column.content}
        </p>
      )}

      {column.socials && (
        <div className="flex space-x-3 mt-4">
          {column.socials.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.alt}
              className="transition-transform hover:scale-110"
            >
              <Image
                src={social.iconUrl}
                alt={social.alt}
                width={36}
                height={36}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterColumn;
