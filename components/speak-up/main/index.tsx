import { Button } from "@/components/ui/button";
import { SpeakupData, SpeakupItem } from "@/lib/data/speak-up/speakupData";
type SpeakupProps = {
    SpeakupData: SpeakupItem
}
export default function Main({ SpeakupData }: SpeakupProps) {
    return (
        <>
            <div className="lg:pt-[51px]   pt-[51px] lg:flex lg:flex-row lg:pb-[32px] pb-[30px] lg:pl-[80px] lg:pr-[80px] pl-[16px] pr-[16px] flex flex-col ">
                <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <img
                        src={SpeakupData.imageUrl}
                        alt="Speak up"
                        className="w-full h-auto object-contain lg:max-h-[456px]"
                    />
                </div>

                <div>
                    <div className="flex flex-col lg:pt-[51px] pt-[76px] lg:pl-[62px]">
                        <p className="text-[35px]  font-semibold">{SpeakupData.name}</p>
                        <p className="text-[16px] lg:w-[625px] pt-[14px] lg:h-[112px]">{SpeakupData.description}</p>
                        <div className="lg:grid lg:grid-cols-2 grid grid-cols-1">
                            {SpeakupData.points.map((p, index) => (
                                <p key={index} className={`lg:flex lg:gap-[8px] lg:pt-[6px] flex gap-[8px] ${index === 0 ? `pt-[54px]` : `pt-[22px]`}`}>
                                    <img src={'/images/checkmark.svg'} />
                                    {p}
                                </p>
                            ))}
                        </div>
                        <div className="lg:flex lg:flex-row lg:gap-[14px] lg:pt-[85px] pt-[54px] flex flex-col gap-[23px]">
                            <Button className=" h-[56px] w-auto rounded-2xl">Whistle-blower Reporting System</Button>
                            <Button className="h-[56px] w-auto  rounded-2xl">Whistleblowing Policy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}