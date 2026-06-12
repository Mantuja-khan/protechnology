import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import factoryImg from "@/assets/factory.jpg";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section
      className="relative text-primary-foreground py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${factoryImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-primary/70" />
      <div className="container-page relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-3 text-primary-foreground/90 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
