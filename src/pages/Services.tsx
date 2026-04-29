import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Banknote, GraduationCap, Wallet, ShoppingCart, Store, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Micro Lending Loans",
    desc: "Short-term and long-term loans designed for small and medium-scale business owners to meet immediate and growth needs.",
    link: "/services",
    external: false,
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    desc: "Accessible education financing for students, parents, and professionals pursuing academic and career goals.",
    link: "/services/education-loan",
    external: false,
  },
  {
    icon: Wallet,
    title: "Salary Advance Loans",
    desc: "Quick access to funds ahead of your scheduled payday to manage immediate financial needs or emergencies.",
    link: "/services/salary-advance-loan",
    external: false,
  },
  {
    icon: ShoppingCart,
    title: "Asset Loans",
    desc: "Finance home appliances and consumer durables by spreading costs over manageable installments.",
    link: "/services/asset-loan",
    external: false,
  },
  {
    icon: Store,
    title: "Small Business Loans",
    desc: "Capital solutions for startups, expansions, working capital, equipment purchases, and business growth.",
    link: "/services/small-scale-business-loan",
    external: false,
  },
];

const Services = () => {
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
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto"
          >
            We offer a range of tailored financial solutions designed to meet the unique needs of individuals and businesses.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={svc.link}
                  className="block bg-card border border-border rounded-xl p-7 hover:shadow-lg hover:border-emerald-brand/30 transition-all group h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center group-hover:bg-emerald-brand transition-colors">
                      <svc.icon className="text-primary-foreground" size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{svc.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-emerald-brand text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Apply for a loan today and take the next step towards achieving your financial goals.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-emerald-brand hover:bg-emerald-light text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
          >
            Apply Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
