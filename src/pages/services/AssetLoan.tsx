import { ShoppingCart } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import loanAsset from "@/assets/loan-asset.jpg";

const AssetLoan = () => (
  <ServicePageLayout
    title="Asset Loans"
    subtitle="Finance home appliances and consumer durables with manageable installments"
    icon={ShoppingCart}
    heroImage={loanAsset}
    description="An asset loan, often referred to as a consumer durable loan, is a type of financing that allows individuals to purchase home appliances and other consumer durables by spreading the cost over a period of time. These loans help consumers afford essential household items without paying the full amount upfront."
    whoIsItFor={{
      title: "Who Is It Meant For?",
      items: [
        "Homeowners and renters looking to purchase home appliances or electronics",
        "First-time homeowners furnishing their new homes with necessary appliances",
        "Those needing immediate replacements for broken or outdated appliances",
        "Budget-conscious shoppers who prefer to manage cash flow by spreading costs",
      ],
    }}
    additionalSections={[
      {
        title: "Commonly Financed Items",
        items: [
          "Refrigerators",
          "Washing machines and dryers",
          "Dishwashers",
          "Microwaves and ovens",
          "Televisions and home theater systems",
          "Air conditioners and heaters",
          "Computers and laptops",
        ],
      },
    ]}
    howToApply={{
      title: "How to Apply",
      steps: [
        "Submit an application with details about the product, your personal information, and your income.",
        "Provide documentation such as proof of identity, proof of income (salary slips, bank statements), and address proof.",
        "Review and sign the loan agreement outlining the interest rate, loan term, and monthly installment amount.",
        "Receive the product — funds are disbursed directly to the retailer and you take possession of the appliance.",
        "Repay the loan in monthly installments as per the agreed schedule.",
      ],
    }}
    keyConsiderations={[
      "Choose a loan term that balances affordable monthly payments with the total interest paid.",
      "A down payment may be required, reducing the loan amount and monthly installments.",
      "Ensure your credit score is in good standing to qualify for better loan terms.",
      "Consider purchasing extended warranties or insurance for the appliance.",
    ]}
  />
);

export default AssetLoan;
