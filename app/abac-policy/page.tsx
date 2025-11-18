"use client";

import { TabButtons } from "./TabsButtons"; // adjust path if needed

export default function AbacPolicy() {
    return (
        <div>
            {/* Breadcrumb */}
            <p className="text-[14px] text-[#959191] absolute lg:top-30 top-30 z-1 lg:left-20 left-4 whitespace-break-spaces">
                {"About Us >> Abac Policy"}
            </p>

            <div className="lg:pl-[80px] lg:pr-[80px] lg:pt-[80px] pt-[80px] pl-[16px] pr-[16px]">
                <p className="text-[24px] font-bold pb-[20px]">ABAC Policy</p>

                <TabButtons
                    english={
                        <div>
                            <p className="text-[18px] font-bold pb-[10px]">English Version</p>
                            <iframe
                                src="/images/abac-english.pdf"
                                className="w-full h-[500px]"
                                title="English PDF"
                            />
                        </div>
                    }
                    bangla={
                        <div>
                            <p className="text-[18px] font-bold pb-[10px]">Bangla Version</p>
                            <iframe
                                src="/images/abac-bangla.pdf"
                                className="w-full h-[500px]"
                                title="Bangla PDF"
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
}
