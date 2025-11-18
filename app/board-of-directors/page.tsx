import Grids from "@/components/board-of-directors/grids";
import Header from "@/components/board-of-directors/header";
import { getDirectors } from "@/lib/api/board-of-directors/fetchDirectors";


export default async function BoardOfDirectors() {

    const [directorsData] = await Promise.all([getDirectors()])
    return (
        <>
            <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-100 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       Board Of Directors`} </p>

            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header directorsData={directorsData} />
                <Grids directorsData={directorsData} />
            </div>
        </>
    )
}