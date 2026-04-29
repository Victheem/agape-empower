import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames, type Language } from "@/i18n/translations";

const flags: Record<Language, string> = {
  en: "🇬🇧",
  yo: "🇳🇬",
  ha: "🇳🇬",
  ig: "🇳🇬",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-emerald-light transition-colors text-sm"
        aria-label="Switch language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{flags[language]} {languageNames[language]}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute top-full mt-2 right-0 bg-navy-dark border border-primary-foreground/10 rounded-xl shadow-xl py-2 min-w-[150px] z-50"
          >
            {(Object.keys(languageNames) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                  language === lang
                    ? "text-emerald-light bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-emerald-light hover:bg-primary-foreground/5"
                }`}
              >
                <span>{flags[lang]}</span>
                {languageNames[lang]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
