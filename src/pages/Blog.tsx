import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our <span className="text-gradient-gold">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-primary-foreground/70 max-w-xl mx-auto"
          >
            Insights on financing, investment, business growth, and financial literacy from our team of experts.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-emerald-brand text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-emerald-brand text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
