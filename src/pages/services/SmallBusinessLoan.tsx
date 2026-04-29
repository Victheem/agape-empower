import { Store } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import loanBusiness from "@/assets/loan-business.jpg";

const SmallBusinessLoan = () => (
  <ServicePageLayout
    title="Small Scale Business Loans"
    subtitle="Capital solutions for startups, expansions, and business growth"
    icon={Store}
    heroImage={loanBusiness}
    description="A small scale business loan is a type of financing specifically designed to support the needs of small businesses. These loans provide the necessary capital for startups, expansions, working capital, equipment purchases, inventory management, and other business-related expenses."
    whoIsItFor={{
      title: "Who Is It Meant For?",
      items: [
        "Entrepreneurs looking to start a new business venture",
        "Existing small businesses needing funds for expansion, inventory, or equipment",
        "Seasonal businesses requiring additional capital during peak seasons",
        "Business owners who need funding for specific projects like marketing or new product development",
      ],
    }}
    additionalSections={[
      {
        title: "Types of Small Scale Business Loans",
        items: [
          "Term Loans — Lump sum loans with a fixed repayment schedule and interest rate",
          "Working Capital Loans — Short-term loans to cover daily operating expenses",
          "Equipment Financing — Loans specifically for purchasing business equipment",
          "Invoice Financing — Advances on outstanding invoices to improve cash flow",
          "Line of Credit — Flexible financing allowing businesses to draw funds as needed",
          "Microloans — Small loans geared towards startups and very small businesses",
        ],
      },
    ]}
    howToApply={{
      title: "How to Apply",
      steps: [
        "Determine your needs — identify the specific purpose and amount of funding required.",
        "Prepare documentation such as a business plan, financial statements, tax returns, and bank statements.",
        "Complete the application form with accurate and detailed information about your business.",
        "Submit the application and required documents for review.",
        "Review loan terms including interest rate, repayment schedule, and fees if approved.",
        "Receive funds — the loan amount will be disbursed to your business account.",
        "Make regular repayments as per the agreed schedule.",
      ],
    }}
    keyConsiderations={[
      "Understand the length of the loan and the repayment schedule.",
      "Some loans may require collateral such as business assets or personal guarantees.",
      "A good credit score can improve your chances of approval and result in better terms.",
      "Be aware of any origination fees, prepayment penalties, or other charges.",
    ]}
  />
);

export default SmallBusinessLoan;
