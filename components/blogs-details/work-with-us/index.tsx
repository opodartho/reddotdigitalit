import { Button } from "@/components/ui/button";


export default function WorkWithUs() {
    return (
        <div className="bg-[#e52445] rounded-xl  lg:w-[922px] lg:h-[300px] w-[357px] h-[324px] lg:mt-[64px] mt-[62px]">
            <div className="lg:flex lg:justify-center">
            <p className=" text-white lg:pt-[60px] pt-[42px] lg:text-[24px] text-[24px] text-center pl-[23px]  lg:w-[577px]  w-[312px] flex justify-center">Ready to Revolutionize Your Financial Services?</p>
            </div>

            <div className="lg:flex lg:justify-center">
            <p className=" text-white lg:pt-[14px] pt-[18px] lg:text-[14px] text-[14px] text-center pl-[23px]  lg:w-[577px]  w-[312px] flex justify-center">Let's co-create next-gen fintech: DeFi 2.0, AI-driven advisors, gig economy finance, green wallets, or inclusion for unbanked. Pick one!</p>
            </div>

            <div className="pt-[48px]  flex justify-center">
                <Button variant={"outline"} className="">Let's work with us</Button>
            </div>
        </div>
    )
}