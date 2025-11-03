import Image from "next/image";


export default function OurRoots() {
    return (
        <>
            <div className="pt-[148.95px] lg:block">
                <div className="lg:flex lg:flex-col flex flex-col lg:items-center lg:text-center text-left pl-[15px]">
                    <p className="font-semibold text-[32px]  pb-[14px]">Our Roots</p>
                    <p className="max-w-[1013px] max-h-[179px] text-[14px]">RedDot Digital Limited is the 100% subsidiary of Robi Axiata Limited, the second largest telecom operator in Bangladesh, which is currently owned by two key stakeholder - Axiata and Bharti Airtel. RedDot Digital Limited was incorporated in 2019 to provide B2B clients with IT operations. </p>

                    <img src={"/images/roots.png"} className="pt-[54px]"/> 
                </div>
            </div>
        </>
    )
}