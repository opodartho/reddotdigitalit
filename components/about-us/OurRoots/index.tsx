import { RootsItem } from "@/lib/data/about-us/OurRoots";
import Image from "next/image";

type RootsProps = {
    rootsData: RootsItem
}
export default function OurRoots({ rootsData }: RootsProps) {
    return (
        <>
            <div className="lg:pt-[148.95px] pt-[58.95px] lg:flex lg:justify-center">
                <div className="lg:flex lg:flex-col flex flex-col lg:items-center lg:text-center text-left items-center">
                    <p className="font-semibold text-[32px]  pb-[14px] text-title">{rootsData.title}</p>
                    <p className="lg:max-w-7xl max-h-[179px] text-[14px] text-subtitle">{rootsData.description}</p>

                    <img src={rootsData.imageUrl} className="pt-[54px]" />
                </div>
            </div>
        </>
    )
}