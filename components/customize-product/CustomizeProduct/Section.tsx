import * as React from "react";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import { Button } from "@/components/ui/button";
import { ProductCarousel } from "./ProductCarousel";

type ProductProps = {
  productData: ProductSolutionItem[];
};

const CustomizeProduct = ({ productData }: ProductProps) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mt-10">
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Our cutting-edge Modular Data Center solutions enable to
            <br /> protect mission-critical data.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <Button variant="outline" size="lg">
            View All
          </Button>
        </div>

        <div className="mt-12">
          <ProductCarousel solutions={productData} />
        </div>
      </div>
    </section>
  );
};

export default CustomizeProduct;
