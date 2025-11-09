import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ConclusionItem } from "@/lib/data/customize-product/conclusion";
import Image from "next/image";

type ConclusionProps = {
    conclusionData: ConclusionItem
}


export default function Conclusion({ conclusionData }: ConclusionProps) {
    return (
        <div className="flex justify-center z-1  w-full lg:pl-[0px] pl-[16px] lg:pr-[0px] pr-[16px]">
            <div
                className="relative z-1  flex justify-center items-center lg:h-[430px] h-[520px] lg:w-[1280px] w-full rounded-2xl bg-cover bg-center "
                style={{ backgroundImage: "url('/images/rect.svg')" }}
            >
                {/* Phone Image */}
                <Image
                    src={conclusionData.imageUrl}
                    alt="Phone mockup"
                    width={401}
                    height={469}
                    className="absolute z-1 lg:mb-[0px]  mb-[160px] lg:bottom-0 bottom-[200px] lg:left-[49px] left-1/2 lg:translate-x-0 -translate-x-1/2 w-[219px] h-[257px] lg:w-[401px] lg:h-[469px]"
                />

                {/* Text + Button Section */}
                <div className="flex flex-col text-white lg:items-start items-center lg:text-left text-center lg:ml-[550px]">
                    <p className="text-[20px] font-semibold lg:w-[400px] w-[289px]">
                        {conclusionData.title}
                    </p>
                    <p className="text-[12px] lg:text-[14px] lg:w-[480px] w-[326px] mt-[12px] mb-[24px]">
                        {conclusionData.description}                    </p>
                    <Button className="bg-white text-red-500 h-[56px] w-[229px]">
                        {conclusionData.buttonText} <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
