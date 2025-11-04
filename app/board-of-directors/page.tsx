import Grids from "@/components/board-of-directors/grids";
import Header from "@/components/board-of-directors/header";


export default function BoardOfDirectors(){
    return(
        <>
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header/>
                <Grids/>
            </div>
        </>
    )
}