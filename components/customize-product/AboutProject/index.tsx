import { AboutProjectItem } from "@/lib/data/aboutProject"

type AboutProjectProps= {
    aboutProjectData: AboutProjectItem
}

export default function AboutProject({aboutProjectData}: AboutProjectProps){
    return(
        <>
            <div className="lg:pl-[80px] pl-[16px]">
                <p className="text-[30px] font-bold">{aboutProjectData.title}</p>
                <p className="lg:w-full w-[358px] h-auto pt-[14px] text-[14px]">{aboutProjectData.description}</p>
            </div>
        </>
    )
}