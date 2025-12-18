import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Management, managementData } from "@/lib/data/management-council/managementData";
type ManagementProps={
    managementData: Management
}
export default function Grids({managementData}: ManagementProps) {

    return (
        <>
               <div className="pt-[68px] lg:pt-[77px] flex flex-wrap justify-center xl:justify-start gap-x-4  gap-y-8  sm:gap-y-12 lg:pb-[144px]">
                {managementData.information.map((slide) => (

                    <div key={slide.id} className="w-[304px]">
                        <Card
                            className="w-full h-[421px] bg-white transition shadow-md hover:shadow-xl border-1 "
                        >
                            <CardHeader className="-m-4 space-y-0">
                                <img src={slide.imageUrl} alt={slide.name} className="-mt-[2px] h-[206px] " />
                                <CardTitle className="text-[16px] pt-[13px] pl-[20px] text-title">{slide.name}</CardTitle>
                                <CardTitle className="text-[12px] pt-[16px] pl-[20px] text-subtitle">{slide.role}</CardTitle>
                                <CardDescription className="text-[12px] pl-[20px] pr-[43px] text-subtitle">
                                    {slide.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                ))}
            </div>
        </>
    )
}
