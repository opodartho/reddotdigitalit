import Grids from "@/components/board-of-directors/grids";
import Header from "@/components/board-of-directors/header";
import { getDirectors } from "@/lib/api/board-of-directors/fetchDirectors";


export default async function BoardOfDirectors(){
    
    const [directorsData] = await Promise.all([getDirectors()])
    return(
        <>
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] ">
                <Header directorsData={directorsData}/>
                <Grids directorsData={directorsData}/>
            </div>
        </>
    )
}