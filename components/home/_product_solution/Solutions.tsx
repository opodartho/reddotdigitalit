"use client"
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import { useRouter } from "next/navigation";
import MagicBentoWrapper from "@/components/MagicBentoWrapper";

type SolutionsProps = {
  solutions: ProductSolutionItem[];
};

const products = [
  {
    title: "MFS",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/smartphone 1.png",
  },
  {
    title: "DFS",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/online-banking 1.png",
  },
  {
    title: "Human Resources",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/human-resources 2.png",
  },
  {
    title: "ERP & eCommerce",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/online-shop 1.png",
  },
  {
    title: "IOT Backend",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/Group.png",
  },
  {
    title: "Streaming Solution App",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/streaming-tv-app 1.png",
  },
  {
    title: "Customer Experience",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/performance 1.png",
  },
  {
    title: "Sales & Distribution",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/Group (1).png",
  },
];

const gradients = [
  "linear-gradient(to right, #fce7f3, #e0e7ff)",
  "linear-gradient(to right, #fff7ed, #dbeafe)",
  "linear-gradient(to right, #fce7f3, #fff7ed)",
  "linear-gradient(to right, #fae8ff, #fce7f3)",
  "linear-gradient(to right, #ecfeff, #dcfce7)",
  "linear-gradient(to right, #dbeafe, #fff7ed)",
  "linear-gradient(to right, #f0f9ff, #ede9fe)",
  "linear-gradient(to right, #eff6ff, #f5f3ff)",
];


// Different glow colors for each card to match gradients
const glowColors = [
  "139, 92, 246", // pink
  "249, 115, 22", // orange
  "236, 72, 153", // pink
  "217, 70, 239", // fuchsia
  "6, 182, 212", // cyan
  "59, 130, 246", // blue
  "139, 92, 246", // violet
  "124, 58, 237", // violet
];

export default function Solutions({ solutions }: SolutionsProps) {
  const router = useRouter()
  return (
    <section className="px-4 py-4 md:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-size-32px font-poppins mb-4 text-4xl font-semibold">
          Our Product Solution
        </h2>
        <p className="font-poppins text-black">
          Our cutting-edge Modular Data Center solutions enable to <br />
          protect mission-critical data.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4">
        {solutions.map((solution, idx) => (
          <MagicBentoWrapper
            key={idx}
            glowColor={glowColors[idx % glowColors.length]}
            enableTilt={true}
            enableMagnetism={false}
            clickEffect={true}
            borderGlow={true}
            borderWidth={1}
          >
            <div
              className="cursor-pointer h-full"
              onClick={() => router.push(`/customize-product/${idx + 1}`)}
            >
              <Card
                className="flex h-full flex-col transition"
              >
                <div
                  className="h-full w-full rounded-xl"
                  style={{
                    backgroundImage: gradients[idx % gradients.length],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <CardHeader className="flex-grow">
                    {solution.image ? (
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        width={48}
                        height={48}
                        className="mb-2 object-contain"
                      />
                    ) : (
                      <div className="mb-2 text-3xl">{solution.image}</div>
                    )}
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                </div>
              </Card>
            </div>
          </MagicBentoWrapper>

        ))}
      </div>
    </section>
  );
}
