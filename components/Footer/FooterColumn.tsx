import React from "react";
import Image from "next/image";
import type { FooterColumn as FooterColumnType } from "@/lib/data/footerData";

type FooterColumnProps = {
  column: FooterColumnType;
};

const FooterColumn = ({ column }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{column.title}</h3>

      {/* Render simple text content */}
      {column.content && <p className="text-gray-600 leading-relaxed">{column.content}</p>}

      {/* Render a list of links */}
      {column.links && (
        <ul className="space-y-3 text-gray-600">
          {column.links.map((link) => (
            <li key={link.text}>
              <a href={link.href} className="hover:text-red-600 transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Render address and social icons for the contact column */}
      {column.address && (
        <address
          className="not-italic text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: column.address.replace(/\n/g, "<br />") }}
        />
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
              <Image src={social.iconUrl} alt={social.alt} width={36} height={36} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterColumn;