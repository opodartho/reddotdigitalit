import Header from "@/components/speak-up/header";
import Main from "@/components/speak-up/main";
import { getSpeakup } from "@/lib/api/speak-up/fetchSpeakUpData";


export default async function Speakup() {
    const [SpeakupData] = await Promise.all([getSpeakup()])
    return (
        <>

            <div className="px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
                <Header SpeakupData={SpeakupData} />
                <Main SpeakupData={SpeakupData} />
            </div>
        </>
    )
}