import AboutProject from "@/components/customize-product/AboutProject";
import CoreFeatures from "@/components/customize-product/CoreFeatures";
import Header from "@/components/customize-product/Header";


export default function CustomizeProduct(){
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className="pt-[90px]">
                <AboutProject/>
            </div>
            <div className="pt-[90px]">
                <CoreFeatures/>
            </div>
        </>
    )
}