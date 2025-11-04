import { blogsDetailsData } from "@/lib/data/blogDetailsData";


export default function Header(){
    return(
        <>
            <div className="lg:pt-[108px]">
                <p className="font-bold lg:static absolute lg:pt-[0px] pt-[250px] lg:text-[40px] lg:w-[864px] text-[30px]">{blogsDetailsData.title}</p>

                <img src={blogsDetailsData.imageUrls[0]} className="lg:pt-[44px] pt-[80px] "/>
            </div>
        </>
    )
}