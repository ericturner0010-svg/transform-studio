import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { gbp } from "@/lib/products";

export function CartDrawer() {
  const { open, setOpen, lines, remove, total } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-surface transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-6">
          <p className="eyebrow">Your bag</p>
          <button
            onClick={() => setOpen(false)}
            className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <p className="py-16 text-sm text-muted-foreground">Your bag is empty.</p>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map((l) => (
                <li key={`${l.slug}-${l.size}`} className="flex gap-5 py-6">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    width={90}
                    height={120}
                    className="h-32 w-24 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-serif text-xl">{l.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Size {l.size} · {l.qty}
                    </p>
                    <p className="mt-3 text-sm">{gbp(l.price * l.qty)}</p>
                    <button
                      onClick={() => remove(l.slug, l.size)}
                      className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-8">
          <div className="flex items-center justify-between text-sm">
            <span className="uppercase tracking-[0.2em] text-muted-foreground">Subtotal</span>
            <span>{gbp(total)}</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Shipping and duties calculated at checkout.
          </p>
          <Link
            to="/checkout"
            onClick={() => setOpen(false)}
            className="btn-solid mt-8 w-full"
            aria-disabled={lines.length === 0}
          >
            Checkout
          </Link>
        </div>
      </aside>
    </>
  );
}
