import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/story", label: "Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled || menu ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[110rem] items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" className="font-serif text-lg tracking-[0.42em] uppercase">
          Aeryn
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setOpen(true)}
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Bag ({count})
          </button>
          <button
            onClick={() => setMenu((v) => !v)}
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground md:hidden"
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="flex flex-col gap-6 border-t border-border px-5 py-8 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setMenu(false)}
              className="font-serif text-3xl"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
