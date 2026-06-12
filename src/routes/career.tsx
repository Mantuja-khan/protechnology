import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Pro Technology" },
      { name: "description", content: "Join Pro Technology. Send us your resume and our team will get in touch." },
    ],
  }),
  component: Career,
});

function Career() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Layout>
      <PageHero title="Build Your Career With Us" subtitle="Join a team that values craftsmanship, innovation, and growth." />
      <section id="apply" className="py-16 bg-secondary/40">
        <div className="container-page max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Submit Your Resume</h2>
            <p className="text-muted-foreground mt-2">Don't see a perfect fit? Send us your resume — we'll get in touch when we have a match.</p>
          </div>
          {submitted ? (
            <div className="rounded-xl bg-card border border-border p-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary">Thanks! We received your application.</h3>
              <p className="text-muted-foreground mt-2">Our HR team will be in touch soon.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-xl bg-card border border-border p-6 md:p-8 space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Full Name" type="text" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" required />
                <Input label="Position Applied" type="text" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Upload Resume (PDF/DOC)</label>
                <label className="flex items-center gap-3 rounded-md border border-dashed border-border px-4 py-6 cursor-pointer hover:border-brand hover:bg-brand/5 transition-colors">
                  <Upload className="h-5 w-5 text-brand" />
                  <span className="text-sm text-muted-foreground">Click to upload your resume</span>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
              </div>
              <button type="submit" className="w-full rounded-md bg-brand py-3 font-semibold text-brand-foreground hover:bg-brand-dark transition-colors">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input {...props} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
