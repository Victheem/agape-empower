import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const items = [
    { icon: Target, titleKey: "about.mission.title" as const, textKey: "about.mission.text" as const, delay: 0.1 },
    { icon: Eye, titleKey: "about.vision.title" as const, textKey: "about.vision.text" as const, delay: 0.2 },
    { icon: Lightbulb, titleKey: "about.purpose.title" as const, textKey: "about.purpose.text" as const, delay: 0.3 },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-divider font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-emerald-brand transition-colors">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.textKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
