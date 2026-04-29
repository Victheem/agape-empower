import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  heroImage?: string;
  whoIsItFor: { title: string; items: string[] };
  howToApply: { title: string; steps: string[] };
  keyConsiderations?: string[];
  additionalSections?: { title: string; items: string[] }[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  icon: Icon,
  description,
  heroImage,
  whoIsItFor,
  howToApply,
  keyConsiderations,
  additionalSections,
}: ServicePageLayoutProps) => {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 rounded-2xl bg-emerald-brand/20 flex items-center justify-center mx-auto mb-6"
          >
            <Icon className="text-emerald-light" size={28} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`${heroImage ? "grid md:grid-cols-2 gap-8 items-center" : "max-w-3xl mx-auto"}`}>
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img src={heroImage} alt={title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
              </motion.div>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground text-base leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-divider font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            {whoIsItFor.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whoIsItFor.items.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <ChevronRight className="text-emerald-brand flex-shrink-0 mt-0.5" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {additionalSections?.map((section, idx) => (
        <section key={section.title} className={`py-16 ${idx % 2 === 0 ? "bg-background" : "bg-card"}`}>
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-divider font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <ChevronRight className="text-emerald-brand flex-shrink-0 mt-0.5" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* How to Apply */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-divider font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            {howToApply.title}
          </h2>
          <div className="space-y-4">
            {howToApply.steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-foreground text-sm pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      {keyConsiderations && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-divider font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Key Considerations
            </h2>
            <ul className="space-y-3">
              {keyConsiderations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <ChevronRight className="text-gold flex-shrink-0 mt-0.5" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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

export default ServicePageLayout;
