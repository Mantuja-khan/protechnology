import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package, Filter, X } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import { categories, findCategory } from "@/lib/products-data";

export const Route = createFileRoute("/products/category/$slug")({
  loader: ({ params }) => {
    const category = findCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name ?? "Category"} — Pro Technology` },
      { name: "description", content: `Explore our ${loaderData?.category.name} products — quality industrial components.` },
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-bold text-primary">Category not found</h1>
        <Link to="/products" className="mt-4 inline-block text-brand hover:underline">Back to products</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="container-page py-32 text-center">
        <h1 className="text-2xl font-bold text-primary">Error</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const Sidebar = ({ onNavigate }: { onNavigate?: () => void }) => (
    <aside className="w-full">
      <div className="border border-border bg-card">
        <div className="px-4 py-3 bg-primary text-primary-foreground">
          <h3 className="font-bold text-sm uppercase tracking-wider">Categories</h3>
        </div>
        <ul>
          {categories.map((c) => {
            const active = c.slug === category.slug;
            return (
              <li key={c.slug} className="border-t border-border first:border-t-0">
                <Link
                  to="/products/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={onNavigate}
                  className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                    active
                      ? "bg-brand text-brand-foreground font-semibold"
                      : "text-foreground hover:bg-secondary hover:text-brand"
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="text-xs opacity-70">{c.products.length}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );


  return (
    <Layout>
      <PageHero title={category.name} subtitle={`Explore our complete range of ${category.name} products.`} />
      <section className="py-10 md:py-16">
        <div className="container-page">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <p className="text-sm text-muted-foreground">{category.products.length} products</p>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold"
            >
              <Filter className="h-4 w-4" /> Categories
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <div className="hidden lg:block sticky top-24 self-start">
              <Sidebar />
            </div>


            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {category.products.map((p: import("@/lib/products-data").Product, i: number) => (
                  <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                    <Link to="/products/$slug" params={{ slug: p.slug }} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="aspect-square bg-secondary overflow-hidden">
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-primary text-sm group-hover:text-brand transition-colors line-clamp-2">{p.name}</h3>
                        <span className="text-xs text-brand mt-2 inline-flex items-center gap-1">View <ArrowRight className="h-3 w-3" /></span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilterOpen(false)} />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background shadow-2xl overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-primary">Filter by Category</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-2 hover:bg-secondary rounded-md">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <Sidebar onNavigate={() => setMobileFilterOpen(false)} />
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
