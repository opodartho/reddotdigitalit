import { blogsDetailsData } from "@/lib/data/blogDetailsData";


export default function Body() {
    return (
        <>
            <div className="lg:pt-[64px] lg:w-[931px] ">
                
                {/* Description */}
                <p>{blogsDetailsData.description}</p>

                {/* SubImage 1 */}
                <div className="lg:pt-[24px] lg:pb-[50px]">
                    <img src={blogsDetailsData.imageUrls[1]} />
                </div>

                {/* Key Points */}
                <div className="border-1 border-[#ffd6d6] bg-[#fffafa] rounded-xl lg:pb-[50px] lg:pr-[32px]">
                    <p className="lg:pt-[44.65px] lg:pl-[36px] lg:pb-[34.91px]">{blogsDetailsData.keyPointsHeading}</p>

                    {blogsDetailsData.keyPoints.map((p, index)=>(
                        <div className="flex gap-[12px] lg:pl-[36px]" key={index}>
                            <img src={'/images/bluetick.svg'}/>
                            <p>{p}</p>
                        </div>
                    ))}
                </div>

                {/*SubImage 2*/}
                <div className="lg:pt-[49px]">
                    <img src={blogsDetailsData.imageUrls[2]} />
                </div>
                
                {/*SubTitle 1*/}
                <div  className="lg:pt-[44px]">
                    <p className="text-[24px] font-semibold"> {blogsDetailsData.subtitle1} </p>
                </div>

                <div  className="lg:pt-[24.56px]">
                    <p className="text-[14px] w-[931px]"> {blogsDetailsData.subText1} </p>
                </div>

                {/*SubTitle 2*/}
                {blogsDetailsData.subtitle2 ? 
                <><div  className="lg:pt-[44px]">
                    <p className="text-[24px] font-semibold"> {blogsDetailsData.subtitle2} </p>
                </div>

                <div  className="lg:pt-[24.56px]">
                    <p className="text-[14px] w-[931px]"> {blogsDetailsData.subText1} </p>
                </div>
                </>
            :<></>}
                
            </div>
        </>
    )
}