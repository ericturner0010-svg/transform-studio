import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, gbp, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { TransformSlider } from "@/components/site/TransformSlider";
import { Reveal } from "@/components/site/Reveal";

const sizes = ["UK 6", "UK 8", "UK 10", "UK 12", "UK 14"];

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Aeryn" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Aeryn` },
        { name: "description", content: product.line },
        { property: "og:title", content: `${product.name} — Aeryn` },
        { property: "og:description", content: product.line },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(sizes[2]!);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="px-5 pb-32 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[110rem] gap-14 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div
            className={`relative aspect-[3/4] overflow-hidden bg-surface ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={() => setZoom((v) => !v)}
          >
            <img
              src={product.images[active]}
              alt={`${product.name}, view ${active + 1}`}
              width={900}
              height={1200}
              className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                zoom ? "scale-[1.6]" : "scale-100"
              }`}
            />
            <span className="pointer-events-none absolute bottom-5 left-5 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              {zoom ? "Tap to reduce" : "Tap to zoom"}
            </span>
          </div>

          <div className="mt-5 flex gap-4">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                className={`h-28 w-20 overflow-hidden border transition-colors ${
                  active === i ? "border-primary" : "border-border"
                }`}
                aria-label={`View ${i + 1}`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  width={90}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="mt-20">
            <p className="eyebrow">The transformation</p>
            <div className="mt-8">
              <TransformSlider
                before={product.images[0]}
                after={product.images[1]}
                beforeLabel={product.tag.split(" ↔ ")[0] ?? "Form one"}
                afterLabel={product.tag.split(" ↔ ")[1] ?? "Form two"}
              />
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-primary">{product.tag}</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-sm text-muted-foreground">{gbp(product.price)}</p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">{product.detail}</p>

          <div className="mt-12">
            <p className="eyebrow">Size</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                    size === s
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Cut generously. The model is 178cm and wears UK 10.
            </p>
          </div>

          <button
            onClick={() =>
              add({
                slug: product.slug,
                name: product.name,
                price: product.price,
                size,
                image: product.images[0],
              })
            }
            className="btn-solid mt-12 w-full"
          >
            Add to bag
          </button>

          <dl className="mt-14 divide-y divide-border border-y border-border text-sm">
            <div className="flex justify-between gap-8 py-5">
              <dt className="text-muted-foreground">Fabric</dt>
              <dd className="text-right">{product.fabric}</dd>
            </div>
            <div className="flex justify-between gap-8 py-5">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd className="text-right">Complimentary worldwide, 2—4 days</dd>
            </div>
            <div className="flex justify-between gap-8 py-5">
              <dt className="text-muted-foreground">Returns</dt>
              <dd className="text-right">30 days, collected from your door</dd>
            </div>
            <div className="flex justify-between gap-8 py-5">
              <dt className="text-muted-foreground">Care</dt>
              <dd className="text-right">Atelier repair for the life of the piece</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-[110rem]">
        <h2 className="font-serif text-3xl md:text-4xl">Also consider</h2>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="font-serif text-xl">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{gbp(p.price)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
