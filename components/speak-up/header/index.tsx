import { SpeakupItem } from "@/lib/data/speak-up/speakupData"


type SpeakupProps={
    SpeakupData: SpeakupItem
}
export default function Header({SpeakupData}: SpeakupProps){
    return(
        <>
            <div className="lg:pt-[108px] pt-[68px] lg:pl-[80px] pl-[16px]">
                <p className="font-semibold lg:text-[40px] text-[30px]">{SpeakupData.title}</p>
                <p className="lg:text-[18px] text-[14px] lg:pt-[19px] pt-[14px] lg:w-[675px] w-[358px] break-words text-wrap tracking-wider line-clamp-3">{SpeakupData.subtitle}</p>
            </div>
        </>
    )
}