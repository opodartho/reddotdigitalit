import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const products = [
  {
    title: "MFS",
    description: "Unlock secure, fast, and convenient mobile transactions",
    image: "/image/smartphone 1.png"

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
  "bg-gradient-to-r from-pink-100 to-indigo-200",
  "bg-gradient-to-r from-orange-50 via-blue-100",
  "bg-gradient-to-r from-pink-100 to-orange-50",
  "bg-gradient-to-r from-fuchsia-100 to-pink-100",
  "bg-gradient-to-r from-cyan-50 to-green-100",
  "bg-gradient-to-r from-blue-100 to-orange-50",
  "bg-gradient-to-r from-sky-50 to-violet-100",
  "bg-gradient-to-r from-blue-50 to-violet-50",
];


export default function Solutions() {
  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-size-32px font-poppins mb-4 text-4xl font-semibold">Our Product Solution</h2>
        <p className="font-poppins text-black">
          Our cutting-edge Modular Data Center solutions enable to <br />
          protect mission-critical data.
        </p>
      </div>


      <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, idx) => (
          <Card key={idx} className="flex h-full flex-col transition hover:shadow-lg"
            gradientClass={gradients[idx]}
          >
            <CardHeader className="flex-grow">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  width={48}
                  height={48}
                  className="mb-2 object-contain"
                />
              ) : (
                <div className="mb-2 text-3xl">{product.icon}</div>
              )}
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
