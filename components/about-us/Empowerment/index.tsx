import Image from "next/image";

export default function Empowerment() {

    const missions=[
        {title: 'Our Mission', description: 'We are dedicated to establish dynamic changes with quality products and services. Our efforts involve establishing a high level of customer benefits with unquestionable methods and ethical approaches.'},
        {title: 'Our Vision', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.'},
        {title: 'Our Strength', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.'}
    ]
    return (
        <>
            <div className="w-full lg:h-[869px] h-auto lg:relative" style={{ backgroundImage: "url('/images/Background.png')" }}>
                <p className="lg:pb-[68px]  lg:pt-[75px] pt-[15px] text-[32px] max-w-[1276px] lg:pl-[80px] pl-[15px]">Empowering businesses with smart, scalable digital solutions. Empowering businesses with smart, scalable digital solutions.</p>

                <div className="lg:flex lg:pl-[80px]  pl-[15px] pr-[15px] gap-[88px] pt-[58px]">
                    <div className="flex flex-col gap-[12px] flex-shrink-0">
                        <div className="flex gap-[12px]">
                            <Image src="/images/img1.png" alt="" height={236} width={212} className="rounded-lg" />
                            <Image src="/images/img2.png" alt="" height={236} width={212} className="rounded-lg" />
                        </div>
                        <Image src="/images/coxsbazar.png" alt="" height={237} width={436} className="rounded-lg" />
                    </div>

                    <div className="lg:block pt-[15px]">
                        {
                            missions.map((p, index)=>(
                                
                                    <div key={index} className="h-[144px] pb-[39px] w-[752.61px] pr-24">
                                        <p className="text-[25px] font-bold">{p.title}</p>
                                        <p className="text-[16px] line-clamp-3">{p.description}</p>
                                    </div>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}