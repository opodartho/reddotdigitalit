import { Directors } from "@/lib/data/board-of-directors/directorsData"

type DirectorsProps = {
    directorsData: Directors
}
export default function Header({ directorsData }: DirectorsProps) {
    return (
        <>
            <div className="lg:pt-[160px] pt-[110px] px-[16px] sm:px-[80px]">
                <p className="font-semibold lg:text-[40px] text-[30px] text-title">{directorsData.title}</p>
                <p className="lg:text-[18px] text-[14px] lg:pt-[19px] pt-[14px] lg:w-[675px]  break-words text-wrap tracking-wider line-clamp-3 text-subtitle ">{directorsData.subtitle}</p>
            </div>
        </>
    )
}