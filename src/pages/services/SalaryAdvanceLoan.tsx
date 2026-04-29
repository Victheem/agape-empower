import { Wallet } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import loanSalary from "@/assets/loan-salary.jpg";

const SalaryAdvanceLoan = () => (
  <ServicePageLayout
    title="Salary Advance Loans"
    subtitle="Quick access to funds ahead of your scheduled payday"
    icon={Wallet}
    heroImage={loanSalary}
    description="A salary advance loan, also known as a payday advance or payroll advance, is a short-term loan designed to provide employees with quick access to funds ahead of their scheduled payday. This type of loan helps individuals manage immediate financial needs or emergencies without waiting for their next paycheck."
    whoIsItFor={{
      title: "Who Is It Meant For?",
      items: [
        "Employees who are currently employed with a regular source of income",
        "Those facing urgent financial needs such as medical bills or car repairs",
        "Workers with short-term cash flow issues who need to bridge the gap between paychecks",
      ],
    }}
    howToApply={{
      title: "How to Apply",
      steps: [
        "Fill and submit an application form with personal information, employment details, and income verification.",
        "Provide documentation such as proof of employment and recent pay stubs.",
        "Review terms and conditions including interest rates, fees, repayment terms, and potential penalties.",
        "Receive funds — once approved, the loan amount is deposited directly into your bank account.",
        "Repay the loan — repayment is often automatically deducted from your next paycheck.",
      ],
    }}
    keyConsiderations={[
      "Short repayment period — these loans typically need to be repaid within a few weeks, often by your next payday.",
      "Be cautious of falling into a cycle of debt where additional loans are needed to cover previous ones.",
      "Timely repayment can positively affect credit scores, while late payments can have negative consequences.",
      "Ensure sufficient funds are available in your account to avoid overdraft fees.",
    ]}
  />
);

export default SalaryAdvanceLoan;
