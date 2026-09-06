import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<CartLine, "qty">) => void;
  remove: (slug: string, size: string) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartValue>(() => {
    return {
      lines,
      open,
      setOpen,
      add: (line) => {
        setLines((prev) => {
          const i = prev.findIndex((l) => l.slug === line.slug && l.size === line.size);
          const existing = prev[i];
          if (existing) {
            const next = [...prev];
            next[i] = { ...existing, qty: existing.qty + 1 };
            return next;
          }
          return [...prev, { ...line, qty: 1 }];
        });
        setOpen(true);
      },
      remove: (slug, size) =>
        setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size))),
      count: lines.reduce((a, l) => a + l.qty, 0),
      total: lines.reduce((a, l) => a + l.qty * l.price, 0),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
