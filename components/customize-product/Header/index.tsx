import WhiteButton from "@/components/buttons/WhiteHoverButton";
import RedButton from "@/components/buttons/RedHoverButton";
import { HeaderItem } from "@/lib/data/header";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type HeaderProps = {
    headerData: HeaderItem[],
    Id: String
}

export default function Header({ headerData, Id }: HeaderProps) {
    const indexNumber = Number(Id)
    
    return (
        <section
            className="lg:relative lg:flex lg:flex-col lg:h-[655px] lg:md:flex-row lg:items-center lg:justify-center lg:w-full lg:px-6 lg:md:px-14 lg:md:gap-10"
            style={{
                background: `
                    radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 20%),
                    radial-gradient(45.32% 45.32% at 10% 50%, rgba(240, 80, 54, 0.15) 0%, rgba(229, 36, 69, 0) 100%)
                `,
            }}
        >
            {/* Left text column */}
            <div className="flex flex-col lg:pt-0 pt-10 gap-6 max-w-xl lg:pl-[0px] pl-[16px] pr-[16px] md:text-left md:w-[55%]">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight lg:w-[480px] text-title">
                    {headerData[indexNumber]?.title || ''}
                </h1>

                <p className="text-base md:text-lg leading-relaxed text-subtitle">
                    {headerData[indexNumber]?.description || ''}
                </p>

                <div className="lg:flex lg:flex-row flex flex-col flex-wrap gap-4">
                    <RedButton className="">
                        {headerData[indexNumber]?.buttonText || ''}
                    </RedButton>
                    <WhiteButton className="tracking-tightest">Learn More</WhiteButton>
                </div>
            </div>

            {/* Right image column with 3D card effect */}
            <div className="flex justify-center overflow-visible lg:pt-0 pt-8 ">
                <div className="relative z-1">
                    <CardContainer className="lg:w-[600px] w-[327px] mx-auto">
                        <CardBody className="relative lg:w-[600px] w-[327px] overflow-visible [transform-style:preserve-3d]">
                            
                            {/* Pop-out image */}
                            <CardItem
                                translateZ={50}
                                className="lg:w-[585px] w-[310px] flex items-center justify-center"
                            >
                                <img
                                    src={headerData[indexNumber]?.imageUrl || '/images/default.svg'}
                                    alt={headerData[indexNumber]?.title || ''}
                                    className="lg:w-[385px] w-full object-contain"
                                    style={{ transformStyle: "preserve-3d" }}
                                />
                            </CardItem>

                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </section>
    )
}