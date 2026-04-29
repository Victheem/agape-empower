import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";

const LoanApplicationForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — in production, integrate with mailto or API
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("Loan Application");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nBusiness Type: ${data.get("businessType")}\nBusiness Location: ${data.get("businessLocation")}\nPhone: ${data.get("phone")}\nLoan Purpose: ${data.get("loanPurpose")}`
    );
    window.location.href = `mailto:info@aidersglobal.org?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="apply" className="py-20 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-divider font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14"
        >
          Apply for a Loan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {submitted ? (
            <div className="bg-emerald-brand/20 border border-emerald-brand/40 rounded-xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Application Submitted!</h3>
              <p className="text-primary-foreground/70 text-sm">We'll review your application and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
              />
              <select
                name="businessType"
                required
                className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground/80 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
              >
                <option value="">Business Type</option>
                <option>Retail / FMCG</option>
                <option>Agriculture</option>
                <option>Services</option>
                <option>Manufacturing</option>
                <option>Education</option>
                <option>Other</option>
              </select>
              <select
                name="businessLocation"
                required
                className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground/80 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
              >
                <option value="">Business Location</option>
                <option>Ilorin, Kwara</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Other</option>
              </select>
              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
              />
              <select
                name="loanPurpose"
                required
                className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground/80 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
              >
                <option value="">Loan Purpose</option>
                <option>Working Capital</option>
                <option>Business Expansion</option>
                <option>Equipment Purchase</option>
                <option>Education</option>
                <option>Salary Advance</option>
                <option>Asset Purchase</option>
                <option>Other</option>
              </select>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-brand hover:bg-emerald-light text-primary-foreground py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LoanApplicationForm;
