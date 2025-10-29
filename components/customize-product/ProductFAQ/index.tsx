import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ProductFAQ() {
    const valuesData = [
        {
            title: "Does the mobile app work offline?",
            description: "Description for value 1"
        },
        {
            title: "Can this solution integrate with my existing ERP or accounting software?",
            description: "Description for value 2"
        },
        {
            title: "How long does implementation and onboarding take?",
            description: "Description for value 3"
        },
        {
            title: "What kind of training and support do you offer?",
            description: ""
        },
        {
            title: "How long does implementation and onboarding take?",
            description: "Our standard implementation process typically takes between 2 to 4 weeks, depending on the complexity of your data migration and integration needs. We provide a dedicated onboarding specialist to guide you through every step, ensuring a smooth transition for both your back-office and field teams."
        }
    ]
    return (
        <>
            <div className="flex flex-col items-center pl-[80px]  pb-[120px]">
                <div className="pb-[50px] w-full text-center">
                    <p className="text-[30px] font-semibold">Product FAQ</p>
                    <p className="text-[14px]">Have questions about our product? We've got answers</p>
                </div>
                <div className="bg-white">
                    <Accordion type="single" collapsible className="bg-white h-[55px] w-[1088px] gap-[12px] ">
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
        </>
    )
}