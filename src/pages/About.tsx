import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
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
            {t("about.page.title")} <span className="text-gradient-gold">Aiders Global</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto"
          >
            {t("about.page.subtitle")}
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <TeamSection />
      <ValuesSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-divider font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t("about.goals.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleKey: "about.goal1.title" as const, descKey: "about.goal1.desc" as const },
              { titleKey: "about.goal2.title" as const, descKey: "about.goal2.desc" as const },
              { titleKey: "about.goal3.title" as const, descKey: "about.goal3.desc" as const },
              { titleKey: "about.goal4.title" as const, descKey: "about.goal4.desc" as const },
            ].map((goal, i) => (
              <motion.div
                key={goal.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(goal.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(goal.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
