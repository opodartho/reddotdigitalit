import Image from "next/image";
import { AboutUs } from '@/lib/data/about-us/AboutRedDot'

type AboutUsProps = {
    aboutUs: AboutUs,
}

export default function AboutRedDot({ aboutUs }: AboutUsProps) {

    return (
        <>
       
            <div className="pl-[16px] lg:pl-[0px] pr-[16px] lg:pr-[0px] lg:flex lg:flex-row flex flex-col lg:gap-[73px] gap-[60px] h-[316.05] justify-center lg:items-center  ">
                <div>
                    <p className="font-semibold  text-[32px] text-title  lg:pb-[14px] pb-[14px] w-[400px]">{aboutUs.title}</p>
                    <p className="lg:container [625px] text-left  text-subtitle  max-h-[179px] text-[16px]">{aboutUs.description}</p>
                </div>

                <div>
                    <Image src={aboutUs.imageUrl} alt="Cox's Bazar" height={316.05} width={570} className="lg:h-[316.05px] lg:w-[570px] h-[316.31px] w-[474.4px] lg:pt-[0px] pt-[40px]" />
                </div>
            </div>
            
        </>
    )
}