import { HeaderItem } from "@/lib/data/about-us/Header";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
    headerData: HeaderItem
}

export default function Header({ headerData }: HeaderProps) {

    const images = [
        { imageUrl: '/images/board_of_directors.svg', link: '/board-of-directors' },
        { imageUrl: '/images/management_council.svg', link: '/management-council' },
        { imageUrl: '/images/life_of_reddot.svg', link: '' },
        { imageUrl: '/images/our_policy.svg', link: '/privacy-policy' },
        { imageUrl: '/images/whistleblow.svg', link: '/speak-up' }
    ]

    return (
        <>
            <div className=" lg:pt-[44px] lg:pl-[0px]  pl-[16px] lg:text-[40px] text-[25px] font-semibold lg:pb-[82px] pb-[23px]">
                <p className="lg:max-w-[623px] text-title pt-[111px] lg:pt-[84px] max-w-[1000px]">{headerData.title}</p>
            </div>

            <div className="lg:w-full w-[358px] h-[700px]   lg:h-[318px] lg:mb-[98px] mb-[30px] relative lg:ml-[0px] ml-[16px] bg-repeat lg:bg-no-repeat" style={{ backgroundImage: "url('/images/Our Roots.png')", }}>
                <p className="z-10  lg:pt-[30px] pt-[32px] pl-[21px]  lg:text-[25px] text-[20px] font-semibold lg:max-w-[1100px] max-w-[500px] text-subtitle">{headerData.description}</p>
                <div className=" pl-[21px] pt-[34px]  z-10 lg:grid lg:grid-cols-8 grid grid-cols-2 lg:gap-[16px] gap-[21px] items-center pb-2">
                    {headerData.images.map((image, index) => (
                        <Link href={image.link} key={index}> 
                                
                            <img
                                src={image.imageUrl}
                                height={144}
                                width={136}
                                alt={`Image ${index + 1}`}
                                className="lg:object-cover object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}