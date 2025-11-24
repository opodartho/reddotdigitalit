import { Button } from "@/components/ui/button";
import { PrivacyHead } from "@/lib/data/privacy-policy/privacy-head";
import Image from "next/image";

type HeaderProps = {
    headerData: PrivacyHead
}

export default function Header({ headerData }: HeaderProps) {
    return (
        <>
            <div
                className="lg:pl-[80px] lg:pr-[80px] lg:pt-[100px] pt-[68px] lg:min-h-[330px] min-h-[382px] lg:flex lg:gap-[440px]"
                style={{ backgroundImage: "url('/images/privacy-bg.svg')" }}
            >
                <div className="lg:w-[630px] lg:pl-[0px] pl-[16px] lg:pr-[0px] pr-[16px] lg:pb-[0px] pb-[68px]">
                    <p className="font-semibold lg:text-[40px] text-[30px] lg:pt-[95px]  lg:w-[461px] pt-[51px] text-title">{headerData.heading}</p>
                    <p className="pt-[26px] text-subtitle">{headerData.description}</p>
                </div>
                <img src={headerData.imageUrl} alt="" className=" w-[] h-[]  lg:pl-[0px] pl-[16px]" />
            </div>
        </>
    )
}