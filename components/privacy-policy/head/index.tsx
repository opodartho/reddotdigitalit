import { PrivacyHead } from "@/lib/data/privacy-policy/privacy-head";
import Image from "next/image";

type HeaderProps = {
  headerData: PrivacyHead;
};

export default function Header({ headerData }: HeaderProps) {
  return (
    <section className="w-full bg-[#F9F8FB]">
      <div
        className="
          max-w-[1440px] mx-auto
          pt-[100px] lg:pt-[150px]
          pb-[40px] lg:pb-[72px]
          px-[16px] sm:px-[80px]
        "
      >
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-[32px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-3 border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[14px]">
              <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
                Privacy
              </span>
            </div>

            {/* Title */}
            <h1 className="font-semibold text-[30px] lg:text-[40px] text-title mb-[14px]">
              {headerData.heading}
            </h1>

            {/* Subtitle */}
            <p className="text-subtitle">
              {headerData.description}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={headerData.imageUrl}
              alt="Privacy illustration"
              width={142}
              height={178}
              className="w-[94px] h-[118px] lg:w-[142px] lg:h-[178px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
