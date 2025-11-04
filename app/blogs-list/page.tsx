import Grids from "@/components/blogs-list/main";
import Header from "@/components/blogs-list/header";


export default function Blogs(){
    return(
        <>
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header/>
                <Grids/>
            </div>
        </>
    )
}