import Image from "next/image";


export default function OurJourney() {
    return (
        <>
            <div className="pt-[148.76px] lg:block">
                <div className="lg:flex lg:flex-col flex flex-col lg:items-center lg:text-center text-left pl-[15px]">
                    <p className="font-semibold text-[32px]">Our Journey</p>

                    <div className="relative">
                        <div className="relative gap-[145.62]">
                            <p className="absolute top-[180px] text-left text-[26px] max-w-[420px] pl-[38px] font-bold text-[#C11020]">THE BEGINNING OF A DIGITAL VISION</p>
                            <p className="absolute top-[180px] left-[577.62px] pr-[38px] text-left text-[16px] max-w-[664.37px]">RedDot Digital started as Robi DevOps Department under the Robi Information Technology Division. <br/> This laid the foundation for innovation and digital transformation within the organization.</p>
                        </div>
                        <img src={"/images/journey.png"} className="pt-[54px]" />
                    </div>
                </div>
            </div>
        </>
    )
}