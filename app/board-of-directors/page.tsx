import Grids from "@/components/board-of-directors/grids";
import Header from "@/components/board-of-directors/header";
import { getDirectors } from "@/lib/api/board-of-directors/fetchDirectors";


export default async function BoardOfDirectors() {

    const [directorsData] = await Promise.all([getDirectors()])
    return (
        <>

            <div className="px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
                <Header directorsData={directorsData} />
                <Grids directorsData={directorsData} />
            </div>
        </>
    )
}