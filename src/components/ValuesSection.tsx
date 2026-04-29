import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Heart, Users, Sparkles, Handshake, Award, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, labelKey: "values.reliability" as const, color: "bg-navy" },
    { icon: Heart, labelKey: "values.integrity" as const, color: "bg-navy-light" },
    { icon: Users, labelKey: "values.genuine" as const, color: "bg-emerald-brand" },
    { icon: Sparkles, labelKey: "values.empathy" as const, color: "bg-gold" },
    { icon: Handshake, labelKey: "values.teamwork" as const, color: "bg-navy" },
    { icon: Award, labelKey: "values.excellence" as const, color: "bg-navy-light" },
    { icon: UserCheck, labelKey: "values.customerFocused" as const, color: "bg-emerald-brand" },
  ];

  return (
    <section className="py-20 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-divider font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14"
        >
          {t("values.title")}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.labelKey}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`${v.color} rounded-full px-6 py-3 flex items-center gap-2 text-primary-foreground font-semibold text-sm shadow-md hover:scale-105 transition-transform cursor-default`}
            >
              <v.icon size={18} />
              {t(v.labelKey)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
