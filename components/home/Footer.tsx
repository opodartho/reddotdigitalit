import type { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#E9E8F8]">
      <div className="container mx-auto px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <Image
            src="/redDot-logo.png"
            alt="RedDot Digital - Your Digital Transformation Partner"
            width={110}
            height={37.72}
            priority
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {/* ... other grid sections ... */}

          {/* Who we are */}
          <div>
            <h3 className="text-xl font-bold mb-4">Who we are</h3>
            <p className="text-gray-600 leading-relaxed">
              RedDot Digital Limited is a 100% subsidiary company of Robi Axiata
              Limited, the second largest mobile network operator in Bangladesh
              offering IT & Digital solutions.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  About Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Area of operations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Area of operations</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Privacy Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-600 leading-relaxed">
              57 & 57/A, Uday Tower (15th Floor),
              <br />
              Gulshan 1, Gulshan Avenue, Dhaka 1212,
              <br />
              Bangladesh
            </address>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/footer-icons/facebook.png"
                  alt="Facebook Icon"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/footer-icons/linkedIn.png"
                  alt="LinkedIn Icon"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-[#E0DFF5] py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* --- DOWNLOAD BROCHURE SECTION WITH PNG --- */}
          <div className="mb-4 md:mb-0">
            <a
              href="/path-to-your/brochure.pdf"
              className="flex items-center gap-3 group"
            >
              <Image
                src="/footer-icons/download-arrow.png"
                alt="Download Brochure Icon"
                width={40} // Adjust to your icon's actual size
                height={40} // Adjust to your icon's actual size
                className="transition-transform group-hover:scale-110"
              />

              {/* Text Block */}
              <div>
                <span className="font-semibold block text-gray-800 underline underline-offset-2 group-hover:text-red-600 transition-colors">
                  Download Company Brochure
                </span>
                <span className="text-sm text-gray-600">PDF, 10mb</span>
              </div>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-gray-600 mb-4 md:mb-0">
            <a href="#" className="hover:text-red-600 transition-colors">
              Term & Conditions
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            <p>&copy; 2024 All rights reserved | RedDot Digital Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
