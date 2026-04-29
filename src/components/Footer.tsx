import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo2.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 relative group">
              <img src={logo} alt="Aiders Global" className="h-10 object-contain z-10" />
              <span className="font-bold text-sm">AIDERS GLOBAL</span>

              {/* Flash sweep effect */}
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute -left-20 top-0 h-full w-20 bg-white/40 blur-md rotate-12 group-hover:translate-x-[200px] transition-transform duration-1000"></span>
              </span>

              <div>
                <span className="font-display font-bold text-primary-foreground text-sm block">
                  AIDERS GLOBAL
                </span>
                <span className="text-primary-foreground/50 text-[10px] tracking-widest uppercase">
                  (AGAPE) Nigeria Ltd.
                </span>
              </div>
            </Link>

            <p className="text-primary-foreground/50 text-xs leading-relaxed">
              {t("about.purpose.text")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {[
                { label: t("nav.home"), href: "/" },
                { label: t("nav.about"), href: "/about" },
                { label: t("nav.services"), href: "/services" },
                { label: t("nav.blog"), href: "/blog" },
                { label: t("nav.careers"), href: "/careers" },
                { label: t("nav.contact"), href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-primary-foreground/50 hover:text-emerald-light text-xs transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2">
              {[
                { label: t("services.education"), href: "/services/education-loan" },
                { label: t("services.salary"), href: "/services/salary-advance-loan" },
                { label: t("services.asset"), href: "/services/asset-loan" },
                { label: t("services.smallBusiness"), href: "/services/small-scale-business-loan" },
                { label: t("nav.apply"), href: "/apply" },
              ].map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-primary-foreground/50 hover:text-emerald-light text-xs transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-emerald-brand hover:text-primary-foreground transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a href="mailto:info@aidersglobal.org" className="text-emerald-light text-xs">info@aidersglobal.org</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;