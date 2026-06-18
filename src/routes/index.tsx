import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Truck, CheckCircle2, Wrench, Zap, Sprout, Building2, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Marquee } from "@/components/Marquee";
import { categories } from "@/lib/products-data";
import heroImg from "@/assets/hero-pipes.jpg";
import heroPvc from "@/assets/hero-pvc.jpg";
import heroEpdm from "@/assets/hero-epdm.jpg";
import factoryImg from "@/assets/factory.jpg";
import certNew1 from "@/assets/certs/image.png";
import certNew2 from "@/assets/certs/image copy.png";
import certNew3 from "@/assets/certs/image copy 2.png";


// Dynamically import all partner images from assets/partners
const partnerImagesGlob = import.meta.glob("../assets/partners/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const partnerItems = Object.entries(partnerImagesGlob).map(([path, url]) => {
  const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Partner";
  const alt = filename.startsWith("image") ? "Partner" : filename;
  return { src: url as string, alt };
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro Technology — Foam, PVC, EPDM & Industrial Components" },
      { name: "description", content: "Leading manufacturer of foam, sleeves, EPDM gaskets, automotive parts and industrial components. Engineering strength, delivering precision." },
      { property: "og:title", content: "Pro Technology" },
      { property: "og:description", content: "Trusted manufacturer of industrial foam, PVC, EPDM and automotive components." },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};
const slides = [
  {
    img: heroImg,
    eyebrow: "Trusted Since 2005",
    title: "Your Trusted Partner for ",
    highlight: "Industrial Components",
    desc: "Premium foam, EPDM gaskets, sleeves and automotive parts. Engineered in India, delivered worldwide.",
    cta: { label: "Explore Products", to: "/products" as const },
  },
  {
    img: "https://i.pinimg.com/1200x/76/43/c7/7643c70fdc36860fb38a7a2e2f8ab18b.jpg",
    eyebrow: "Precision Manufacturing",
    title: "High-Performance ",
    highlight: "Injection molding component & rubber component ",
    desc: "Custom-formulated PVC sleeves in every color and grade — built for cables, automotive, and electrical applications.",
    cta: { label: "View Sleeve Range", to: "/products" as const },
  },
  {
    img: heroEpdm,
    eyebrow: "Engineered for Durability",
    title: "EPDM Seals & PVC Sleeve Solutions ",
    highlight: "Foam Solutions",
    desc: "Weather-resistant EPDM gaskets, sleeves, foam protectors and OEM components trusted by leading manufacturers.",
    cta: { label: "Discover More", to: "/products" as const },
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const slide = slides[index];
  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-slate-700 text-primary-foreground min-h-[500px] md:min-h-[580px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/85 via-slate-700/70 to-slate-500/30" />

      <div className="container-page relative py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center min-h-[500px] md:min-h-[580px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand text-[10px] font-semibold tracking-wide uppercase">{slide.eyebrow}</span>
            <h1 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
              {slide.title}<span className="text-brand">{slide.highlight}</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-primary-foreground/80 max-w-xl">{slide.desc}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={slide.cta.to} className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand-dark transition-colors shadow-lg">
                {slide.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              {[
                { v: "20+", l: "Years Experience" },
                { v: "30,000+", l: "Products Delivered" },
                { v: "1000+", l: "Happy Clients" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-lg md:text-2xl font-extrabold text-brand">{s.v}</div>
                  <div className="text-[10px] text-primary-foreground/70 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-brand backdrop-blur border border-white/20 transition-colors z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-brand backdrop-blur border border-white/20 transition-colors z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-brand" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <Layout>
      <Hero />

      {/* Categories */}
      <section className="py-20">
        <div className="container-page">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand font-semibold uppercase text-sm tracking-wider">Our Range</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">Our Product Categories</h2>
            <p className="text-muted-foreground mt-3">From foam and sleeves to precision EPDM seals — explore our complete catalog of industrial-grade components.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.slice(0, 4).map((c, i) => {
              const fallbacks = [heroImg, heroPvc, heroEpdm, factoryImg];
              const imgs = (c.products
                .map((p) => p.image)
                .filter(Boolean) as string[]).slice(0, 3);
              while (imgs.length < 3) imgs.push(fallbacks[(i + imgs.length) % fallbacks.length]);
              return (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    to="/products/category/$slug"
                    params={{ slug: c.slug }}
                    className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-brand hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <CategoryImageCycler images={imgs} alt={c.name} offset={i} />
                    <div className="p-4">
                      <h3 className="font-bold text-primary group-hover:text-brand transition-colors text-sm md:text-base">{c.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{c.products.length} products</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold text-brand-foreground hover:bg-brand-dark transition-colors">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/40">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <motion.img {...fadeUp} src={factoryImg} alt="Our manufacturing facility" loading="lazy" width={1280} height={800} className="rounded-2xl shadow-xl" />
          <motion.div {...fadeUp}>
            <p className="text-brand font-semibold uppercase text-sm tracking-wider">About Pro Technology</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">Engineering Strength. Delivering Precision.</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base">
              Pro Technology is a professionally managed manufacturer of all types of Molds, including Injection molds, Die Casting molds, and Rubber Compression Molds.
              Our manufacturing plants (Unit 1 & Unit 2) are located in the industrial town of <strong>Khushkhera, Bhiwadi, Rajasthan</strong>.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed text-sm md:text-base">
              Backed by strong technical know-how, state-of-the-art infrastructure, and a reliable vendor base, we serve a prominent customer base including Toyota, Honda 2W, Suzuki Power Train, Yamaha, Hero MotoCorp, MSIL, TVS, and Bajaj.
            </p>
            <ul className="space-y-3 mt-6">
              {["ISO 9001:2015 Certified Manufacturer", "In-house R&D and Quality Lab", "On-time delivery across India & exports", "Custom formulations & OEM solutions"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Tool Room Business Partners Marquee */}
      <section className="py-16 bg-secondary/40">
        <div className="container-page">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-brand font-semibold uppercase text-sm tracking-wider">Collaborations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">Tool Room Business Partners</h2>
            <p className="text-muted-foreground mt-3">Trusted partners powering our precision tooling and manufacturing excellence.</p>
          </motion.div>
          <Marquee
            direction="right"
            speed={40}
            items={partnerItems}
          />

        </div>
      </section>


      {/* Certificates Preview */}
      <section className="py-20 bg-secondary/40">
        <div className="container-page">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand font-semibold uppercase text-sm tracking-wider">Quality Assured</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">Our Certifications</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Quality Certificate", image: certNew1 },
              { title: "MSME Certificate", image: certNew2 },
              { title: "Quality System Certificate", image: certNew3 }
            ].map((c) => (
              <Link key={c.title} to="/certificates" className="group block rounded-xl bg-card border border-border overflow-hidden hover:border-brand hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-[3/4] bg-white overflow-hidden p-4">
                  <img src={c.image} alt={c.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 border-t border-border text-center">
                  <div className="font-bold text-primary text-sm group-hover:text-brand transition-colors">{c.title}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/certificates" className="text-brand font-semibold hover:underline">View All Certificates →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-lg bg-brand/10 border border-brand/20 p-4 text-center">
      <div className="text-2xl font-extrabold text-brand">{v}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function CategoryImageCycler({ images, alt, offset = 0 }: { images: string[]; alt: string; offset?: number }) {
  const [i, setI] = useState(offset % images.length);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 2500);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-contain p-4 bg-secondary transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent pointer-events-none" />
    </div>
  );
}
