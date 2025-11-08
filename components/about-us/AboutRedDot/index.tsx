import Image from "next/image";
import {AboutUs} from '@/lib/data/about-us/AboutRedDot'

type AboutUsProps={
    aboutUs: AboutUs,
}

export default function AboutRedDot({aboutUs}: AboutUsProps) {

    return (
        <>
            <div className=" lg:flex lg:flex-row flex flex-col lg:gap-[73px] gap-[60px] max-w-[1440px] h-[316.05] lg:pl-[80px]  pl-[16px] lg:items-center  ">
                <div>
                    <p className="font-semibold text-[32px] lg:pb-[14px] pb-[14px] w-[400px]">{aboutUs.title}</p>
                    <p className="lg:max-w-[625px] text-left  max-h-[179px] text-[16px]">{aboutUs.description}</p>
                </div>

                <div> 
                    <Image src={aboutUs.imageUrl} alt="Cox's Bazar" height={316.05} width={570} className="lg:h-[316.05px] lg:w-[570px] h-[316.31px] w-[474.4px]"/>
                </div>
            </div>
        </>
    )
}