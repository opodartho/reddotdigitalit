import Image from "next/image";


export default function Header() {

    const images = [
        '/images/board_of_directors.svg',
        '/images/life_of_reddot.svg',
        '/images/our_policy.svg',
        '/images/whistleblow.svg'
    ]
    return (
        <>
            <div className=" pt-[44px] lg:pl-[80px] pl-[15px] lg:text-[40px] text-[25px] font-semibold lg:pb-[82px] pb-[30px]">
                <p className="lg:max-w-[623px]  max-w-[1000px]">Crafting Digital Solutions with Purpose</p>
            </div>

            <div className="lg:w-[1280px] w-full lg:ml-[80px]  lg:h-[318px] h-auto lg:mb-[98px] mb-[30px] relative" style={{ backgroundImage: "url('/images/Our Roots.png')" }}>
                <p className="z-10  lg:pt-[30px] lg:pl-[38px] pl-[15px]  lg:text-[25px] text-[20px] font-semibold lg:max-w-[1100px] max-w-[500px]">RedDot Digital is where ideas turn into impactful digital products — built with purpose, powered by collaboration.</p>
                <div className="lg:pl-[40px] pt-[34px] gap-4  z-10 lg:flex lg:flex-row flex flex-col items-center pb-2">
                    {images.map((image, index) => (
                        <div key={index} className="">
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