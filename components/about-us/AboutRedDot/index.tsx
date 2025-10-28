import Image from "next/image";


export default function AboutRedDot() {


    return (
        <>
            <div className="flex gap-[73px] h-[316.05] pl-[15px] items-center lg:pb-[178.95px] pb-[30px]">
                <div>
                    <p className="font-semibold text-[32px] lg:pl-[80px] lg:pb-[14px] pb-[14px] w-[400px]">About RedDot Digital Limited</p>
                    <p className="lg:max-w-[625px] text-left lg:pl-[80px] max-h-[179px] text-[16px]">RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions. RedDot is establishing its own office in the Government's IT Park at Bangabandhu Hi-Tech City in Kaliakoir, Gazipur. We aim to support Bangladesh’s digital goals by offering innovative solutions like IT applications, Cloud DC, and IoT, to name a few.</p>
                </div>

                <div>
                    <Image src={"/images/coxsbazar.png"} alt="Cox's Bazar" height={316.05} width={570}/>
                </div>
            </div>
        </>
    )
}