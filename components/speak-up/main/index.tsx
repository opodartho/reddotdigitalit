"use client";

import { Button } from "@/components/ui/button";
import { SpeakupData, SpeakupItem } from "@/lib/data/speak-up/speakupData";
import WhiteButton from "@/components/buttons/WhiteHoverButton";
type SpeakupProps = {
    SpeakupData: SpeakupItem
}
export default function Main({ SpeakupData }: SpeakupProps) {
    return (
        <>
            <div className="pt-[51px] flex flex-col xl:flex-row gap-8 xl:gap-12 lg:pb-[32px] pb-[30px]">
                <div className="w-full xl:w-[490px] shrink-0 flex justify-center items-center">
                    <img
                        src={SpeakupData.imageUrl}
                        alt="Speak up"
                        className="object-contain xl:h-[456px] h-auto"
                    />
                </div>

                <div className="flex-1">
                    <div className="flex flex-col">
                        <p className="text-[32px] leading-[40px] font-bold text-title">{SpeakupData.name}</p>
                        <p className="text-[16px] leading-[22px] text-subtitle xl:w-[625px] pt-[14px] mb-[24px]">{SpeakupData.description}</p>
                        <div className="lg:grid lg:grid-cols-2 grid grid-cols-1">
                            {SpeakupData.points.map((p, index) => (
                                <p key={index} className={`text-subtitle text-[16px] leading-[24px] font-medium lg:flex lg:gap-[8px] lg:pt-[6px] flex gap-[8px] ${index === 0 ? `pt-[54px]` : `pt-[22px]`}`}>
                                    <img src={'/images/checkmark.svg'} />
                                    {p}
                                </p>
                            ))}
                        </div>
                        <div className="lg:flex lg:flex-row lg:gap-[14px] lg:pt-[80px] pt-[54px] flex flex-col gap-[23px]">
                            <WhiteButton
                                onClick={() => {
                                    window.open(
                                        "https://axiatagroup.integrityline.com/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                                className="h-[56px] px-6 py-3 rounded-2xl"
                            >
                                Whistle-blower Reporting System
                            </WhiteButton>

                            <WhiteButton className="h-[56px] px-6 py-3 rounded-2xl">Whistleblowing Policy</WhiteButton>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
