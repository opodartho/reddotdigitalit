"use client";
import { Button } from "@/components/ui/button";


export default function CaseStudyCTA() {
  return (
    <section className="w-full bg-[#E52445] flex flex-col items-center justify-center text-center md:py-[207px] md:px-[246px] sm:py-[60px] sm:px-[60px] ">

     <h2 className="text-[32px] font-[700] text-[#FFFFFF]  mb-[16px]">
        Ready to Transform Your Business?
      </h2>
      <p className="max-w-[948px] text-[16px] leading-[30px] text-[#FFFFFF] mb-[40px]">
        We are committed to excellence in delivering software solutions. Our
        talented team brings years of experience across various technology
        domains, ensuring we meet and exceed client expectations.
      </p>

    <Button
  variant="outline"
  size="lg"
  className="rounded-[10px] font-inter font-[500]"
>
  Schedule a Call →
</Button>


    </section>
  );
}


/*need some changes*/