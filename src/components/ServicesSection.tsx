import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  GraduationCap,
  Wallet,
  ShoppingCart,
  Store,
  ArrowRight,
  Star,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import loanEducation from "@/assets/loan-education.jpg";
import loanBusiness from "@/assets/loan-business.jpg";
import loanSalary from "@/assets/loan-salary.jpg";
import loanAsset from "@/assets/loan-asset.jpg";
import avatar1 from "@/assets/test1.jpg";
import avatar2 from "@/assets/test3.jpg";
import avatar3 from "@/assets/test2.jpg";
import { blogPosts } from "@/data/blog-posts";

const fallbackAvatar = "https://via.placeholder.com/100";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const [index, setIndex] = useState(0);

  const services = [
    {
      icon: Banknote,
      titleKey: "services.microLending",
      items: ["Short-Term Loans", "Long-Term Loans", "Working Capital"],
      link: "/services",
      image: null,
    },
    {
      icon: GraduationCap,
      titleKey: "services.education",
      items: ["Students", "Parents", "Graduate Students", "International Students"],
      link: "/services/education-loan",
      image: loanEducation,
    },
    {
      icon: Wallet,
      titleKey: "services.salary",
      items: ["Quick Access", "Short-Term", "Emergency Funds"],
      link: "/services/salary-advance-loan",
      image: loanSalary,
    },
    {
      icon: ShoppingCart,
      titleKey: "services.asset",
      items: ["Home Appliances", "Electronics", "Consumer Durables"],
      link: "/services/asset-loan",
      image: loanAsset,
    },
    {
      icon: Store,
      titleKey: "services.smallBusiness",
      items: ["Startups", "Expansions", "Equipment Finance"],
      link: "/services/small-scale-business-loan",
      image: loanBusiness,
    },
  ];

  const features = [
    { title: "Fast Loan Approval", desc: "Get your loans approved within hours without delays.", icon: "⚡" },
    { title: "Trusted & Secure", desc: "We ensure maximum security and transparency.", icon: "🔒" },
    { title: "Flexible Repayment", desc: "Repayment plans tailored for you.", icon: "💳" },
    { title: "24/7 Support", desc: "We are always available to assist you.", icon: "📞" },
  ];

  const testimonials = [
    { name: "John Doe", text: "Aiders Global made getting a loan so easy and fast.", image: avatar1 },
    { name: "Sarah Johnson", text: "Their customer service is top-notch. I felt safe.", image: avatar2 },
    { name: "Michael Lee", text: "Flexible repayment helped me manage finances better.", image: avatar3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 lg:py-28 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            {t("services.title")}
          </motion.h2>

          {/* Micro Lending */}
          <div className="mb-12">
            {(() => {
              const microLending = services[0];
              const MicroIcon = microLending.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                  <Link
                    to={microLending.link}
                    className="block backdrop-blur-lg bg-white/60 border border-white/20 rounded-2xl hover:shadow-2xl transition-all group max-w-md mx-auto"
                  >
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-blue-700 flex items-center justify-center group-hover:bg-blue-500 transition">
                          <MicroIcon className="text-white" size={20} />
                        </div>
                        <h3 className="text-lg font-bold">{t(microLending.titleKey)}</h3>
                      </div>

                      <ul className="space-y-2 mb-4 text-sm text-gray-600">
                        {microLending.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-blue-600">›</span> {item}
                          </li>
                        ))}
                      </ul>

                      <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                        {t("services.learnMore")} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })()}
          </div>

          {/* Services + Blog */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {services.slice(1).map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div key={svc.titleKey}>
                      <Link
                        to={svc.link}
                        className="block bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group"
                      >
                        {svc.image && (
                          <div className="h-40 overflow-hidden">
                            <img
                              src={svc.image}
                              className="w-full h-full object-cover group-hover:scale-110 transition"
                            />
                          </div>
                        )}

                        <div className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
                              <Icon className="text-white" size={18} />
                            </div>
                            <h3 className="text-sm font-bold">{t(svc.titleKey)}</h3>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ✅ SMALLER BLOG SIDEBAR */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Blog Posts</h3>

              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, i) => (
                  <motion.div key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex gap-3 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group"
                    >
                      <div className="w-24 h-20 overflow-hidden">
                        <img
                          src={post.image}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      <div className="p-2">
                        <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
                          <Calendar size={10} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>

                        <h4 className="text-xs font-semibold line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4">
                <Link to="/blog" className="text-xs text-blue-600 font-semibold">
                  View All Posts →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;