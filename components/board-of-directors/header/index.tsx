import { Directors } from "@/lib/data/board-of-directors/directorsData"

type DirectorsProps = {
    directorsData: Directors
}
export default function Header({ directorsData }: DirectorsProps) {
    return (
        <>
<<<<<<< HEAD
            <div className="lg:pt-[160px] pt-[110px] lg:pr-[0px] pr-[16px] lg:pl-[0px] pl-[16px]">
=======
            <div className="lg:pt-[160px] pt-[110px]">
                <div className="inline-flex items-center justify-center px-3 py-1 border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
                    <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
                        Our Leadership
                    </span>
                </div>
>>>>>>> 84ae0ff (pages are fixed now)
                <p className="font-semibold lg:text-[40px] text-[30px] text-title">{directorsData.title}</p>
                <p className="lg:text-[18px] text-[14px] lg:pt-[19px] pt-[14px] lg:w-[675px]  break-words text-wrap tracking-wider line-clamp-3 text-subtitle ">{directorsData.subtitle}</p>
            </div>
        </>
    )
}