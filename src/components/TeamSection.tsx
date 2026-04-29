import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import teamCeo from "@/assets/Team-1.jpg";
import teamMd from "@/assets/Team-2.jpg";
import teamBdm from "@/assets/team-4.jpg";
import teamAccountant from "@/assets/team-3.jpg";

const team = [
  {
    name: "Engr. Temidayo Ben Babatunde",
    role: "Chairman/CEO",
    image: teamCeo,
    bio: "Civil Engineering graduate from FUTMINNA. MD/CEO of Aiders Global & Crystolives Oil&Gas. Certified PMP with COREN registration.",
    fullBio: "A graduate of Civil Engineering from Federal University of Technology, Minna. Currently the MD/CEO of Aiders Global (AGAPE) Nigeria Limited and Crystolives Oil&Gas Limited. He has worked with Harmony Holdings, Oceanic Bank, RNZ and companies in the UK. Holds certifications in Project Management (PMI) and HSE from Site Management and Safety Institute, UK. A registered and practicing engineer with COREN and member of the Nigeria Society of Engineers.",
    quote: "Building financial bridges for the underserved.",
  },
  {
    name: "Mrs. Toby Ben-Babatunde",
    role: "Managing Director",
    image: teamMd,
    bio: "MSc in Business & Management (Distinction), Robert Gordon University. Strategic leader with expertise in HR and operations excellence.",
    fullBio: "Has led Aiders Global since May 2020 with over a decade of experience in administrative management, HR, and customer service. Holds MSc in Business & Management (Distinction) and MSc in Corporate Communication & Public Affairs from Robert Gordon University, Aberdeen, UK. Previously served as HR Manager at Maayoit Healthcare and Operations Manager at Utopian Healthcare. Her leadership is characterized by inclusivity, professional integrity, and a client-focused approach.",
    quote: "\"The only way to do great work is to love what you do.\" – Steve Jobs",
  },
  {
    name: "Pst. Adedoyin Femi Mathew",
    role: "Business Dev. Manager",
    image: teamBdm,
    bio: "B.Sc. Criminology & Security Studies. Oversees all branch operations and drives business growth initiatives since 2021.",
    fullBio: "Holds a B.Sc. in Criminology and Security Studies. Has been serving as Business Manager since October 2021, overseeing all company activities at the head office and branches. A hardworking and passionate individual at the forefront of all business growth and expansion initiatives. Also serves as Zonal Music Director (Kwara Province 3) and Zonal Assistant Pastor at RCCG.",
    quote: "Driving growth through dedication and excellence.",
  },
  {
    name: "Grace Oluwakemi Ajayi",
    role: "Accountant/Admin Head",
    image: teamAccountant,
    bio: "B.Sc. Accounting, University of Ilorin. Expert in financial reporting, internal audits, and regulatory compliance.",
    fullBio: "A skilled accountant and internal auditor recognized for enhancing financial operations and ensuring regulatory compliance. Holds B.Sc. in Accounting from University of Ilorin. Previously managed bookkeeping and accounts at Chelis Bookazine Limited, oversaw financial operations at Savannah Hotels, and handled invoices and payroll at Top Crown Petroleum Ltd. Motivated by simplicity and hard work.",
    quote: "Precision and integrity in every number.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-divider font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          {t("team.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center group relative"
            >
              <div className="w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-border group-hover:border-emerald-brand transition-colors relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{member.name}</h3>
              <p className="text-emerald-brand text-sm font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>

              {/* Hover card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-72 bg-card border border-border rounded-xl shadow-2xl p-5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-30 -translate-y-2 group-hover:translate-y-0"
                style={{ top: "calc(100% + 8px)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="font-display text-sm font-bold text-foreground">{member.name}</p>
                    <p className="text-emerald-brand text-xs">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{member.fullBio}</p>
                {member.quote && (
                  <p className="text-gold text-xs italic border-t border-border pt-2 mt-2">{member.quote}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
