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
import { getNavLinks, NavLink } from "@/lib/api/fetchNavData";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if current page is home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    async function fetchData() {
      const data = await getNavLinks();
      setNavLinks(data);
    }
    fetchData();
  }, []);

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
          setIsScrolled(window.scrollY > 550);
        } else {
          // Fallback: use the exact hero section height (620px)
          setIsScrolled(window.scrollY > 420);
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
    if (!isHomePage) {
      // All other pages: always black text
      return "text-gray-900";
    } else {
      // Home page: white text until scrolled, then black
      return isScrolled ? "text-gray-900" : "text-white";
    }
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
            "z-1000 top-0 lg:w-[1440px] h-[76px] rounded-4xl backdrop-blur-2xl opacity-100 border-b shadow-[0_4px_29px_rgba(0,0,0,0.05)] transition-all duration-100",
            isHomePage 
              ? isScrolled 
                ? "bg-transparent backdrop-blur-2xl border-gray-200/50"  // White background when scrolled past hero
                : "bg-transparent border-white/20"  // Transparent on hero section
              : "bg-transparent backdrop-blur-2xl border-gray-200/50"  // Other pages: always have the scrolled style
          )}>
            <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-[80px]">
              <Link href="/" onClick={scrollToTop} className="flex-shrink-0 relative lg:right-16">
                <Image
                  src="/images/RedDotLogo.svg"
                  alt="Red Dot Digital Logo"
                  width={120}
                  height={40}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                  )}
                />
              </Link>

              {/* Desktop Navigation */}
              <NavigationMenu className="hidden h-full justify-center md:flex">
                <NavigationMenuList className="h-full space-x-16">
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
                            "font-poppins h-full px-0 text-[15px] font-normal hover:text-red-500 transition-colors duration-300",
                            getTextColorClass()
                          )}>
                            {link.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {link.items?.map((item) => (
                                <ListItem
                                  key={item.title}
                                  title={item.title}
                                  href={item.href}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Right side container */}
              <div className="hidden h-full items-center gap-5 md:flex">
                <div className="relative left-16">
                  <Link
                    href="/contact-us"
                    className={cn(
                      "flex h-[56px] w-[153px] justify-end items-center rounded-[25px] border px-7 text-lg transition-all duration-300", 
                      "bg-gradient-to-l from-red-700 via-red-600 via-red-500 to-red-400 text-white border-[#E52445] hover:bg-red-100" 
                    )}
                  >
                    Contact Us
                  </Link>
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
        <div className="fixed top-0 left-0 z-40 flex h-screen w-full flex-col items-center space-y-6 overflow-y-auto bg-white p-8 pt-24 md:hidden">
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
    </>
  );
}

// ListItem component remains the same
const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block rounded-2xl p-4 border border-transparent transition-colors duration-200 hover:text-red-500 text-gray-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium transition-colors duration-200">
            {title}
          </div>
          <p className="text-sm line-clamp-2 text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};