import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import certNew1 from "@/assets/certs/image.png";
import certNew2 from "@/assets/certs/image copy.png";
import certNew3 from "@/assets/certs/image copy 2.png";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Pro Technology" },
      { name: "description", content: "Our quality certifications including ISO 9001:2015, IATF 16949:2016, and Udyam MSME registration." },
    ],
  }),
  component: CertsPage,
});

const certs = [
  { title: "Quality Certificate", body: "Industrial Standard Compliance Certification", image: certNew1 },
  { title: "Safety Certificate", body: "Operational Safety & Compliance Standard", image: certNew2 },
  { title: "Manufacturing Excellence", body: "Standard Certification of Production Excellence", image: certNew3 },
];

function CertsPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Layout>
      <PageHero title="Our Certifications" subtitle="Internationally recognized quality, safety, and compliance standards." />
      <section className="py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <motion.button
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setOpen(i)}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all hover:-translate-y-1 text-left"
              >
                <div className="aspect-[3/4] bg-white overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="font-bold text-primary">{c.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.body}</div>
                  <div className="text-[10px] uppercase tracking-wider text-brand font-semibold mt-2">Click to view</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-3xl w-full p-4 md:p-6"
            >
              <button onClick={() => setOpen(null)} className="absolute top-3 right-3 p-2 rounded-md hover:bg-secondary z-10 bg-white/80">
                <X className="h-5 w-5" />
              </button>
              <img src={certs[open].image} alt={certs[open].title} className="w-full max-h-[80vh] object-contain" />
              <div className="text-center mt-3">
                <h3 className="text-xl font-extrabold text-primary">{certs[open].title}</h3>
                <p className="text-sm text-muted-foreground">{certs[open].body}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
