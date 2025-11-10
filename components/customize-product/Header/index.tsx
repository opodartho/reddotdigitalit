import { Button } from "@/components/ui/button";
import { HeaderItem } from "@/lib/data/header";
import Image from "next/image";

type HeaderProps={
    headerData: HeaderItem[],
    Id: String
}

export default function Header({headerData, Id}: HeaderProps) {
    const indexNumber= Number(Id)
    return (
        <>
            <div
                className="lg:pl-[240px] lg:pr-[240px] lg:pt-[0px]   bg-cover bg-center bg-no-repeat lg:min-h-[532px] lg:flex lg:gap-[100px]"
                style={{ backgroundImage: "url('/images/header-bg.svg')" }}
            >
                <div className="flex justify-center lg:hidden">
                    <Image src={headerData[indexNumber]?.imageUrl || 'ok.svg'} alt="" height={358} width={358} className="pt-[42px] lg:hidden" />
                </div>
                <div className="lg:w-[630px] lg:pl-[0px] pl-[16px] lg:pr-[0px] pr-[16px] lg:pb-[0px] pb-[68px]">
                    <p className="font-semibold lg:text-[40px] text-[30px] lg:pt-[95px]  lg:w-[461px] pt-[51px]">{headerData[indexNumber]?.title || ''}</p>
                    <p className="pt-[26px]">{headerData[indexNumber]?.description || ''}</p>
                    <div className="pt-[61px]">
                        <Button className="bg-red-500 h-[56px] w-[229px]">
                            {headerData[indexNumber]?.buttonText || ''}
                        </Button>
                    </div>
                </div>
                <img src={headerData[indexNumber]?.imageUrl || 'ok.svg'} alt="" className=" lg:block hidden " />
            </div>
        </>
    )
}