import { EmpowermentItem } from "@/lib/data/about-us/Empowerment";
import Image from "next/image";

type EmpowermentProps = {
    empowermentData: EmpowermentItem
}
export default function Empowerment({ empowermentData }: EmpowermentProps) {

    const missions = [
        { title: 'Our Mission', description: 'We are dedicated to establish dynamic changes with quality products and services. Our efforts involve establishing a high level of customer benefits with unquestionable methods and ethical approaches.' },
        { title: 'Our Vision', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.' },
        { title: 'Our Strength', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.' }
    ]
    return (
        <>
            <div className="w-full">
                <div className=" lg:w-full w-full lg:ml-[0px] lg:h-[869px] h-auto lg:relative mt-[114px]" style={{ backgroundImage: "url('/images/Background.png')" }}>
                    <p className="lg:pb-[68px]  lg:pt-[75px] pt-[15px] lg:text-[32px] text-[25px] font-medium [1276px] lg:pl-[80px] pl-[15px]">{empowermentData.title}</p>

                    <div className="lg:flex lg:pl-[80px]  pl-[15px] pr-[15px] gap-[88px] lg:pt-[58px] pt-[111px]">
                        <div className="flex flex-col gap-[12px] flex-shrink-0">
                            <div className="flex gap-[12px]">
                                <Image src={empowermentData.image1} alt="" height={236} width={212} className="rounded-lg" />
                                <Image src={empowermentData.image2} alt="" height={236} width={212} className="rounded-lg" />
                            </div>
                            <Image src={empowermentData.image3} alt="" height={237} width={436} className="rounded-lg" />
                        </div>

                        <div className="lg:block lg:pt-[15px] pt-[38.25px] pb-[75.77px]">
                            {
                                empowermentData.missions.map((p, index) => (

                                    <div key={index} className="lg:h-[144px] h-auto lg:pb-[39px] pb-[24px]  lg:line-clamp-5 lg:break-words">
                                        <p className="text-[22px] text-title font-medium lg:line-clamp-5 lg:break-words">{p.title}</p>
                                        <p className="text-[16px] text-subtitle lg:w-full lg:line-clamp-5 lg:break-words">{p.description}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}