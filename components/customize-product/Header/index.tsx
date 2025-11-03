import Image from "next/image";


export default function Header(){
    return(
        <>
            <div className="lg:pl-[80px] lg:pt-[108px] pt-[66px]">
                <p className="font-semibold text-[40px] lg:block hidden">Sales & Distribution</p>
                <Image src="/images/biggerphones.svg" alt="" height={546} width={1280} className="lg:pt-[110px] lg:block hidden"/>
                <Image src="/images/phones.svg" alt="" height={546} width={1280} className="lg:pt-[110px] lg:hidden"/>
            </div>
        </>
    )
}