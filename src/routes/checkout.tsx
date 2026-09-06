import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { gbp } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Aeryn" },
      { name: "description", content: "Complete your Aeryn order." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Checkout — Aeryn" },
      { property: "og:description", content: "Complete your Aeryn order." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { lines, total } = useCart();

  return (
    <div className="px-5 pb-32 pt-36 md:px-10 md:pt-52">
      <div className="mx-auto grid max-w-[80rem] gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1 className="mt-6 font-serif text-5xl">Details</h1>
          <div className="mt-12 space-y-8">
            {["Email", "Name", "Address", "City", "Postcode"].map((f) => (
              <div key={f}>
                <label htmlFor={f} className="eyebrow">
                  {f}
                </label>
                <input
                  id={f}
                  className="mt-4 w-full border-b border-border bg-transparent pb-3 text-sm outline-none focus:border-primary"
                />
              </div>
            ))}
            <button className="btn-solid w-full" disabled>
              Payment unavailable in demo
            </button>
          </div>
        </div>

        <div className="border border-border p-8">
          <p className="eyebrow">Order</p>
          {lines.length === 0 ? (
            <p className="mt-8 text-sm text-muted-foreground">
              Your bag is empty.{" "}
              <Link to="/shop" className="text-primary">
                View the collection
              </Link>
            </p>
          ) : (
            <ul className="mt-8 divide-y divide-border text-sm">
              {lines.map((l) => (
                <li key={`${l.slug}-${l.size}`} className="flex justify-between gap-6 py-5">
                  <span>
                    {l.name} · {l.size} · {l.qty}
                  </span>
                  <span>{gbp(l.price * l.qty)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex justify-between border-t border-border pt-6 text-sm">
            <span className="uppercase tracking-[0.2em] text-muted-foreground">Total</span>
            <span>{gbp(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
