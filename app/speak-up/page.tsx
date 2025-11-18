import Header from "@/components/speak-up/header";
import Main from "@/components/speak-up/main";
import { getSpeakup } from "@/lib/api/speak-up/fetchSpeakUpData";


export default async function Speakup() {
    const [SpeakupData] = await Promise.all([getSpeakup()])
    return (
        <>
            <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-1 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       Whistleblowing`} </p>

            <div>
                <Header SpeakupData={SpeakupData} />
                <Main SpeakupData={SpeakupData} />
            </div>
        </>
    )
}