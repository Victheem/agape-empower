import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, Building2, Globe, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const impacts = [
    { icon: Users, titleKey: "impact.financial" as const, descKey: "impact.financialDesc" as const },
    { icon: TrendingUp, titleKey: "impact.sme" as const, descKey: "impact.smeDesc" as const },
    { icon: Building2, titleKey: "impact.community" as const, descKey: "impact.communityDesc" as const },
    { icon: Landmark, titleKey: "impact.business" as const, descKey: "impact.businessDesc" as const },
    { icon: Globe, titleKey: "impact.investment" as const, descKey: "impact.investmentDesc" as const },
  ];

  return (
    <section className="py-20 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-divider font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14"
        >
          {t("impact.title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-light/50 border border-primary-foreground/10 rounded-xl p-6 text-center hover:border-emerald-brand/50 transition-all group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-brand/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-brand/30 transition-colors">
                <item.icon className="text-emerald-light" size={24} />
              </div>
              <h3 className="font-display text-sm font-bold text-primary-foreground mb-2">{t(item.titleKey)}</h3>
              <p className="text-primary-foreground/50 text-xs">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
