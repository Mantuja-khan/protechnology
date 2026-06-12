import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pro Technology" },
      { name: "description", content: "Learn about Pro Technology — over 20 years of manufacturing excellence in foam, PVC, EPDM and industrial components." },
      { property: "og:title", content: "About Pro Technology" },
      { property: "og:description", content: "20+ years of manufacturing excellence." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero title="About Pro Technology" subtitle="Engineering strength. Delivering precision. Over two decades of manufacturing excellence." />

      <section className="py-20">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            src={factoryImg} alt="Pro Technology facility" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-xl" />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-semibold tracking-wide uppercase mb-3">
              An ISO 9001:2015, IATF 16949 Certified & MSME Registered Company
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">A Legacy of Industrial Excellence</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base">
              Our registered office and tooling plant is located in IMT Manesar – Haryana, the upcoming ultramodern industrial town of India. Pro Technology is a professionally managed manufacturer of all types of Molds like Injection molds, Die Casting mold, and Rubber Compression Molds. Our injection molding plant is located in the Tapukara Industrial area, where we manufacture high-precision products using premium Engineering plastics raw materials.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed text-sm md:text-base">
              With a prominent customer base including Toyota, Honda 2W, Suzuki Power Train, Yamaha, Hero MotoCorp, MSIL, TVS, and Bajaj, along with various Tier-1 automotive suppliers, our team has established a strong industry reputation built on robust technical know-how.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed text-sm md:text-base">
              We aspire to be a company utilizing the latest upgraded technologies, boasting state-of-the-art infrastructure, high-quality standards, and a reliable vendor base, making us one of the most competitive manufacturers in our vertical.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "Continuous improvement using latest technology, modernized manufacturing processes along with extremely skilled and dedicated employees resulting in state-of-the-art products." },
            { icon: Eye, title: "Our Vision", text: "Transparency, Power of Unity and Quality over Quantity." },
            { icon: Heart, title: "Our Values", text: "Technical know-how, state-of-the-art infrastructure, high quality standards, and building a reliable, collaborative vendor base." },
          ].map((v) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl bg-card p-8 border border-border hover:border-brand transition-colors">
              <div className="h-14 w-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </Layout>
  );
}
