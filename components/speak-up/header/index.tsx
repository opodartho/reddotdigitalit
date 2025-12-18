import { SpeakupItem } from "@/lib/data/speak-up/speakupData"


type SpeakupProps = {
    SpeakupData: SpeakupItem
}
export default function Header({ SpeakupData }: SpeakupProps) {
    return (
        <>
            <div className="lg:pt-[160px] pt-[110px] ">
                <div className="inline-flex items-center justify-center px-3 py-1 border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
                    <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
                      Whistleblowing Channel
                    </span>
                </div>
                <p className="font-semibold lg:text-[40px] text-[30px] text-title">{SpeakupData.title}</p>
                <p className="lg:text-[18px] text-[14px] lg:pt-[19px] pt-[14px] lg:w-[675px] w-[358px] break-words text-wrap tracking-wider line-clamp-3 text-subtitle">{SpeakupData.subtitle}</p>
            </div>
        </>
    )
}