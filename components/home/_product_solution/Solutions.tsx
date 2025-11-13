"use client";
import Image from "next/image";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import { useRouter } from "next/navigation";

type SolutionsProps = {
  solutions: ProductSolutionItem[];
};

const gradients = [
  "bg-gradient-to-r from-pink-100 to-indigo-100",
  "bg-gradient-to-r from-orange-100 to-blue-100",
  "bg-gradient-to-r from-pink-100 to-yellow-100",
  "bg-gradient-to-r from-fuchsia-100 to-pink-100",
  "bg-gradient-to-r from-cyan-100 to-green-100",
  "bg-gradient-to-r from-blue-100 to-indigo-100",
  "bg-gradient-to-r from-violet-100 to-indigo-100",
  "bg-gradient-to-r from-indigo-100 to-purple-100",
];

export default function Solutions({ solutions }: SolutionsProps) {
  const router = useRouter();

  return (
    <section className="px-4 py-4 md:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-4xl font-poppins font-semibold mb-4 lg:mt-20">
          Our Product Solution
        </h2>
        <p className="font-poppins text-black">
          Our cutting-edge Modular Data Center solutions enable to <br />
          protect mission-critical data.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-red-300 hover:border-red-600 rounded-xl border border-transparent"
            onClick={() => router.push(`/customize-product/${idx + 1}`)}
          >
            <div
              className={`flex flex-col items-start rounded-xl p-6 h-full ${gradients[idx % gradients.length]}`}
            >
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
              <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
              <p className="mb-4 text-sm font-normal text-gray-700">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
