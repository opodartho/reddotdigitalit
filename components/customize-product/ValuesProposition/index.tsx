import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";


export default function ValuesProposition() {
    const valuesData = [
        {
            title: "Value 1",
            description: "Description for value 1"
        },
        {
            title: "Value 2",
            description: "Description for value 2"
        },
        {
            title: "Value 3",
            description: "Description for value 3"
        }
    ]
    return (
        <>
            <div style={{ backgroundImage: "url('/images/Background.svg')" }} className="w-full pb-[105px]">

                <div className="flex flex-row">

                    <div className="flex flex-col">
                        <div className="pl-[80px] pt-[78px]">
                            <p className="font-semibold text-[30px]">Values & Proposition</p>
                            <p className="text-[14px] pt-[4px]">Leverage Information to Improve Profits And Performance</p>
                        </div>



                        <div className="pl-[80px] pr-[80px] pt-[33px]">
                            <Accordion type="single" collapsible className="bg-white h-[55px] w-[551px] gap-[12px] ">
                                {valuesData.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="mb-[12px]">
                                        <AccordionTrigger className="text-[16px] font-semibold">{item.title}</AccordionTrigger>
                                        <AccordionContent className="text-[14px]">
                                            {item.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                    
                    <div className="pt-[127px]">
                        <Image src={"/images/pc.svg"} alt="" height={469.36} width={557} className="" />
                    </div>
                </div>
            </div>
        </>
    )
}