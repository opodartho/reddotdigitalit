import Image from "next/image";
import { SolutionCoverageForProduct, SolutionCoverageItem } from "@/lib/data/customize-product/SolutionCoverageData";

type SolutionCoverageProps = {
    coverage: SolutionCoverageItem[];
    Id: string;
};

export default function SolutionCoverage({ coverage }: SolutionCoverageProps) {
    return (
        <div className=" pl-[16px] lg:w-full">
            <p className="text-[30px] font-semibold text-title">Solution Coverage</p>
            <p className="lg:w-full w-[358px] h-[110px] text-[14px] pt-[14px] lg:pb-[44px] pb-[24px] text-subtitle">
                RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
                second-largest mobile network operator in Bangladesh, offering IT and
                digital solutions.
            </p>

            <div className="flex flex-wrap lg:gap-x-[59px] lg:gap-y-[44px] gap-y-[16px]">
                {coverage.map((benefit) => (
                    <div
                        key={benefit.id}
                        className="border-2 rounded-xl bg-cover bg-no-repeat lg:flex lg:items-center  lg:h-auto h-[108px] lg:w-[600px] w-full"
                        style={{ backgroundImage: "url('/images/benefits.svg')" }}
                    >
                        <div className="flex gap-[12px] p-[16px] lg:flex lg:items-center">
                            <Image
                                src={"/images/redtick.svg"}
                                alt=""
                                height={10}
                                width={10}
                                className="lg:h-[20px] lg:w-[20px] h-[22px] w-[22px] items-center"
                            />
                            <div className="flex flex-col">
                                <p className="text-[16px] font-semibold">{benefit.title}</p>
                                {benefit.description && (
                                    <div className="lg:mt-[10px] mt-[4px] text-[12px] lg:w-[320px] line-clamp-4 break-words">
                                        <ul className="list-disc list-inside space-y-1 mr-[2px] line-clamp-4">
                                            {benefit.description
                                                .split("\n")
                                                .map((line, idx) => (
                                                    <li key={idx} className="lg:text-[16px] lg:font-medium">{line.trim()}</li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
