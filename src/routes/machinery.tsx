import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import machineryImg from "@/assets/machinery.jpg";
import factoryImg from "@/assets/factory.jpg";

// Dynamically import all machinery images from assets/machinery
const machineryImagesGlob = import.meta.glob("../assets/machinery/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const machineryImages = Object.values(machineryImagesGlob) as string[];

export const Route = createFileRoute("/machinery")({
  head: () => ({
    meta: [
      { title: "Our Machinery — Pro Technology" },
      { name: "description", content: "State-of-the-art machinery and equipment powering Pro Technology's precision manufacturing." },
      { property: "og:title", content: "Our Machinery — Pro Technology" },
      { property: "og:description", content: "Modern CNC, injection molding, extrusion and quality testing machinery." },
    ],
  }),
  component: MachineryPage,
});

const machines = [
  { name: "Injection Molding Machines", desc: "High-precision injection molding for plastic and rubber components.", img: machineryImages[0] || machineryImg },
  { name: "PVC Extrusion Lines", desc: "Multi-zone extrusion lines for PVC sleeves, profiles and compounds.", img: machineryImages[1] || factoryImg },
  { name: "CNC Machining Center", desc: "Computer-controlled milling and turning for tooling and dies.", img: machineryImages[2] || machineryImg },
  { name: "Foam Cutting & Lamination", desc: "Precision cutting, slitting and lamination for foam products.", img: machineryImages[3] || factoryImg },
  { name: "Rubber Mixing Mill", desc: "Two-roll mixing mills for EPDM and rubber compound preparation.", img: machineryImages[4] || machineryImg },
  { name: "Dip Moulding Plant", desc: "Automated dip moulding lines for PVC protective parts.", img: machineryImages[5] || factoryImg },
  { name: "Quality Testing Lab", desc: "Tensile, hardness, density and dimensional testing equipment.", img: machineryImages[6] || machineryImg },
  { name: "Wire Harness Assembly", desc: "Crimping, cutting and assembly stations for wire harness production.", img: machineryImages[7] || factoryImg },
  { name: "Die & Tool Design", desc: "Advanced engineering and development of custom dies and tooling moulds.", img: machineryImages[8] || factoryImg },
  { name: "Rubber Molding Press", desc: "Heavy-duty compression molding presses for reliable rubber component output.", img: machineryImages[9] || machineryImg },
];

function MachineryPage() {
  return (
    <Layout>
      <PageHero title="Our Machinery" subtitle="A modern, fully-equipped manufacturing facility built for precision, scale and quality." />
      <section className="py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="h-5 w-5 text-brand" />
                    <h3 className="font-bold text-primary">{m.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
