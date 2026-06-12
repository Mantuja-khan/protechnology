import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { categories } from "@/lib/products-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Pro Technology" },
      { name: "description", content: "Browse our complete catalog of foam, PVC, EPDM, automotive and industrial components." },
      { property: "og:title", content: "Products — Pro Technology" },
      { property: "og:description", content: "Foam, PVC, EPDM, sleeves, gaskets and more." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <Layout>
      <PageHero title="Our Products" subtitle="Industrial components engineered for performance. Explore our full catalog organized by category." />

      <section className="py-16">
        <div className="container-page space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-brand font-semibold uppercase text-xs tracking-wider">Category</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary mt-1">{cat.name}</h2>
                </div>
                <Link to="/products/category/$slug" params={{ slug: cat.slug }} className="text-sm font-semibold text-brand hover:underline">
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {cat.products.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (ci * 0.02) + (i * 0.03) }}
                  >
                    <Link to="/products/$slug" params={{ slug: p.slug }} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="aspect-square bg-secondary relative overflow-hidden">
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-primary-foreground text-sm font-semibold flex items-center gap-1">View Details <ArrowRight className="h-3 w-3" /></span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-primary text-sm group-hover:text-brand transition-colors line-clamp-2">{p.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
