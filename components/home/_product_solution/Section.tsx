import React from "react";
import Solutions from "@/components/home/_product_solution/Solutions";
import { Button } from "@/components/ui/button";

const ProductSolution = () => {
  return (
    <main className="p-6">
      <Solutions />
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          View More
        </Button>
      </div>
    </main>
  );
};

export default ProductSolution;
