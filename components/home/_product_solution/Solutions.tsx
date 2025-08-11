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
    icon: "📱",
  },
  {
    title: "DFS",
    description: "Unlock secure, fast, and convenient mobile transactions",
    icon: "🏦",
  },
  {
    title: "Human Resources",
    description: "Manage employees and payroll easily",
    icon: "👔",
  },
  {
    title: "ERP & eCommerce",
    description: "Streamline business and online sales",
    icon: "🛒",
  },
  {
    title: "IOT Backend",
    description: "Connect and control smart devices",
    icon: "🌐",
  },
  {
    title: "Streaming Solution App",
    description: "Deliver videos and live streams",
    icon: "🎥",
  },
  {
    title: "Customer Experience",
    description: "Enhance client satisfaction",
    icon: "⭐",
  },
  {
    title: "Sales & Distribution",
    description: "Expand market reach effectively",
    icon: "📦",
  },
];

export default function Solutions() {
  return (
    <section className="px-4 py-12 md:px-8">
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Our Product Solution</h2>
        <p className="text-muted-foreground">
          Our cutting-edge Modular Data Center solutions enable protection of
          mission-critical data.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product, idx) => (
          <Card key={idx} className="transition hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 text-3xl">{product.icon}</div>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
