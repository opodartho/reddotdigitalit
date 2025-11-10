import { AboutProjectItem } from "@/lib/data/customize-product/aboutProject"

type AboutProjectProps = {
    aboutProjectData: AboutProjectItem[],
    Id: any
}

export default function AboutProject({ aboutProjectData, Id }: AboutProjectProps) {
    const indexNumber = Number(Id)
    return (
        <>
            <div className="lg:pl-[0px] pl-[16px]">
                <p className="text-[30px] font-bold">{aboutProjectData[indexNumber]?.title}</p>
                <p className="lg:whitespace-pre-line lg:w-full w-[358px] h-auto pt-[14px] text-[14px]">{aboutProjectData[indexNumber]?.description}</p>
            </div>
        </>
    )
}