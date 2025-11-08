import Header from "@/components/speak-up/header";
import Main from "@/components/speak-up/main";
import { getSpeakup } from "@/lib/api/speak-up/fetchSpeakUpData";


export default async function Speakup(){
    const [SpeakupData]= await Promise.all([getSpeakup()])
    return(
        <>
            <div>
                <Header SpeakupData={SpeakupData}/>
                <Main SpeakupData={SpeakupData}/>
            </div>
        </>
    )
}