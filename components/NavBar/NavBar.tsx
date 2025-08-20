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
import { LayoutGrid } from "lucide-react";

export function NavBar() {
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getNavLinks();
      setNavLinks(data);
    }
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-sm h-[76px] shadow-[0_4px_29px_rgba(0,0,0,0.05)]"
      style={{
        background:
          "radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 50%)",
      }}
    >
      <div className="flex items-center justify-between h-full px-[80px]">
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

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex justify-center h-full">
          <NavigationMenuList className="space-x-10 h-full">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                {link.title === "About RedDot" ? (
                  <Link
                    href={
                      link.items && link.items.length > 0
                        ? link.items[0].href
                        : "#"
                    }
                    className="text-xl font-poppins font-normal flex items-center h-full"
                  >
                    {link.title}
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

        {/* Right side: Dot menu and Contact Us */}
        <div className="flex items-center gap-5 h-full">
          <button
            aria-label="apps"
            className="hidden md:inline-flex rounded-full hover:bg-gray-100 flex items-center justify-center w-[15px] h-[15px]"
            title="More"
          >
            {/* 3x3 dots icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
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
            className="border border-[#E52445] text-[#E52445] bg-white hover:bg-red-100 dark:bg-transparent rounded-[25px] px-7 h-[42px] text-lg flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

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
