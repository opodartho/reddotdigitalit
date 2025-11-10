
import {LeadersItem } from "@/lib/data/our-leaders/leadersData";

type LeadersDataProps={
    LeadersData: LeadersItem 
}
export default function OurLeaders({LeadersData}: LeadersDataProps) {
    return (
        <div className="lg:pb-[52px] pb-[32px] lg:pl-[240px] lg:pr-[240px]">
            <div className="lg:pt-[30px] lg:w-full pt-[141px] lg:flex lg:flex-row lg:pb-[32px] pb-[30px] lg:justify-center flex flex-col items-center bg-[#f9f8fb]">
                <div>
                    <img src={LeadersData.imageUrl} />
                </div>
                <div>
                    <div className="flex flex-col lg:pt-[0px] pt-[36px] lg:pl-[62px]">
                        <p className="text-[35px] font-semibold">{LeadersData.name}</p>
                        <p className="text-[14px] w-[245px]  lg:text-start text-center">{LeadersData.role}</p>
                    </div>
                </div>
            </div>

            <div className="lg:pt-[70px] pt-[36px] lg:pl-[0px] pl-[16px] pr-[16px] flex justify-center">
                <p className="whitespace-pre-line  text-[16px] lg:w-[1280px] lg:h-[339px] lg:pl-[80px] lg:pr-[80px]">{LeadersData.description}</p>
            </div>
        </div>
    )
}