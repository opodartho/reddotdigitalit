import { AboutProjectItem } from "@/lib/data/customize-product/aboutProject"

type AboutProjectProps = {
    aboutProjectData: AboutProjectItem[],
    Id: any
}

export default function AboutProject({ aboutProjectData, Id }: AboutProjectProps) {
    const indexNumber = Number(Id)
    return (
        <section className="w-full bg-white pt-[56px] lg:pt-[90px] max-w-[1440px] mx-auto">
            <div className="px-[16px] sm:px-[80px]">
                <p className="text-[30px] text-title font-bold">{aboutProjectData[indexNumber]?.title}</p>
                <p className="lg:whitespace-pre-line text-subtitle h-auto pt-[14px] text-[14px]">{aboutProjectData[indexNumber]?.description}</p>
            </div>
        </section>
    )
}