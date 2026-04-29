import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="City skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {t("hero.title1")}{" "}
            <span className="text-gradient-gold">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-emerald-brand hover:bg-emerald-light text-primary-foreground px-7 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              {t("hero.applyBtn")} <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              <FileText size={18} /> {t("hero.learnMore")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
        >
          {[
            { value: "5+", label: t("hero.stat1") },
            { value: "1,500+", label: t("hero.stat2") },
            { value: "200+", label: t("hero.stat3") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">{stat.value}</div>
              <div className="text-primary-foreground/60 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
