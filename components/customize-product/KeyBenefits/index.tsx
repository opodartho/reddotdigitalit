import Image from "next/image"

export default function KeyBenefits() {
    const features = [
        { icon: '/images/redtick.svg', title: 'Faster Deployment & Scalability', description: 'Launch your projects faster with our streamlined and automated setup processes.' },
        { icon: '/images/redtick.svg', title: 'Enhanced Security & Compliance', description: 'Protect your data with multi-layered security and proactive threat monitoring.' },
        { icon: '/images/redtick.svg', title: 'Integration with Existing Systems', description: 'Effortlessly handle traffic spikes and user growth without any manual intervention.' },
        { icon: '/images/redtick.svg', title: 'Optimized Cost Management', description: 'Deliver a lightning-fast experience with our globally distributed, low-latency network.' },
        { icon: '/images/redtick.svg', title: 'Reduced Costs', description: 'Save on operational expenses with our efficient, pay-as-you-go infrastructure model.' },
        { icon: '/images/redtick.svg', title: 'DevOps & Automation Ready', description: 'Our dedicated team is available 24/7 to help you resolve issues and achieve your goals.' }
    ]
    return (
        <>
            <div className="lg:pl-[80px] pl-[16px]">
                <p className="text-[30px] font-semibold">Key Benefits</p>
                <p className="lg:w-[1091px] w-[358px] h-[110px] text-[14px] pt-[14px] lg:pb-[44px] pb-[24px]">RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions. Network operator in Bangladesh, offering IT and digital solutions.</p>

                <div className="flex flex-wrap lg:gap-y-[44px]  lg:gap-x-[59px] gap-y-[16px]">
                    {
                        features.map((p, index) => (
                            <div key={index} className="border-2 rounded-xl lg:h-[137px] lg:w-[610px] h-[108px]" style={{backgroundImage:"url('/images/benefits.svg')"}}>
                                <div className="flex gap-0">
                                    <Image src={p.icon} alt="" height={30} width={30} className="lg:ml-[30px] ml-[12px] lg:mb-[55px] mb-[74px] mt-[12px] h-[22px] w-[22px] lg:h-[30px] lg:w-[30px]" />
                                    <div className="flex flex-col">
                                        <p className="mt-[12px] ml-[24px]">{p.title}</p>
                                        <p className="lg:mt-[10px] mt-[4px] ml-[24px] lg:w-[264px]  text-[12px] line-clamp-3 ">{p.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}