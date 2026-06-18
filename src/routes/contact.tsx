import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Pro Technology" },
      { name: "description", content: "Get in touch with Pro Technology. Visit our Bhiwadi facilities or contact us for quotes and inquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="We respond within 24 hours. Let's discuss how we can support your project." />

      <section className="py-16">
        <div className="container-page grid md:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: MapPin,
              title: "Visit Our Units",
              lines: [
                "Unit 1: Plot No. G1-606, RIICO Ind. Area Khushkhera, Bhiwadi - 301707",
                "Unit 2: Khuskhera , Bhiwadi"
              ]
            },
            { icon: Phone, title: "Call Us", lines: ["+91 97118 59853 (T R Mishra)"] },
            { icon: Mail, title: "Email Us", lines: ["protechnology49@gmail.com"] },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-brand hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-4">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-primary mb-2">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground mb-1">{l}</p>)}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-primary mb-2">Send a Message</h2>
            <p className="text-muted-foreground text-sm mb-6">Fill in the form and our team will get back to you.</p>
            {sent ? (
              <div className="rounded-lg bg-brand/10 border border-brand/30 p-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand mx-auto mb-3" />
                <h3 className="font-bold text-primary">Message sent!</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full Name" type="text" required />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                  <Field label="Company" type="text" />
                </div>
                <Field label="Subject" type="text" required />
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea rows={5} required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand py-3 font-semibold text-brand-foreground hover:bg-brand-dark transition-colors">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-border bg-card flex flex-col">
            <iframe
              title="Pro Technology location"
              src="https://www.google.com/maps?q=28.1204488,76.786043&z=17&t=k&output=embed"
              className="w-full flex-1 min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input {...props} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
