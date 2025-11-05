import { Button } from "@/components/ui/button";
import { HeaderItem } from "@/lib/data/header";
import Image from "next/image";

type HeaderProps={
    headerData: HeaderItem
}

export default function Header({headerData}: HeaderProps) {
    return (
        <>
            <div
                className="lg:pl-[80px] lg:pt-[0px]   bg-cover bg-center bg-no-repeat lg:min-h-[532px] lg:flex lg:gap-[173px]"
                style={{ backgroundImage: "url('/images/header-bg.svg')" }}
            >
                <div className="flex justify-center lg:hidden">
                    <Image src={headerData.imageUrl} alt="" height={358} width={358} className="pt-[42px] lg:hidden" />
                </div>
                <div className="lg:w-[630px] lg:pl-[0px] pl-[16px] lg:pr-[0px] pr-[16px] lg:pb-[0px] pb-[68px]">
                    <p className="font-semibold lg:text-[40px] text-[30px] lg:pt-[95px]  lg:w-[461px] pt-[51px]">{headerData.title}</p>
                    <p className="pt-[26px]">{headerData.description}</p>
                    <div className="pt-[61px]">
                        <Button className="bg-red-500 text-white h-[56px] w-[229px]">
                            {headerData.buttonText}
                        </Button>
                    </div>
                </div>
                <Image src="/images/biggerphones.svg" alt="" height={454} width={454} className=" lg:block hidden " />
            </div>
        </>
    )
}