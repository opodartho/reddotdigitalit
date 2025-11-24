import { Management } from "@/lib/data/management-council/managementData"

type ManagementProps = {
    managementData: Management
}
export default function Header({ managementData }: ManagementProps) {
    return (
        <>
            <div className="lg:pt-[160px] pt-[110px]">
                <p className="font-semibold lg:text-[40px] text-[30px] text-title">{managementData.title}</p>
                <p className="lg:text-[18px] text-[14px] lg:pt-[19px] pt-[14px] lg:w-[675px] w-[358px] break-words text-wrap tracking-wider line-clamp-3 text-subtitle">{managementData.subtitle}</p>
            </div>
        </>
    )
}