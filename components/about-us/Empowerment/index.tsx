import Image from "next/image";

export default function Empowerment() {
    return (
        <>
            <div className="w-full h-[869px] relative" style={{ backgroundImage: "url('/images/Background.png')" }}>
                <p className="relative top-[75px] text-xl text-[32px] max-w-[1276px] pl-[84px]">Empowering businesses with smart, scalable digital solutions. Empowering businesses with smart, scalable digital solutions.</p>

                <div className="flex pl-[80px] gap-[12px] relative top-[214px]">
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex gap-[12px]">
                            <Image src="/images/img1.png" alt="" height={236} width={212} className="rounded-lg" />
                            <Image src="/images/img2.png" alt="" height={236} width={212} className="rounded-lg" />
                        </div>
                        <Image src="/images/coxsbazar.png" alt="" height={237} width={436} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}