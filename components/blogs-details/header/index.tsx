import { blogsDetailsData } from "@/lib/data/blogDetailsData";


export default function Header(){
    return(
        <>
            <div className="lg:pt-[108px] pt-[68px]">
                <p className="font-bold lg:text-[40px] lg:w-[864px] text-[30px]">{blogsDetailsData.title}</p>

                <img src={blogsDetailsData.imageUrls[0]} className="pt-[44px]"/>
            </div>
        </>
    )
}