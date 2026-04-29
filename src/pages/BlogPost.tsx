import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-light text-xs font-semibold uppercase tracking-wider"
          >
            {post.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4"
          >
            {post.title}
          </motion.h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-3xl -mt-8">
        <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
      </div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-emerald-brand mt-0.5">•</span>
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ol key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm">{item}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-divider font-display text-2xl font-bold text-foreground text-center mb-10">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-36 overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-bold text-foreground line-clamp-2 mb-2">{r.title}</h3>
                  <span className="inline-flex items-center gap-1 text-emerald-brand text-xs font-semibold">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
