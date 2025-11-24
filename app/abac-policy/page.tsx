"use client";

import { TabButtons } from "./TabsButtons"; // adjust path if needed

export default function AbacPolicy() {
    return (
        <div>
            {/* Breadcrumb */}
            

            <div className="lg:pl-[80px] lg:pr-[80px] lg:pt-[160px] pt-[120px] pl-[16px] pr-[16px]">                <p className="text-[24px] font-bold pb-[20px]">ABAC Policy</p>

            <TabButtons
                    english={
                        <div>
                            <iframe
                                src="/images/abac-english.pdf"
                                className="w-full h-[500px] lg:pt-[30px] pt-[20px]"
                                title="English PDF"
                            />
                        </div>
                    }
                    bangla={
                        <div>
                            <iframe
                                src="/images/abac-bangla.pdf"
                                className="w-full h-[500px] lg:pt-[30px] pt-[20px]"
                                title="Bangla PDF"
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
}
