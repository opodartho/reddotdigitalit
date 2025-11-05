import Grids from "@/components/blogs-list/main";
import Header from "@/components/blogs-list/header";


export default function Blogs(){
    return(
        <>
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] ">
                <Header/>
                <Grids/>
            </div>
        </>
    )
}