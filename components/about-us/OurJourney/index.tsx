import Image from "next/image";


export default function OurJourney() {
    return (
        <>
            <div className="lg:pt-[148.76px] pt-[58.95px] lg:block">
                <div className="lg:flex lg:flex-col flex flex-col items-center lg:text-center text-left lg:pl-[80px]">
                    <p className="font-semibold text-[32px]">Our Journey</p>
                    <p className="max-w-[1013px] max-h-[179px] text-[14px] lg:block hidden">RedDot Digital Limited is the 100% subsidiary of Robi Axiata Limited, the second largest telecom operator in Bangladesh, which is currently owned by two key stakeholder - Axiata and Bharti Airtel. RedDot Digital Limited was incorporated in 2019 to provide B2B clients with IT operations.</p>
                    <p className="max-w-[357px] text-center max-h-[179px] text-[14px] lg:hidden">RedDot Digital Limited is the 100% subsidiary of Robi Axiata Limited, the second largest telecom operator in Bangladesh </p>
                    <div className="relative">
                        <img src={"/images/bigjourney.svg"} className="pt-[54px] lg:block hidden" />
                        <img src={"/images/journey.svg"} className="pt-[54px] lg:hidden"/>
                    </div>
                </div>
            </div>
        </>
    )
}