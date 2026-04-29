import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Users, Upload, Send, Loader2 } from "lucide-react";

const roles = [
  {
    title: "Loan Officer",
    icon: Briefcase,
    responsibilities: [
      "Assess loan applications and conduct due diligence",
      "Manage client relationships and portfolio",
      "Ensure timely loan repayments and follow-ups",
    ],
    qualifications: [
      "Degree in Finance, Business Administration, or related field",
      "Strong analytical and communication skills",
      "Experience in microfinance is a plus",
    ],
  },
  {
    title: "Customer Service Representative",
    icon: Users,
    responsibilities: [
      "Assist clients with inquiries and loan product information",
      "Handle customer feedback and resolve complaints",
      "Support branch operations and documentation",
    ],
    qualifications: [
      "Excellent communication and interpersonal skills",
      "Customer service experience preferred",
      "Minimum of SSCE / HND / B.Sc",
    ],
  },
];

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("Job Application - " + data.get("position"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPosition: ${data.get("position")}\nCover Letter: ${data.get("coverLetter")}`
    );
    window.location.href = `mailto:info@aidersglobal.org?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Join Our <span className="text-gradient-gold">Dynamic Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto"
          >
            Are you passionate about financial inclusion and community development? Help us empower small businesses and individuals to achieve financial independence.
          </motion.p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-divider font-display text-3xl font-bold text-foreground text-center mb-12">
            Current Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <role.icon className="text-primary-foreground" size={18} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{role.title}</h3>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Responsibilities:</h4>
                  <ul className="space-y-1">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-emerald-brand mt-1">•</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Qualifications:</h4>
                  <ul className="space-y-1">
                    {role.qualifications.map((q) => (
                      <li key={q} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">•</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="section-divider font-display text-3xl font-bold text-primary-foreground text-center mb-12">
            Apply Now
          </h2>
          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div className="bg-emerald-brand/20 border border-emerald-brand/40 rounded-xl p-8 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Application Received!</h3>
                <p className="text-primary-foreground/70 text-sm">Thank you for your interest. We'll review and contact you shortly.</p>
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
                  name="position"
                  required
                  className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground/80 text-sm focus:outline-none focus:border-emerald-brand transition-colors"
                >
                  <option value="">Position Applied For</option>
                  <option>Loan Officer</option>
                  <option>Customer Service Representative</option>
                </select>
                <textarea
                  name="coverLetter"
                  required
                  rows={5}
                  placeholder="Cover Letter"
                  className="w-full bg-navy-light/50 border border-primary-foreground/15 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-emerald-brand transition-colors resize-none"
                />
                <div className="border-2 border-dashed border-primary-foreground/20 rounded-lg p-6 text-center hover:border-emerald-brand/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-primary-foreground/40 mb-2" size={24} />
                  <p className="text-primary-foreground/50 text-sm">Upload your CV (attach via email)</p>
                </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
