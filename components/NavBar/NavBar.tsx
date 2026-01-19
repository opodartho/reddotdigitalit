"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLink } from "@/lib/api/fetchNavData";
import { staticNavData } from "@/lib/data/navBarData";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import SplitTextHover from "../animation/SplitTextHover";
import ScheduleCallModal from "@/components/ui/ScheduleCallModal";

export function NavBar() {
  const navLinks: NavLink[] = staticNavData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navValue, setNavValue] = useState("");
  const pathname = usePathname();

  // Close navigation menu when route changes
  useEffect(() => {
    setNavValue("");
  }, [pathname]);

  // Check if current page is home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    const handleScroll = () => {
      // Only apply scroll logic for home page
      if (isHomePage) {
        const heroSection = document.getElementById('hero-section');

        if (heroSection) {
          const sectionBottom = heroSection.getBoundingClientRect().bottom;
          // When the hero section (620px height) is completely scrolled past
          setIsScrolled(window.scrollY > 600);
        } else {
          // Fallback: use the exact hero section height (620px)
          setIsScrolled(window.scrollY > 580);
        }
      } else {
        // For all other pages, text should always be black
        setIsScrolled(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]); // Add isHomePage as dependency

  // Determine text color based on page and scroll state
  const getTextColorClass = () => {

    return "text-gray-900";

  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="lg:flex lg:justify-center sticky lg:top-[22px] z-1000">
        <div className="absolute bg-transparent top-0 lg:flex lg:justify-center lg:items-center z-100 pt-[22px] w-full">
          <nav className={cn(
            " px-4 z-1000 top-0 lg:w-[1280px] h-[66px] lg:h-[76px] rounded-4xl backdrop-blur-2xl opacity-100 border-b shadow-[0_4px_29px_rgba(0,0,0,0.05)] transition-all duration-100",
            isHomePage
              ? isScrolled
                ? "bg-transparent backdrop-blur-2xl border-gray-200/50"  // White background when scrolled past hero
                : "bg-transparent border-white/20"  // Transparent on hero section
              : "bg-transparent backdrop-blur-2xl border-gray-200/50"  // Other pages: always have the scrolled style
          )}>
            <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-[70px]">
              <Link href="/" onClick={scrollToTop} className="flex-shrink-0 relative lg:right-16">
                <Image
                  src="/images/RedDotLogo.png"
                  alt="Red Dot Digital Logo"
                  width={120}
                  height={40}
                  className={cn(
                    "cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:opacity-90",
                  )}
                />
              </Link>

              {/* Desktop Navigation */}
              <NavigationMenu className="hidden h-full justify-center md:flex" value={navValue} onValueChange={setNavValue}>
                <NavigationMenuList className="h-full space-x-8">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.title}>
                      {!link.items || link.items.length === 0 ? (
                        <Link href={link.href || "#"} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(
                            "font-poppins flex h-full items-center px-0 text-[15px] font-normal hover:text-red-500 transition-colors duration-100",
                            getTextColorClass()
                          )}>
                            {link.title}
                          </NavigationMenuLink>
                        </Link>
                      ) : (
                        <>
                          <NavigationMenuTrigger className={cn(
                            "font-poppins h-full px-0 text-[15px] font-medium hover:text-red-500 transition-colors duration-300",
                            getTextColorClass()
                          )}>
                            {link.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {/* Figma: 1075px x 377px at 1920px viewport */}
                            <div
                              className="
                                flex flex-col
                                bg-white
                                rounded-[16px] lg:rounded-[20px]
                                w-[600px] lg:w-[800px] xl:w-[900px] 2xl:w-[1075px]
                                px-[24px] lg:px-[32px] xl:px-[38px]
                                pt-[20px] lg:pt-[22px] xl:pt-[25px]
                                pb-[28px] lg:pb-[36px] xl:pb-[44px]
                              "
                            >
                              {/* Dropdown Title */}
                              <h3
                                className="
                                  font-poppins
                                  font-medium
                                  text-black
                                  text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]
                                  leading-[1.5]
                                  mb-[20px] lg:mb-[28px] xl:mb-[35px]
                                "
                              >
                                {link.title}
                              </h3>

                              {/* 3-column grid for items */}
                              <ul
                                className="
                                  grid grid-cols-3
                                  gap-x-[60px] lg:gap-x-[100px] xl:gap-x-[150px] 2xl:gap-x-[200px]
                                  gap-y-[16px] lg:gap-y-[20px] xl:gap-y-[24px]
                                  mb-[28px] lg:mb-[36px] xl:mb-[48px]
                                "
                              >
                                {link.items?.map((item) => (
                                  <li key={item.title}>
                                    <Link
                                      href={item.href}
                                      className="
                                        font-poppins
                                        font-medium
                                        text-[14px] lg:text-[15px] xl:text-[16px]
                                        leading-[24px]
                                        text-black
                                        hover:text-[#E52445]
                                        transition-colors duration-200
                                        whitespace-nowrap
                                      "
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              {/* Schedule a Call button */}
                              <button
                                onClick={() => setIsModalOpen(true)}
                                className="
                                  w-[160px] lg:w-[180px] xl:w-[204px]
                                  h-[44px] lg:h-[50px] xl:h-[56px]
                                  bg-[#E52445]
                                  hover:bg-[#c91f3b]
                                  rounded-[10px]
                                  font-poppins
                                  font-medium
                                  text-[14px] lg:text-[15px] xl:text-[16px]
                                  leading-[24px]
                                  text-white
                                  transition-colors duration-200
                                "
                              >
                                Schedule a Call
                              </button>
                            </div>
                          </NavigationMenuContent>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Right side container */}
              {/* Right side container */}
              <div className="hidden h-full items-center gap-2 md:flex">
                <div className="relative left-16">

                  {/* Gradient Border Wrapper */}
                  <div className="p-[1px] rounded-4xl ">

                    <Link
                      href="/contact-us"
                      className={cn(
                        " flex justify-center items-center rounded-4xl w-[144px] h-[44px] text-lg transition-all duration-300",
                        "bg-gradient-to-r from-[#E52445] via-[#BD1E39] to-[#7F1426] text-white hover:opacity-90 "
                      )}
                    >
                      <SplitTextHover text="Contact Us" />
                    </Link>

                  </div>

                </div>
              </div>
              {/* Hamburger Menu */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={getTextColorClass()}
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 z-40 flex h-screen w-full flex-col items-center space-y-6 overflow-y-auto bg-white p-8 pt-32 md:hidden">
          {navLinks.map((link) => (
            <div key={link.title} className="text-center">
              {link.items && link.items.length > 0 ? (
                <>
                  <h3 className="font-poppins mb-2 text-2xl font-bold text-gray-900">
                    {link.title}
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="text-lg text-gray-700 hover:text-red-500"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  onClick={handleMobileLinkClick}
                  className="font-poppins text-2xl font-bold text-gray-900 hover:text-red-500"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          <hr className="w-full border-gray-200" />
          <Link
            href="/contact-us"
            onClick={handleMobileLinkClick}
            className="flex w-full items-center justify-center rounded-[25px] border border-[#E52445] bg-white px-10 py-3 text-lg text-[#E52445] hover:bg-red-100"
          >
            Contact Us
          </Link>
        </div>
      )}

      {/* Schedule Call Modal */}
      <ScheduleCallModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

