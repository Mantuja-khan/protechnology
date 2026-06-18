import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { findProduct, findCategory, allProducts } from "@/lib/products-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Pro Technology` },
      { name: "description", content: loaderData?.product.description ?? "Industrial product by Pro Technology." },
      { property: "og:title", content: loaderData?.product.name },
      { property: "og:description", content: loaderData?.product.description },
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-bold text-primary">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-brand hover:underline">Back to products</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="container-page py-32 text-center">
        <h1 className="text-2xl font-bold text-primary">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = findCategory(
    product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );
  const related = allProducts.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <Layout>
      <section className="bg-secondary/30 py-6 border-b border-border">
        <div className="container-page text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand">Home</Link> / <Link to="/products" className="hover:text-brand">Products</Link> / <span className="text-primary font-medium">{product.name}</span>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="aspect-square rounded-2xl bg-secondary overflow-hidden border border-border">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to products
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">{product.category}</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary">{product.name}</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold text-brand-foreground hover:bg-brand-dark transition-colors">
                <Phone className="h-4 w-4" /> Request Quote
              </Link>
              {category && (
                <Link to="/products/category/$slug" params={{ slug: category.slug }} className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-primary hover:bg-secondary transition-colors">
                  More in {category.name}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-secondary/40">
          <div className="container-page">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary text-sm group-hover:text-brand transition-colors line-clamp-2">{p.name}</h3>
                    <span className="text-xs text-brand mt-2 inline-flex items-center gap-1">View <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
