import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/home/_back_to_top/BackToTopButton";
import { NavBar } from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RedDot Digital Limited - Your Digital Transformation Partner",
  description:
    "RedDot Digital Limited is a 100% Robi Axiata PLC owned subsidiary offering IT & Digital solutions. RedDot Digital Limited is currently setting up its own office in Government’s IT Park in Kaliakoir, Gazipur, Dhaka. We aim to support the Government of Bangladesh in meeting its digital goals in the country by offering cutting-edge, home-grown, cost-optimized IT applications, Cloud DC, IoT solutions among others.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased`}
    >
      <NavBar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </body>
  );
}
