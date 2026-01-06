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
            <div className=" lg:pt-[140px] pt-[100px] lg:pl-[0px] lg:text-[40px] text-[25px] font-semibold lg:pb-[82px] pb-[23px] lg:w-full">
                <div className="inline-flex items-center justify-center px-2 py-[2px] border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
                    <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
                        About Us
                    </span>
                </div>
                <p className=" text-title ">{headerData.title}</p>
            </div>

            <div className="lg:w-full px-[20px] sm:px-[38px] h-[700px] w-full  lg:h-[318px] lg:mb-[98px] mb-[30px] relative lg:ml-[0px] bg-repeat lg:bg-no-repeat" style={{ backgroundImage: "url('/images/Our Roots.png')", }}>
                <p className="z-10  lg:pt-[30px] pt-[32px]   lg:text-[25px] text-[20px] font-semibold lg:container text-subtitle">{headerData.description}</p>
                <div className="  pt-[34px]  z-10 lg:grid lg:grid-cols-8 grid grid-cols-2 lg:gap-[16px] gap-[21px] items-center pb-2">
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