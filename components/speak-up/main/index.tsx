import { Button } from "@/components/ui/button";
import { SpeakupData } from "@/lib/data/speakupData";

export default function Main() {
    return (
        <>
            <div className="lg:pt-[51px] lg:gap-[153px] pt-[141px] lg:flex lg:flex-row lg:pb-[32px] pb-[30px] lg:pl-[80px] pl-[16px] pr-[16px] flex flex-col ">
                <div>
                    <img src={SpeakupData.imageUrl} className=""/>
                </div>
                <div>
                    <div className="flex flex-col lg:pt-[0px] pt-[76px] lg:pl-[62px]">
                        <p className="text-[35px] lg:-mt-[16px] font-semibold">{SpeakupData.name}</p>
                        <p className="text-[16px] lg:w-[625px] pt-[14px] lg:h-[112px]">{SpeakupData.description}</p>
                        <div className="lg:grid lg:grid-cols-2 grid grid-cols-1">
                            {SpeakupData.points.map((p, index) => (
                                <p key={index} className={`lg:flex lg:gap-[8px] lg:pt-[24px] flex gap-[8px] ${index===0 ? `pt-[54px]`: `pt-[22px]`}`}>
                                    <img src={'/images/checkmark.svg'} />
                                    {p}
                                </p>
                            ))}
                        </div>
                        <div className="lg:flex lg:flex-row lg:gap-[14px] lg:pt-[100px] pt-[54px] flex flex-col gap-[23px]">
                            <Button className=" h-[56px] w-auto rounded-2xl">Whistle-blower Reporting System</Button>
                            <Button className="h-[56px] w-auto  rounded-2xl">Whistleblowing Policy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}