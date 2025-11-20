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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <div className="lg:flex lg:justify-center sticky lg:top-6 z-1000">
 <div className="absolute bg-transparent  top-0 lg:flex lg:justify-center lg:items-center z-100 pt-[22px]">
        <nav className="z-1000 top-0 lg:w-[1440px] h-[76px] rounded-4xl bg-transparent backdrop-blur-xl opacity-100 border-b border-white/20 shadow-[0_4px_29px_rgba(0,0,0,0.05)]">
          <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-[80px]">
            <Link href="/" onClick={scrollToTop} className="flex-shrink-0 relative lg:right-16">
              <Image
                src="/images/RedDotLogo.svg"
                alt="Red Dot Digital Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden h-full justify-center md:flex">
              <NavigationMenuList className="h-full space-x-16">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {!link.items || link.items.length === 0 ? (
                      <Link href={link.href || "#"} legacyBehavior passHref>
                        <NavigationMenuLink className="font-poppins flex h-full items-center px-0 text-[15px] font-normal text-title hover:text-red-500">
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="font-poppins h-full px-0 text-[15px] font-normal text-white hover:text-red-500">
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
              <button aria-label="apps" className="rounded-full p-2 hover:bg-gray-100" title="More"></button>
              <div className="relative left-16">
                <Link
                  href="/contact-us"
                  className="flex h-[56px] w-[153px] bg-gradient-to-l from-red-700 via-red-600 via-red-500 to-red-400 text-white justify-end items-center rounded-[25px] border border-[#E52445] px-7 text-lg hover:bg-red-100 dark:bg-transparent"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sticky top-[76px] left-0 z-40 flex h-[calc(100vh-76px)] w-full flex-col items-center space-y-6 overflow-y-auto bg-white p-8 md:hidden">
          {navLinks.map((link) => (
            <div key={link.title} className="text-center">
              {link.items && link.items.length > 0 ? (
                <>
                  <h3 className="font-poppins mb-2 text-2xl font-bold text-title">
                    {link.title}
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="text-lg text-subtitle hover:text-red-500"
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
                  className="font-poppins text-2xl font-bold text-title hover:text-red-500"
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
            className="flex w-full xs items-center justify-center rounded-[25px] border border-[#E52445] bg-white px-10 py-3 text-lg text-[#E52445] hover:bg-red-100"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}

// Updated ListItem component: text-only hover, no background change
const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block rounded-2xl p-4 border border-transparent transition-colors duration-200 hover:text-red-500",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium transition-colors duration-200 hover:text-red-500">
            {title}
          </div>
          <p className="text-sm line-clamp-2 transition-colors duration-200 hover:text-red-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
