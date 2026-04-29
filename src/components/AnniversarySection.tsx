import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnniversarySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const milestones = [
    { icon: Users, value: "1,500+", labelKey: "anniversary.m1" as const },
    { icon: TrendingUp, value: "₦500M+", labelKey: "anniversary.m2" as const },
    { icon: Heart, value: "200+", labelKey: "anniversary.m3" as const },
    { icon: Award, value: "5", labelKey: "anniversary.m4" as const },
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-brand blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-semibold">
            <Award size={16} /> {t("anniversary.badge")}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          {t("anniversary.title1")}{" "}
          <span className="text-gradient-gold">{t("anniversary.title2")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/70 max-w-2xl mx-auto mb-12 text-lg"
        >
          {t("anniversary.subtitle")}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {milestones.map((m, i) => (
            <motion.div
              key={m.labelKey}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6"
            >
              <m.icon className="mx-auto mb-3 text-gold" size={28} />
              <div className="font-display text-3xl font-bold text-primary-foreground mb-1">{m.value}</div>
              <div className="text-primary-foreground/50 text-xs">{t(m.labelKey)}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-gold font-display text-xl italic"
        >
          {t("anniversary.quote")}
        </motion.p>
      </div>
    </section>
  );
};

export default AnniversarySection;
