import Image from "next/image";


export default function ManagementCouncil() {
    const images = [
        {image:'/images/ceo.svg', name:'Hasib Mustabsir', role:'Chief Executive Officer & Managing Director'},
        {image:'/images/cpo.svg', name:'Syed Md. Ziaul Haider', role:'Chief Platform Officer'},
        {image:'/images/hof.svg', name:'Mohammad Yeakub', role:'Head of Finance'},
        {image:'/images/cs.svg', name:'Md. Shahidur Rahman', role:'Company Secretary'},
        {image:'/images/hhr.svg', name:'Tasnuva Amreen Zaman', role:'Head of Human Resources'}
    ]

    return (
        <>
            <div className="pb-[117px] lg:block pt-[15px]">
                <div className="lg:flex lg:flex-col flex flex-col lg:items-center lg:text-center text-left pl-[15px] pb-[54px]">
                    <p className="font-semibold text-[32px] lg:pl-[80px] pb-[14px]">Management Council</p>
                    <p className="max-w-[444px]  lg:pl-[80px] max-h-[179px] text-[14px]">Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.</p>
                </div>

                <div className="flex flex-row overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-4 lg:pl-[80px] gap-[21px] px-[15px] lg:px-0 pb-[10px] scrollbar-hide">
                    <style>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>

                    {images.map((image, index) => (
                        <div key={index} className="rounded-lg mb-[40px] flex flex-col items-center text-center w-[304px] h-[339px] bg-[#ffffff] shadow-md flex-shrink-0">
                            <Image
                                src={image.image}
                                height={206}
                                width={288}
                                alt={`Image ${index + 1}`} className="pb-[21px]" />
                            
                            <p className="text-[16px] pb-[8.73px] font-bold">{image.name}</p>
                            <p className="text-[14px] max-w-[245px]">{image.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}