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
import { LayoutGrid, Menu, X } from "lucide-react"; // Import Menu and X icons

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
        className="sticky top-0 z-50 w-full backdrop-blur-sm h-[76px] shadow-[0_4px_29px_rgba(0,0,0,0.05)]"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 50%)",
        }}
      >
        {/* --- RESPONSIVE CHANGE: Adjusted padding for different screen sizes --- */}
        <div className="flex items-center justify-between h-full px-4 md:px-10 lg:px-[80px]">
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
          <NavigationMenu className="hidden md:flex justify-center h-full">
            <NavigationMenuList className="space-x-10 h-full">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {/* Simplified logic for single links vs. dropdowns */}
                  {!link.items || link.items.length === 0 ? (
                    <Link href={link.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink className="bg-transparent px-0 hover:bg-transparent focus:bg-transparent font-poppins font-normal text-xl h-full flex items-center">
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="bg-transparent px-0 hover:bg-transparent focus:bg-transparent font-poppins font-normal text-xl h-full">
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
          <div className="hidden md:flex items-center gap-5 h-full">
            <button
              aria-label="apps"
              className="rounded-full hover:bg-gray-100 p-2"
              title="More"
            >
              <LayoutGrid size={20} className="text-gray-600" />
            </button>
            <Link
              href="/contact"
              className="border border-[#E52445] text-[#E52445] bg-white hover:bg-red-100 dark:bg-transparent rounded-[25px] px-7 h-[42px] text-lg flex items-center justify-center whitespace-nowrap"
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
        <div className="md:hidden absolute top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-white z-40 flex flex-col items-center p-8 space-y-6 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.title} className="text-center">
              {/* If it's a dropdown, show title as a non-clickable header */}
              {link.items && link.items.length > 0 ? (
                <>
                  <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
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
                  className="text-2xl font-bold font-poppins text-gray-800 hover:text-[#E52445]"
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
            className="border border-[#E52445] text-[#E52445] bg-white hover:bg-red-100 rounded-[25px] px-10 py-3 text-lg flex items-center justify-center w-full max-w-xs"
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
