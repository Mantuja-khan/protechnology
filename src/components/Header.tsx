import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { categories } from "@/lib/products-data";
import logoImg from "@/assets/image.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", mega: true },
  { to: "/machinery", label: "Machinery" },
  { to: "/certificates", label: "Certificates" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact Us" },
];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [productsMobileOpen, setProductsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Pro Technology" width={56} height={42} className="h-10 md:h-12 w-auto object-contain" />
          <div className="leading-tight">
            <div className="text-base md:text-xl font-extrabold text-primary tracking-tight">PRO TECHNOLOGY</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Industries</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.mega ? (
              <div
                key={item.to}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="relative"
              >
                <Link
                  to={item.to}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-brand transition-colors"
                  activeProps={{ className: "text-brand" }}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 top-16 md:top-20 mx-auto max-w-3xl px-4"
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden p-4">
                        <div className="flex items-center justify-between mb-3 px-2">
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Product Categories</h4>
                          <Link
                            to="/products"
                            onClick={() => setMegaOpen(false)}
                            className="text-xs font-semibold text-brand hover:underline"
                          >
                            View all →
                          </Link>
                        </div>
                        <ul className="grid grid-cols-2 gap-1 max-h-[70vh] overflow-y-auto">
                          {categories.map((c) => (
                            <li key={c.slug}>
                              <Link
                                to="/products/category/$slug"
                                params={{ slug: c.slug }}
                                onClick={() => setMegaOpen(false)}
                                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-brand transition-colors"
                              >
                                <span className="font-medium">{c.name}</span>
                                <ChevronRight className="h-4 w-4 opacity-50" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-brand transition-colors"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <nav className="container-page py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item.mega ? (
                  <div key={item.to}>
                    <button
                      onClick={() => setProductsMobileOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${productsMobileOpen ? "rotate-90" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {productsMobileOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3 border-l-2 border-brand/30 ml-3 mt-1"
                        >
                          <li>
                            <Link
                              to="/products"
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 rounded-md text-sm font-semibold text-brand hover:bg-secondary"
                            >
                              All Products
                            </Link>
                          </li>
                          {categories.map((c) => (
                            <li key={c.slug}>
                              <Link
                                to="/products/category/$slug"
                                params={{ slug: c.slug }}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 rounded-md text-sm hover:bg-secondary"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary"
                    activeProps={{ className: "text-brand bg-secondary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
