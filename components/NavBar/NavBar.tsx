"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  // --- RESPONSIVE STATE ---
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getNavLinks();
      setNavLinks(data);
    }
    fetchData();
  }, []);

  // Close mobile menu if window is resized to be larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 h-[76px] w-full shadow-[0_4px_29px_rgba(0,0,0,0.05)] backdrop-blur-sm"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 50%)",
        }}
      >
        {/* --- RESPONSIVE CHANGE: Adjusted padding for different screen sizes --- */}
        <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-[80px]">
          {/* Logo and Home link */}
          <Link href="/" onClick={scrollToTop} className="flex-shrink-0">
            <Image
              src="/images/RedDotLogo.png"
              alt="Red Dot Digital Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          {/* --- RESPONSIVE CHANGE: Desktop Navigation Menu (hidden on mobile) --- */}
          <NavigationMenu className="hidden h-full justify-center md:flex">
            <NavigationMenuList className="h-full space-x-10">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {/* Simplified logic for single links vs. dropdowns */}
                  {!link.items || link.items.length === 0 ? (
                    <Link href={link.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink className="font-poppins flex h-full items-center bg-transparent px-0 text-xl font-normal hover:bg-transparent focus:bg-transparent">
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-poppins h-full bg-transparent px-0 text-xl font-normal hover:bg-transparent focus:bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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

          {/* --- RESPONSIVE CHANGE: Right side container (hidden on mobile) --- */}
          <div className="hidden h-full items-center gap-5 md:flex">
            <button
              aria-label="apps"
              className="rounded-full p-2 hover:bg-gray-100"
              title="More"
            >
              {/* 3x3 dots icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="text-gray-600"
              >
                <g fill="currentColor">
                  <circle cx="5" cy="5" r="1.6" />
                  <circle cx="12" cy="5" r="1.6" />
                  <circle cx="19" cy="5" r="1.6" />
                  <circle cx="5" cy="12" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="19" cy="12" r="1.6" />
                  <circle cx="5" cy="19" r="1.6" />
                  <circle cx="12" cy="19" r="1.6" />
                  <circle cx="19" cy="19" r="1.6" />
                </g>
              </svg>
            </button>
            <Link
              href="/contact"
              className="flex h-[42px] items-center justify-center rounded-[25px] border border-[#E52445] bg-white px-7 text-lg whitespace-nowrap text-[#E52445] hover:bg-red-100 dark:bg-transparent"
            >
              Contact Us
            </Link>
          </div>

          {/* --- RESPONSIVE CHANGE: Hamburger Menu Button (visible on mobile only) --- */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- RESPONSIVE CHANGE: Mobile Menu Panel --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-[76px] left-0 z-40 flex h-[calc(100vh-76px)] w-full flex-col items-center space-y-6 overflow-y-auto bg-white p-8 md:hidden">
          {navLinks.map((link) => (
            <div key={link.title} className="text-center">
              {/* If it's a dropdown, show title as a non-clickable header */}
              {link.items && link.items.length > 0 ? (
                <>
                  <h3 className="font-poppins mb-2 text-2xl font-bold text-gray-800">
                    {link.title}
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="text-lg text-gray-600 hover:text-[#E52445]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                // If it's a single link
                <Link
                  href={link.href || "#"}
                  onClick={handleMobileLinkClick}
                  className="font-poppins text-2xl font-bold text-gray-800 hover:text-[#E52445]"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          {/* Add a divider and the Contact Us button at the end */}
          <hr className="w-full border-gray-200" />
          <Link
            href="/contact"
            onClick={handleMobileLinkClick}
            className="flex w-full max-w-xs items-center justify-center rounded-[25px] border border-[#E52445] bg-white px-10 py-3 text-lg text-[#E52445] hover:bg-red-100"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}

// ListItem component remains unchanged
const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
