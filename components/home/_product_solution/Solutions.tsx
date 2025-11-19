"use client";
import Image from "next/image";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import { useRouter } from "next/navigation";

type SolutionsProps = {
  solutions: ProductSolutionItem[];
};

const gradients = [
  "from-pink-100 to-indigo-100",
  "from-orange-100 to-blue-100",
  "from-pink-100 to-yellow-100",
  "from-fuchsia-100 to-pink-100",
  "from-cyan-100 to-green-100",
  "from-blue-100 to-indigo-100",
  "from-violet-100 to-indigo-100",
  "from-indigo-100 to-purple-100",
];

export default function Solutions({ solutions }: SolutionsProps) {
  const router = useRouter();

  return (
    <section className="lg:px-4 lg:py-4 py-10 md:px-8">
      <div className="mx-auto mb-10 container 2xl text-center">
        <h2 className="text-4xl font-poppins font-semibold mb-4 lg:mt-20">
          Our Product Solution
        </h2>
        <p className="font-poppins text-black">
          Our cutting-edge Modular Data Center solutions enable to <br />
          protect mission-critical data.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 pl-[16px] pr-[16px] lg:pl-[0px] lg:pr-[0px]">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-red-300 hover:border-red-600 rounded-xl border border-transparent"
            onClick={() => router.push(`/customize-product/${idx + 1}`)}
          >
            <div className="relative h-full flex flex-col items-start rounded-xl overflow-hidden">
              {/* Gradient background only in normal state */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${gradients[idx % gradients.length]} transition-opacity duration-300 group-hover:opacity-0`}
              ></div>

              {/* Solid white background on hover */}
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start p-6 h-full">
                {solution.image && (
                  <div className="mb-4">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-[#E52445]">
                  {solution.title}
                </h3>
                <p className="mb-4 text-sm font-normal transition-colors duration-300 group-hover:text-gray-800">
                  {solution.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
