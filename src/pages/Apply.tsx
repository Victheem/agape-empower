import { motion } from "framer-motion";
import LoanApplicationForm from "@/components/LoanApplicationForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Apply = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-navy pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            {t("apply.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-gold">{t("apply.title").split(" ").pop()}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto"
          >
            {t("apply.subtitle")}
          </motion.p>
        </div>
      </section>
      <LoanApplicationForm />
    </>
  );
};

export default Apply;
