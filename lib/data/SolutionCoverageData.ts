export type SolutionCoverageItem = {
    id: number;
    title: string;
    description?: string;
  };
  
  export type SolutionCoverageForProduct = {
    productId: number; // the product this coverage belongs to
    coverage: SolutionCoverageItem[];
  };

export const SolutionCoverageData: SolutionCoverageForProduct[] = [
    {
      productId: 3, // corresponds to your product ID 3
      coverage: [
        { id: 1, title: "Omni channel customer engagement & support" },
        { id: 2, title: "Streamlined onboarding account management processes" },
        { id: 3, title: "Integration with popular payment gateways and financial systems" },
        { id: 4, title: "Scalable architecture to accommodate user growth" },
        { id: 5, title: "Customizable modules for tailored solutions" },
      ],
    },
    {
      productId: 8, // corresponds to product ID 8
      coverage: [
        { id: 1, title: "Customer", description: `Customer self registration & requisition\nBiometric verification\nKYC` },
        { id: 2, title: "Distributor", description: `Distributors sales force management\nDistributors requisition order & payment Management\nCommission Management` },
        { id: 3, title: "Sales Force", description: "Knowledge management tool" },
        { id: 4, title: "Retailer", description: `Retailers management\nCommission management` },
        { id: 5, title: "Trade Marketing", description: "Trade management tool" },
        { id: 6, title: "Analytics & Reporting", description: "Sales analytics & reporting" },
      ],
    },
  ];