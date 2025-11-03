import Image from "next/image";


export default function Header(){
    return(
        <>
            <div className="pl-[80px] pt-[108px]">
                <p className="font-semibold text-[40px]">Sales & Distribution</p>
                <Image src="/images/customize.svg" alt="" height={546} width={1280} className="pt-[110px]"/>
            </div>
        </>
    )
}