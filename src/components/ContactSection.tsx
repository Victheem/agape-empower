import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, Mail, Phone, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent("Website Enquiry");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`);
    window.location.href = `mailto:info@aidersglobal.org?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-divider font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t("contact.address")}</h4>
                <p className="text-muted-foreground text-sm">Mercy Eye Hospital Complex, Plot 15, Umar Audi Road, Fate Roundabout, Ilorin</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t("contact.hours")}</h4>
                <p className="text-muted-foreground text-sm">8:00 AM – 5:00 PM (Monday – Friday)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t("contact.email")}</h4>
                <a href="mailto:info@aidersglobal.org" className="text-emerald-brand text-sm hover:underline">info@aidersglobal.org</a>
              </div>
            </div>
            <div className="bg-muted rounded-xl h-48 flex items-center justify-center border border-border">
              <p className="text-muted-foreground text-sm">📍 Google Map – Ilorin, Kwara State</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="bg-emerald-brand/10 border border-emerald-brand/30 rounded-xl p-8 text-center">
                <p className="text-foreground font-semibold">{t("contact.sent")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" required placeholder={t("contact.namePlaceholder")} className="w-full border border-border rounded-lg px-4 py-3 text-foreground bg-card placeholder:text-muted-foreground text-sm focus:outline-none focus:border-emerald-brand transition-colors" />
                <input name="email" required type="email" placeholder={t("contact.emailPlaceholder")} className="w-full border border-border rounded-lg px-4 py-3 text-foreground bg-card placeholder:text-muted-foreground text-sm focus:outline-none focus:border-emerald-brand transition-colors" />
                <textarea name="message" required rows={5} placeholder={t("contact.messagePlaceholder")} className="w-full border border-border rounded-lg px-4 py-3 text-foreground bg-card placeholder:text-muted-foreground text-sm focus:outline-none focus:border-emerald-brand transition-colors resize-none" />
                <button type="submit" className="w-full bg-navy hover:bg-navy-light text-primary-foreground py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> {t("contact.send")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
