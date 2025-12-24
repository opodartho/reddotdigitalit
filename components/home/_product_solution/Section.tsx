import React from "react";
import Solutions from "@/components/home/_product_solution/Solutions";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import RedButton from "@/components/buttons/RedHoverButton";

// Define the props this component will receive from the landing page
type ProductSolutionSectionProps = {
  solutions: ProductSolutionItem[];
};

// This component accepts the 'solutions' prop...
const ProductSolution = ({ solutions }: ProductSolutionSectionProps) => {
  // ... and passes it down to the <Solutions /> component.
  return (
    <main className="">
      <Solutions solutions={solutions} />

    </main>
  );
};

export default ProductSolution;
