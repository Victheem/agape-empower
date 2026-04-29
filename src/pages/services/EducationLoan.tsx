import { GraduationCap } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import loanEducation from "@/assets/loan-education.jpg";

const EducationLoan = () => (
  <ServicePageLayout
    title="Education Loans"
    subtitle="Empowering students with accessible and innovative education financing"
    icon={GraduationCap}
    heroImage={loanEducation}
    description="An educational loan is a type of financial aid designed to help students cover the costs associated with their education, such as tuition, books, and living expenses. These loans are typically meant for students who need financial assistance to afford higher education, whether at undergraduate, graduate, or professional levels."
    whoIsItFor={{
      title: "Who Is It Meant For?",
      items: [
        "Students enrolled or planning to enrol in an educational institution",
        "Parents looking to help pay for their child's education",
        "Graduate and Professional Students pursuing advanced degrees",
        "International Students studying abroad",
      ],
    }}
    howToApply={{
      title: "How to Apply",
      steps: [
        "Fill and submit an application form with personal and financial information, details about the school, and the amount needed.",
        "Provide documentation such as proof of enrollment, income statements, and identification.",
        "Sign the loan agreement which outlines the terms, interest rates, and repayment schedule.",
        "Receive funds — the loan funds are disbursed if all requirements are passed.",
      ],
    }}
    keyConsiderations={[
      "Understand the interest rate structure and when interest begins accruing.",
      "Be aware of the repayment schedule and grace periods after graduation.",
      "Consider the total cost of borrowing over the life of the loan.",
      "Ensure you meet all enrollment requirements to maintain eligibility.",
    ]}
  />
);

export default EducationLoan;
