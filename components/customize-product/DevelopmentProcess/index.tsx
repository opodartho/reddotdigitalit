import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function DevelopmentProcess() {
    const features = [
        { icon: '/images/devp1.svg', title: 'Discovery & Kick-off', description: 'We start with a deep-dive session to understand your unique business processes, challenges, and goals.' },
        { icon: '/images/devp2.svg', title: 'Configuration & Integration', description: 'Our team configures the platform to your specific needs, including setting up user roles, customizing workflows' },
        { icon: '/images/devp3.svg', title: 'UAT & Training', description: 'We provide a sandbox environment for your key users to test the system (User Acceptance Testing).' },
        { icon: '/images/devp4.svg', title: 'Go-Live & Support', description: "It's launch day! We deploy the solution across your organization. Our team provides intensive on-site" },
    ]
    return (
        <>
            <div className="flex flex-col items-center pl-[80px]">
                <div className="w-[444px] text-center  pb-[75px]">
                    <p className="text-[30px] font-semibold">Development Process</p>
                    <p className="text-[14px] ">Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.</p>
                </div>
                <div className="grid grid-cols-4 gap-[22px]">
                    {
                        features.map((p, index) => (
                            <div key={index} className=" rounded-xl  h-[345px] w-[303px]" style={{backgroundImage:"url('/images/devp-bg.svg')"}}>
                                <Image src={p.icon} alt="" height={32} width={32} className="mt-[48px] ml-[31px]"/>
                                <p className="mt-[54px] ml-[31px]">{p.title}</p>
                                <p className="mt-[12px] ml-[31px] w-[241px]">{p.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}