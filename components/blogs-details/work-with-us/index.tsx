import { Button } from "@/components/ui/button";


export default function WorkWithUs() {
    return (
        <div className="bg-[#e52445] rounded-xl lg:w-[922px] lg:h-[300px] lg:mt-[64px]">
            <p className=" text-white lg:pt-[60px] lg:text-[24px] flex justify-center">Ready to Revolutionize Your Financial Services?</p>
            <p className=" w-[719px] text-white lg:pt-[14px] text-[14px] text-center mx-auto">Let's co-create next-gen fintech: DeFi 2.0, AI-driven advisors, gig economy finance, green wallets, or inclusion for unbanked. Pick one!</p>
            <div className="pt-[48px] mx-auto w-[233px]">
                <Button variant={"outline"} className="">Let's work with us</Button>
            </div>
        </div>
    )
}