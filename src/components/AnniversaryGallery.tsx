import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ann1 from "@/assets/anniversary1.png";
import ann2 from "@/assets/leadership.png";
import ann3 from "@/assets/anniversary3.png";
import ann4 from "@/assets/anniversary7.png";
import ann5 from "@/assets/anniversary8.png";
import ann6 from "@/assets/outreach-2.jpg";

const galleryItems = [
  { image: ann1, caption: "Team celebration at the 5th Anniversary Gala", description: "The Aiders Global family came together to celebrate 5 remarkable years of empowering communities and transforming lives through accessible financial solutions." },
  { image: ann2, caption: "Leadership team group portrait", description: "Our dedicated leadership team poses together, united by a shared vision of financial inclusion and community development across Nigeria." },
  { image: ann3, caption: "Prayer for the anniversary", description: "Prayer for the growth and outstanding achievements of Engr. Temidayo Ben Babatunde and stakeholders, reflecting on five years of growth, challenges overcome, and the vision ahead." },
  { image: ann4, caption: "Recognition & Gift ceremony", description: "Outstanding team members and partners received recognition for their exceptional contributions to AGAPE's mission of poverty alleviation." },
  { image: ann5, caption: "Recorgnition of loyal clients", description: "A milestone moment, symbolizing five sweet years of dedicated service to underserved communities." },
  { image: ann6, caption: "Community outreach & engagement", description: "AGAPE team members engaging directly with small business owners and community members — the heart of everything we do." },
];

const AnniversaryGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { t } = useLanguage();

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      <section ref={ref} className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-divider font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-6"
          >
            {t("anniversary.gallery")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
          >
            Relive the memorable moments from our 5th Anniversary celebration — a testament to five years of dedication, growth, and community impact.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white"
          >
            <ChevronRight size={36} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightbox].image}
              alt={galleryItems[lightbox].caption}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-display text-lg font-bold mb-2">
                {galleryItems[lightbox].caption}
              </h3>
              <p className="text-white/60 text-sm max-w-2xl mx-auto">
                {galleryItems[lightbox].description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AnniversaryGallery;
