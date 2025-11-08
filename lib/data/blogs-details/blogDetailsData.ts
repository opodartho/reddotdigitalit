export type BlogsDetailsItem = {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrls: string[];
  authors: string[];
  tags: string[];
  share: string[];
  keyPoints: string[];
  keyPointsHeading: string;
  subtitle1: string;
  subText1: string;
  subtitle2?: string;
  subText2?: string;
};

export const blogsDetailsData: BlogsDetailsItem =
{
  id: 1,
  date: '10 Jul, 2024',
  title: "Fintech Solutions That Shape Tomorrow's Economy",
  description: `Fintech is transforming the global economy by making financial services more accessible, efficient, and secure. From mobile payments and digital wallets to blockchain and AI-driven investment platforms, the innovations in this sector are redefining how we manage money.
        
        These digital solutions empower both individuals and businesses to make smarter financial decisions, adapt to rapid market changes, and embrace a future where traditional banking is augmented by intelligent technology. Blockchain provides transparency, AI ensures better fraud detection, and apps make finance real-time and personalized.`,
  imageUrls: ['/images/blogs1.svg', '/images/blogs2.svg', '/images/blogs3.svg'],
  authors: ['Team RedDot'],
  tags: ['Fintech', 'Digital Finance', 'Innovation', 'Blockchain'],
  share: ['/images/fb.svg', '/images/x.svg', '/images/insta.svg'],
  keyPoints: ['Instant Transactions: Fintech enables near-instant cross-border payments, reducing delays from traditional banking systems (e.g., SWIFT).', 'Enhanced Security: Blockchain and encryption (e.g., tokenization) protect against fraud, while biometric authentication adds user trust.', 'Actionable Insights: Businesses and individuals gain instant visibility into spending patterns, cash flow, and financial health.'],
  keyPointsHeading: 'Key Benefits of our Fintech Solutions',
  subtitle1: 'Blockchain Solutions for Finance',
  subText1: 'With relentless innovation and robust regulatory support, the fintech industry is poised to become the cornerstone of modern financial infrastructure, reshaping how individuals, businesses, and governments interact with money. Cutting-edge technologies like AI, blockchain, and decentralized finance are driving unprecedented efficiency, security, and accessibility, enabling seamless global transactions, hyper-personalized financial services, and inclusive solutions for the unbanked. Countries and companies that embrace fintech early will secure a significant competitive advantage in the digital era, unlocking economic growth, fostering financial empowerment, and setting global standards. Proactive regulatory frameworks that balance innovation with consumer protection will accelerate adoption, ensuring trust and scalability. Early adopters will lead in creating resilient, inclusive, and sustainable financial ecosystems, attracting investment, talent, and market share while redefining wealth management, payments, and lending for a connected world.',
}
