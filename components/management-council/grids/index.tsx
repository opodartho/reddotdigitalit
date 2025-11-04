import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { managementData } from "@/lib/data/managementData";
export default function Grids() {

    return (
        <>
            <div className="lg:pt-[77px] pt-[68px] flex flex-wrap gap-[40px] justify-center lg:justify-start lg:pb-[144px]">

                {managementData.map((slide) => (

                    <div key={slide.id}>
                        <Card
                            className={`w-[304px] bg-white h-[392px] transition shadow-md hover:shadow-lg`}
                        >
                            <CardHeader className="-m-4 space-y-0">
                                <img src={slide.imageUrl} className="-mt-4"/>
                                <CardTitle className="text-[16px] pt-[13px] pl-[20px]">{slide.name}</CardTitle>
                                <CardTitle className="text-[12px] pt-[16px] pl-[20px]">{slide.role}</CardTitle>
                                <CardDescription className="text-[12px] pl-[20px] pr-[43px]">
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