import { JourneyItem } from "@/lib/data/about-us/OurJourney";
import Image from "next/image";

type JourneyProps={
    journeyData: JourneyItem
}
export default function OurJourney({journeyData}: JourneyProps) {
    return (
        <>
            <div className="lg:pt-[148.76px] pt-[58.95px] lg:block">
                <div className="lg:flex lg:flex-col flex flex-col items-center lg:text-center text-left ">
                    <p className="font-semibold text-[32px] text-title">Our Journey</p>
                    <p className="max-w-[1013px] max-h-[179px] text-[14px] lg:block hidden text-subtitle">RedDot Digital Limited is the 100% subsidiary of Robi Axiata Limited, the second largest telecom operator in Bangladesh, which is currently owned by two key stakeholder - Axiata and Bharti Airtel. RedDot Digital Limited was incorporated in 2019 to provide B2B clients with IT operations.</p>
                    <p className="max-w-[357px] text-center max-h-[179px] text-[14px] lg:hidden text-subtitle">RedDot Digital Limited is the 100% subsidiary of Robi Axiata Limited, the second largest telecom operator in Bangladesh </p>
                    <div className="relative">
                        <img src={"/images/bigjourney.svg"} className="pt-[54px] lg:block hidden" />
                        <img src={"/images/journey.svg"} className="pt-[54px] lg:hidden"/>
                    </div>
                </div>
            </div>
        </>
    )
}