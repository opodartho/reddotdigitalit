import Image from "next/image";


export default function Header() {

    const images=[
        '/images/board_of_directors.svg',
        '/images/life_of_reddot.svg',
        '/images/our_policy.svg',
        '/images/whistleblow.svg'
    ]
    return (
        <>
            <div className=" pt-[44px] pl-[80px] text-[40px] font-semibold pb-[82px]">
                <p className="lg:max-w-[623px]  max-w-full">Crafting Digital Solutions with Purpose</p>
            </div>

            <div className="lg:pl-[80px] lg:pb-[416px]">
                <p className="z-10 absolute pt-[30px] pl-[38px] pb-[34px] text-[25px] font-semibold max-w-[1100px]">RedDot Digital is where ideas turn into impactful digital products — built with purpose, powered by collaboration.</p>
                <Image className="z-2 absolute" src="/images/Our Roots.png" height={318} width={1280} alt="Our Roots"/>
                <div className="pl-[40px] pt-[144px] flex gap-4 absolute z-10">
            {images.map((image, index) => (
                <div key={index}>
                    <Image 
                        src={image} 
                        height={144} 
                        width={136} 
                        alt={`Image ${index + 1}`}
                    />
                </div>
            ))}
        </div>
            </div>
        </>
    )
}