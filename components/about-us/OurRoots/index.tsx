import { RootsItem } from "@/lib/data/about-us/OurRoots";
import Image from "next/image";

type RootsProps={
    rootsData: RootsItem
}
export default function OurRoots({rootsData}: RootsProps) {
    return (
        <>
            <div className="lg:pt-[148.95px] pt-[58.95px] lg:block">
                <div className="lg:flex lg:flex-col flex flex-col lg:items-center lg:text-center text-left lg:pl-[80px] pl-[16px] items-center">
                    <p className="font-semibold text-[32px]  pb-[14px]">{rootsData.title}</p>
                    <p className="max-w-[1013px] max-h-[179px] text-[14px]">{rootsData.description}</p>

                    <img src={rootsData.imageUrl} className="pt-[54px]"/> 
                </div>
            </div>
        </>
    )
}