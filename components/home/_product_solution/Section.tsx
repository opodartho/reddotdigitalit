import React from "react";
import Solutions from "@/components/home/_product_solution/Solutions";
import { Button } from "@/components/ui/button";
import { ProductSolutionItem } from "@/lib/data/productSolutionData";

// Define the props this component will receive from the landing page
type ProductSolutionSectionProps = {
  solutions: ProductSolutionItem[];
};

// This component accepts the 'solutions' prop...
const ProductSolution = ({ solutions }: ProductSolutionSectionProps) => {
  // ... and passes it down to the <Solutions /> component.
  return (
    <main className="p-6">
      <Solutions solutions={solutions} />

      <div className="mt-8 flex justify-center">
        <Button variant="outline" size="lg">
          View More
        </Button>
      </div>
    </main>
  );
};

export default ProductSolution;
