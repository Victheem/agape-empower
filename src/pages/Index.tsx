import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import AnniversarySection from "@/components/AnniversarySection";
import AnniversaryGallery from "@/components/AnniversaryGallery";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />
      <ImpactSection />
      <ServicesSection />
      <ValuesSection />

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            {t("cta.subtitle")}
          </p>
          <a
            href="/apply"
            className="inline-flex items-center gap-2 bg-emerald-brand hover:bg-emerald-light text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
          >
            {t("cta.button")}
          </a>
        </div>
        <AnniversarySection />
      <AnniversaryGallery />
      </section>
    </>
  );
};

export default Index;
