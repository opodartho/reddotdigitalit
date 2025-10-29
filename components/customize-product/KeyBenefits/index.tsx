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
            <div className="pl-[80px] pb-[120px]">
                <p className="text-[30px] font-semibold">Key Benefits</p>
                <p className="w-[1091px] text-[14px] pt-[14px] pb-[44px]">RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions. Network operator in Bangladesh, offering IT and digital solutions.</p>

                <div className="grid grid-cols-2 gap-x-[79px] gap-y-[18px]  ">
                    {
                        features.map((p, index) => (
                            <div key={index} className="border-2 rounded-xl  h-[144px] w-full">
                                <div className="flex gap-0">
                                    <Image src={p.icon} alt="" height={30} width={30} className="ml-[30px] mb-[55px]" />
                                    <div className="flex flex-col">
                                        <p className="mt-[12px] ml-[24px]">{p.title}</p>
                                        <p className="mt-[10px] ml-[24px] w-[264px]">{p.description}</p>
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