import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo2.png";

const serviceLinks = [
  { labelKey: "services.education" as const, href: "/services/education-loan" },
  { labelKey: "services.asset" as const, href: "/services/asset-loan" },
  { labelKey: "services.smallBusiness" as const, href: "/services/small-scale-business-loan" },
  { labelKey: "services.salary" as const, href: "/services/salary-advance-loan" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { labelKey: "nav.home" as const, href: "/" },
    { labelKey: "nav.about" as const, href: "/about" },
    { labelKey: "nav.services" as const, href: "/services", dropdown: true },
    { labelKey: "nav.blog" as const, href: "/blog" },
    { labelKey: "nav.careers" as const, href: "/careers" },
    { labelKey: "nav.contact" as const, href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg py-2" : "bg-navy/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="relative flex items-center gap-3 group">
          <div className="relative bg-white rounded-md p-1">
            <img src={logo} alt="Aiders global" className="h-16 object-contain relative z-10" />

            {/* Sweep effect */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-md rotate-12 transform transition-transform duration-1000 group-hover:translate-x-[220px]" />
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="font-display font-bold text-primary-foreground text-sm block">AIDERS GLOBAL</span>
            <span className="text-emerald-light text-[10px] tracking-widest uppercase">(AGAPE) Nigeria Ltd.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.labelKey} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive("/services")
                      ? "text-emerald-light"
                      : "text-white/80 hover:text-emerald-light"
                  }`}
                >
                  {t(link.labelKey)}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-navy text-white border border-white/20 rounded-xl shadow-xl py-2 min-w-[220px] z-50"
                    >
                      <Link to="/services" className="block px-5 py-2.5 text-sm hover:text-emerald-light">
                        {t("services.page.title")}
                      </Link>

                      <div className="border-t border-white/20 my-1" />

                      {serviceLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-5 py-2.5 text-sm hover:text-emerald-light"
                        >
                          {t(sub.labelKey)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.labelKey}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-light"
                    : "text-white/80 hover:text-emerald-light"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            )
          )}

          <LanguageSwitcher />

          <Link
            to="/apply"
            className="bg-emerald-brand hover:bg-emerald-light text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            {t("nav.apply")}
          </Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.labelKey}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex justify-between py-2 text-sm text-white"
                    >
                      {t(link.labelKey)}
                      <ChevronDown size={14} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-6">
                        <Link to="/services" className="block py-2 text-sm hover:text-emerald-light">
                          {t("services.page.title")}
                        </Link>
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block py-2 text-sm hover:text-emerald-light"
                          >
                            {t(sub.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.labelKey}
                    to={link.href}
                    className="py-2 text-sm text-white hover:text-emerald-light"
                  >
                    {t(link.labelKey)}
                  </Link>
                )
              )}

              <Link
                to="/apply"
                className="bg-emerald-brand text-white px-5 py-2 rounded-lg text-sm text-center mt-2 hover:bg-emerald-light"
              >
                {t("nav.apply")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;